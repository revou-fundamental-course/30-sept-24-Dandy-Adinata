// Fungsi konversi dari Celsius ke Fahrenheit
function convert() {
    let celsius = document.getElementById('celsius').value;
    if (celsius === "") {
        alert("Masukkan nilai suhu Celsius!");
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('calculation').innerHTML = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

// Fungsi reset input dan hasil
function reset() {
    document.getElementById('celsius').value = "";
    document.getElementById('fahrenheit').value = "";
    document.getElementById('calculation').innerHTML = "";
}

// Fungsi konversi dari Fahrenheit ke Celsius
function reverse() {
    let fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit === "") {
        alert("Masukkan nilai suhu Fahrenheit!");
        return;
    }
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius').value = celsius.toFixed(2);
    document.getElementById('calculation').innerHTML = `${fahrenheit}°F - 32 * 5/9 = ${celsius.toFixed(2)}°C`;
}

// Menambahkan event listener ke tombol-tombol
document.getElementById('convertBtn').addEventListener('click', convert);
document.getElementById('resetBtn').addEventListener('click', reset);
document.getElementById('reverseBtn').addEventListener('click', reverse);
