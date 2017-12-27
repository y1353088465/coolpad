//创造轮播图的构造函数
//el轮播元素
class carousel {
	constructor({el,time=3000}){

		this.el=el;

		this.time=time;

		//当前小圆点下标
		this.index=0;

		//获取左右按键
		this.control=this.el.getElementsByClassName('dblbtn')[0];

		//鼠标进入事件
		this.el.addEventListener('mouseenter',()=>{
			this.control.style.display="block";
			clearInterval(this.timer);
		})
		//鼠标离开事件
		this.el.addEventListener('mouseleave',()=>{
			this.control.style.display="none";
			this.autoMove();
		})

		//获取图片咯
		
		this.pic=this.el.getElementsByClassName('imglist')[0];

		this.pics=Array.from(this.pic.children);

		//获取小圆点
		
		this.createindexbtn();
		this.btn=this.el.getElementsByClassName('dots')[0];

		this.btns=Array.from(this.btn.children);

		//鼠标进入小圆点，圆点背景色改变，图片切换。
		
		this.btns.forEach((v,k)=>{

			v.addEventListener('mouseenter',()=>{
				if(this.index!==k){

					this.index=k;
					this.move();
				}
				
			})
		})
		// 自动运行
		this.autoMove();
		// 获取左右按键，添加点击事件
		this.go=this.control.children;
		this.go[1].addEventListener('click',()=>{

			this.rightgo();
			
		})
		this.go[0].addEventListener('click',()=>{
			this.index--;
			if(this.index<0){
				this.index=this.btns.length-1;
			}
			this.move();
		})


	}
	autoMove(){
		this.timer=setInterval(()=>{
				this.rightgo();
			},this.time)
	}
	move(){
		//图片透明度发生变化
		
		this.pics.forEach((v,k)=>{
			bufferfn(v,{opacity:0},()=>{
				v.style.display="none";
			});
		})
		this.pics[this.index].style.display='block';
		bufferfn(this.pics[this.index],{opacity:100});


		//小圆点变化
		this.btns.forEach(v=>v.className="");
		this.btns[this.index].className='active';
	}

	rightgo(){
		this.index++;
			if(this.index>this.btns.length-1){
				this.index=0;
			}
			this.move();
	}

	createindexbtn(){
		let nbtns=document.createElement('div');
        nbtns.className="dots";
        // nbtns.innerHTML=
		this.el.appendChild(nbtns);

		this.pics.forEach((v,k)=>{
			let nbtn=document.createElement('a');
			if(k==0){
                nbtn.className='active';
            }
            nbtn.innerHTML=k+1;
			nbtns.appendChild(nbtn);
		})
	}
}