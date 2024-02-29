'use strict';
import { cardProfile } from "../component/card.js";
import { cardProduct } from "../component/cardProduct.js";
import { getData } from "../store/storeAPI.js";
import { getDataUser } from "../store/storecard.js"
// import cardProduct  from "../component/cardProduct";
const renderArea = document.querySelector("#render-area");
const renderProfile = document.querySelector("#profile");

const products = await getData("productList"); 
      products.map((product) => {
        renderArea.innerHTML += cardProduct(product);
      }); 

const usercard = await getDataUser("cardList");
      usercard.map((profile) => {
        renderProfile.innerHTML += cardProfile(profile);
      });   








// const BASE_URL = "http://localhost:5500/data/productList.json";
// fetch(BASE_URL).then((res) => res.json())
//                .then((data) => {
//                 data.map((product) => {
//                     renderArea.innerHTML += cardProduct(product);
//                 });

//                });



