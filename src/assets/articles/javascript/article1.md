# JS执行过程之-预编译
首先思考一个问题，**编写一段JS代码，它会如何执行呢？**

JS代码的执行，需要JS引擎先解析再执行。解析过程是先检查是否出现语法错误，然后进行预编译，最后再执行。

## 一、什么是预编译？
预编译进行在JS的底层执行过程中，代码执行之前，编译器对变量声明和函数声明进行提升处理。
简单的来说，**预编译的结果**就是对**变量**和**函数**进行了**声明的提升**，但是对变量**没有进行赋值操作**。
知道了预编译的结果，那接下来详细介绍一下什么是JS的执行过程。

### JS的执行过程可以概括为四步：
1. 初始化全局对象
2. 生成执行上下文栈
3. 调用要那个全局执行上下文栈
4. 变量环境和记录

### 1.初始化全局对象GO，提升变量声明

JS引擎在解析代码的时候，会在堆内存中创建一个全局对象**Global Object（简称GO)**

下面使用一个伪代码模拟该过程，我们先使用var关键字声明三个变量name，message，num

```js
var name = 'curry'
var message = 'I am a coder'
var num = 30
```

此时var关键字会将上面三个变量变成全局变量的的属性键名，且值为undefined

其中引擎内部创建的GO对象中，有一个window属性指向全局对象自身

所有的作用域都可以访问到该全局对象

```js
var GlobalObject = {
  Math: '类',
  Date: '类',
  String: '类',
  setTimeout: '函数',
  setInterval: '函数',
  window: GlobalObject,
  ...
  name: undefined,
  message: undefined,
  num: undefined
  }
```

### 2.执行上下文栈（调用栈）

JS引擎为了执行代码，引擎内部会有一个**执行上下文栈（**Execution Context Stack，简称ECS），**它是用来执行代码的调用栈**。

**2.1.那ECS是如何执行的呢?那个先执行？**

- 会先执行全局代码块
- 执行前全局代码会构建一个**全局执行上下文**
- 一开始全局上下文就会被放入ECS中

**2.2.全局执行上下文包含哪些内容？**

- **代码执行前**（变量作用域提升）
  - 将全局定义的变量和函数等加入到GO对象中，进行变量和函数声明的提升
  - 不会将变量和函数赋值（访问之后变现为undefined）
- **代码执行时**（变量的赋值和函数的执行）
  - 对变量进行赋值
  - 执行其它函数

![img](https://e3u56nv7qa.feishu.cn/space/api/box/stream/download/asynccode/?code=OTRlNTUxYzQzYWJhMWRmZTY2ODFjYjA2YjJjM2FlODdfMkRCYnU5dlJ2MVBER3VIZDd5d0RrRU9JOUNJUTNoOGVfVG9rZW46WU9nT2JxcG0zb3RyV254Y1VBdWN2bjdhbjZjXzE3MzU2MTMyOTY6MTczNTYxNjg5Nl9WNA)

### 3.调用栈调用全局执行上下文的过程

例如代码

```js
var name = 'curry'console.log(message)
var message = 'I am a coder'function foo() {
  var name = 'foo'  
  console.log(name)
}

var num1 = 30
var num2 = 20
var result = num1 + num2
foo()
```

1. 首先初始化全局对象
   1. 普通变量被存放到GO对象中，值为undefined
   2. 执行到foo函数的时候，JS引擎会在堆内存中开辟内存空间存放foo函数，全局对象中因为其地址
   3. 开辟的函数存储空间最主要存放该函数的父级作用域和函数体逻辑代码块
2. 构建全局执行上下文，其VO的内存地址指向GO
3. 将全局执行上下文放入ECS中

![img](https://e3u56nv7qa.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjgzN2MxODA4ODlkMTQ2NzkyMWUyNmQwZWFlNDFiOWFfQ25seVk3alpHOUZIQkpCR3RUNFB5VEZLT0xpM0xvU0NfVG9rZW46UTgzcWJhenRLb3ZZQm94Mkl6WGNzWnJMbk1jXzE3MzU2MTMyOTY6MTczNTYxNjg5Nl9WNA)

1. 从上到下开始执行全局代码，依次对GO对象的全局变量赋值

   1. 执行到对应的变量赋值语句就进行变量赋值

   2. 执行遇到函数的时候，根据函数体创建一个函数执行上下文FEC，加入到ECS中
      1. FEC包含三个部分
         1. AO：在解析函数时，会创建一个**Activation Objec（AO）**
         2. 作用域链：由**函数****VO****和父级VO组成**，查找是一层层往外层查找
         3. this指向：this绑定的值，在函数执行时确定
      2. 执行foo函数的过程
         1. 通过foo在GO对象中的地址解析函数，生成函数AO
         2. 根据AO生成函数执行上下文FEC，放入ECS中
         3. 开始执行foo函数内代码，依次找到AO中的属性并赋值，执行函数体逻辑

   3. ![img](https://e3u56nv7qa.feishu.cn/space/api/box/stream/download/asynccode/?code=MzcyYTUxOTI2YzA0ZWQ4OTQ4OWJlZmFjNjllYWNmNmJfbW85dEYxazZsTnBzTU1UODNHeXV4QXIyR0E1MEM3MXZfVG9rZW46Sno2R2JWeE9Hb2c0QzF4WDhyZmMxNWZybkVoXzE3MzU2MTMyOTY6MTczNTYxNjg5Nl9WNA)

### 4.变量环境和记录

**早期的ECMA规范中**

每一个执行上下文会被关联到一个变量环境，简称VO。在代码中的变量和函数声明会被作为属性添加到VO中，对应函数来说，参数也会被添加到VO中。

也就是说在执行预编译或者代码执行的过程中，创建的GO和AO都会被关联到变量环境VO上，可以通过VO查找到需要的属性，规定了GO，AO和VO都是对象类型。

**在最新ECMA规范中**

每一个执行上下文会关联到一个**变量环境（Variable** **Environment**，简称VE）**，在执行代码中**变量和函数的声明**会作为**环境记录（Environment Record）**添加到变量环境中。对于函数来说，参数也会被作为环境记录添加到变量环境中。

新规范将VO变成了VE，VE类型不一定要为对象类型，但JS的执行过程还是不变的，只是关联的环境变量不同了。

------

到此JS的执行过程已经了解清楚，但是还有一些知识需要补充。

接下来了解一下JS声明变量时候，**不同的关键字在预编译过程中有什么不同**，和涉及的**简单的作用域问题**。



## 二、var、let和const在变量提升时候的区别

**变量的预编译**是将var变量声明提升到作用域的顶部，在执行到那一行代码的时候才进行赋值操作

如果是let 和 const 声明的变量提前访问则会抛出错误

```
console.log(x); // undefined
var x = 5;

console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
```

**为什么var声明的变量可以提前访问，而let和const不行？**

- let 和 const 声明的变量会有一个特殊行为叫做**“暂时性死区”**，变量声明之前不可访问。直到变量声明实际被初始化为止，在此之前访问都会导致**ReferenceError**错误。
- 这是JS关键字本身的原因，let和const在预编译的时候都会提升声明位置，但是不会立即初始化，而是会创建一个**“暂时性的死区”**，直到代码执行到变量声明的那一行对变量进行初始化。
- **var** 和 **let** 在声明一个变量的时候，未赋值情况下，变量的默认值都是undefined。**const** 在声明变量的时候就要进行赋值，否则会报错。

## 三、作用域

### 1.块级作用域

- 指在当前代码块中的作用域
- 比如{ }，函数，循环体，判断语句中
- **let**声明的变量在**每次循环中有独立的作用域**，**每次迭代都会有一个新的作用域**

```js
{
  let a = 10;
  console.log(a); // 10
}
console.log(a); // ReferenceError: a is not defined


for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);  // 输出 0, 1, 2
    }, 1000);
}

//每次迭代创建一个新的作用域，每个回调都捕捉到了当前对应的i值
```

### 2.全局作用域

- 指整个JS程序的作用域，通常是window对象或者是global对象，var声明的对象就是全局对象
- 使用var定义变量，无论在哪里，都会被提升到全局，执行到赋值语句之后，变量会持有该值在全局使用

```js
if (true) {
  var a = 100; // a 是全局变量
}
console.log(a); // 100
```

### 3.函数作用域
- 在函数内部声明的变量仅在函数内部有效，外部无法访问的局部变量
- 函数被调用时函数作用域创建，调用结束就消失
- 直接在外面访问会抛出错误
- var声明的变量在循环中有**函数作用域**，**不会创建新的函数作用域**

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);  // 输出 0, 1, 2
    }, 1000);
}

//异步函数setTimeout不会阻塞主线程，循环会立即执行完毕，回调才开始执行
```

### 4.关键字声明变量的作用域
#### 4.1.var关键字声明变量是有全局作用域或者函数作用域
- 全局作用域直接提升到window对象同级
- 函数作用域是在函数调用的时候声明，提升到函数作用域顶部，只在函数内有效
- 函数作用域中可以通过闭包暴露私有变量 ( 这里不谈 )

#### 4.2.let和const声明的变量都遵循块级作用域
- let和const声明的变量仅在其代码块中生效
- 声明提升，但未赋值前处于暂时性死区，外部无法访问

#### 4.3.定义变量使用关键字的建议
在作用域问题上，let和const更加强调块级作用域和避免变量提升问题。我们在定义变量的时候一般会使用const，在需要修改的时候再修改成let。避免一些由var引起的错误。

- 全局变量污染，可能覆盖或者变量冲突
- 作用域错误，可能导致意外的变量泄露
- 闭包问题，闭包共享同一变量

[1.JavaScript的执行过程（深入执行上下文、GO、AO、VO和VE等概念）](https://www.cnblogs.com/MomentYY/p/15785719.html)