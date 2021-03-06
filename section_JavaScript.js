
<!--2018/9/11 -->
<script>
//函数定义1：箭头函数定义
(foo,bar)=>{
	//statement
}

//函数定义2，
function fnName(foo,bar){
	//statement
}

//函数定义3：匿名函数，常用于事件处理中
function () {
	//statement
}

//函数定义4：自调用匿名函数，具有立即执行的特点，常用于插件开发
;(function($,window,document,undefined){
	//statement
})
(jQuery,window,document);

//自调用匿名函数的2种结构。
(function($,p){ 
	// console.log(p);
})
(jQuery,'p1');

(function($,p){ 
	// console.log(p);
}
(jQuery,'p2')
);


//定义函数名，可调用箭头函数
var fnName=(foo,bar)=>{	
	//statement
};

//使用函数2，匿名函数分配为变量的值，使用方法为fnNameA()
var fnNameA = function () {
	//statement
};

//闭包？？
(function(foo,bar){
	//statement
})

</script>
<!--2018/9/11 -->


<!-- // 2018/9/11 -->
<script>
//数组的map方法应用举例

a=[1,2,3,4,5];
b=[4,5,6,7,8];
c=a.map((val,index)=>(val+b[index]));
console.log(c);

//输出结果：[5,7,9,11,13]

//合并2个数组，去掉2者的共有项，保留一个。
function flatten(arr1,arr2){ 
	var result = []; 
	var arr = []; 
	arr = arr2.reduce(function(prev, curr){ prev.push(curr); return prev; },arr1); 
	for (var i = 0; i < arr.length; i++) { 
		var index = arr[i]; 
		if (result.indexOf(index) === -1) { 
			result.push(index); 
		} 
	} 
		
	return result; 
}

</script>

<!--2018/10/12 -->
<script>
//JSON数据的处理
//JSON.parse(text[,reviver])，解析JSON字符串，生成由字符串描述的JavaScript值或对象

//JSON.stringify(value[,replacer[,space]])，将一个JavaScript值（对象或数组）转换为一个JSON字符串

//json数据可与PHP中的关联数组建立一一对应的关系。json键名就是关联数组下标，json键值就是关联数组下标对应的值。

</script>

<!--2018/10/30 -->
<script>
//发送数据。要解决who(url),how(method),what(data格式/编码),when(同步/异步)

//1.form，表单


//2.formdata对象


</script>

<!--2018/11/27 -->
<script>
//php中的数组numArr=['_PATS1'=>1,'_PATS2'=>2,'_PATS3'=>3,'_PATS4'=>4,'_PATS_END'=>5,'_PROS1'=>1,'_PROS2'=>2,'_PROS3'=>3,'_PROS4'=>4,'_PROS_END'=>5,'_THES1'=>1,'_THES2'=>2,'_THES3'=>3,'_THES4'=>4,'_THES_END'=>5],经过json_encode(numArr)后就成为json对象（字符串？）numObj;

//在js中接收到该numObj后选择其中的_PAT部分重组为{'_PAT':{'S_INPROCESS':10,'S1':1,'S2':2,'S3':3,'S4':4,'S_END':5}对象，便于后续的使用
var selectNumObj=(numObj)=>{
	let issEntName='_PAT',
		nameArr=Object.keys(numObj),
		valArr=Object.values(numObj),
		numTotal=0;
		arr=[],
		obj={};
	
	for(let i=0;i<nameArr.length;i++){
		arr[i]={'name':nameArr[i],'val':valArr[i]};
	}
	
	arr.forEach(function(item,index){
		//含有issEntName的才截取到obj中
		if(item.name.includes(issEntName)){
			if(item.val){
				let n=item.name.indexOf(issEntName);
				if(n==0){
					obj[item.name.substring(n+4)]=item.val;
				}else{
					obj[item.name]=item.val;
				}
			}else{
				obj[item.name]='';
			}
			numTotal+=item.val*1;
		}
	});
	
	obj['S_INPROCESS']=(numTotal-obj['S_END'])?(numTotal-obj['S_END']):'';
	
	return obj;
};



</script>

<script>
//formData,xhr,html5_map标签,文件上传
1 : 

//更省事

var files = fileInput.files;

var formData = new FormData();

//将所有文件插入formData

formData .append(“xx”,1)

for (var i=0; i<files.length; i++) {

    formData.append(fileInput.name, files[i]);

}

            

var xhr = new XMLHttpRequest();

xhr.open('POST',"http://localhost/ajaxload/test.php",true);

//即可上传

xhr.send(formData);

 

Window.btoa // base64 =to=> asicll

Window.atob // ascill =to=base63

//formData对象转为一个json对象
formData=new FormData();
jsonObj={};

//方法1：使用Map对象的forEach方法组装键值对(对象)
formData.forEach(function(val,key){
	jsonObj[key]=val;
});

//方法2：使用formData的entries()方法形成2维数组后组装		
for(var pair of formData.entries()) {
	jsonObj[pair[0]]=pair[1];
}

console.dir(dataIss);


</script>

 
<html>
//Html5 中的map标签(wow，图片里面可以添加链接了)

<img src=”xxx” usemap=”#map1”/>

<map name=”map” id=”#map1”>

  <area target=”_bank”  href=”xxxx” shape=”rect” coords=”0,100,200,300”></area>

</map>
</html>
<!-- //2018/11/27 -->

<!--2018/12/11 -->
<script>
//JavaScript的hash数组（Object，与PHP中的关联数组对应）：arr={a:1,b:2,c:{k:22,d:44}}

// 定义
var a1 = new Object();
var a1 = {};
var a1=[];

//赋值方法1，添加键值对
a1['a']=1;
a1['b']=2;
a1['c']={k:22,d:44};

//赋值方法2，直接赋值
var a2={a:1,b:2,c:{k:22,d:44}};

//引用方法1，与json对象的引用方法相同
val=a2.c.k; //val=22

//引用方法2，与PHP中访问关联数组的引用方法相同
val=a1['c']['k']; //val=22

//遍历方法
//循环计数器
var m=0,
for(var key in a1){
 	var val=a1[key];
 
 	m++;
}

//删除键值对
delete arr['a'];
delete arr.a;

//严格来说hash数组在js中是对象Object，js中对对象的访问、删除方式就是上述的引用、删除方式，或者2种方法混用。

//递归函数得到指定键的值，要求键名以类似‘xx-yy-zz’的字符串形式给出(该字符串为键名访问路径，zz为最终需要访问的键名)，并保证一定都存在,例如getValue('c-d',a1)就输出44。与a1['c']['d']、a1.c['d']的输出一样
function getValue(keyStr,obj){
	let k='',v='',arr=[];
	
	if(keyStr.indexOf('-')>0){
		arr=keyStr.split('-');
	}
	
	if(arr.length){
		k=arr.shift();
		keyStr=arr.join('-');
		v=getValue(keyStr,obj[k]);
	}else{
		v=obj[keyStr];		
	}
	return v;
}

//JavaScript中的数组（Array，与PHP中的索引数组对应）

// 数组删除：splice()，（ PHP中提供的释放变量或数组元素的函数：unset()） 
var arr = Array(10, 20, 30, 40, 50);
console.log(arr); //对话框显示[10,20,30,40,50]
arr.splice(2, 1);
console.log(arr) //对话框显示[10,20,40,50]
alert(arr.length); //对话框显示4

// 错误，数组不能使用delete
var arr = Array(10, 20, 30, 40, 50);
alert(uneval(arr)); //对话框显示[10,20,30,40,50]
delete(arr[2]);
alert(uneval(arr)); //对话框显示[10,20,,40,50]，注意中间有两个连续的逗号因为第三个元素为undefined
alert(arr.length); //对话框显示5

//数组遍历
arr.forEach(function(el,index){});

</script>
<!-- // 2018/12/11 -->


<!--  2018/12/29 -->
<script>
//FormData对象，

//由表单内容生成FormData对象
formData=new FormData($('fm')[0]);

//遍历formData中的键值对
for(let p of formData){
	console.log(p[0]+' | '+p[1]);
}

//XMLHttpRequest对象

</script>
<!-- // 2018/12/29 -->

// 2019/01/04 

//深冻结函数，递归冻结每一个属性，因Object.freeze()仅冻结第一层属性
function deepFreeze(obj){
	//第一层属性名
	var propNames=Object.getOwnPropertyNames(obj);
	//冻结自身前冻结所有属性
	propNames.forEach(function(name){
		var prop=obj[name];
		//如果是一个对象就冻结
		if(typeof prop=='object' && prop !==null)
			deepFreeze(prop);
	});
	//冻结自身
	return Object.freeze(obj);
}
//不允许修改/增加/删除属性（深冻结）
const authEntCoreProp=deepFreeze({$authEnt});
//浅拷贝，对authEntProp进行delete等有效
const authEntProp=Object.assign({},authEntCoreProp);
//深拷贝，对authEntProp进行delete等无效
//与const authEntProp=authEntCoreProp等效？
const authEntProp=Object.create(authEntCoreProp).__proto__;

// ! 2019/01/04

// 2019/02/14 
//字符串中插入变量
var str='11';
var color='red';
console.log('%c%s',`font-size:16px;color:${color};`,str);

<script>
// "window.location"

//设置或获取整个url为字符串：
window.location.href

//页面跳转并传参 
window.location.assign("xx.php?param1="+p1+"&m2="+p2+"");
window.location.assign(`xx.php?param1="${p1}"&m2="${p2}"`);

window.location.href="xx.php?param1="+p1+"&m2="+p2+"";
window.location.href=`xx.php?param1="${p1}"&m2="${p2}"`;

//设置或获取href属性中井号“#”及其后面的分段(锚点？？)：
window.location.hash

//设置或获取location 或 URL 的 hostname 和 port 号码：
window.location.host

//设置或获取href属性中跟在问号后面的部分：
window.location.search

//设置或获取对象指定的文件名或路径：
window.location.pathname

//设置或获取与URL关联的端口号码：
window.location.port

//设置或获取 URL 的协议部分：
window.location.protocol

//同样的要在frameset中获取到指定的页面的url也是可以的只要把window换成你指定的页面就可以了，比如：

//设置或获取整个url为字符串：
window.parent.frames["framesId"].location.href

//设置或获取href属性中在井号“#”后面的分段：
window.parent.frames["framesId"].location.hash

//设置或获取location 或 URL 的 hostname 和 port 号码：
window.parent.frames["framesId"].location.host

//设置或获取href属性中跟在问号后面的部分：
window.parent.frames["framesId"].location.search

//设置或获取对象指定的文件名或路径：
window.parent.frames["framesId"].location.pathname

//设置或获取与URL关联的端口号码：
window.parent.frames["framesId"].location.port

//设置或获取 URL 的协议部分：
window.parent.frames["framesId"].location.protocol

</script>

// ! 2019/02/14 

// 2019/02/26

//类的定义1；函数

function Animal() { }

//拓展Animal的原型方法
Animal.prototype.speak = function() {
  return this;
}
//增加Animal的方法
Animal.eat = function() {
  return this;
}

let obj = new Animal();
let speak = obj.speak;
speak(); // global object

let eat = Animal.eat;
eat(); // global object


//类的定义2；类声明

/* 
ECMAScript 2015 中引入的 JavaScript 类实质上是JavaScript现有的基于原型的继承的语法糖。类语法不会为JavaScript引入新的面向对象的继承模型。

函数声明和类声明之间的一个重要区别是函数声明会提升，类声明不会。你首先需要声明你的类，然后访问它，否则会抛出一个ReferenceError。

方法内的this指向的是方法所在的类。 
*/
class Rectangle {
    // constructor
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea()
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
	//静态方法
	static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
	
}
const square = new Rectangle(10, 10);

console.log(square.area);
console.log(Point.distance(p1, p2));
// 100



//类的定义3；类表达式
//类表达式可以是命名也可以是匿名的。JavaScript的类也是基于原型继承的。
const MyClass = class [className] [extends] {
  // class body
};

//匿名类表达式
var searchFormCollapse= class {
	
}

//命名类表达式。这个名字只能在类体内部才能访问到。
var searchFormCollapse= class sfc{
	
}

// ! 2019/02/26

// 2019/03/05
/* Class/类的动态导出与导入 */

// 方式1:
// 类定义文件：app/SearchFormCollapse.class.js
export class SearchFormCollapse {
	
}
// 类导入文件：app/Sindex.js
//动态加载类
	import('./SearchFormCollapse.class.js')
	.then(module=>{
		let sFCObj=new module.SearchFormCollapse;
		let fmId=sFCObj.formId;
			
		console.log(fmId);
	})
	.catch(err=>{
		console.log(err);
	});				

//方式2：
// 类定义文件：app/SearchFormCollapse.class.js
export default class SearchFormCollapse {
	
}
// 类导入文件：app/Sindex.js
//动态加载类
	import('./SearchFormCollapse.class.js')
	.then(module=>{
		let sFCObj=new module.default;
		let fmId=sFCObj.formId;
			
		console.log(fmId);
	})
	.catch(err=>{
		console.log(err);
	});	
	
/* async/await */

//定义async函数asyInitData()进行全局变量赋值，默认返回的是一个promise对象。
async function asyInitData() {
	//$.post()方法返回的是jqXHR对象，这个jqXHR对象是对所发起的request的响应结果
	// let resData = await $.post('/index/index/getInitData');
	//fetch()方法返回的是一个Promise对象，这个promise对象resolve成一个response对象，这个response对象是对所发起的request的响应结果。
	let resObj = await fetch('/index/index/getInitData');
	//完成response对象内容解析
	let resData =await resObj.json();
	// let resData =await resObj.blob();
	
	//全局变量赋值
	userName=resData.userName;
	urlObj=resData.urlObj;
	entNum=resData.entNum;
	rqData=initRqData();
	//完善entProp中的num属性值
	for(let ent in entProp){
		for(let per in entProp[ent].period.detail){
			entProp[ent].period.detail[per].title.num=entNum[ent][per];
		}
	}
	return userName;
}

//asyInitData()
asyInitData()
.then(function(uName){
	let str='数据初始化失败。页面无法正常显示。';
	
	if(uName){
		str='用户【'+uName+'】登录成功。';
		pageInit();
		pageReady();
	}
	return $.alert(str);
})
.catch((err)=>{
	console.log(err);
})
.finally(()=>{
	
});

fetch(url).then(function(response) {
  response.text().then(function(text) {
    console.log(text);
  });
});

fetch(url).then(
	response=> {
  		response.text().then(
			text=>{
    			console.log(text);
  			}
		);
	}
);

fetch(url).then(function(response) {
  return response.text()
}).then(function(text) {
  console.log(text);
});

//应用箭头函数改造
fetch('url')
.then(res=>{
	return res.json();
}).then(data=>{
	console.log(data);
}).catch(err=>{
	console.log(err.message);
})

//  2019/03/14
//增加随机因子salt（公钥）加密pwd
//加密端发送：
/* 
1. 密文：data['pwd']
2. 公钥：salt

 */
var val='xxx'; //（私钥）
data={salt:String(Math.ceil(Math.random()*10000))};
//对私钥进行加密后得到密文
data['pwd']=md5(md5(val)+data.salt);

//解密端：需要解密端存有上述加密端的md5(val)或者val的值按照相同的算法进行验证。
/* 
关键在于
1.公钥的产生要随机，
2.私钥不能被第三方得到，
才能保证加密。 
*/

			
// ! 2019/03/14
			
/* ------ 2019/10/31 ------- */

//合并2个数组，第二个数组内容加入第一个数组中
let arr1=[1,2]
let arr2=[3,4]

Array.prototype.push.apply(arr1,arr2);

//合并对象
let obj1={name:2}
let obj2={name:4,val:55}

obj1=Object.assign({},obj1,obj2)

/* !------2021/5/31 ------- */
//ES6 定义类
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    
    }
    show(){
        console.log(this.name,this.age);
    }

}
//ES6 继承类
class Mine extends Person{
    constructor(...args){
        super(...args);
    }
}
//ES6 使用类
const _mine= new Mine("a",18);
//使用类的方法
_mine.show();


/* ------ 2019/03/05 ------- */


/* !------2019/03/05 ------- */

