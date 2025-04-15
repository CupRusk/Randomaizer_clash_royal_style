document.getElementById('randomize-btn').addEventListener('click', function() {
    const input = document.getElementById('input-elements').value;
    const items = input.split(',').map(item => item.trim()).filter(item => item);
    
    if (items.length === 0) {
        document.getElementById('result').textContent = 'Пожалуйста, введите элементы';
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * items.length);
    document.getElementById('result').textContent = `Результат: ${items[randomIndex]}`;
});