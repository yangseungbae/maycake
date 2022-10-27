window.onsize = function(e){
    winWidth = window.innerWidth;
    console.log(winWidth)
    liwidth = winWidth;
    banner.style.width = liwidth * count + "px";
    banner.style.transform = `translateX(0)`;
    showbanner=0;
    moveslide();
}