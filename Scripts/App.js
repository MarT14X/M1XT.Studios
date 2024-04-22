const checks = document.getElementsByClassName
('menu_section');

for (i = 0; i<checks.length; i++) {
checks[i].addEventListener('click', function () {
    this.classList.toggle('open')
})
}