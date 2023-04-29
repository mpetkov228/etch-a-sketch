const container = document.querySelector('.container');

function createPad() {
    for (let i = 0; i < 64; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div);
    }
}

createPad();