const sidePannel = document.getElementById("custom_scroll_viewer_container")

const ball2 = document.getElementById("ball2")
const ball3 = document.getElementById("ball3")
const ball4 = document.getElementById("ball4")
const ball5 = document.getElementById("ball5")

const st_1 = document.getElementById("st_1")
const st_2 = document.getElementById("st_2")
const st_3 = document.getElementById("st_3")
const st_4 = document.getElementById("st_4")

const middleLengthOfPannel = (sidePannel.getBoundingClientRect().top -sidePannel.getBoundingClientRect().top)/2
const scrollSection = document.getElementById("scroll_container")

const current_slide_name = document.getElementById("current_slide")

scrollSection.addEventListener("scroll", () =>{
    let centerOfPannel = sidePannel.getBoundingClientRect().top + middleLengthOfPannel

    let stTop1 = st_1.getBoundingClientRect().top
    let stTop2 = st_2.getBoundingClientRect().top
    let stTop3 = st_3.getBoundingClientRect().top
    let stTop4 = st_4.getBoundingClientRect().top

    let current_slide_name_content 


    if(centerOfPannel > stTop1){
        ball2.classList.add("full_ball")
        current_slide_name_content = "Buy or sell"
        current_slide_name.style.top = "60px";
    } else{
        ball2.classList.remove("full_ball")
        current_slide_name_content = "home"
        current_slide_name.style.top = "10px";

    }

    if(centerOfPannel > stTop2){
        ball3.classList.add("full_ball")
        current_slide_name_content = "Our mission"
        current_slide_name.style.top = "110px";
    } else{
        ball3.classList.remove("full_ball")
    }

    if(centerOfPannel > stTop3){
        ball4.classList.add("full_ball")
        current_slide_name_content = "subscriptions"
        current_slide_name.style.top = "160px";
    } else{
        ball4.classList.remove("full_ball")
    }

    if(centerOfPannel > stTop4){
        ball5.classList.add("full_ball")
        current_slide_name_content = "links"
        current_slide_name.style.top = "210px";
    } else{
        ball5.classList.remove("full_ball")
    }
    current_slide_name.innerHTML = current_slide_name_content;
})


const nav_menu = document.getElementById("nav_menu")

nav_menu.addEventListener("mouseover", () => {
    nav_menu.src = "homepage_img/menuOnHover.png"
})
nav_menu.addEventListener("mouseout", () => {
    nav_menu.src = "homepage_img/menu.png"
})


const liked_house_link = document.getElementById("liked_house_link")

liked_house_link.addEventListener("mouseover", () => {
    liked_house_link.src = "homepage_img/likedOnHover.png"
})
liked_house_link.addEventListener("mouseout", () => {
    liked_house_link.src = "homepage_img/liked.png"
})



const buttonRight = document.getElementById('scrollBtnRight');
const buttonLeft = document.getElementById('scrollBtnLeft');

const sec3_subsection1 = document.getElementById("sec3_subsection1")
const sec3_subsection2 = document.getElementById("sec3_subsection2")
const sec3_subsection3 = document.getElementById("sec3_subsection3")
const sec3_subsection4 = document.getElementById("sec3_subsection4")

let currentSlide = 1;
let direction = "";

buttonLeft.addEventListener("click", () =>{
    direction = "Left"
    currentSlideLoopLeft()

  
})

buttonRight.addEventListener("click", () =>{

    direction = "Right"
    currentSlideLoopRight()

}) 


function  currentSlideLoopLeft(){
    if(currentSlide == 1 && direction === "Left"){
        currentSlide = 5;
    }
    currentSlide--
   checkForSlide()

}


function currentSlideLoopRight(){
   if(currentSlide == 4 && direction === "Right"){
        currentSlide =0;
    }
    currentSlide++
    checkForSlide()
}

  

function checkForSlide(){

    switch(currentSlide){
        case 1:
            if(sec3_subsection1.classList.contains("hide_section")){
                sec3_subsection1.classList.remove('hide_section')
                sec3_subsection2.classList.add("hide_section")
                sec3_subsection4.classList.add("hide_section")
            }
        break;
        case 2:
            if(sec3_subsection2.classList.contains("hide_section")){
                sec3_subsection2.classList.remove('hide_section')
                sec3_subsection1.classList.add("hide_section")
                sec3_subsection3.classList.add("hide_section")
            }
        break;
        case 3:
            if(sec3_subsection3.classList.contains("hide_section")){
                sec3_subsection3.classList.remove('hide_section')
                sec3_subsection2.classList.add("hide_section")
                sec3_subsection4.classList.add("hide_section")
            }
        break;
        case 4:
            if(sec3_subsection4.classList.contains("hide_section")){
                sec3_subsection4.classList.remove('hide_section')
                sec3_subsection1.classList.add("hide_section")
                sec3_subsection3.classList.add("hide_section")
            }
        break;
    }
}


