const container = document.querySelector('.container');
container.style.width = `${16 * 27}px`;

container.addEventListener('mouseover', e => {
    if (e.target.className == 'container') return;

    e.target.classList.add('filled');
});

function createPad() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div);
    }
}

createPad();