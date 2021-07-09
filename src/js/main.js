import { posts, mainText } from "./content.js";
import HandlePost from "./handle-post.js";

const $section = document.querySelector("section");
const $switch = document.querySelector("#switch");

const app = new HandlePost($section, $switch, posts, mainText);
app.init();
$switch.addEventListener("change", app.switchPosts);
