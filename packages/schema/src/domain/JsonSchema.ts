import {classOf, isArray, isClass, isFunction, nameOf, Type, ValueOf} from "@tsed/core";
import {JSONSchema6, JSONSchema6Definition, JSONSchema6Type, JSONSchema6TypeName, JSONSchema6Version} from "json-schema";
import {IJsonSerializerOptions} from "../interfaces";
import {getJsonType} from "../utils/getJsonType";
import {createRef, serialize, serializeGenerics} from "../utils/serialize";
import {toJsonRegex} from "../utils/toJsonRegex";
import {uniq} from "../utils/uniq";
import {JsonFormatTypes} from "./JsonFormatTypes";

export interface IJsonSchemaOptions extends JSONSchema6 {
  type: (any | JSONSchema6TypeName) | (any | JSONSchema6TypeName)[];
  additionalProperties?: boolean | JSONSchema6 | any;
  propertyNames?: boolean | JSONSchema6 | any;
  items?: (any | JSONSchema6Definition) | (any | JSONSchema6Definition)[];
}

function mapToJsonSchema(item: any): any {
  if (typeof item !== "object") {
    return item;
  }

  if (isArray(item)) {
    return (item as any[]).map(mapToJsonSchema);
  }

  return item instanceof JsonSchema ? item : JsonSchema.from(item as any);
}

function mapProperties(properties: {[p: string]: any}) {
  return Object.entries(properties).reduce<any>((properties, [key, schema]) => {
    properties[toJsonRegex(key)] = isArray(schema) ? schema.map(mapToJsonSchema) : mapToJsonSchema(schema);

    return properties;
  }, {});
}

function mapAliasedProperties(value: any, alias: Map<string, string>) {
  if (typeof value === "boolean") {
    return value;
  }

  return Object.entries(value).reduce<any>((properties, [key, value]) => {
    key = (alias.get(key) as string) || key;
    properties[key] = value;

    return properties;
  }, {});
}

function isEmptyProperties(key: string, value: any) {
  return typeof value === "object" && ["items", "properties", "additionalProperties"].includes(key) && Object.keys(value).length === 0;
}

export class JsonSchema extends Map<string, any> {
  private _genericLabels: string[];
  private _nestedGenerics: Type<any>[][] = [];
  private _alias: Map<string, string> = new Map();
  private _required: Set<string> = new Set();
  private _itemSchema: JsonSchema;
  private _target: Type<any>;
  private _ignore: boolean;

  constructor(obj: JsonSchema | Partial<IJsonSchemaOptions> = {}) {
    super();

    if (obj) {
      this.assign(obj);
    }
  }

  get nestedGenerics(): any[] {
    return this._nestedGenerics;
  }

  set nestedGenerics(value: any[]) {
    this._nestedGenerics = value;
  }

  get genericLabels(): string[] {
    return this._genericLabels;
  }

  set genericLabels(value: string[]) {
    this._genericLabels = value;
  }

  get isClass() {
    return isClass(this.class) && ![Map, Array, Set, Object, Date, Boolean, Number, String].includes(this._target as any);
  }

  get class() {
    return this.getTarget();
  }

  static from(obj: Partial<IJsonSchemaOptions> = {}) {
    return new JsonSchema(obj);
  }

  itemSchema(obj: IJsonSchemaOptions | JsonSchema | any = {}) {
    this._itemSchema = this._itemSchema || mapToJsonSchema(obj);
    this._itemSchema.assign(obj);

    return this._itemSchema;
  }

  addAlias(property: string, alias: string) {
    this._alias.set(property, alias);

    return this;
  }

  removeAlias(property: string) {
    this._alias.delete(property);

    return this;
  }

  $id($id: string) {
    super.set("$id", $id);

    return this;
  }

  $ref($ref: string) {
    super.set("$ref", $ref);

    return this;
  }

  $schema($schema: JSONSchema6Version) {
    super.set("$schema", $schema);

    return this;
  }

  name(name: string) {
    super.set("name", name);

    return this;
  }

  ignore(bool: boolean = true) {
    this._ignore = bool;

    return this;
  }

  /**
   * This keyword can be used to supply a default JSON value associated with a particular schema.
   * It is RECOMMENDED that a default value be valid against the associated schema.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-7.3
   */
  default(value: JSONSchema6Type) {
    super.set("default", value);

    return this;
  }

  /**
   * More readible form of a one-element "enum"
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.24
   */
  const(value: JSONSchema6Type) {
    super.set("const", value);

    return this;
  }

  /**
   * This attribute is a string that provides a full description of the of purpose the instance property.
   *
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-7.2
   */
  description(description: string) {
    super.set("description", description);

    return this;
  }

  /**
   * This keyword determines how child instances validate for arrays, and does not directly validate the immediate instance itself.
   * If "items" is an array of schemas, validation succeeds if every instance element
   * at a position greater than the size of "items" validates against "additionalItems".
   * Otherwise, "additionalItems" MUST be ignored, as the "items" schema
   * (possibly the default value of an empty schema) is applied to all elements.
   * Omitting this keyword has the same behavior as an empty schema.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.10
   */
  additionalItems(additionalItems: boolean | IJsonSchemaOptions) {
    super.set("additionalItems", mapToJsonSchema(additionalItems));

    return this;
  }

  /**
   * An array instance is valid against "contains" if at least one of its elements is valid against the given schema.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.14
   */
  contains(contains: JSONSchema6Definition) {
    super.set("contains", mapToJsonSchema(contains));

    return this;
  }

  /**
   * Array of examples with no validation effect the value of "default" is usable as an example without repeating it under this keyword
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-7.4
   */
  examples(examples: JSONSchema6Type[]) {
    super.set("examples", examples);

    return this;
  }

  /**
   * This keyword determines how child instances validate for arrays, and does not directly validate the immediate instance itself.
   * Omitting this keyword has the same behavior as an empty schema.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.9
   */
  items(items: JsonSchema | IJsonSchemaOptions | (IJsonSchemaOptions | JsonSchema)[]) {
    super.set("items", mapToJsonSchema(items));

    return this;
  }

  /**
   * Must be a non-negative integer.
   * An array instance is valid against "maxItems" if its size is less than, or equal to, the value of this keyword.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.11
   */
  maxItems(maxItems: number) {
    super.set("maxItems", maxItems);

    return this;
  }

  /**
   * Must be a non-negative integer.
   * An array instance is valid against "maxItems" if its size is greater than, or equal to, the value of this keyword.
   * Omitting this keyword has the same behavior as a value of 0.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.12
   */
  minItems(minItems: number) {
    super.set("minItems", minItems);

    return this;
  }

  /**
   * If this keyword has boolean value false, the instance validates successfully.
   * If it has boolean value true, the instance validates successfully if all of its elements are unique.
   * Omitting this keyword has the same behavior as a value of false.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.13
   */
  uniqueItems(uniqueItems: boolean) {
    super.set("uniqueItems", uniqueItems);

    return this;
  }

  /**
   * Must be a non-negative integer.
   * An object instance is valid against "maxProperties" if its number of properties is less than, or equal to, the value of this keyword.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.15
   */
  maxProperties(maxProperties: number) {
    super.set("maxProperties", maxProperties);

    return this;
  }

  /**
   * Must be a non-negative integer.
   * An object instance is valid against "maxProperties" if its number of properties is greater than,
   * or equal to, the value of this keyword.
   * Omitting this keyword has the same behavior as a value of 0.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.16
   */
  minProperties(minProperties: number) {
    super.set("minProperties", minProperties);

    return this;
  }

  /**
   * Elements of this array must be unique.
   * An object instance is valid against this keyword if every item in the array is the name of a property in the instance.
   * Omitting this keyword has the same behavior as an empty array.
   *
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.17
   */
  required(required: any | string[]) {
    this._required = new Set(required);

    return this;
  }

  addRequired(property: string) {
    this._required.add(property);

    return this;
  }

  removeRequired(property: string) {
    this._required.delete(property);

    return this;
  }

  isRequired(property: string): boolean {
    return this._required.has(property);
  }

  /**
   * This keyword determines how child instances validate for objects, and does not directly validate the immediate instance itself.
   * Validation succeeds if, for each name that appears in both the instance and as a name within this keyword's value,
   * the child instance for that name successfully validates against the corresponding schema.
   * Omitting this keyword has the same behavior as an empty object.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.18
   */
  properties(properties: {[key: string]: IJsonSchemaOptions}) {
    super.set("properties", mapProperties(properties));

    return this;
  }

  addProperties(key: string, schema: IJsonSchemaOptions | JsonSchema) {
    const properties = this.get("properties") || {};

    properties[key] = schema;

    return this.properties(properties);
  }

  /**
   * This attribute is an object that defines the schema for a set of property names of an object instance.
   * The name of each property of this attribute's object is a regular expression pattern in the ECMA 262, while the value is a schema.
   * If the pattern matches the name of a property on the instance object, the value of the instance's property
   * MUST be valid against the pattern name's schema value.
   * Omitting this keyword has the same behavior as an empty object.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.19
   */
  patternProperties(patternProperties: {[p: string]: IJsonSchemaOptions | JsonSchema}) {
    super.set("patternProperties", mapProperties(patternProperties));

    return this;
  }

  /**
   * This attribute defines a schema for all properties that are not explicitly defined in an object type definition.
   * If specified, the value MUST be a schema or a boolean.
   * If false is provided, no additional properties are allowed beyond the properties defined in the schema.
   * The default value is an empty schema which allows any value for additional properties.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.20
   */
  additionalProperties(additionalProperties: boolean | IJsonSchemaOptions | JsonSchema) {
    super.set("additionalProperties", mapToJsonSchema(additionalProperties));

    return this;
  }

  /**
   * This keyword specifies rules that are evaluated if the instance is an object and contains a certain property.
   * Each property specifies a dependency.
   * If the dependency value is an array, each element in the array must be unique.
   * Omitting this keyword has the same behavior as an empty object.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.21
   */
  dependencies(dependencies: {[p: string]: JSONSchema6Definition | JsonSchema | string[]}) {
    super.set("dependencies", mapProperties(dependencies));

    return this;
  }

  /**
   * Takes a schema which validates the names of all properties rather than their values.
   * Note the property name that the schema is testing will always be a string.
   * Omitting this keyword has the same behavior as an empty schema.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.22
   */
  propertyNames(propertyNames: JSONSchema6Definition | JsonSchema) {
    super.set("propertyNames", mapToJsonSchema(propertyNames));

    return this;
  }

  /**
   * This provides an enumeration of all possible values that are valid
   * for the instance property. This MUST be an array, and each item in
   * the array represents a possible value for the instance value. If
   * this attribute is defined, the instance value MUST be one of the
   * values in the array in order for the schema to be valid.
   *
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.23
   */
  enum(enumValues: JSONSchema6Type[]): this {
    super.set("enum", uniq(enumValues));

    return this;
  }

  /**
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-7.1
   */
  definitions(definitions: {[p: string]: IJsonSchemaOptions | JsonSchema}) {
    super.set("definitions", mapProperties(definitions));

    return this;
  }

  /**
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.26
   */
  allOf(allOf: (IJsonSchemaOptions | JsonSchema)[]) {
    super.set("allOf", allOf.map(mapToJsonSchema));

    return this;
  }

  /**
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.27
   */
  anyOf(anyOf: (IJsonSchemaOptions | JsonSchema)[]) {
    super.set("anyOf", anyOf.map(mapToJsonSchema));

    return this;
  }

  /**
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.28
   */
  oneOf(oneOf: (IJsonSchemaOptions | JsonSchema)[]) {
    super.set("oneOf", oneOf.map(mapToJsonSchema));

    return this;
  }

  /**
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.29
   */
  not(not: IJsonSchemaOptions | JsonSchema) {
    super.set("not", mapToJsonSchema(not));

    return this;
  }

  /**
   * Must be strictly greater than 0.
   * A numeric instance is valid only if division by this keyword's value results in an integer.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.1
   */
  multipleOf(multipleOf: number): this {
    super.set("multipleOf", multipleOf);

    return this;
  }

  /**
   * Representing an inclusive upper limit for a numeric instance.
   * This keyword validates only if the instance is less than or exactly equal to "maximum".
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.2
   */
  maximum(maximum: number): this {
    super.set("maximum", maximum);

    return this;
  }

  /**
   * Representing an exclusive upper limit for a numeric instance.
   * This keyword validates only if the instance is strictly less than (not equal to) to "exclusiveMaximum".
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.3
   */
  exclusiveMaximum(exclusiveMaximum: number): this {
    super.set("exclusiveMaximum", exclusiveMaximum);

    return this;
  }

  /**
   * Representing an inclusive lower limit for a numeric instance.
   * This keyword validates only if the instance is greater than or exactly equal to "minimum".
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.4
   */
  minimum(minimum: number): this {
    super.set("minimum", minimum);

    return this;
  }

  /**
   * Representing an exclusive lower limit for a numeric instance.
   * This keyword validates only if the instance is strictly greater than (not equal to) to "exclusiveMinimum".
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.5
   */
  exclusiveMinimum(exclusiveMinimum: number): this {
    super.set("exclusiveMinimum", exclusiveMinimum);

    return this;
  }

  /**
   * Must be a non-negative integer.
   * A string instance is valid against this keyword if its length is less than, or equal to, the value of this keyword.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.6
   */
  maxLength(maxLength: number): this {
    super.set("maxLength", maxLength);

    return this;
  }

  /**
   * Must be a non-negative integer.
   * A string instance is valid against this keyword if its length is greater than, or equal to, the value of this keyword.
   * Omitting this keyword has the same behavior as a value of 0.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.7
   */
  minLength(minLength: number): this {
    super.set("minLength", minLength);

    return this;
  }

  /**
   * Should be a valid regular expression, according to the ECMA 262 regular expression dialect.
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.8
   */
  pattern(pattern: string | RegExp): this {
    super.set("pattern", toJsonRegex(pattern));

    return this;
  }

  /**
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-8
   */
  format(format: JsonFormatTypes | ValueOf<JsonFormatTypes>): this {
    super.set("format", format);

    return this;
  }

  /**
   * A single type, or a union of simple types
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.25
   */
  type(type: any | JSONSchema6TypeName | JSONSchema6TypeName[]): this {
    switch (type) {
      case Map:
        super.set("type", getJsonType(type));
        this._target = type;
        if (!this.has("additionalProperties")) {
          this.set("additionalProperties", this.itemSchema({}));
        }
        break;

      case Array:
        super.set("type", getJsonType(type));
        this._target = type;

        if (!this.has("items")) {
          this.set("items", this.itemSchema({}));
        }
        break;

      case Set:
        super.set("type", getJsonType(type));
        this._target = type;
        this.uniqueItems(true);

        if (!this.has("items")) {
          this.set("items", this.itemSchema({}));
        }
        break;

      case "integer":
        super.set("type", getJsonType(type));
        this.integer();
        break;

      case Object:
      case Date:
      case Boolean:
      case Number:
      case String:
        super.set("type", getJsonType(type));
        this._target = type;
        if (!this.has("properties")) {
          this.set("properties", this.itemSchema({}));
        }
        break;

      default:
        if (isClass(type) || isFunction(type)) {
          super.set("type", undefined);
          this._target = type;

          if (!this.has("properties")) {
            this.set("properties", this.itemSchema({}));
          }
        } else {
          const jsonType = getJsonType(type);
          if (jsonType === "generic") {
            super.set("$ref", type);
          } else {
            super.set("type", jsonType);
          }
        }
    }

    return this;
  }

  addTypes(...types: any[]) {
    types = [].concat(this.get("type")).concat(types as never);
    types = uniq(types).map(getJsonType);

    this.type(types);
    delete this._target;
  }

  any(...types: any[]) {
    types = uniq(types.length ? types : ["integer", "number", "string", "boolean", "array", "object", "null"]).map(getJsonType);
    this.type(types);

    delete this._target;

    return this;
  }

  integer() {
    super.set("type", "integer");
    super.set("multipleOf", 1.0);

    return this;
  }

  /**
   * This attribute is a string that provides a short description of the instance property.
   *
   * @see https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-7.2
   */
  title(title: string): this {
    super.set("title", title);

    return this;
  }

  toObject(options?: IJsonSerializerOptions) {
    return this.toJSON(options);
  }

  toJSON(options: IJsonSerializerOptions = {}) {
    const {useAlias = true, schemas = {}, root = true, genericTypes} = options;

    let obj = Array.from(this.entries()).reduce((obj: any, [key, value]) => {
      if (["name"].includes(key)) {
        return obj;
      }

      if (key === "type") {
        value = this.getType();
      }

      if (!root && ["properties", "additionalProperties", "items"].includes(key) && value.isClass) {
        value = createRef(value, {
          ...options,
          useAlias,
          schemas,
          root: false
        });
      } else {
        value = serialize(value, {
          ...options,
          useAlias,
          schemas,
          root: false,
          genericTypes,
          genericLabels: this.genericLabels
        });
      }

      if (isEmptyProperties(key, value)) {
        return obj;
      }

      if (useAlias && ["properties", "additionalProperties"].includes(key)) {
        value = mapAliasedProperties(value, this._alias);
      }

      obj[key] = value;

      return obj;
    }, {});

    obj = serializeGenerics(obj, options);

    if (this._required.size) {
      obj.required = Array.from(this._required).map(key => (useAlias ? (this._alias.get(key) as string) || key : key));
    }

    if (root && Object.keys(schemas).length) {
      obj.definitions = schemas;
    }

    return obj;
  }

  assign(obj: JsonSchema | Partial<IJsonSchemaOptions> = {}) {
    if (obj instanceof JsonSchema) {
      obj = obj.toObject();
    }

    Object.entries(obj).forEach(([key, value]) => {
      this.set(key, value);
    });

    return this;
  }

  set(key: string, value: any): this {
    if (key in this) {
      // @ts-ignore
      this[key](value);
    } else {
      super.set(key, value);
    }

    return this;
  }

  getTarget() {
    if (isClass(this._target)) {
      return this._target;
    }

    return !this._target ? this._target : (this._target as any)();
  }

  getType() {
    return this.get("type") || getJsonType(this.getTarget());
  }

  getName() {
    return this.get("name") || (this._target ? nameOf(classOf(this.getTarget())) : "");
  }
}
