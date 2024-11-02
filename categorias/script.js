document.addEventListener('DOMContentLoaded', function () {
    const labels = document.querySelectorAll('.color-picker-label');
    const radioButtons = document.querySelectorAll('.color-picker-input');

    labels.forEach(label => {
        label.addEventListener('click', function () {
            labels.forEach(l => l.classList.remove('selected')); // Remove borda de todos
            label.classList.add('selected'); // Adiciona borda no selecionado
        });
    });
});