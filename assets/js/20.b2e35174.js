(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{508:function(e,t,a){"use strict";a.r(t);var s=a(4),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")])]),e._v(" "),a("p",[e._v("在写 C++ 的题目的时候经常会遇到这样的问题，写了多个 cpp 文件，在 clion 中编译报错不能同时存在多 main 函数。")]),e._v(" "),a("p",[e._v("下面列举几种方法：")]),e._v(" "),a("h2",{attrs:{id:"方法1-重定义main"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法1-重定义main"}},[e._v("#")]),e._v(" 方法1:重定义Main")]),e._v(" "),a("p",[e._v("在每个文件中通过重定义的方法来解决，在写某道算法时，对main进行重定义，")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gg2jtgx204j30dt058dfs.jpg",alt:"20200214091654844"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gg2ju7dlb0j30f001t0sk.jpg",alt:"20200214091722110"}})]),e._v(" "),a("p",[e._v("运行完后再修改回去，这样就能接下去就能再重定义为main函数接着运行了。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gg2k02ilx2j30ew05vaab.jpg",alt:"20200214091842857"}})]),e._v(" "),a("p",[e._v("优点：不需要修改配置文件")]),e._v(" "),a("p",[e._v("缺点：会让源码文件中多出一些奇奇怪怪的代码，降低代码可阅读性！")]),e._v(" "),a("h2",{attrs:{id:"方法2-手动修改cmakelist-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法2-手动修改cmakelist-txt"}},[e._v("#")]),e._v(" 方法2:手动修改CmakeList.txt")]),e._v(" "),a("p",[e._v("通过手动添加add_executable(编译文件名 源码文件地址)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cmake_minimum_required(VERSION 3.16)\nproject(C_AND_C_Plus_Plus_Practise)\n\nset(CMAKE_CXX_STANDARD 14)\n\nadd_executable(MAIN main.cpp)\n\nadd_executable(CHelloWord ./C_Practise/HelloWord.c)\nadd_executable(C3test ./C_Practise/3_变量/test.c)\nadd_executable(DataStructureLove DataStructure/1Introduction/Love.cpp)\nadd_executable(DataStructureSqList DataStructure/2LinearList/SqList.cpp)\nadd_executable(DataStructureSqList1 DataStructure/2LinearList/SqList1.cpp)\nadd_executable(DataStructureLinkList DataStructure/2LinearList/LinkList.cpp)\nadd_executable(DataStructureLinkList1 DataStructure/2LinearList/LinkList1.cpp)\n")])])]),a("p",[e._v("优点：只修改配置文件，不会影响源码的可读性")]),e._v(" "),a("p",[e._v("缺点：每新建一个文件，就得修改配置文件，较为繁琐！")]),e._v(" "),a("h2",{attrs:{id:"方法3-在cmake文件中编写自动生成程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法3-在cmake文件中编写自动生成程序"}},[e._v("#")]),e._v(" 方法3:在CMake文件中编写自动生成程序")]),e._v(" "),a("p",[e._v("在Cmake文件中编写程序，自动生成编译后的文件名！")]),e._v(" "),a("p",[e._v("###基础版：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# 遍历项目根目录下所有的 .cpp 文件\nfile (GLOB files *.cpp)\nforeach (file ${files})\nstring(REGEX REPLACE ".+/(.+)\\\\..*" "\\\\1" exe ${file})\nadd_executable (${exe} ${file})\nmessage (\\ \\ \\ \\ --\\ src/${exe}.cpp\\ will\\ be\\ compiled\\ to\\ bin/${exe})\nendforeach ()\n')])])]),a("p",[e._v("上边儿这段代码，只会遍历根目录下的cpp文件，不会遍历根目录下的二级目录。")]),e._v(" "),a("p",[e._v("###进阶版：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# 遍历项目根目录及二级目录下所有的 .cpp 文件\nfile (GLOB files *.cpp */*cpp)\nforeach (file ${files})\nstring(REGEX REPLACE ".+/(.+)\\\\..*" "\\\\1" exe ${file})\nadd_executable (${exe} ${file})\nmessage (\\ \\ \\ \\ --\\ src/${exe}.cpp\\ will\\ be\\ compiled\\ to\\ bin/${exe})\nendforeach ()\n')])])]),a("p",[e._v("进阶版就是手动添加访问二级目录的规则，同样要访问三级目录就是再添加一个"),a("code",[e._v("*/*/*.cpp")])]),e._v(" "),a("h3",{attrs:{id:"最优版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最优版"}},[e._v("#")]),e._v(" 最优版：")]),e._v(" "),a("p",[e._v("官方文档提供一个解决方法"),a("code",[e._v("GLOB_RECURSE")]),e._v("，它会自动遍历工程文件根目录下的所有文件目录。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# 遍历项目根目录下所有的 .cpp 文件\nfile (GLOB_RECURSE files *.cpp)\nforeach (file ${files})\nstring(REGEX REPLACE ".+/(.+)\\\\..*" "\\\\1" exe ${file})\nadd_executable (${exe} ${file})\nmessage (\\ \\ \\ \\ --\\ src/${exe}.cpp\\ will\\ be\\ compiled\\ to\\ bin/${exe})\nendforeach ()\n')])])]),a("p",[e._v("优点：方便省时")]),e._v(" "),a("p",[e._v("缺点：这种方法要求所有cpp文件命名不重复，不能含有中文，不能含有‘/’等字符！因为它就是直接Copy你的源码文件名的。")]),e._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("#")]),e._v(" 参考文章：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.cugxuan.cn/2019/11/01/Software/multi-main-func-run-in-clion/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文章1"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/li123_123_/article/details/104306643",target:"_blank",rel:"noopener noreferrer"}},[e._v("文章2"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);