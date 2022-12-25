
import "../src/header.css"
import "../src/home.css";
import "../src/menu.css";
import "../src/contact.css"
import { headerLoad } from "./header";
import { homeLoad } from "./home";
import { menuLoad } from "./menu";
import { contactLoad } from "./contact";


headerLoad;
homeLoad();

const content = document.getElementById('content')
const home = document.querySelector('#home-btn');
const menu = document.querySelector('#menu-btn');
const contact = document.querySelector('#contact-btn');

home.addEventListener('click', ()=> {

  var temp = document.querySelector("main");
  temp.remove();
  homeLoad();
})

menu.addEventListener('click', ()=> {

  var temp = document.querySelector("main");
  temp.remove();
  menuLoad();
});

contact.addEventListener('click', ()=> {

  var temp = document.querySelector("main");
  temp.remove();
  contactLoad();
});

