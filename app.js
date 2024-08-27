const textArea = document.querySelector('#textoingreso');  // Selección de los elementos usando querySelector
const resultArea = document.querySelector('#resultado'); // entradas y salidas linea 1 y2
  
const encryptionMap = {// Encriptacion y desencriptacion
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat"
};

const decryptionMap = {
  "ai": "a",
  "enter": "e",
  "imes": "i",
  "ober": "o",
  "ufat": "u"
};

const encryptText = (text) => {// lineas para encriptar y desencripta 21 a 27
  return text.replace(/[aeiou]/g, (match) => encryptionMap[match]);
};

const decryptText = (text) => {
  return text.replace(/ai|enter|imes|ober|ufat/g, (match) => decryptionMap[match]);
};

const copiarContenido = () => {// Función para copiar,pegar y borrar lineas 37 a 51
  navigator.clipboard.writeText(resultArea.value)
    .then(() => alert('Tu texto fue copiado'))
    .catch(err => console.error('No pude compiar tu texto T_T: ', err));
};


document.querySelector('.btn[onclick*="Encriptar"]').addEventListener('click', () => {
  const textoEncriptado = encryptText(textArea.value);
  resultArea.value = textoEncriptado;
  document.getElementById("btnCopiar").style.display = "block";
});
document.querySelector('.btn[onclick*="Desencriptar"]').addEventListener('click', () => {
  const textoDesencriptado = decryptText(textArea.value);
  resultArea.value = textoDesencriptado;
});
document.querySelector('.btnCopiar[onclick*="copiarContenido"]').addEventListener('click', copiarContenido);