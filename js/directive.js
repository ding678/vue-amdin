/**
 * Created by xiaodi on 2017/7/25.
 */
//const vm=new Vue()
Vue.directive('fullscreen',function(el,binding){
    const app=document.querySelector('#aaa');
    console.log(el.parentNode)

});


//full.onclick=function(){
//    var dol=document.documentElement;
//    if(dol.requestFullscreen){
//        console.log(1)
//    }else if(dol.mozRequestFullScreen){
//        box.mozRequestFullScreen();
//    }else if(dol.webkitRequestFullScreen){
//        box.webkitRequestFullScreen();//全屏后内容水平垂直居中
//    }
//}
//part.onclick=function(){
//    var dol=document;
//    if(dol.exitFullscreen){
//        dol.exitFullscreen();
//    }else if(dol.mozCancelFullScreen){
//        dol.mozCancelFullScreen();
//    }else if(dol.webkitCancelFullScreen){
//        dol.webkitCancelFullScreen();
//    }
//}