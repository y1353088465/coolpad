// 轮播

new autosimplelb({
    el:document.getElementsByClassName('secone')[0],
    time:4500
});

$('.dots').on('mouseover',function(){
    $('.dots a').css({'height':'10px','opacity':'.5','cursor':'pointer'});
    $('.dots a .gray').css('height','10px');
})

$('.dots').on('mouseout',function(){
    $('.dots a').css({'height':'3px','opacity':'.8'});
    $('.dots a .gray').css('height','3px');
})

// 窗口缩放响应======================================================================
$(window).on('resize',function(){
    // console.log(document.documentElement.clientWidth)
// 轮播图片响应
    var num1=(1265-document.documentElement.clientWidth)/2;
    $('.imglist li a').css({'background-position':-num1+'px'});
// 轮播圆点部分响应
if(document.documentElement.clientWidth<600){
    $('.dots a').css({'float':'none','display':'block','margin':'4px'});
    $('.dots').css('top','500px')
}else{
    $('.dots a').css({'float':'left','margin':'5px'});
    $('.dots').css('top','580px')
    }
})



// if(document.documentElement.clientWidth<767){
// // // 图片区鼠标进入        
// $('.picbox a').on('mouseenter',function(){
//     $(this).stop().animate({width:'500px',left:'-37.5px'},500);
//     $(this).children('.twopic').stop().animate({width:'500px'},500);

// })
// // // 图片区鼠标滑出
// $('.picbox a').on('mouseleave',function(){      
//     $(this).stop().animate({width:'425px',left:0},500);
//     $(this).children('.twopic').stop().animate({width:'425px'},500);

// })
// }

// else{    // 图片区鼠标进入
//     $('.picbox a').on('mouseenter',function(){
//         $(this).children('.twopic').stop().animate({width:'630px'},500);
//     })
//     // 图片区鼠标滑出
//     $('.picbox a').on('mouseleave',function(){
//         $(this).children('.twopic').stop().animate({width:'600px'},500);
//     })}


// $(window).on('resize',function(){
//     if(document.documentElement.clientWidth<767){
//     // 图片区鼠标进入        
//     $('.picbox a').on('mouseenter',function(){
//         $(this).stop().animate({width:'500px',left:'-37.5px'},500);
//         $(this).children('.twopic').stop().animate({width:'500px'},500);
    
//     })
//     // 图片区鼠标滑出
//     $('.picbox a').on('mouseleave',function(){      
//         $(this).stop().animate({width:'425px',left:0},500);
//         $(this).children('.twopic').stop().animate({width:'425px'},500);    
//     })
//     }
//     else{     
//         $(this).stop().animate({width:'600px',left:0},500);
//         $(this).children('.twopic').stop().animate({width:'600px'},500);    
        
//     // 图片区鼠标进入
//     $('.picbox a').on('mouseenter',function(){
//         $(this).children('.twopic').stop().animate({width:'630px'},500);
//     })
//     // 图片区鼠标滑出
//     $('.picbox a').on('mouseleave',function(){
//         $(this).children('.twopic').stop().animate({width:'600px'},500);
//     })
//     }
// })