const container=  document.getElementById("Home_Container")




class House{

    constructor(type, price, image)        
        {
        this.type = type
        this.price = price
        this.image = image
        this.fill = this.generateDiv()
    }

//     keepTabsOnIds(div){
//         let obj = {id: i, title: this.title, explanation: this.explanation, code: this.code}

//         snippetArr.push(obj)
//         id = i;
//         i++
//         return id
 
//      }

//     clickDtection(div){
//         div.addEventListener('click', (e)=> {
//             let chosenSnippet = e.target.id
            
//             let chosenTitle = snippetArr[chosenSnippet].title
//             let chosenExp = snippetArr[chosenSnippet].explanation
//             let choosenCode = snippetArr[chosenSnippet].code

//             view_title.innerHTML = chosenTitle;
//             view_explanation.innerHTML = `/* ${chosenExp} */`
//             view_code.innerHTML = choosenCode;


//               // console.log('this is the id:' + chosenSnippet)
//             // console.log('this is the innerHTML of view_title:' +view_explanation.innerHTML )
//         })
//     }

    generateDiv(){
        let div = document.createElement('div')
        div.classList.add("home")
        // div.classList.add(i)
        // let y = '${event.type} hello'
        // this.keepTabsOnIds()
        // this.clickDtection(div)
        // div.innerHTML = `<div id='${id}'><div class='title' id='${id}'> ${this.title}</div><div class='explanation' id='${id}'> ${this.explanation} </div> </div>`
        div.innerHTML = `<div class="img_box"> <img class="img_1" src="${this.image}" width="100%" height="100%"></div><div class="text_box">$${this.price}</div><div class="button_container"><button>rent</button><button>save</button></div> `
        // div.id = id
        return div
    }
}



function getAllHomes(){
    for(let i = 0; i< homes.length; i++){
        let house =  homes[i].house
        let value =  homes[i].value
        let image = homes[i].image


        let posting = new House(this.type = house, this.price = value, this.image = image)
        container.appendChild(posting.fill)
    }
}

getAllHomes()