/**
 * Handle contents and fill the DOM with these
 * @class HandlePost
 */
export default class HandlePost{
    viewPoint;
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
            this.viewPoint = document.createElement("div");
            this.setAttributePost();
            this.viewPoint.innerHTML = ` 
            <h2>${title}</h2>
            <p>${pessimistic}</p>
            <picture>
                <img src="${dark_img}" alt="${alt_dark}">
            </picture>
            `;
            this.section.appendChild(this.viewPoint);
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

                this.viewPoint = document.createElement("div");
                this.setAttributePost();
                this.viewPoint.innerHTML = ` 
                <h2>${title}</h2>
                <p>${pessimistic}</p>
                <picture>
                    <img src="${dark_img}" alt="${alt_dark}">
                </picture>
                `;
                this.section.appendChild(this.viewPoint);
                this.blockquote.innerHTML = `${this.text.dark}`;
            
            } else {
            
                this.viewPoint = document.createElement("div");
                this.setAttributePost();
                this.viewPoint.innerHTML = ` 
                <h2>${title}</h2>
                <p>${optimistic}</p>
                <picture>
                    <img src="${light_img}" alt="${alt_light}">
                </picture>
                `;
                this.section.appendChild(this.viewPoint);
                this.blockquote.innerHTML = `${this.text.light}`;

            }
        
        }
    }

    /**
     * Set attribute for each div of posts
     * @function setAttributePost
     */
    setAttributePost = () => {
        this.viewPoint.setAttribute("class", "posts");
        this.viewPoint.setAttribute("data-aos","fade-up");
        this.viewPoint.setAttribute("data-aos-offset","150");
        this.viewPoint.setAttribute("data-aos-duration", "800");
        this.viewPoint.setAttribute("data-aos-easing", "ease-in-out-cubic");
        this.viewPoint.setAttribute("data-aos-delay", "200");
    }

}