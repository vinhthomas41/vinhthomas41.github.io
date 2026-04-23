function openPanel(name) {
    document.getElementById(name + 'Btn').classList.add('hidden');
    document.getElementById('panel-' + name).classList.add('open');
    document.querySelector('.main-text').classList.add('pushed');
}

function closePanel(name) {
    const panel = document.getElementById('panel-' + name);
    const inner = panel.querySelector('.panel-inner');
    const closeBtn = panel.querySelector('.close-btn');

    inner.style.transition = 'opacity 0.15s ease';
    closeBtn.style.transition = 'opacity 0.15s ease';
    inner.style.opacity = '0';
    closeBtn.style.opacity = '0';

    setTimeout(() => {
        panel.classList.remove('open');
        document.querySelector('.main-text').classList.remove('pushed');
    }, 150);

    setTimeout(() => {
        inner.style.transition = '';
        inner.style.opacity = '';
        closeBtn.style.transition = '';
        closeBtn.style.opacity = '';
        document.getElementById(name + 'Btn').classList.remove('hidden');
    }, 550);
}