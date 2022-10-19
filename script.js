document.addEventListener('DOMContentLoaded', () => {
    var slideindex = 0;
    var slide1 = document.getElementsByClassName("slider1");
    var slide2 = document.querySelector(".slide2");
    var dots = document.getElementsByClassName("slidedots");
    var prev = document.getElementsByClassName("prev");
    var next = document.getElementsByClassName("next");
    var menu = document.querySelector(".menu1");
    var sidebar = document.querySelector(".sidebar");
    var sidebarel = document.querySelector("#sidebarul");
    var sidenavbar = document.querySelector(".sidenavbar");
    var sidenavbarel = document.querySelector("#sidenavbarul");
    var btn = document.getElementById("shopnow");
    var div = document.querySelector('html');
    var rect = div.getBoundingClientRect();
    var siderect = sidebar.getBoundingClientRect();
    var head = document.querySelector(".heading span");
    var navbar = document.querySelector(".nav");
    var title = document.querySelector("#title");
    var cmenu = document.querySelector(".fcmenui");


    // SLider 1......................................................
    function slideshow(slideindex) {
        if (slideindex >= slide1.length) slideindex = 0;
        if (slideindex < 0) slideindex = slide1.length;
        for (let i = 0; i < slide1.length; i++) {
            slide1[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            if (slide1[slideindex].style.display === "block") {
                dots[i].style.background = "white";
            }
            else {
                dots[i].style.background = "transparent";
            }
        }
        slide1[slideindex].style.display = "block";
    }

    dots.onlick = () => {
        slideindex = dots.indexof();
        slideshow(slideindex);
    }

    prev.onlick = () => {
        slideindex -= 1
        slideshow(slideindex);
        alert(slideindex);
    }
    
    next.onlick = () => {
        slideindex += 1
        slideshow(slideindex);
        alert(slideindex);
    }

    // SLider 2......................................................
    // slide2.onclick = () => {
    //     // alert(menu.dataset.toggle);
    //     if (slide2.style.width === "100%" || slide2.dataset.toggle === "open") {
    //         slide2.style.width = "19.5%";
    //         slide2.dataset.toggle = "close";
    //     }
    //     else {
    //         slide2.style.width = "100%";
    //         slide2.dataset.toggle = "open";
    //     }
    // }

    // console.log(rect);
    // console.log(menu);
    // function autoscroll() {
    //     if (rect.top < 0) {
    //         window.scrollBy(rect.height);
    //         alert('Viewport Changed');
    //     }
    // }
    // btn.onclick = () => {
    //     shopbtn.style.animation = "none";
    //     shopbtn.style.text-shadow = "0 0 20px white";
    //     shopbtn.style.box-shadow = "0 0 20px white";
    // }
    // document.onscroll = autoscroll();    

    // Menu 1......................................................
    menu.onclick = () => {
        menu.classList.toggle("open");
        if (sidebar.style.width === '100%' && menu.dataset.toggle === "open") {
            sidebarel.style.transition = "all 0.3s 0.5s 0.5s";
            sidebarel.style.opacity = "0";
            sidebar.style.width = "0";
            menu.dataset.toggle = "close";
        }
        else {
            sidebarel.style.transition = "all 0.3s 0";
            sidebar.style.width = '100%';
            sidebarel.style.display = "flex";
            menu.dataset.toggle = "open";
            sidebarel.style.opacity = "1";
        }
    }

    // Menu 2......................................................
    cmenu.onclick = () => {
        cmenu.classList.toggle("active");
    }

    // Title Heading......................................................
    head.onclick = () => {
        if (head.innerHTML === "T") {
            head.innerHTML = "Template";
            navbar.style.opacity = "1";
            sidenavbarel.style.opacity = "1";
            sidenavbar.style.opacity = "1";
            head.style.animation = "none";
            head.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073";
        }
        else {
            sidenavbarel.style.opacity = "0";
            sidenavbar.style.opacity = "0";
            head.style.animation = "text_glow 1s infinite alternate";
            navbar.style.opacity = "0";
            navbar.style.cursor = "pointer";
            head.innerHTML = "T";
        }
    }
});