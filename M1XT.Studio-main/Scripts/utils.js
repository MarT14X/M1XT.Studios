"use strict"

export function showErrorMessage(message) {
    const h1 = document.querySelector('.wrapper h1')
    const msg = 
        `
        <div class="ErrorMess" onclick="location.href='./index.html'">
            <div class="ErrorMess_container">
                 <div class="ErrorMess_name">
                    <p>[&ensp;</p>
                    <p>Server Error</p>
                    <p>&ensp;]</p>
                </div>

                <div class="ErrorMess_discription">
                    <p class="fix">an unexpected error on the server side, do not worry, we will fix everything soon!</p>
                    <p class="click">Click on the text to go home</p>
                </div>
            </div>
        </div>
        `;
    h1.insertAdjacentHTML('afterend', msg);
}