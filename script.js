const pad = document.querySelector('.pad');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    getUserInput();
});

pad.addEventListener('mouseover', e => {
    if (e.target.className == 'pad') return;

    e.target.classList.add('filled');
});

function createPad(n) {
    pad.replaceChildren();

    for (let i = 0; i < n * n; i++) {
        const div = document.createElement('div');
        div.style.width = `${700 / n}px`;
        div.style.height = `${700 / n}px`;
        div.classList.add('cell');
        pad.appendChild(div);
    }
}

function getUserInput() {
    let size = Number(prompt('Enter grid size:'));

    createPad(size);
}

createPad(64);