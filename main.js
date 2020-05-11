const name = "Paulina";
const age = 29;

console.log(name);
console.log(`Cześć! Nazywam się ${name} i mam ${age} lat.`);

// alert("Siema! To jest bardzo wkurzający modal - nie używaj go w ten sposób ;)");

const header = document.querySelector('.span__js');

console.log(header);

header.innerHTML = 'Olaboga!';

const empty = document.querySelector('.empty-element__js');

empty.innerHTML = '<span class="pink">Już nie taki pusty element.</span>';

