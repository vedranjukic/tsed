(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{781:function(s,t,a){"use strict";a.r(t);var e=a(29),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[s._v("#")]),s._v(" Ref "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),s._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[s._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { Ref } "),a("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"token string"},[s._v('"@tsed/mongoose"')])])])]),a("tr",[a("th",[s._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.54.3/packages/mongoose/src/decorators/ref.ts#L0-L0"}},[s._v("/packages/mongoose/src/decorators/ref.ts")])])])])])]),s._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("type Ref<T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(" = ")]),s._v("T | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nfunction "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" type?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/mongoose/interfaces/MongooseSchemaTypes.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("MongooseSchemaTypes")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])]),s._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("div",{pre:!0},[a("p",[s._v("Define a property as mongoose reference to other Model (decorated with @Model).")]),s._v(" "),a("h3",{pre:!0,attrs:{id:"example"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[s._v("\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FooModel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Foo2Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   field"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Foo2Model"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Foo2Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   list"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Foo2Model"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo2Model")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("5")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("6")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("7")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("8")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("9")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("10")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("11")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("12")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("13")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("14")]),a("br")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);