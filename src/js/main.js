import { posts, mainText } from "./content.js";

const $section = document.querySelector("section");
const $switch = document.querySelector("#switch");


// INIT
const init = () => {
    
    for(let [key, val] of Object.entries(posts)){
        
        let {title, pessimistic, dark_img, alt_dark} = val;
 
        if(key !== "junior"){
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
            <p>${pessimistic}</p>
            ${dark_img}
            `;
            $section.appendChild(viewPoint);
        }  
    
    }     
    
}

init();

const switchPosts = () => {
    
    $section.innerHTML = "";

    for(let [key, val] of Object.entries(posts)){
        
        let {title, pessimistic, dark_img, alt_dark, optimistic, light_img, alt_light} = val;
     
        if(!$switch.checked){
    
            if(key !== "junior"){
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
                <p>${pessimistic}</p>
                ${dark_img}
                `;
                $section.appendChild(viewPoint);
            }
        } else {
            if(key !== "junior"){
                const viewPoint = document.createElement("div");
                viewPoint.setAttribute("class", "posts");
                viewPoint.innerHTML = ` 
                <h2>${title}</h2>
                <p>${optimistic}</p>
                <picture>
                    <img src="${light_img}" alt="${alt_light}">
                </picture>
                `;
                $section.appendChild(viewPoint);
            } else {
                const viewPoint = document.createElement("div");
                viewPoint.setAttribute("class", "posts");
                viewPoint.innerHTML = ` 
                <h2>${title}</h2>
                <p>${optimistic}</p>
                ${light_img}
                `;
                $section.appendChild(viewPoint);
            }
    
        }
       
    }
}

$switch.addEventListener("change", switchPosts);