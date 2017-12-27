
//class

function getClass(box){
		if(document.getElementsByClassName){
			return document.getElementsByClassName(box);
		}else{
			var someting=document.getElementsByTagName('*');
			var arr=[]
			for(var i=0;i<someting.length;i++){
			if(someting[i].className===box){
				arr.push(someting[i])
				}
			}
			return arr;
		}
	}

//id

function getid(box){
	return document.getElementById(box)
}


//tagname

function gettagname(tagname){
	return document.getElementsByTagName(tagname)
}

//获取属性值封装


	function getattr(a,b){
		if(a.currentStyle){
			return a.currentStyle[b];
		}else{
			return getComputedStyle(a,false)[b];
		}
	}

//匀速运动封装

    function linear(obj,time,a){
        var a=0;
       var nntimer = setInterval(function(){
			 a+=1
			if(a>=50){
				a=50;
				a=0;
				clearInterval(nntimer);
			}
			obj.style.width=a+'px';

        },time)
    }
    


//缓冲函数封装

function buffer(obj,target,ratio=10){

		clearInterval(obj.timer);

		obj.timer=setInterval(function(){
			var sports=true;
			for(var i in target){
			// 获取当前值
			// console.log(i)
			if(i==='opacity'){
				var attr=getattr(obj,i)*100;
			}else{
				var attr=parseInt(getattr(obj,i));
			}
			// 计算速度
			var speed=(target[i]-attr)/ratio;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			// 下一步移动距离
			var next=attr+speed;
			if(i==='opacity'){
				obj.style[i]=next/100;
				obj.style.filter='alpha(opacity:'+next+')';
			}else{
				obj.style[i]=next+'px';
			}
			
			// 清除定时器
			if(next!==target[i]){

				sports=false;
				
			}
			// console.log(next)
		}
			if(sports===true){
				clearInterval(obj.timer);
			}
		},20)
		

	}

	function getattr(a,b){
		if(a.currentStyle){
			return a.currentStyle[b];
		}else{
			return getComputedStyle(a,null)[b];
		}
	}

// 缓冲递归封装

	function bufferfn(obj,target,fn,ratio=10){
		clearInterval(obj.timer);

		obj.timer=setInterval(function(){
			var sports=true;
			for(var i in target){
			// 获取当前值
			// console.log(i)
			if(i==='opacity'){
				var attr=getattr(obj,i)*100;
			}else{
				var attr=parseInt(getattr(obj,i));
			}
			// 计算速度
			var speed=(target[i]-attr)/ratio;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			// 下一步移动距离
			var next=attr+speed;
			if(i==='opacity'){
				obj.style[i]=next/100;
				obj.style.filter='alpha(opacity:'+next+')';
			}else{
				obj.style[i]=next+'px';
			}
			
			// 清除定时器
			if(next!==target[i]){

				sports=false;
				
			}
			// console.log(next)
		}
			if(sports===true){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
		},80);
	}

//碰撞消失函数（微信飞机大战）
	
	function pz(obj1,obj2){
		if(
			obj1.offsetLeft+obj1.offsetWidth<=obj2.offsetLeft
		||	obj1.offsetTop+obj1.offsetHeight<=obj2.offsetTop
		||	obj1.offsetLeft>=obj2.offsetLeft+obj2.offsetWidth
		||  obj1.offsetTop>=obj2.offsetTop+obj2.offsetHeight
			){
			return false;
		}else{
			return true;
		}
	}
//创建唯一ID（例如IDcard）
	
	function onlyid(){
		return Math.random()+new Date().getTime();
	}




//type:传输方式，
//url：传输地址；
//data：传输内容；
//async：是否异步（true or false）
//success：成功时执行动作；
//complete：执行到最后步骤不一定成功所作步骤；
//error：错误时提示（例如 url）；


				//AJAX封装函数


function ajax({type="get",url,data='',async,success,complete,error}){
	type=type.toUpperCase();

	if(window.ActiveXObject){
		var oxhr=new window.ActiveXObject('Microsoft.XMLHTTP');
	}else{
		var oxhr=new XMLHttpRequest();
	}

	if(typeof data==='object'){
		var sdata='';
		for(var a in data){
			sdata+=a+'='+data[a]+'&';
		}
		data=sdata.slice(0,-1);
	}

	if(type==="GET"){
		url+='?'+data;
	}

	oxhr.open(type,url,async);

	if(type==="POST"){
		oxhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		send(data)
	}else{
		send()
	}
	oxhr.onreadystatechange=function(){
		if(readystate===4){
			if(status===200){
				success&&success();
			}else{
				error&&error();
			}
			complete&&complete();
		}
	}


}



// 写入cookie
function writecookie(name,value,expires,path,domain){
	var scookie=name+'='+encodeURIComponent(value);

	if(expires){
		var odate=new Date();
		odate.setDate(odate.getDate()+expires);
		scookie+=";expires"+odate;
	}
	if(path){
		scookie+=';path'+path;
	}
	if(domain){
		scookie+='domain'+domain; 
	}
	document.cookie=scookie;
}
//读取cookie
function getcookie(name){
	var scookie=document.cookie;
	var acookie=scookie.split('; ');
	for(var i=0;i<acookie.length;i++){
		var itemp=acookie[i].split('=');
		if(itemp[0]===name){
			return decodeURIComponent(itemp[1]);
		}
	}
}