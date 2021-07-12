import { posts, mainText } from "./content.js";
import HandlePost from "./handle-post.js";
import { handleMode } from "./util.js";

const $body = document.querySelector("body");
const $section = document.querySelector("section");
const $switch = document.querySelector("#switch");
const $citation = document.querySelector("main > blockquote");

handleMode(window, localStorage, $body, $switch);


// Lauch handle of post
const app = new HandlePost($section, $switch, posts, $citation, mainText);
app.init();

$switch.addEventListener("change", () => {
    app.switchPosts();
    window.scrollTo(0, 0);
});

// Lauch AOS.js
AOS.init();