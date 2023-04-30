const container = document.querySelector('.container');

container.addEventListener('mouseover', e => {
    if (e.target.className == 'container') return;

    e.target.classList.add('filled');
});

function createPad(n) {
    for (let i = 0; i < n * n; i++) {
        const div = document.createElement('div');
        div.style.width = `${900 / n}px`;
        div.style.height = `${900 / n}px`;
        div.classList.add('cell');
        container.appendChild(div);
    }
}

createPad(64);