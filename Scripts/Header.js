class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="menu-opn" id="modal-menu">
            <div class="menu-container">
                <div class="menu-frame">
                    <div class="menu-frmae-list" style="cursor: pointer;" onclick="location.href='./index.html'">
                        <div class="bottom-line">
                            <p>
                                Home
                            </p>
                        </div>
                    </div>

                    <div class="menu-frmae-list" style="cursor: pointer;" onclick="location.href='./about.html'">
                        <div class="bottom-line">
                            <p>
                                About
                            </p>
                        </div>
                    </div>

                    <div class="menu-frmae-list" style="cursor: pointer;" onclick="location.href='./projects.html'">
                        <div class="bottom-line">
                            <p>
                                Projects
                            </p>
                        </div>
                    </div>

                    <div class="menu-frmae-list" style="cursor: pointer;" onclick="location.href='./contacts.html'">
                        <div class="bottom-line">
                            <p>
                                Contacts
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="menu-footer">
                <div class="menu-footer-cont">
                    <p>
                        Copyright © 2024 - M1XT inc. All rights reserved.
                    </p>

                    <p>
                        Made by: MarT14X
                    </p>
                </div>
            </div>
        </div>
        </div>

        <div class="header-container">
            <div class="Logo" id="Logo" style="cursor: pointer;" onclick="location.href='./index.html'">
                <p>
                    M1XT
                </p>
            </div>

            <div class="menu" id="open-modal" style="cursor: pointer;">
                <div class="menu-name" id="Menu-name">
                    <p>
                        Menu
                    </p>
                </div>

                <div class="menu-dots">
                    <div class="menu-dot"></div>
                    <div class="menu-dot"></div>
                    <div class="menu-dot"></div>
                </div>
            </div>
        </div>
    </header>
        `
    }
}

customElements.define('special-header', SpecialHeader);

const hamMenu = document.querySelector(".menu");
const offScreenMenu = document.querySelector(".menu-opn");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});