(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{778:function(t,s,a){"use strict";a.r(s);var n=a(29),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"posthook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#posthook"}},[t._v("#")]),t._v(" PostHook "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { PostHook } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/mongoose"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.54.3/packages/mongoose/src/decorators/postHook.ts#L0-L0"}},[t._v("/packages/mongoose/src/decorators/postHook.ts")])])])])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("function "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PostHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/mongoose/interfaces/MongoosePostHookCB.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("MongoosePostHookCB")])]),t._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v("> | "),a("a",{pre:!0,attrs:{href:"/api/mongoose/interfaces/MongoosePostErrorHookCB.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("MongoosePostErrorHookCB")])]),t._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("We can simply attach a "),a("code",[t._v("@PostHook")]),t._v(" decorator to your model class and\ndefine the hook function like you normally would in Mongoose.")]),t._v(" "),a("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("IgnoreProperty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Required"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsed/common"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("PostHook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsed/mongoose"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PostHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"save"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("car"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CarModel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("car"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("topSpeedInKmH "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("car"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'is fast!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CarModel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("IgnoreProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   _id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   model"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   isFast"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or Prehook on static method")]),t._v("\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PostHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"save"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postSave")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("car"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CarModel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("car"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("topSpeedInKmH "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("car"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'is fast!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("5")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("6")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("7")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("8")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("9")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("10")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("11")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("12")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("13")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("14")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("15")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("16")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("17")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("18")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("19")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("20")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("21")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("22")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("23")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("24")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("25")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("26")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("27")]),a("br")])]),a("p",[t._v("This will execute the post-save hook each time a "),a("code",[t._v("CarModel")]),t._v(" document is saved.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);