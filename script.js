// 1. GENERADOR PASSGEN
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
document.getElementById('gen-btn').addEventListener('click', () => {
    let password = Array.from({length: 16}, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    document.getElementById('pass-output').value = password;
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const output = document.getElementById('pass-output');
    if(!output.value) return;
    navigator.clipboard.writeText(output.value);
    const originalText = document.getElementById('copy-btn').innerText;
    document.getElementById('copy-btn').innerText = "COPIADO";
    setTimeout(() => document.getElementById('copy-btn').innerText = originalText, 1500);
});

// 2. RELOJ Y CALENDARIO
function updateClock() {
    const now = new Date();
    document.getElementById('main-clock').innerText = now.toLocaleTimeString('es-CO', {hour12: false});
    document.getElementById('bajas').innerText = String(now.getDate()).padStart(2, '0');
    document.getElementById('muertes').innerText = String(now.getMonth() + 1).padStart(2, '0');
}
setInterval(updateClock, 1000);
updateClock();

// 3. API: CLIMA (Open-Meteo - Libre)
navigator.geolocation.getCurrentPosition(async (pos) => {
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&current_weather=true`);
        const data = await res.json();
        document.getElementById('temp').innerText = `${Math.round(data.current_weather.temperature)}°C`;
        document.getElementById('loc').innerText = "HQ_LINK_ESTABLISHED";
    } catch(e) { document.getElementById('loc').innerText = "RADAR_OFFLINE"; }
}, () => document.getElementById('loc').innerText = "GPS_OFF");

// 4. API: IP PÚBLICA (Ipify - Libre)
fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => document.getElementById('ip-display').innerText = data.ip);

// 5. API: FRASES TECNOLOGÍA (Consejos/Quotes - Libre)
const quotes = [
    "Kaizen: la mejora continua es mejor que la perfección tardía.",
    "Seguridad informática: el eslabón más débil es siempre el humano.",
    "IA no reemplaza humanos, humanos con IA reemplazan a otros.",
    "Opportunities for Resource Building Networks Globally."
];
document.getElementById('quote-api').innerText = quotes[Math.floor(Math.random() * quotes.length)];

// 6. INTERACTIVIDAD DE BOTONES
document.querySelectorAll('.streak').forEach(s => {
    s.addEventListener('click', () => {
        const url = s.getAttribute('data-url');
        if(url !== "#") window.open(url, '_blank');
    });
});

// REMOVER LOADER
window.onload = () => setTimeout(() => {
    const loader = document.getElementById('loading-screen');
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 500);
}, 1000);