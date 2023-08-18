// HOME PAGE FUNCTIONALITY

// let firstDisplayImg = document.getElementById("img_1");
// let firstImg = firstDisplayImg.src;
//let propImgOne;

// const sidePannel = document.getElementById("custom_scroll_viewer_container")

// const ball2 = document.getElementById("ball2")
// const ball3 = document.getElementById("ball3")
// const ball4 = document.getElementById("ball4")
// const ball5 = document.getElementById("ball5")

// const st_1 = document.getElementById("st_1")
// const st_2 = document.getElementById("st_2")
// const st_3 = document.getElementById("st_3")
// const st_4 = document.getElementById("st_4")

// const middleLengthOfPannel = (sidePannel.getBoundingClientRect().top -sidePannel.getBoundingClientRect().top)/2
// const scrollSection = document.getElementById("scroll_container")

// const current_slide_name = document.getElementById("current_slide")

// scrollSection.addEventListener("scroll", () =>{
//     let centerOfPannel = sidePannel.getBoundingClientRect().top + middleLengthOfPannel

//     let stTop1 = st_1.getBoundingClientRect().top
//     let stTop2 = st_2.getBoundingClientRect().top
//     let stTop3 = st_3.getBoundingClientRect().top
//     let stTop4 = st_4.getBoundingClientRect().top

//     let current_slide_name_content 


//     if(centerOfPannel > stTop1){
//         ball2.classList.add("full_ball")
//         current_slide_name_content = "Buy or sell"
//         current_slide_name.style.top = "60px";
//     } else{
//         ball2.classList.remove("full_ball")
//         current_slide_name_content = "home"
//         current_slide_name.style.top = "10px";

//     }

//     if(centerOfPannel > stTop2){
//         ball3.classList.add("full_ball")
//         current_slide_name_content = "Our mission"
//         current_slide_name.style.top = "110px";
//     } else{
//         ball3.classList.remove("full_ball")
//     }

//     if(centerOfPannel > stTop3){
//         ball4.classList.add("full_ball")
//         current_slide_name_content = "subscriptions"
//         current_slide_name.style.top = "160px";
//     } else{
//         ball4.classList.remove("full_ball")
//     }

//     if(centerOfPannel > stTop4){
//         ball5.classList.add("full_ball")
//         current_slide_name_content = "links"
//         current_slide_name.style.top = "210px";
//     } else{
//         ball5.classList.remove("full_ball")
//     }
//     current_slide_name.innerHTML = current_slide_name_content;
// })


// const nav_menu = document.getElementById("nav_menu")

// nav_menu.addEventListener("mouseover", () => {
//     nav_menu.src = "homepage_img/menuOnHover.png"
// })
// nav_menu.addEventListener("mouseout", () => {
//     nav_menu.src = "homepage_img/menu.png"
// })


// const liked_house_link = document.getElementById("liked_house_link")

// liked_house_link.addEventListener("mouseover", () => {
//     liked_house_link.src = "homepage_img/likedOnHover.png"
// })
// liked_house_link.addEventListener("mouseout", () => {
//     liked_house_link.src = "homepage_img/liked.png"
// })

// let userInput = document.querySelector("input");
// let userLocation = userInput.innerHTML;
// let searchButton = document.getElementById("search_btn");

// const buttonRight = document.getElementById('scrollBtnRight');
// const buttonLeft = document.getElementById('scrollBtnLeft');
// let inputItemsArray = [];

// const sec3_subsection1 = document.getElementById("sec3_subsection1")
// const sec3_subsection2 = document.getElementById("sec3_subsection2")
// const sec3_subsection3 = document.getElementById("sec3_subsection3")
// const sec3_subsection4 = document.getElementById("sec3_subsection4")

// let currentSlide = 1;
// let direction = "";


// buttonLeft.addEventListener("click", () =>{
//     direction = "Left"
//     currentSlideLoopLeft()

  
// })

// buttonRight.addEventListener("click", () =>{

//     direction = "Right"
//     currentSlideLoopRight()

// }) 


// function  currentSlideLoopLeft(){
//     if(currentSlide == 1 && direction === "Left"){
//         currentSlide = 5;
//     }
//     currentSlide--
//    checkForSlide()

// }


// function currentSlideLoopRight(){
//    if(currentSlide == 4 && direction === "Right"){
//         currentSlide =0;
//     }
//     currentSlide++
//     checkForSlide()
// }



// function checkForSlide(){

//     switch(currentSlide){
//         case 1:
//             if(sec3_subsection1.classList.contains("hide_section")){
//                 sec3_subsection1.classList.remove('hide_section')
//                 sec3_subsection2.classList.add("hide_section")
//                 sec3_subsection4.classList.add("hide_section")
//             }
//         break;
//         case 2:
//             if(sec3_subsection2.classList.contains("hide_section")){
//                 sec3_subsection2.classList.remove('hide_section')
//                 sec3_subsection1.classList.add("hide_section")
//                 sec3_subsection3.classList.add("hide_section")
//             }
//         break;
//         case 3:
//             if(sec3_subsection3.classList.contains("hide_section")){
//                 sec3_subsection3.classList.remove('hide_section')
//                 sec3_subsection2.classList.add("hide_section")
//                 sec3_subsection4.classList.add("hide_section")
//             }
//         break;
//         case 4:
//             if(sec3_subsection4.classList.contains("hide_section")){
//                 sec3_subsection4.classList.remove('hide_section')
//                 sec3_subsection1.classList.add("hide_section")
//                 sec3_subsection3.classList.add("hide_section")
//             }
//         break;
//     }
// }

userInput.addEventListener("change", updateValue);

function updateValue(event){
    userLocation = event.target.value;
    let inputs = userLocation.split(",");
    inputItemsArray = inputs;
    const url = "https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=" + inputItemsArray[0] + "%2C%20" + inputItemsArray[1] + "&status_type=ForRent&home_type=Houses&rentMaxPrice=" + inputItemsArray[2];
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e309529736msh3a788b3324fce96p1ec799jsn65b5d82a450c',
            'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
        }
    };
    
    function random(){
        try {
            fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.props[0].imgSrc);
                firstDisplayImg.src = data.props[0].imgSrc;
            })
        } catch (error) {
            console.error(error);
        }
    }
    
    random();
}



//-----------------------------------------------------------------------------
// LISTINGS PAGE FUNCTIONALITY

let divsCreated = false;

document.getElementById("img_box1").addEventListener("click", function() {

    if(!divsCreated) {
        divsCreated = true;

    let contain = document.getElementById("Desc_container");
    // var div = document.getElementById("img_box1");
    let imgC = document.createElement("div")
    let textC = document.createElement("div")
    let backbtn = document.createElement("button")

    contain.style.display = "block";

    document.getElementById("Desc_container").appendChild(imgC);
    document.getElementById("Desc_container").appendChild(textC);
    document.getElementById("Desc_container").appendChild(backbtn);

    imgC.style.border = "10px solid black";
    imgC.style.height = "20vh";
    imgC.style.marginTop = "20px";
    imgC.style.backgroundColor = "white";
    imgC.style.margin = "50px";

    textC.style.border = "10px solid black";
    textC.style.height = "60vh";
    textC.style.width = "82%";
    textC.style.marginLeft = "8%";
    textC.style.backgroundColor = "white";

    backbtn.style.marginTop = "5%";
    backbtn.style.marginLeft = "39%";
    backbtn.innerText = "Back";

    backbtn.onclick = function() {
        contain.style.display = "none";
        divsCreated = false;
    }
    }
});


document.getElementById("img_box2").addEventListener("click", function() {

    if(!divsCreated) {
        divsCreated = true;

    let contain = document.getElementById("Desc_container");
    // var div = document.getElementById("img_box1");
    let imgC = document.createElement("div")
    let textC = document.createElement("div")
    let backbtn = document.createElement("button")

    contain.style.display = "block";

    document.getElementById("Desc_container").appendChild(imgC);
    document.getElementById("Desc_container").appendChild(textC);
    document.getElementById("Desc_container").appendChild(backbtn);

    imgC.style.border = "10px solid black";
    imgC.style.height = "20vh";
    imgC.style.marginTop = "20px";
    imgC.style.backgroundColor = "white";
    imgC.style.margin = "50px";

    textC.style.border = "10px solid black";
    textC.style.height = "60vh";
    textC.style.width = "82%";
    textC.style.marginLeft = "8%";
    textC.style.backgroundColor = "white";

    backbtn.style.marginTop = "5%";
    backbtn.style.marginLeft = "39%";
    backbtn.innerText = "Back";

    backbtn.onclick = function() {
        contain.style.display = "none";
        divsCreated = false;
    }
    }
});

document.getElementById("img_box3").addEventListener("click", function() {

    if(!divsCreated) {
        divsCreated = true;

    let contain = document.getElementById("Desc_container");
    // var div = document.getElementById("img_box1");
    let imgC = document.createElement("div")
    let textC = document.createElement("div")
    let backbtn = document.createElement("button")

    contain.style.display = "block";

    document.getElementById("Desc_container").appendChild(imgC);
    document.getElementById("Desc_container").appendChild(textC);
    document.getElementById("Desc_container").appendChild(backbtn);

    imgC.style.border = "10px solid black";
    imgC.style.height = "20vh";
    imgC.style.marginTop = "20px";
    imgC.style.backgroundColor = "white";
    imgC.style.margin = "50px";

    textC.style.border = "10px solid black";
    textC.style.height = "60vh";
    textC.style.width = "82%";
    textC.style.marginLeft = "8%";
    textC.style.backgroundColor = "white";

    backbtn.style.marginTop = "5%";
    backbtn.style.marginLeft = "39%";
    backbtn.innerText = "Back";

    backbtn.onclick = function() {
        contain.style.display = "none";
        divsCreated = false;
    }
    }
});

document.getElementById("img_box4").addEventListener("click", function() {

    if(!divsCreated) {
        divsCreated = true;

    let contain = document.getElementById("Desc_container");
    // var div = document.getElementById("img_box1");
    let imgC = document.createElement("div")
    let textC = document.createElement("div")
    let backbtn = document.createElement("button")

    contain.style.display = "block";

    document.getElementById("Desc_container").appendChild(imgC);
    document.getElementById("Desc_container").appendChild(textC);
    document.getElementById("Desc_container").appendChild(backbtn);

    imgC.style.border = "10px solid black";
    imgC.style.height = "20vh";
    imgC.style.marginTop = "20px";
    imgC.style.backgroundColor = "white";
    imgC.style.margin = "50px";

    textC.style.border = "10px solid black";
    textC.style.height = "60vh";
    textC.style.width = "82%";
    textC.style.marginLeft = "8%";
    textC.style.backgroundColor = "white";

    backbtn.style.marginTop = "5%";
    backbtn.style.marginLeft = "39%";
    backbtn.innerText = "Back";

    backbtn.onclick = function() {
        contain.style.display = "none";
        divsCreated = false;
    }
    }
});

document.getElementById("img_box5").addEventListener("click", function() {

    if(!divsCreated) {
        divsCreated = true;

    let contain = document.getElementById("Desc_container");
    // var div = document.getElementById("img_box1");
    let imgC = document.createElement("div")
    let textC = document.createElement("div")
    let backbtn = document.createElement("button")

    contain.style.display = "block";

    document.getElementById("Desc_container").appendChild(imgC);
    document.getElementById("Desc_container").appendChild(textC);
    document.getElementById("Desc_container").appendChild(backbtn);

    imgC.style.border = "10px solid black";
    imgC.style.height = "20vh";
    imgC.style.marginTop = "20px";
    imgC.style.backgroundColor = "white";
    imgC.style.margin = "50px";

    textC.style.border = "10px solid black";
    textC.style.height = "60vh";
    textC.style.width = "82%";
    textC.style.marginLeft = "8%";
    textC.style.backgroundColor = "white";

    backbtn.style.marginTop = "5%";
    backbtn.style.marginLeft = "39%";
    backbtn.innerText = "Back";

    backbtn.onclick = function() {
        contain.style.display = "none";
        divsCreated = false;
    }
    }
});

document.getElementById("img_box6").addEventListener("click", function() {

    if(!divsCreated) {
        divsCreated = true;

    let contain = document.getElementById("Desc_container");
    // var div = document.getElementById("img_box1");
    let imgC = document.createElement("div")
    let textC = document.createElement("div")
    let backbtn = document.createElement("button")

    contain.style.display = "block";

    document.getElementById("Desc_container").appendChild(imgC);
    document.getElementById("Desc_container").appendChild(textC);
    document.getElementById("Desc_container").appendChild(backbtn);

    imgC.style.border = "10px solid black";
    imgC.style.height = "20vh";
    imgC.style.marginTop = "20px";
    imgC.style.backgroundColor = "white";
    imgC.style.margin = "50px";

    textC.style.border = "10px solid black";
    textC.style.height = "60vh";
    textC.style.width = "82%";
    textC.style.marginLeft = "8%";
    textC.style.backgroundColor = "white";

    backbtn.style.marginTop = "5%";
    backbtn.style.marginLeft = "39%";
    backbtn.innerText = "Back";

    backbtn.onclick = function() {
        contain.style.display = "none";
        divsCreated = false;
    }
    }
});

document.getElementById("img_box7").addEventListener("click", function() {

    if(!divsCreated) {
        divsCreated = true;

    let contain = document.getElementById("Desc_container");
    // var div = document.getElementById("img_box1");
    let imgC = document.createElement("div")
    let textC = document.createElement("div")
    let backbtn = document.createElement("button")

    contain.style.display = "block";

    document.getElementById("Desc_container").appendChild(imgC);
    document.getElementById("Desc_container").appendChild(textC);
    document.getElementById("Desc_container").appendChild(backbtn);

    imgC.style.border = "10px solid black";
    imgC.style.height = "20vh";
    imgC.style.marginTop = "20px";
    imgC.style.backgroundColor = "white";
    imgC.style.margin = "50px";

    textC.style.border = "10px solid black";
    textC.style.height = "60vh";
    textC.style.width = "82%";
    textC.style.marginLeft = "8%";
    textC.style.backgroundColor = "white";

    backbtn.style.marginTop = "5%";
    backbtn.style.marginLeft = "39%";
    backbtn.innerText = "Back";

    backbtn.onclick = function() {
        contain.style.display = "none";
        divsCreated = false;
    }
    }
});

document.getElementById("img_box8").addEventListener("click", function() {

    if(!divsCreated) {
        divsCreated = true;

    let contain = document.getElementById("Desc_container");
    // var div = document.getElementById("img_box1");
    let imgC = document.createElement("div")
    let textC = document.createElement("div")
    let backbtn = document.createElement("button")

    contain.style.display = "block";

    document.getElementById("Desc_container").appendChild(imgC);
    document.getElementById("Desc_container").appendChild(textC);
    document.getElementById("Desc_container").appendChild(backbtn);

    imgC.style.border = "10px solid black";
    imgC.style.height = "20vh";
    imgC.style.marginTop = "20px";
    imgC.style.backgroundColor = "white";
    imgC.style.margin = "50px";

    textC.style.border = "10px solid black";
    textC.style.height = "60vh";
    textC.style.width = "82%";
    textC.style.marginLeft = "8%";
    textC.style.backgroundColor = "white";

    backbtn.style.marginTop = "5%";
    backbtn.style.marginLeft = "39%";
    backbtn.innerText = "Back";

    backbtn.onclick = function() {
        contain.style.display = "none";
        divsCreated = false;
    }
    }
});
