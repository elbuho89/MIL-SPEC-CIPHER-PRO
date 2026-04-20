// Actualización de Telemetría
function updateTacticalData() {
    const now = new Date();
    document.getElementById('zulu-clock').innerText = now.toLocaleTimeString('en-GB', {timeZone: 'UTC'});
    document.getElementById('user-date').innerText = now.toLocaleDateString('es-ES');
}
setInterval(updateTacticalData, 1000);
updateTacticalData();

// Market Intel (BTC) - Usando Coinbase
fetch('https://api.coinbase.com/v2/prices/BTC-EUR/spot')
    .then(r => r.json())
    .then(data => {
        // Coinbase devuelve el precio como un String dentro de data.amount
        const price = Math.round(parseFloat(data.data.amount));
        document.getElementById('btc-price').innerText = `BTC: ${price.toLocaleString()}€`;
    })
    .catch(() => document.getElementById('btc-price').innerText = "1 BTC = OFFLINE");

// Generador de Secuencias
const btn = document.getElementById('generate');
const display = document.getElementById('pass-display');

btn.addEventListener('click', () => {
    const length = parseInt(document.getElementById('length-slider').value);
    const charset = {
        upper: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz',
        lower: 'abcdefghijklmnñopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '@#$%^&*()_+~`|}{[]:;><,./-=¬\^"°¿?¡!',
        cyrillic: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя',
        chinese: '的一是在不了有和人这中大来上国我到说们为子和地道出也得里后自以会',
        japanese: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    };
    
    let allowedChars = charset.lower;
    if(document.getElementById('inc-upper').checked) allowedChars += charset.upper;
    if(document.getElementById('inc-numbers').checked) allowedChars += charset.numbers;
    if(document.getElementById('inc-symbols').checked) allowedChars += charset.symbols;
    if(document.getElementById('inc-cyrillic').checked) allowedChars += charset.cyrillic;
    if(document.getElementById('inc-chinese').checked) allowedChars += charset.chinese;
    if(document.getElementById('inc-japanese').checked) allowedChars += charset.japanese;

    const charArray = Array.from(allowedChars); // Manejo seguro de Unicode [cite: 11]
    const randomBuffer = new Uint32Array(length);
    window.crypto.getRandomValues(randomBuffer); // Entropía máxima [cite: 2, 23]
    
    let password = "";
    for(let i = 0; i < length; i++) {
        password += charArray[randomBuffer[i] % charArray.length];
    }

    display.innerText = password;
    navigator.clipboard.writeText(password);
    
    const originalText = btn.innerText;
    btn.innerText = "COPIADO AL PORTAPAPELES";
    btn.style.background = "#00ff41";
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = "";
    }, 1500);
});

document.getElementById('length-slider').oninput = function() {
    document.getElementById('length-val').innerText = this.value;
};