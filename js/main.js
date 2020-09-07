const toggleBtn = document.querySelector('.toggler-btn');
const root = document.querySelector('html');
const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)');
let active = true;

let addActive = function () {
    toggleBtn.classList.add('active');
    root.classList.remove('dark-theme');
    root.classList.add('light-theme');
    active = false;
}

let removeActive = function () {
    toggleBtn.classList.remove('active');
    root.classList.remove('light-theme');
    root.classList.add('dark-theme');
    active = true;
}

toggleBtn.addEventListener("click", function () {
    if (active) {
         addActive();
         window.matchMedia('(prefers-color-scheme: light)');
    } else {
        removeActive();
        window.matchMedia('(prefers-color-scheme: dark)');
    }
});

if (prefersLightScheme.matches) {
    addActive();
} else {
    removeActive();
}

