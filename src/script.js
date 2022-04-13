// Recebendo as Variáveis.
let str = 5;
let dex = 5;
let vit = 5;
let int = 5;
let wis = 5;
let lck = 5;

//Processando as variáveis.
let calcHp = 100 + (vit * 50);
let calcMp = 50 + (int * 25);
let calcRegenHp = (calcHp * str) / 1000;
let calcRegenMp = (calcMp * wis) / 1000;
let calcTempRegenHp = calcHp / calcRegenHp;
let calcTempRegenMp = calcMp / calcRegenMp;

//Mostrando o Resultado.
console.log(calcHp);
console.log(calcRegenHp);
console.log(calcTempRegenHp + 'min');
console.log('');
console.log(calcMp);
console.log(calcRegenMp);
console.log(calcTempRegenMp + 'min');