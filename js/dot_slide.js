window.onload=function(){
    // ---------------ham--------------------
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

    //--------------slide banner----------------------------
    const banner = document.querySelector(".cake");
    const bannerli = document.querySelectorAll("section");

    const pagerbtn = document.querySelectorAll(".pager>li"); //pager안에 모든 li를 저장

    //변수 초기화
    //몇번째 배너인지 체크할 변수
    let showbanner = 0;
    //배너 한개의 길이
    const liwidth = bannerli[0].clientWidth;
    console.log(liwidth);

    let movex = 0;
    let moveSlide = () => {
        // 1. 모든 버튼 클래스 취소
        for (i = 0; i < pagerbtn.length; i++) {
            pagerbtn[i].classList.remove("active");
        }
        // 2. 선택한 요소의 버튼만 클래스 추가
        pagerbtn[showbanner].classList.add("active");

        movex = -liwidth * showbanner;
        banner.style.transform = `translateX(${movex}px)`;
    }

    pagerbtn.forEach((n, id) => {
        pagerbtn[id].addEventListener("click", function () {
            // console.log(id); //li의 위치 번호
            // console.log(n);  //li의 코드

            showbanner = id;
            moveSlide();
        })
    })
}