"use strict"
import { ERROR_SERVER, PRODUCT_INFORMATION_NOT_FOUND } from './constants.js';
import { showErrorMessage } from './utils.js';

const wrapper = document.querySelector('.wrapper');
let productsData = [];

getProducts();

async function getProducts() {
    try {

        if (!productsData.length) {
            const res = await fetch('../data/products.json');
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            productsData = await res.json();
        }

        loadProductDetails(productsData);

    } catch (err) {
        showErrorMessage(ERROR_SERVER);
        console.log(err.massage);
    }
}

function getParameterFromURL(parameter) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameter);
}

function loadProductDetails(data) {

    if (!data || !data.length) {
        showErrorMessage(ERROR_SERVER)
        return;
    }

    const productId = Number(getParameterFromURL('id'));

    if (!productId) {
        showErrorMessage(PRODUCT_INFORMATION_NOT_FOUND)
        return;
    }

    const findProduct = data.find(card => card.id === productId);

    if (!findProduct) {
        showErrorMessage(PRODUCT_INFORMATION_NOT_FOUND)
        return;
    }
    renderInfoProduct(findProduct);
}

function renderInfoProduct(product) {
    const { img, title, descr, pubdate, cont_title_1, cont_title_2, cont_title_3, img_1, img_2, img_3 } = product;

    const productItem =
        `
        <div class="card_product_container">
        <div class="card_product_title_container">
            <div class="card_product_img" style="background-image: url(./Imges/Webp/${img});"></div>

            <div class="product_title_disc">
                <div class="product_title">
                    <p class="product_title_name">${title}</p>
                </div>

                <div class="product_disc_container">
                    <p class="product_sub_title">${descr}</p>
                    <p class="product_sub_title">${pubdate}</p>
                </div>
            </div>
        </div>

        <div class="product_content_section">
            <div class="product_content_container">
                <p class="product_content_title">
                ${cont_title_1}
                </p>

                <div class="product_content_img_container_outside">
                <div class="product_content_img_container">
                <div class="product_content_img" style="background-image: url(./Imges/Webp/${img_1});"></div>
                <div class="product_content_img" style="background-image: url(./Imges/Webp/${img_2});"></div>
            </div>
                </div>

                <p class="product_content_title">
                ${cont_title_2}
                </p>
            </div>
        </div>

        <div class="product_content_section">
            <div class="product_content_container">
                <div class="product_content_img_full_size" style="background-image: url(./Imges/Webp/${img_3});"></div>

                <p class="product_content_title">
                ${cont_title_3}
                </p>
            </div>
        </div>
    </div>
    `
    wrapper.insertAdjacentHTML('beforeend', productItem);
}