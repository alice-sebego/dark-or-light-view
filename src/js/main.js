import _ from "lodash";
import { posts, mainText } from "./content.js";
import HandlePost from "./handle-post.js";
import { handleMode } from "./util.js";

const $body = document.querySelector("body");
const $section = document.querySelector("section");
const $switch = document.querySelector("#switch");
const $citation = document.querySelector("main > blockquote");

// Handle dark and light mode
handleMode(window, localStorage, $body, $switch);

// Lauch AOS.js
AOS.init();

// Lauch handle of post
const app = new HandlePost($section, $switch, posts, $citation, mainText);
app.init();

$switch.addEventListener("change", () => {
    app.switchPosts();
    if (window.scrollY) window.scroll(0, 0);    
});

// Add attributes for each external link
document.querySelectorAll("a").forEach( link => {
     link.setAttribute("target", "_blank");
     link.setAttribute("tabindex", "0");
})

// Display current year on the footer
const $year = document.querySelector("#year");
const date = new Date(Date.now());
$year.textContent = date.getFullYear();