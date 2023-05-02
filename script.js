const pad = document.querySelector('.pad');
const button = document.querySelector('button');

button.addEventListener('click', onClick);

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

function onClick() {
    let size = Number(prompt('Enter grid size:'));

    if (size > 100) {
        return alert('Please enter 100 or less!');
    }

    if (isNaN(size)) {
        return alert('Please enter a number!');
    }

    if (size < 1) {
        return alert('Please enter a number greater than 0!');
    }

    createPad(size);
}


createPad(16);