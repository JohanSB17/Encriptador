const inputText = document.getElementById('input-text');
const outputText = document.getElementById('outputtext');
const encriptarBtn = document.getElementById('encriptar-btn');
const desencriptarBtn = document.getElementById('desencriptar-btn');
const copyBtn = document.getElementById('copy-btn');
const validarMensaje = document.getElementById('mensaje-validar');



// VALIDAR CARACTERES ASCII
function validar(text) {
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}

function encriptar() {
    let text = inputText.value;
    if (validar(text)) {
        let encryptedText = text.replace(/e/g, 'enter')
                                .replace(/i/g, 'imes')
                                .replace(/a/g, 'ai')
                                .replace(/o/g, 'ober')
                                .replace(/u/g, 'ufat');
        outputText.textContent = encryptedText;
        validarMensaje.textContent = '';
        copyBtn.style.display = 'block';
    } else {
        validarMensaje.textContent = 'Solo letras minúsculas sin acentos ni caracteres especiales.';
    }
}

function desencriptar() {
    let text = inputText.value;
    if (validar(text)) {
        let decryptedText = text.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');
        outputText.textContent = decryptedText;
        validarMensaje.textContent = '';
        copyBtn.style.display = 'block';
    } else {
        validarMensaje.textContent = 'Solo letras minúsculas sin acentos ni caracteres especiales.';
    }
}

function copiar() {
    navigator.clipboard.writeText(outputText.textContent);
    alert("Texto copiado al portapapeles");
}

// EVENTOS O ACCIONES DE LOS BOTONES
encriptarBtn.addEventListener('click', encriptar);
desencriptarBtn.addEventListener('click', desencriptar);
copyBtn.addEventListener('click', copiar);
