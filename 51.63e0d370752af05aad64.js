(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{362:function(s,t,a){"use strict";a.r(t);var e=a(10),r=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("article",[a("h2",[s._v("Usage")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("mcw-snackbar")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"open"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Simple message"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":dismissAction")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v("\n>")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("mcw-snackbar")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("Simple "),a("code",{pre:!0},[s._v("mcw-snackbar")]),s._v(" is does not queue messages.")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("open")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n    };\n  },\n")])]),s._v(" "),a("p",[s._v("or "),a("code",{pre:!0},[s._v("mcw-snackbar-queue")]),s._v(" maintains an internal queue of messages displayed in sequence.")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("mcw-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"showLeading"')]),s._v(">")]),s._v("Leading"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("mcw-button")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("mcw-snackbar-queue")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"bar"')]),s._v(" />")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    showLeading() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.bar.handleSnack({\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`Your photo has been archived.`")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("timeoutMs")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5000")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("actionText")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Undo'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("leading")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n      });\n    },\n  },\n")])]),s._v(" "),a("h3",[s._v("props")]),s._v(" "),a("h3",[a("code",{pre:!0},[s._v("mcw-snackbar")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Prop Name")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("message")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("Message to show in the snackbar")])]),s._v(" "),a("tr",[a("td",[s._v("reason")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("Passed as argument when snackbar closes programatically")])]),s._v(" "),a("tr",[a("td",[s._v("timeoutMs")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("Timeout in milliseconds when to close snackbar.")])]),s._v(" "),a("tr",[a("td",[s._v("closeOnEscape")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v('Closes popup on "Esc" button if true.')])]),s._v(" "),a("tr",[a("td",[s._v("actionText")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("Text for action button")])]),s._v(" "),a("tr",[a("td",[s._v("leading")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("Shows snackbar on the left if true (or right for rtl languages)")])]),s._v(" "),a("tr",[a("td",[s._v("stacked")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("Shows buttons under text if true")])])])]),s._v(" "),a("h3",[a("code",{pre:!0},[s._v("mcw-snackbar-queue")])]),s._v(" "),a("h4",[s._v("methods")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Method")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[s._v("handleSnack( { timeoutMs, closeOnEscape, message, actionText, dismissAction, stacked, leading, actionHandler })")])]),s._v(" "),a("td",[s._v("queues the next snack")])])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Parameters")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("message")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("Message to show in the snackbar")])]),s._v(" "),a("tr",[a("td",[s._v("reason")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("Passed as argument when snackbar closes programatically")])]),s._v(" "),a("tr",[a("td",[s._v("timeoutMs")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("Timeout in milliseconds when to close snackbar.")])]),s._v(" "),a("tr",[a("td",[s._v("closeOnEscape")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v('Closes popup on "Esc" button if true.')])]),s._v(" "),a("tr",[a("td",[s._v("actionText")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("Text for action button")])]),s._v(" "),a("tr",[a("td",[s._v("leading")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("Shows snackbar on the left if true (or right for rtl languages)")])]),s._v(" "),a("tr",[a("td",[s._v("stacked")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("Shows buttons under text if true")])]),s._v(" "),a("tr",[a("td",[s._v("actionHandler")]),s._v(" "),a("td",[s._v("function")]),s._v(" "),a("td",[s._v("Callback on action")])])])]),s._v(" "),a("h3",[s._v("Reference")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://material.io/components/web/catalog/snackbars"}},[s._v("https://material.io/components/web/catalog/snackbars")])])])])}],!1,null,null,null);t.default=r.exports}}]);
//# sourceMappingURL=51.63e0d370752af05aad64.js.map