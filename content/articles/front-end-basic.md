# 前端基础

## 1. Window对象

window对象是BOM的核心，它是通过JavaScript访问浏览器窗口的一个接口，是JavaScript在浏览器下运行时最顶层的对象。

window对象上常用的一些属性、方法以及它们的作用如下：

### 1.1 窗口位置

用于确定窗口相对屏幕左上角位置的属性：window.screenLeft，window.screenTop

### 1.2 窗口大小

用于确定浏览器页面视口大小的属性：document.body.clientWidth，document.body.clientHeight

### 1.3 导航和打开窗口

`window.open(URL,name,features,replace)`

URL: 要加载的URL

name: 新窗口的名称，或下列几个特殊的字符：`_self、_parent、_top、_blank`

features: 可选的字符串，声明了新窗口要显示的标准浏览器的特征（很少使用）

replace: 可选的布尔值。新加载的 URL 是在窗口的浏览历史中创建一个新条目，还是替换浏览历史中的当前条目

### 1.4 延时器和定时器

```javascript
延时器：window.setTimeout(function, millseconds) // 在指定时间过后执行代码
定时器：window.setInterval(function, millseconds) // 每隔指定的时间执行一次代码
```

> 由于JavaScript的执行机制，如果millseconds为0或者不传该参数，代码还是会异步执行

### 1.5 系统对话框

警告框：`window.alert(message)`

确认框：`window.confirm(message)`，如果用户点击确定则该方法返回true，点击取消则返回false

提示框：`window.prompt(message, defaultText)`，如果用户点击确定则该方法返回文本输入域的值，否则返回null

> prompt()方法用于显示可提示用户进行输入的对话框。defaultText为文本输入域的默认值



## 2. 表单脚本

Javascript最初的一个应用，就是分担服务器处理表单的责任，打破处处依赖服务器的局面。

获取表单(form)元素引用的方法有好几种，最常见是通过id或class找到它。

`var form = document.getElementById('form1')`

其次，通过`document.forms`可以获取到页面中所有的表单。在这个集合中，可以通过数值索引或name值来取得特定的表单。

### 2.1 常用表单元素

input、select、textarea是常用的三个表单元素

它们的共有表单字段属性：

- disabled
- name
- readOnly
- type（如 checkbox, radio, hidden等）
- value

它们的共有表单字段方法：

- focus()，获取焦点
- blur()，失去焦点

它们的共有表单字段事件：

- blur，失去焦点时触发
- focus，获取焦点时触发
- change，value发生变化且失去焦点时触发

#### 2.1.1 文本输入框input

`<input type="text" size="25" maxlength="50" value="initial value" />`

size：文本框能够显示的字符数

value：文本框的值

maxlength：文本框输入最大长度

#### 2.1.2 选择框select

```html
<select name="userName" id="selUserName">
    <option value="xiaoming">小明</option>
    <option value="xiaofang">小方</option>
</select>
```

#### 2.1.3 多行文本编辑

最常见的使用textarea元素即可

另一种方式是使用名为contenteditable的特殊属性，可以把这个属性应用给页面中的任何元素，然后用户立即就可以编辑该元素。

`<div class="editable" contenteditable></div>`

### 2.2 表单序列化

随着Ajax的出现，表单序列化已经是一种常见需求。在JavaScript中，可以利用表单字段的type属性，连同name和value属性一起实现对表单的序列化。

以下是实现表单序列化的代码：

1. 先获取form表单使用ById或者是forms；

2. 获取后通过elements 取到表单中所有元素的数组；

3. 之后进行遍历判断类型（根据类型做相应的对象拼接）实现序列化对象；

```javascript
function serialize(form){
  var form = document.getElementById(form);
  var result = {};
  for (var i = 0; i < form.elements.length; i++) {
      var feled = form.elements[i];
          switch(feled.type) {
              case undefined:
              case 'button':
              case 'file':
              case 'reset':
              case 'submit':
              	break;
              case 'checkbox':
              case 'radio':
              if (!feled.checked) 
                  break;
              default:
                  if (arr[feled.name]) {
                  	arr[feled.name]=arr[feled.name]+','+feled.value;
                  } else {
                  	arr[feled.name]=feled.value;
                  }
          } 
      }
  }
  return result;
}
```

当然直接使用JQuery提供的serialize方法更加的方便。

> 表单的处理是前端开发中最复杂的模块之一，除了最基本的数据提交之外，还可以使用表单进行图片或文件的上传，通过input元素 type属性设置为image/file



## 3. Ajax

Ajax是一种能够像服务器请求额外的数据而无需卸载页面的技术，能带来更好的用户体验。

Ajax技术的核心是XMLHttpRequest对象（简称XHR）

XMLHttpRequest 对象能够做出 POST 和 HEAD 请求以及普通的 GET 请求的能力

XMLHttpRequest 可以同步或异步地返回 Web 服务器的响应，并且能够以文本或者一个 DOM 文档的形式返回内容

### 3.1 属性

#### 3.1.1 readyState

当一个 XMLHttpRequest 初次创建时，这个属性的值从 0 开始，直到接收到完整的 HTTP 响应，这个值增加到 4。

5 个状态中每一个都有一个相关联的非正式的名称，下表列出了状态、名称和含义：

| 状态 | 名称          | 描述                                                         |
| :--- | :------------ | :----------------------------------------------------------- |
| 0    | Uninitialized | 初始化状态。XMLHttpRequest 对象已创建或已被 abort() 方法重置。 |
| 1    | Open          | open() 方法已调用，但是 send() 方法未调用。请求还没有被发送。 |
| 2    | Sent          | Send() 方法已调用，HTTP 请求已发送到 Web 服务器。未接收到响应。 |
| 3    | Receiving     | 所有响应头部都已经接收到。响应体开始接收但未完成。           |
| 4    | Loaded        | HTTP 响应已经完全接收。                                      |

readyState 的值不会递减，除非当一个请求在处理过程中的时候调用了 abort() 或 open() 方法。每次这个属性的值增加的时候，都会触发 onreadystatechange 事件句柄。

#### 3.1.2 responseText

目前为止为服务器接收到的响应体（不包括头部），或者如果还没有接收到数据的话，就是空字符串。

如果 readyState 小于 3，这个属性就是一个空字符串。当 readyState 为 3，这个属性返回目前已经接收的响应部分。如果 readyState 为 4，这个属性保存了完整的响应体。

#### 3.1.3 status

由服务器返回的 [HTTP 状态代码](https://www.w3school.com.cn/tags/html_ref_httpmessages.asp)，如 200 表示成功，而 404 表示 "Not Found" 错误。当 readyState 小于 3 的时候读取这一属性会导致一个异常。

### 3.2 事件句柄

#### 3.2.1 onreadystatechange

每次 readyState 属性改变的时候调用的事件句柄函数。当 readyState 为 3 时，它也可能调用多次。

### 3.3 方法

#### 3.3.1 abort()

取消当前响应，关闭连接并且结束任何未决的网络活动。

这个方法把 XMLHttpRequest 对象重置为 readyState 为 0 的状态，并且取消所有未决的网络活动。例如，如果请求用了太长时间，而且响应不再必要的时候，可以调用这个方法。

#### 3.3.2 open()

初始化 HTTP 请求参数，例如 URL 和 HTTP 方法，但是并不发送请求。

#### 3.3.3 send()

发送 HTTP 请求，使用传递给 open() 方法的参数，以及传递给该方法的可选请求体。

#### 3.3.4 setRequestHeader()

向一个打开但未发送的请求设置或添加一个 HTTP 请求。

> 实际开发过程中发送Ajax请求可直接使用第三方库中封装好的方法，如JQuery中的$.ajax()方法

### 3.4 跨域

通过XHR实现Ajax通信的一个主要限制，来源于跨域安全策略。默认情况下，XHR对象只能访问与包含它的页面位于同一个域中的资源。这种安全策略可以预防某些恶意行为，但是，实现合理的跨域请求对应Web应用来说也是至关重要的。

目前常用的解决跨域问题的方法有：CORS（跨源资源共享），JSONP，反向代理



## 4. 客户端存储

随着Web应用的出现，也产生了对于能够直接在客户端上存储用户信息能力的要求。例如属于某个特定用户的信息应该存在该用户的机器上，无论是登录信息、偏好设置或者其他属性，能够将这些信息存储在客户端上，可以提高用户的使用体验。

客户端存储的方式有很多种

### 4.1 Cookie

cookie最初是用户存储回话信息的，每次请求的请求头中都会携带cookie

cookie在性质上是绑定在特定的域名下的，每隔域名下cookie的总是是有限的（不同浏览器的限制不同），这就导致了它只能存储少量数据

#### 4.1.1 使用 JavaScript 创建Cookie

JavaScript 中，创建 cookie 如下所示：

`document.cookie="username=John Doe";`

您还可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除：

`document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";`

您可以使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面。

`document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";`

#### 4.1.2 使用 JavaScript 读取Cookie

`var x = document.cookie;`

#### 4.1.3 使用 JavaScript 修改 Cookie

在 JavaScript 中，修改 cookie 类似于创建 cookie，如下所示：

`document.cookie="username=John Smith; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";`

旧的 cookie 将被覆盖。

#### 4.1.4 使用 JavaScript 删除 Cookie

删除 cookie 非常简单。您只需要设置 expires 参数为以前的时间即可，如下所示，设置为 Thu, 01 Jan 1970 00:00:00 GMT:

`document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";`

注意，当您删除时不必指定 cookie 的值。

### 4.2 Web Storage

Web Storage 包含如下两种机制：

- `sessionStorage` 为每一个给定的源（given origin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）。
- `localStorage` 同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在。

#### 4.2.1 读取Storage中的值

`Storage.getItem()`该方法接受一个键名作为参数，返回键名对应的值。

#### 4.2.2 设置Storage中的值

`Storage.setItem()`该方法接受一个键名和值作为参数，将会把键值对添加到存储中，如果键名存在，则更新其对应的值。

#### 4.2.3 删除Storage中的值

`Storage.removeItem()`该方法接受一个键名作为参数，并把该键名从存储中删除。

#### 4.2.4 清空Storage中的值

`Storage.setItem()`调用该方法会清空存储中的所有键名。

> 相比于cookie，Storage可存储的数据上限为5M，能存储更多的数据

> 如果想要实现一个支持离线运行的应用，仅靠Storage和Cookie提供的这些存储大小是远远不够的，如果需要在客户端缓存大量数据，可以使用IndexedDB，它是在浏览器中保存结构化数据的一种数据库。



## 5. 正则表达式

正则表达式是构成搜索模式的字符序列。

该搜索模式可用于文本搜索和文本替换操作。

### 5.1 语法

```
/pattern/modifiers;
```

### 5.2 实例

```
var patt = /Camelot/i;
```

/Camelot/i 是一个正则表达式。

i 是修饰符（表示大小写不敏感）。

### 5.3 使用字符串方法

在 JavaScript 中，正则表达式常用于两个*字符串方法*：search() 和 replace()。

search() 方法使用表达式来搜索匹配，然后返回匹配的位置。

replace() 方法返回模式被替换处修改后的字符串。

```javascript
var str = "Visit Camelot!";
var n = str.search(/Camelot/i); // n = 6 
// replace方法的使用同理
```

### 5.4 正则表达式修饰符

*修饰符*可用于大小写不敏感的更全局的搜素：

| 修饰符 | 描述                                                     |
| :----- | :------------------------------------------------------- |
| i      | 执行对大小写不敏感的匹配。                               |
| g      | 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。 |

### 5.5 正则表达式模式

*括号*用于查找一定范围的字符串：

| 表达式 | 描述                       |
| :----- | :------------------------- |
| [abc]  | 查找方括号之间的任何字符。 |
| [0-9]  | 查找任何从 0 至 9 的数字。 |
| (x\|y) | 查找由 \| 分隔的任何选项。 |

*元字符（Metacharacter）*是拥有特殊含义的字符：

| 元字符 | 描述                                        |
| :----- | :------------------------------------------ |
| \d     | 查找数字。                                  |
| \s     | 查找空白字符。                              |
| \b     | 匹配单词边界。                              |
| \uxxxx | 查找以十六进制数 xxxx 规定的 Unicode 字符。 |

*Quantifiers* 定义量词：

| 量词 | 描述                                |
| :--- | :---------------------------------- |
| n+   | 匹配任何包含至少一个 n 的字符串。   |
| n*   | 匹配任何包含零个或多个 n 的字符串。 |
| n?   | 匹配任何包含零个或一个 n 的字符串。 |

### 5.6 使用 test()

test() 是一个正则表达式方法。

它通过模式来搜索字符串，然后根据结果返回 true 或 false。

```javascript
var pattern = /^1[3456789]\d{9}$/g;
pattern.test(phoneNumber);
```

