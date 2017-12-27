// header部分复杂动画结合c3----------------------

// header input框聚焦时动画展示部分=======================================================
$('.bannerlastli input').on('focus',function(){
    $('.one').css('display','none');
    $('.two').css('display','none');
    $('.three').css('display','none');
    $('.fourli').css('display','none');
    setTimeout(function(){
        $('.bannerlastli').css('display','none');
        $('.inputbox').css('display','block');
        $('.inputbox input').animate({left:0},1000)        
    },500)
    $('.delete').css('display','block');
    // 隐藏部分的自适应
    $(window).on('resize',function(){
        $('.banner li').css('margin-left','85px');
        $('.banner .bannerlastli').css('margin-right','31px');
        $('.inputbox').css('display','none');
        $('.one').css('display','none');
        $('.two').css('display','none');
        $('.three').css('display','none');
        $('.fourli').css('display','none');
        $('.bannerlastli').css('display','none');
        if(document.documentElement.clientWidth<940){
            $('.inputbox').css('display','none');
            $('.delete').css('display','none');
            
        }else if(document.documentElement.clientWidth<1046){  
            $('.banner li').css('margin-left','12px');
            $('.banner .bannerlastli').css('margin-right','31px');
            $('.inputbox').css('display','block');
            $('.bannerlastli').css('display','none');
            $('.delete').css('display','block');
        }else{
            $('.banner li').css('margin-left','85px');  
        }
    })
})
////////////////////////////////////////////////////////////////////////////////////////////



// c3动画的x点击事件部分=====================================================================

$('.delete').on('click',function(){
    $('.inputbox input').animate({left:'606px'},1000) 
    $('.bannerlastli').css('display','block');
    $('.inputbox').css('display','none');
    $('.delete').css('display','none');
    $('.one').css('display','block');
    $('.two').css('display','block');
    $('.three').css('display','block');
    $('.fourli').css('display','block');
    var noww=document.documentElement.clientWidth;
    if(noww<1046){
        $('.banner li').css('margin-left','12px;')        
    }
    $(window).on('resize',function(){
        $('.banner li').css('margin-left','85px');
        $('.banner .bannerlastli').css('margin-right','31px');
        $('.inputbox').css('display','none');
        $('.one').css('display','block');
        $('.two').css('display','block');
        $('.three').css('display','block');
        $('.fourli').css('display','block');
        $('.bannerlastli').css('display','block');
    $('.delete').css('display','none');
    
        // $('.delete').css('display','block');
        if(document.documentElement.clientWidth<1046){
            $('.banner li').css({'margin-left':'12px','margin-right':'0px'});
        }else{  
            $('.banner li').css('margin-left','85px');
            $('.banner .bannerlastli').css('margin-right','10px');
        }
        if(document.documentElement.clientWidth<715){
            $('.banner li').css('display','none');
            $('.banner i').css('display','block');
            $('.logobox').css('margin-left','0');
            $('.list').css('display','block');
        }else{
            $('.delete').css('display','none');
            $('.banner li').css('display','block');
            $('.banner i').css('display','none');
            $('.list').css('display','none');
            $('.logobox').css('margin-left','150px');
            
        }
    })
})
////////////////////////////////////////////////////////////////////////////////////////////


// earth内部显隐============================================================================

$('.fourli').on('mouseenter',function(){
    $('.country').stop().animate({'opacity':'1'},600).css('display','block');
})
$('.country a').on('mouseenter',function(){
    $(this).css('color','#555');
    $('.country').css('opacity',1)
})
$('.country a').on('mouseleave',function(){
    $(this).css('color','#000')
})
$('.country').on('mouseleave',function(){
    $('.country').stop().animate({'opacity':'0'},600);
    setTimeout(function(){
        $('.country').css('display','none');
    },600)
})
////////////////////////////////////////////////////////////////////////////////////////////

// 轮播图............................./

// new autosimplelb({
//     el:document.getElementsByClassName('secone')[0],
//     time:3000
// });

// $('.dots').on('mouseover',function(){
//     $('.dots a').css({'height':'10px','opacity':'.5','cursor':'pointer'});
//     $('.dots a .gray').css('height','10px');
// })

// $('.dots').on('mouseout',function(){
//     $('.dots a').css({'height':'3px','opacity':'.8'});
//     $('.dots a .gray').css('height','3px');
// })
//....................................../



// 窗口缩放响应======================================================================
$(window).on('resize',function(){
    console.log(document.documentElement.clientWidth)
// 轮播图片响应（窗口尺寸拉动发生变化时）-------------------------------------------
    var num1=(1265-document.documentElement.clientWidth)/2;
    $('.imglist li a').css({'background-position':-num1+'px'});


// banner部分响应（窗口尺寸拉动发生变化时）-----------------------------------------
    if(document.documentElement.clientWidth<1046){
        $('.banner li').css({'margin-left':'25px','margin-right':'0px'});
    }else{  
        $('.banner li').css('margin-left','85px');
        $('.banner .bannerlastli').css('margin-right','31px');
    }
    if(document.documentElement.clientWidth<715){
        $('.banner li').css('display','none');
        $('.banner i').css('display','block');
        $('.logobox').css('margin-left','0');
        $('.list').css('display','block');
    }else{
        $('.delete').css('display','none');
        $('.banner li').css('display','block');
        $('.banner i').css('display','none');
        $('.list').css('display','none');
        $('.logobox').css('margin-left','150px');
        
    }
// 轮播圆点部分响应（窗口尺寸拉动发生变化时）---------------------------------------
    if(document.documentElement.clientWidth<600){
        $('.dots a').css({'float':'none','display':'block','margin':'4px'});
        $('.dots').css('top','500px')
    }else{
        $('.dots a').css({'float':'left','margin':'5px'});
        $('.dots').css('top','580px')
    }


// 窗口缩放css媒体查询footer ul li结构改变的点击事件部分（窗口尺寸拉动发生变化时）----
if(document.documentElement.clientWidth<767){
    $('.footer ul li:first-child').siblings().css('display','none');   
    $(this).children('span').html('+')               
    var i=0;
    $('.footer ul li:first-child').on('click',function(){
        i++;
        if(i%2==0){ 
            $(this).siblings().css('display','none');
            $(this).children('span').html('+')              
            
        }else{
            $(this).siblings().css('display','block');
            $(this).children('span').html('-')
        }          
        // $(this).siblings().stop().fadeToggle(30);
        })
    }else{
        $('.footer ul li').css('display','block');  
        $(this).children('span').html('-')                         
        $('.footer ul li').on('click',function(){
            $(this).siblings().css('display','block');  
            $(this).children('span').html('-')                 
        })
    }

})
/////////////////////////////////////////////////////////////////////////////////


// css媒体查询footer ul li结构改变的点击事件页面加载完毕部分---------------
if(document.documentElement.clientWidth<767){ 
    $('.footer ul li:first-child').siblings().css('display','none');    
    $(this).children('span').html('+')                  
    
    var i=0;
    $('.footer ul li:first-child').on('click',function(){
        i++;
        if(i%2==0){ 
            $(this).siblings().css('display','none');
            $(this).children('span').html('+')              
            
        }else{
            $(this).siblings().css('display','block');
            $(this).children('span').html('-')           
        }          
        })
    }else{
        $('.footer ul li').css('display','block'); 
        $(this).children('span').html('-')                          
        $('.footer ul li').on('click',function(){
            $(this).siblings().css('display','block');     
            $(this).children('span').html('-')              
        })
    }
// -------------------------------------------------------------------------

//侧边划动栏banner list图标点击事件==========================================================
$('.header .list').on('click',function(){
    setTimeout(() => {
        $('.leftlargemovebox').css('display','block').animate({width:'70%'},1000);   
        $('.rfog').css('display','block').animate({width:'30%','left':'70%'},1000);    
    }, 10);
    $('.rightlargemovebox').animate({'width':'30%'},1000);     
    $('.rfog i').css('display','block');
    $('body').css('overflow-y','hidden');
})
//侧边划动栏rfog i图标点击隐藏侧边栏事件
$('.rfog i').on('click',function(){
    $('.rfog i').css('display','none');
    $('.leftlargemovebox').animate({width:'0%'},1000);  
    $('.rfog').animate({width:'0%','left':'0%'},1000);    
    $('.rightlargemovebox').animate({'width':'100%'},1000);   
    $('body').css('overflow-y','auto');
})

////////////////////////////////////////////////////////////////////////////////////////////


// banner部分页面加载完毕当前窗口自适应部分-----------------------------------------------
if(document.documentElement.clientWidth<1046){
    $('.banner li').css({'margin-left':'25px','margin-right':'0px'});
}else{  
    $('.banner li').css('margin-left','85px');
    $('.banner .bannerlastli').css('margin-right','31px');
}
if(document.documentElement.clientWidth<715){
    $('.banner li').css('display','none');
    $('.banner i').css('display','block');
    $('.logobox').css('margin-left','0');
    $('.list').css('display','block');
}else{
    $('.delete').css('display','none');
    $('.banner li').css('display','block');
    $('.banner i').css('display','none');
    $('.list').css('display','none');
    $('.logobox').css('margin-left','150px');   
}
// -----------------------------------------------------------------------------------


// 轮播小按钮页面加载完毕当前窗口自适应部分----------------------------------------------
if(document.documentElement.clientWidth<600){
    $('.dots a').css({'float':'none','display':'block','margin':'4px'});
    $('.dots').css('top','500px')
}else{
    $('.dots a').css({'float':'left','margin':'5px'});
    $('.dots').css('top','580px')
}
// -----------------------------------------------------------------------------------

// $('.leftlargemovebox').css('height',document.documentElement.clientWidth+'px');