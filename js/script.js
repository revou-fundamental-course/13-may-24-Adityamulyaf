// ini js

let isKelilingVisible = false; // yang keluar luas
function luasShow() {
    document.getElementById("keliling-section").style.display = "none";
    document.getElementById("luas-section").style.display = "block";
}

let isLuasVisible = false; // yang keluar keliling
function kelilingShow() {
    document.getElementById("luas-section").style.display = "none";
    document.getElementById("keliling-section").style.display = "block";
}

function hitungKeliling () { // menghitung keliling
    let sisiA = parseFloat(document.getElementById('sisi-a-input').value);
    let sisiB = parseFloat(document.getElementById('sisi-b-input').value);
    let sisiC = parseFloat(document.getElementById('sisi-c-input').value);

    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) { // validasi
        alert('Diisi semua dulu dong....');
        return;
    }
    
    let keliling = sisiA + sisiB + sisiC;

    document.getElementById('output-sisi-a').innerText = "Sisi a: " + sisiA;
    document.getElementById('output-sisi-b').innerText = "Sisi b: " + sisiB;
    document.getElementById('output-sisi-c').innerText = "Sisi c: " + sisiC;
    document.getElementById('output-rumus-keliling').innerText = `K = ${sisiA} + ${sisiB} + ${sisiC} = ${keliling}`;;
    document.getElementById('output-keliling').innerText = "Jadi, keliling segitiga adalah " + keliling;
}

function ulangKeliling() { // mereset keliling
    document.getElementById('sisi-a-input').value = '';
    document.getElementById('sisi-b-input').value = '';
    document.getElementById('sisi-c-input').value = '';

    document.getElementById('output-sisi-a').innerText = '';
    document.getElementById('output-sisi-b').innerText = '';
    document.getElementById('output-sisi-c').innerText = '';

    document.getElementById('output-rumus-keliling').innerText = '';
    document.getElementById('output-keliling').innerText = '';

}

function hitungLuas () { // menghitung luas
    let alas = parseFloat(document.getElementById('alas-input').value);
    let tinggi = parseFloat(document.getElementById('tinggi-input').value);

    if (isNaN(alas) || isNaN(tinggi)){ // validasi
        alert('Diisi semua dulu dong....');
        return;
    }

    let luas = 0.5 * alas * tinggi;

    document.getElementById('output-alas').innerText = "Panjang Alas: " + alas;
    document.getElementById('output-tinggi').innerText = "Tinggi: " + tinggi;
    document.getElementById('output-rumus-luas').innerText = `L = 1/2 × ${alas} × ${tinggi} = ${luas}`;
    document.getElementById('output-luas').innerText = "Jadi, luas segitiga adalah " + luas;
}

function ulangLuas() { //mereset luas
    document.getElementById('alas-input').value = '';
    document.getElementById('tinggi-input').value = '';

    document.getElementById('output-alas').innerText = '';
    document.getElementById('output-tinggi').innerText = '';

    document.getElementById('output-rumus-luas').innerText = '';
    document.getElementById('output-luas').innerText = '';
}


