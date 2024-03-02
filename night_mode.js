function toggleNightMode() {
    const body = document.body;
    body.classList.toggle('night-mode');
}

function changeIcon() {
    const iconElement = document.getElementById('modeIcon');

    if (iconElement.classList.contains('fa-moon')) {
        iconElement.className = 'fas fa-sun'
    } else {
        iconElement.className = 'fas fa-moon'
    }
    console.log(iconElement.className);
}

function toggleHiddenDiv() {
    const hiddenDiv = document.querySelector('.navigation');
    hiddenDiv.style.display = (hiddenDiv.style.display === 'flex') ? 'none' : 'flex';
}
