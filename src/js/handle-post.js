/**
 * Handle contents and fill the DOM with these
 * @class HandlePost
 */
export default class HandlePost{

    /**
     * @constructor
     * @param {HTMLElement} section 
     * @param {HTMLDivElement} toogle 
     * @param {Object} contents 
     * @param {HTMLElement} blockquote 
     * @param {Object} text 
     */
    constructor(section, toogle, contents, blockquote, text){
        this.section = section;
        this.toogle = toogle;
        this.contents = contents;
        this.blockquote = blockquote;
        this.text = text;
    }

    /**
     * Initialize contents and fill the DOM with these
     * @function init
     */
    init = () => {
        for(let [, val] of Object.entries(this.contents)){
        
            let {title, pessimistic, dark_img, alt_dark} = val;
            const viewPoint = document.createElement("div");
            viewPoint.setAttribute("class", "posts");
            viewPoint.setAttribute("data-aos","fade-up");
            viewPoint.setAttribute("data-aos-offset","150");
            viewPoint.setAttribute("data-aos-duration", "800");
            viewPoint.setAttribute("data-aos-easing", "ease-in-out-cubic");
            viewPoint.setAttribute("data-aos-delay", "200");
            viewPoint.innerHTML = ` 
            <h2>${title}</h2>
            <p>${pessimistic}</p>
            <picture>
                <img src="${dark_img}" alt="${alt_dark}">
            </picture>
            `;
            this.section.appendChild(viewPoint);
        }
        
        this.blockquote.innerHTML = `${this.text.dark}`;
    }

    /**
     * Handle contents depending user's actions
     * @function switchPosts
     */
    switchPosts = () => {
        this.section.innerHTML = "";

        for(let [, val] of Object.entries(this.contents)){
            
            let {title, pessimistic, dark_img, alt_dark, optimistic, light_img, alt_light} = val;
        
            if(!this.toogle.checked){

                const viewPoint = document.createElement("div");
                viewPoint.setAttribute("class", "posts");
                viewPoint.setAttribute("data-aos","fade-up");
                viewPoint.setAttribute("data-aos-offset","150");
                viewPoint.setAttribute("data-aos-duration", "800");
                viewPoint.setAttribute("data-aos-easing", "ease-in-out-cubic");
                viewPoint.setAttribute("data-aos-delay", "200");
                viewPoint.innerHTML = ` 
                <h2>${title}</h2>
                <p>${pessimistic}</p>
                <picture>
                    <img src="${dark_img}" alt="${alt_dark}">
                </picture>
                `;
                this.section.appendChild(viewPoint);
                this.blockquote.innerHTML = `${this.text.dark}`;
            } else {
            
                const viewPoint = document.createElement("div");
                viewPoint.setAttribute("class", "posts");
                viewPoint.setAttribute("data-aos","fade-up");
                viewPoint.setAttribute("data-aos-offset","150");
                viewPoint.setAttribute("data-aos-duration", "800");
                viewPoint.setAttribute("data-aos-easing", "ease-in-out-cubic");
                viewPoint.setAttribute("data-aos-delay", "200");
                viewPoint.innerHTML = ` 
                <h2>${title}</h2>
                <p>${optimistic}</p>
                <picture>
                    <img src="${light_img}" alt="${alt_light}">
                </picture>
                `;
                this.section.appendChild(viewPoint);
                this.blockquote.innerHTML = `${this.text.light}`;

            }
        
        }
    }

}