import { posts, mainText } from "./content.js";

const $section = document.querySelector("section");
const $switch = document.querySelector("#switch");

for(let [key, val] of Object.entries(posts)){
    
    let {title, pessimitic, dark_img, alt_dark, optimistic, light_img, alt_light} = val;
    
    if(key !== "junior"){
        const viewPoint = document.createElement("div");
        viewPoint.setAttribute("class", "posts");
        viewPoint.innerHTML = ` 
        <h2>${title}</h2>
        <p>${pessimitic}</p>
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
        <p>${pessimitic}</p>
        ${dark_img}
        `;
        $section.appendChild(viewPoint);
    }
   
}