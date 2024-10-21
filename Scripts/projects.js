"use strict"

import {
    COUNT_SHOW_CARDS_CLICK,
    ERROR_SERVER,
    NO_PRODUCTS_IN_THIS_CATEGORY
} from './constants.js';
import { showErrorMessage } from './utils.js';


const cards = document.querySelector('.cards');
const btnShowCards = document.querySelector('.show-cards');
let shownCards = COUNT_SHOW_CARDS_CLICK;
let countClickBtnShowCards = 1;
let productsData = [];


getProducts();

btnShowCards.addEventListener('click', sliceArrCards)

async function getProducts() {
    try {

        if (!productsData.length) {
            const res = await fetch('../data/products.json');
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            productsData = await res.json();
        }

        if ((productsData.length > COUNT_SHOW_CARDS_CLICK) &&
            btnShowCards.classList.contains('none')) {
            btnShowCards.classList.remove('none');
        }

        renderStartPage(productsData);

    } catch (err) {
        showErrorMessage(ERROR_SERVER);
        console.log(err.message);
    }
}

function renderStartPage(data) {
    if (!data || !data.length) {
        showErrorMessage(NO_PRODUCTS_IN_THIS_CATEGORY);
        return
    };

    const arrCards = data.slice(0, COUNT_SHOW_CARDS_CLICK);
    createCards(arrCards);
}

function sliceArrCards() {
    if (shownCards >= productsData.length) return;

    countClickBtnShowCards++;
    const countShowCards = COUNT_SHOW_CARDS_CLICK * countClickBtnShowCards;

    const arrCards = productsData.slice(shownCards, countShowCards);
    createCards(arrCards);
    shownCards = cards.children.length;

    if (shownCards >= productsData.length) {
        btnShowCards.classList.add('none');
    }
}

function createCards(data) {
    data.forEach(card => {
        const { id, img, title, pubdate } = card;
        const cardItem =
            `
            <div class="card" data-product-id="${id}">
            <a href="/card.html?id=${id}" class="card__url">
                <div class="card_container" style="background-image: url(./Imges/Webp/${img});">
                    <div class="card_name_container">
                        <p class="card_name">${title}</p>
                        <p class="card_name">${pubdate}</p>
                    </div>
                </div>
            </a>
        </div>
            `
        cards.insertAdjacentHTML('beforeend', cardItem);
    });
}