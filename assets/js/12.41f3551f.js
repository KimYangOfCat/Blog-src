(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{511:function(t,a,e){"use strict";e.r(a);var r=e(4),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("这是学习swift的笔记系列，学习的课程是"),e("a",{attrs:{href:"https://www.bilibili.com/medialist/play/ml148451180",target:"_blank",rel:"noopener noreferrer"}},[t._v("斯坦福  iOS11 swift语言"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("学习swift的笔记(一)："),e("a",{attrs:{href:"https://kimyang.cn/2019/2019-06-01-swiftlearning1/",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[t._v("introduction to iOS11, Xcode 9 and Swift 4")]),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("今天学习的是课程的第二集："),e("a",{attrs:{href:"https://www.bilibili.com/video/av16339375/?p=2",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[t._v("MVC")]),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("这一节主要讲的就是MVC(Model View Controller)开发模式,这种开发模式主要包含以下三部分：\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze8f9udwj314h0pnu0x.jpg",alt:"Three Maps"}})]),t._v(" "),e("p",[t._v("Model 中包含程序的规则，知道程序能做什么，但不知道如何显示给用户看。\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze8ilmi2j318l0pj1ky.jpg",alt:"model"}})]),t._v(" "),e("p",[t._v("那么如何将 odel 做的事情显示给用户看就是 Controlller 的职责了。\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze8l8yioj319u0pa1ky.jpg",alt:"Controller"}})]),t._v(" "),e("p",[t._v("View 是 Controller 的下属，它们是通用的 UI 组件。可以简单理解成View 是 Controller 显示 Model 所做的结果的容器或工具。\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze8o05yxj314n0p6u0x.jpg",alt:"View"}})]),t._v(" "),e("p",[t._v("在了解了 MVC 的三部分是什么之后，我们最需要了解的就是这三者之间是怎样进行通讯的，以便我们去了解整个 MVC 的工作过程。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Controllers can always talk directly to their model\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze8t0djrj314j0p7u0x.jpg",alt:"控制器可以直接访问模型"}}),t._v("\n控制器可以直接访问模型是必须的，因为它的工作就是和模型沟通：“需要我(Controller)帮你(Medol)显示什么样的结果吗？“")])]),t._v(" "),e("li",[e("p",[t._v("Controllers can also talk directly to their View\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze8w6m8wj314j0ozu0x.jpg",alt:"控制器也可以直接访问视图"}}),t._v("\n因为之前说过 View 是 Controller 的下属，所以能够直接访问也是理所当然的。")])]),t._v(" "),e("li",[e("p",[t._v("The Model and View should never speak to each other\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze91fic1j314m0ouu0x.jpg",alt:"模型与视图不可互通"}}),t._v("\n试想如果模型与试图可以互通，那还有控制器的事儿吗？从专业的角度来解释，有两个原因：其一，模型与 UI 无关， 而视图只负责显示 UI ， 你看它俩都没有共同话题，这能沟通吗？其二，视图都是通用的，通用的 UI 组件如何能知道特定的APP能做些什么事情尼？所以，模型与视图是不可以互相沟通的。")])]),t._v(" "),e("li",[e("p",[t._v("Can the View speak to its Controller?\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze92zmv8j314l0p2u0x.jpg",alt:"视图能否通知控制器呢？"}}),t._v("\n那么视图能否通知控制器呢？这个问题的答案是肯定的。从某些时候来说这是必须的，比如”按钮被按下“的时候，他们必须得交流，而且这种交流必须得是某种标准化的匿名通讯机制。\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze9514raj314l0ouu0x.jpg",alt:"标准化的匿名通讯"}}),t._v("\n那为什么得是匿名的呢？因为视图(View)是通用的对象呀。当 View 通知 Controller 时，它不应该知道这个按钮是做甚什么的，它知道的应该是这只是一个按钮。它通知给控制器的不应该是：“发送按钮被按下了！”，而是：“这里有个按钮被按下了！”，所以为了保证 View 的通用性，View 和  Controller之间的通讯只能是标准化的匿名机制。那如何实现这样的标准化匿名机制呢？有一种名叫 Target-Action 的匿名通讯机制，其原理如下：\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze9774f5j314m0p4u0x.jpg",alt:"控制器中设立一个 Target"}}),t._v(" "),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze98tywaj314p0ozu0x.jpg",alt:"视图中设立一种 Action"}}),t._v("\n可以简单理解成，控制器中有一个名为 target 的方法，视图中有一个名为 action 的方法，每当有一个按钮按下，按钮就会获得 action 方法，然后通过它向 target 发送某个按钮被按下的具体信息，然后由 target 方法去通知控制器。这样理解起来是不是很简单？这本身就是一种很简单的匿名通讯机制。\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze9b2yp2j31590p4x6p.jpg",alt:"target-action"}}),t._v(" "),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze9cdq0sj318s0p34qq.jpg",alt:"更复杂的通讯怎么办？"}}),t._v("\n但是有时候 View 需要给 Controller 通知更复杂的信息时候，比如，一个可以滚动上下的视窗，那么上边简单通讯可能就不能胜任了。因为滚动视窗总是要问控制器很多问题，例如：我滚到到底部了，我还能往下边滚动吗？我横着滚动还是竖着滚动？这些问题的开头大多时候也是如图中所示的should，will，did！那就需要用到更复杂的匿名通讯机制——Delegate(代理)。\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze9dwakpj314k0p9x6p.jpg",alt:"Delegate"}}),t._v("\n在滚动视图里面有一个变量，这个变量存储着一个对象，这个对象能够响应一定数量的某些方法，然后控制器通过protocol协议与视图交流。\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze9fc7kjj315e0p6x6p.jpg",alt:"Protocol"}}),t._v("\nprotocol协议，后面再进行分享。\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze9heuwtj314m0pbx6p.jpg",alt:"View don't own data"}}),t._v("\n接下来再来了解另一种代理（data source），View 本身并没有任何数据，它所展示的数据必定有一个来源。那么它的来源是什么？Model？\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze9m8lwkj317l0p84qq.jpg",alt:"Data source"}}),t._v("\n通过之前的了解，我们可能会误以为 Model 是 View 的数据来源，但其实并不是这样的，View显示的数据的直接来源是 Controller，控制器通过访问模型来获取 View 需要的数据。例如一个上下翻动的列表，每当用户上翻的时候，列表就会不断地问控制器：“接下来的列表中的数据是什么呀？”，然后控制器就会去问模型：“列表接下去所需要的数据内容是什么？“，然后模型就会屁颠屁颠地去查数据库，去看接下去的数据是什么！本质上来看数据源和代理其实是类似的，他们方法的不同取决于不同的 UI 组件。\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze9nnrggj317w0p14qq.jpg",alt:"控制器的作用"}}),t._v("\n接下来我们说说控制器的作用吧！通过对 View 与 Conller 交流过程的了解，我们也能感受到了控制器的关键！总结一下，控制器的作用就是将模型的信息转化为某种格式，然后提供给视图，这就是它的主要的作用；同理反向的它也要处理，把视图中的用户交互翻译成模型中的数据。它负责来回的通讯，是所有交流的中心！")])]),t._v(" "),e("li",[e("p",[t._v("Can the Model talk directly to the Controller？\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze9rof13j314k0oxx6p.jpg",alt:"模型能直接通知控制器吗？"}}),t._v("\n能通知，但是肯定不是直接的。因为模型与 UI 无关，而控制器从根本上讲是取决于 UI 的，所以不能直接沟通。\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze9tcdk5j314l0pbx6p.jpg",alt:"NO"}}),t._v("\n但是有一种方法，让模型能在数据发生改变时给控制器发出通知，好让与之有关的 UI 及时更新数据。\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze9ww6n7j314p0p11ky.jpg",alt:"Radio Station"}}),t._v("\n这种方法被称作电台模式。模型在某个已知的电台上开始广播，而控制器就会收听这个电台，当听到模型电台说数据发生改变的时候，控制器就主动去问模型发生了什么改变，以此来获取改变的主要内容。\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbze9yhvoij315a0pf1ky.jpg",alt:"KVO"}}),t._v("\n这种模式在 iOS  被叫做通知(notification)或者键值监听(KVO,Key Value Observing)")])])]),t._v(" "),e("p",[t._v("我们了解了一个单一的 MVC 的工作过程，但我们手机中的 APP 肯定不止一个 View，那么多个MVC是如何工作在一起的呢？\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbzea0x28lj31bf0r1hdu.jpg",alt:"MVCs"}}),t._v("\n上图是正确的MVC组织状态，而非下图中全是绿色的通道！\n"),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbzea4csvyj31av0r9b2a.jpg",alt:"NOT MVCs"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);