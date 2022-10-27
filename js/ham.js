window.onload=function(){
    //변수선언
    const menuwrap = document.querySelector(".menuwrap");
    const ham = document.querySelector(".hambtn");

    function togglemenu(){
        if(ham.classList.contains("on")){
            ham.classList.remove("on");
            menuwrap.classList.remove("activemenu");
        }else{
            ham.classList.add("on");
            menuwrap.classList.add("activemenu");
        }
    }
    ham.addEventListener("click",togglemenu);
}
