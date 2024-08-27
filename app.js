const textoingreso = document.querySelector('#textoingreso');  
const textoencrip = document.querySelector('#textoEncrip'); 
  
const encriptar = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat"
};

const desencriptar = {
  "ai": "a",
  "enter": "e",
  "imes": "i",
  "ober": "o",
  "ufat": "u"
};

const encryptText = (text) => {
  return text.replace(/[aeiou]/g, (match) => encriptar[match]);
};

const decryptText = (text) => {
  return text.replace(/ai|enter|imes|ober|ufat/g, (match) => desencriptar[match]);
};

const copiarTexto = () => {
  navigator.clipboard.writeText(textoencrip.value)
    .then(() => alert('Texto copiado'))
    .catch(err => console.error('error: ', err));
};


document.querySelector('.btn[onclick*="Encriptar"]').addEventListener('click', () => {
  const textoEncriptado = encryptText(textoingreso.value);
  textoencrip.value = textoEncriptado;
  document.getElementById("btnCopiar").style.display = "block";
});

document.querySelector('.btn[onclick*="Desencriptar"]').addEventListener('click', () => {
  const textoDesencriptado = decryptText(textoingreso.value);
  textoencrip.value = textoDesencriptado;
});
document.querySelector('.btnCopiar[onclick*="copiarTexto"]').addEventListener('click', copiarTexto);