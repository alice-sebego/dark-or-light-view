import { posts, mainText } from "./content.js";

const $section = document.querySelector("section");
const $switch = document.querySelector("#switch");


// INIT
const init = () => {
    
    for(let [, val] of Object.entries(posts)){
        
        let {title, pessimistic, dark_img, alt_dark} = val;
            const viewPoint = document.createElement("div");
            viewPoint.setAttribute("class", "posts");
            viewPoint.innerHTML = ` 
            <h2>${title}</h2>
            <p>${pessimistic}</p>
            <picture>
                <img src="${dark_img}" alt="${alt_dark}">
            </picture>
            `;
            $section.appendChild(viewPoint);
        }  
            
}

init();

const switchPosts = () => {
    
    $section.innerHTML = "";

    for(let [, val] of Object.entries(posts)){
        
        let {title, pessimistic, dark_img, alt_dark, optimistic, light_img, alt_light} = val;
     
        if(!$switch.checked){

            const viewPoint = document.createElement("div");
            viewPoint.setAttribute("class", "posts");
            viewPoint.innerHTML = ` 
            <h2>${title}</h2>
            <p>${pessimistic}</p>
            <picture>
                <img src="${dark_img}" alt="${alt_dark}">
            </picture>
            `;
            $section.appendChild(viewPoint);
            
        } else {
           
            const viewPoint = document.createElement("div");
            viewPoint.setAttribute("class", "posts");
            viewPoint.innerHTML = ` 
            <h2>${title}</h2>
            <p>${optimistic}</p>
            <picture>
                <img src="${light_img}" alt="${alt_light}">
            </picture>
            `;
            $section.appendChild(viewPoint)

        }
       
    }
}

$switch.addEventListener("change", switchPosts);