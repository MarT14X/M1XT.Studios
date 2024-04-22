class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="footer_section">
            <div class="footer_container">
                <div class="footer_left_block">
                    <div class="footer_section_name">
                        <p>
                            GET IN TOUCH
                        </p>

                        <div class="footer_section_container">
                            <div class="footer_section_text">
                                <a href="mailto:M1XTstudio.(My)Mail.com">
                                    M1XTstudio.(My)Mail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="footer_copyright_text">
                        <p>
                            © 2024 - M1XT. All rights reserved.
                        </p>
                    </div>
                </div>

                <div class="footer_left_block">
                    <div class="footer_section_name">
                        <p>
                            CONNECT WITH US
                        </p>

                        <div class="footer_section_container">
                            <div class="footer_section_text">
                                <div class="footer_section_container">
                                    <a href="https://www.artstation.com/mart14x">
                                        ArtStation
                                    </a>

                                    <a href="https://www.behance.net/martinbalabkin">
                                        Behance
                                    </a>

                                    <a href="https://github.com/MarT14X">
                                        Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="footer_copyright_text">
                        <p id="footer_right_text">
                            Developed by MarT14X
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        `
    }
}

customElements.define('special-footer', SpecialFooter)