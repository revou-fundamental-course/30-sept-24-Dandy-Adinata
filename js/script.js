let isCelsiusToFahrenheit = true; // Variable to check conversion mode

// Fungsi konversi dari Celsius ke Fahrenheit
function convert() {
    if (isCelsiusToFahrenheit) {
        let celsius = document.getElementById('celsius').value;
        if (celsius === "") {
            alert("Masukkan nilai suhu Celsius!");
            return;
        }
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('calculation').innerHTML = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else {
        let fahrenheit = document.getElementById('celsius').value;
        if (fahrenheit === "") {
            alert("Masukkan nilai suhu Fahrenheit!");
            return;
        }
        let celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('fahrenheit').value = celsius.toFixed(2);
        document.getElementById('calculation').innerHTML = `${fahrenheit}°F - 32 * 5/9 = ${celsius.toFixed(2)}°C`;
    }
}

// Fungsi reset input dan hasil
function reset() {
    document.getElementById('celsius').value = "";
    document.getElementById('fahrenheit').value = "";
    document.getElementById('calculation').innerHTML = "";
}

// Fungsi reverse mode
function reverse() {
    isCelsiusToFahrenheit = !isCelsiusToFahrenheit; // Toggle the conversion mode

    // Swap labels and placeholders
    if (isCelsiusToFahrenheit) {
        document.getElementById('labelInput').innerText = "Celsius (°C):";
        document.getElementById('labelOutput').innerText = "Fahrenheit (°F):";
        document.getElementById('celsius').placeholder = "Masukkan suhu Celsius";
    } else {
        document.getElementById('labelInput').innerText = "Fahrenheit (°F):";
        document.getElementById('labelOutput').innerText = "Celsius (°C):";
        document.getElementById('celsius').placeholder = "Masukkan suhu Fahrenheit";
    }

    // Clear the input and output when reversing the conversion mode
    reset();
}

// Menambahkan event listener ke tombol-tombol
document.getElementById('convertBtn').addEventListener('click', convert);
document.getElementById('resetBtn').addEventListener('click', reset);
document.getElementById('reverseBtn').addEventListener('click', reverse);
