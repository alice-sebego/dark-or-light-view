import { posts, mainText } from "./content.js";
import HandlePost from "./handle-post.js";

const $section = document.querySelector("section");
const $switch = document.querySelector("#switch");
const $citation = document.querySelector("main > blockquote");
// Lauch handle of post
const app = new HandlePost($section, $switch, posts, $citation, mainText);
app.init();

$switch.addEventListener("change", () => {
    app.switchPosts();
    window.scrollTo(0, 0);
});

// Lauch AOS.js
AOS.init();