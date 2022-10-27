window.onload = function () {
    //------------------ham-----------------
    //변수선언
    const menuwrap = document.querySelector(".menuwrap");
    const ham = document.querySelector(".hambtn");

    function togglemenu() {
        if (ham.classList.contains("on")) {
            ham.classList.remove("on");
            menuwrap.classList.remove("activemenu");
        } else {
            ham.classList.add("on");
            menuwrap.classList.add("activemenu");
        }
    }
    ham.addEventListener("click", togglemenu);
    //--------------slide banner----------------------------
    //선택자들 선언하기
    let mainbanner = document.querySelector(".mainbanner");
    let banner = document.querySelector(".banner");
    let bannerli = document.querySelectorAll(".banner>li");
    const pagerbtn = document.querySelectorAll(".pager>li");
    const arrowright = document.querySelector(".rightbtn");
    const arrowleft = document.querySelector(".leftbtn");

    //필요한 기본 변수선언
    //보여지는 배너를 체크 할 변수
    let showbanner = 0;
    let movex = 0; //얼마나 이동할지 정하는 변수

    //복사전 li의 너비
    liwidth = bannerli[0].clientWidth
    // console.log(liwidth);

    //첫번째 li복사
    let cloneobj = bannerli[0].cloneNode(true); //복사
    //마지막 li복사
    let lastobj = bannerli[bannerli.length - 1].cloneNode(true);
    //복사한 처음 요소를 배너 마지막에 넣기
    banner.appendChild(cloneobj); //붙여넣기
    //복사한 마지막 요소를 배너 처음에 넣기
    banner.insertBefore(lastobj, bannerli[0]); //붙여넣기

    //복사된 후의 li의 갯수
    bannerli = document.querySelectorAll(".banner>li");
    console.log(bannerli);
    let count = bannerli.length;
    //부모사이즈 수정 (.banner)
    banner.style.width = liwidth * count + "px";

    //처음 시작하는 배너 위치잡기
    showbanner = 1;
    movex = -liwidth;
    banner.style.transform = `translateX(${movex}px)`;

    //자동으로 이동
    let timer;
    function moveSlide() {
        //모든버튼 취소
        for (i = 0; i < pagerbtn.length; i++) {
            pagerbtn[i].classList.remove("active");
        }
        if (showbanner === 4) {
            pagerbtn[0].classList.add("active");
        }
        else if (showbanner === 0) { //복사된 3으로 갔을때 pager가 3번으로 가도록
            pagerbtn[2].classList.add("active"); //showbanner가 0일때 pagerbtn은 [2]번(3번)이 active되도록!
        }
        else {
            pagerbtn[showbanner - 1].classList.add("active");
        }

        movex = -liwidth * showbanner;
        banner.style.transition = "0.5s";
        banner.style.transform = `translateX(${movex}px)`;
    }
    //오른쪽 버튼을 클릭하면 배너가 한개씩 왼쪽으로 이동
    arrowright.addEventListener("click", function (e) {
        e.preventDefault();
        showbanner++;
        moveSlide();

        if (showbanner === count - 1) {
            setTimeout(function () {
                banner.style.transition = "0s";
                showbanner = 1;
                movex = -liwidth
                banner.style.transform = `translateX(${movex}px)`;
            }, 500) //setTimeout : 
        }
    })
    arrowleft.addEventListener("click", function (e) {
        e.preventDefault();
        showbanner--;
        moveSlide();

        if (showbanner === 0) {
            setTimeout(function () {
                banner.style.transition = "0s";
                showbanner = bannerli.length - 2;
                movex = showbanner * liwidth;
                banner.style.transform = `translateX(${-movex}px)`;
            }, 500) //setTimeout : 
            showbanner = count - 1;
        }
    })



    //pager
    pagerbtn.forEach((n, id) => {
        pagerbtn[id].addEventListener("click", function () {
            showbanner = id + 1;
            moveSlide();
        })
    })

    //자동 슬라이드
    timer = setInterval(() => {
        arrowright.click();
    }, 3000)

    //#mainbanner mmouseover되면 자동실행 취소
    //mouseout되면 자동실행

    mainbanner.addEventListener("mouseover", function () {
        clearInterval(timer);
    })
    mainbanner.addEventListener("mouseout", function () {
        timer = setInterval(() => {
            arrowright.click();
        }, 3000)
    })

    //onresize

    window.onresize = function(e){
        winWidth = window.innerWidth;
        console.log(winWidth)
        liwidth = winWidth;
        banner.style.width = liwidth * count + "px";
        banner.style.transform = `translateX(0)`;
        showbanner=0;
        moveSlide();
    }
}