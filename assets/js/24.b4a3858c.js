(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{562:function(t,a,s){"use strict";s.r(a);var e=s(2),l=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("详细了解css中的BFC使用规范\n")]),t._v(" "),s("h2",{attrs:{id:"bfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),s("div",{staticClass:"theorem"},[s("p",{staticClass:"title"},[t._v("概念")]),s("p",[t._v("BFC(Block formatting context)直译为“块级格式化上下文”。\n它是一个独立的渲染区域，只有Block-level box（块）参与，\n它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。")])]),s("h2",{attrs:{id:"bfc的布局规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc的布局规则"}},[t._v("#")]),t._v(" BFC的布局规则")]),t._v(" "),s("div",{staticClass:"theorem"},[s("p",{staticClass:"title"},[t._v("BFC的布局规则")]),s("p",[t._v("1、内部的Box会在垂直方向，一个接一个地放置。")]),t._v(" "),s("p",[t._v("2、Box垂直方向的距离由margin决定。\n属于同一个BFC的两个相邻Box的margin会发生重叠（按照最大margin值设置）")]),t._v(" "),s("p",[t._v("3、每个元素的margin box的左边， 与包含块border box的左边相接触")]),t._v(" "),s("p",[t._v("4、BFC的区域不会与float box重叠。！！！ - 两栏布局")]),t._v(" "),s("p",[t._v("5、BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。")]),t._v(" "),s("p",[t._v("6、计算BFC的高度时，浮动元素也参与计算")])]),s("h2",{attrs:{id:"哪些元素或属性能触发bfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哪些元素或属性能触发bfc"}},[t._v("#")]),t._v(" 哪些元素或属性能触发BFC")]),t._v(" "),s("div",{staticClass:"theorem"},[s("p",{staticClass:"title"},[t._v("哪些元素或属性能触发BFC")]),s("p",[t._v("根元素(html)\nfloat属性不为none\nposition为absolute或fixed\ndisplay为inline-block, table-cell, table-caption, flex, inline-flex\noverflow不为visible")])]),s("h2",{attrs:{id:"bfc的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc的应用"}},[t._v("#")]),t._v(" BFC的应用")]),t._v(" "),s("div",{staticClass:"theorem"},[s("p",{staticClass:"title"},[t._v("BFC的应用")]),s("p",[t._v("1、自适应两栏布局\n2、清除内部浮动\n3、防止margin上下重叠")])])])}),[],!1,null,null,null);a.default=l.exports}}]);