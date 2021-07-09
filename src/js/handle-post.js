export default class HandlePost{

    constructor(section, toogle, contents, text){
        this.section = section;
        this.toogle = toogle;
        this.contents = contents;
        this.text = text;
    }

    init = () => {
        for(let [, val] of Object.entries(this.contents)){
        
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
            this.section.appendChild(viewPoint);
        }  
    }

    switchPosts = () => {
        this.section.innerHTML = "";

        for(let [, val] of Object.entries(this.contents)){
            
            let {title, pessimistic, dark_img, alt_dark, optimistic, light_img, alt_light} = val;
        
            if(!this.toogle.checked){

                const viewPoint = document.createElement("div");
                viewPoint.setAttribute("class", "posts");
                viewPoint.innerHTML = ` 
                <h2>${title}</h2>
                <p>${pessimistic}</p>
                <picture>
                    <img src="${dark_img}" alt="${alt_dark}">
                </picture>
                `;
                this.section.appendChild(viewPoint);
                
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
                this.section.appendChild(viewPoint);

            }
        
        }
    }

}