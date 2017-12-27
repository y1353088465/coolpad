//创造轮播图的构造函数
//el轮播元素
class autosimplelb {
	constructor({el,time=3000}){
		this.el=el;

		this.time=time;

		//当前小圆点下标
		this.index=0;

		//获取图片咯
		
		this.pic=this.el.getElementsByClassName('imglist')[0];

		this.pics=Array.from(this.pic.children);

		//获取小圆点
		
		this.createindexbtn();
		this.btn=this.el.getElementsByClassName('dots')[0];

		this.btns=Array.from(this.btn.children);

		//鼠标点击小按钮，之前动画终止当前开始，图片切换。
		
		this.btns.forEach((v,k)=>{                 
			v.addEventListener('click',()=>{
                this.btns.forEach((v)=>{
                    v.children[0].style.background='#bbb';
                });
				if(this.index!==k){

                    this.index=k-1;
                    
                    this.move();
                    clearInterval(this.timer);
                    this.autoMove();           
            
				}
				
			})
        })
		// 自动运行
        this.autoMove();
        //创造新li无缝滚动
        this.createli();

        linear(this.btns[this.index].children[0],90);         
        
	}
	autoMove(){
		this.timer=setInterval(()=>{
                this.rightgo();
        
			},this.time)
	}
	move(){
        this.index++;
        if(this.index==6){
            this.index=1;
            this.pic.style.left=0;            
        }

		buffer(this.pic,{'left':-1265*this.index});


		// //小圆点变化
        this.btns.forEach((v)=>{
            v.children[0].style.width='0px';
        });
        if(this.index==5){
            // this.btns[0].className='active';
            linear(this.btns[0].children[0],90);
            this.btns[0].children[0].style.background="#333";
        }else{
            // this.btns[this.index].className='active';  
            linear(this.btns[this.index].children[0],90);  
            this.btns[this.index].children[0].style.background="#333";            
        }
	}

	rightgo(){

		this.move();
	}
    // 创造下边的一排小按钮
	createindexbtn(){
		let nbtns=document.createElement('div');
        nbtns.className="dots";
		this.el.appendChild(nbtns);

		this.pics.forEach((v,k)=>{

            let nbtn=document.createElement('a');
            nbtn.innerHTML='<div class="gray"></div>'
			if(k==0){
                nbtn.className='active';
            }
            nbtns.appendChild(nbtn);
            this.nbtn=nbtn;
		})
    }
    //创造新li
    createli(){
        let nli=document.createElement('li');
        nli.innerHTML='<a href="javascript:;"></a>'
        // nli.style.background='url("img/1.jpg") center center no-repeat';
        // nli.style.backgroundSize='1265px 609px';
        this.pic.appendChild(nli); 
    }
    // 小按钮的读条功能
    // gogogo(){
    //     var go =Array.from(this.nbtn.children);
    //     go.forEach((v,k)=>{
    //         v.style.background="#333";   
    //     })
    //     console.log(go)
    //     gotogray(go[1]);
        
    //     function gotogray(go){
    //         var a=5;
    //         setInterval(function(){
    //             go.offsetWidth+=a
    //         },300)
    //     }
    // }
    //获取窗口宽度设置imglist移动距离
}