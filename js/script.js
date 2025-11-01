const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu_container');
toggle.addEventListener("click",(e)=>{  
    e.stopPropagation();
    menu.classList.toggle('active');
})

const navlinks = document.querySelectorAll(".menus a");
navlinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        menu.classList.remove("active");
    })
})


document.addEventListener("click",(e)=>{
    if(!menu.contains(e.target) && !menu.contains(e.target)){
        menu.classList.remove("active");
    }
})


window.addEventListener("scroll", function(){
    const navbar = document.querySelector(".navbar");

    if(window.scrollY>50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }
})

window.addEventListener("scroll", function(){
    const btn_top = document.querySelector(".top");
    const header = document.querySelector("header");

    const scrollY = window.scrollY;

    const headerHeight = header.offsetHeight;

    if(scrollY < headerHeight){
        btn_top.classList.add("show");
    }else{
        btn_top.classList.remove("show");
    }
})