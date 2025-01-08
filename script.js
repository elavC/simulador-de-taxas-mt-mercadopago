// CALCULO PARA TAXAS DE VISA E MASTER
let receber = document.getElementById('receber');
const sendBtn = document.getElementById('sendBtn');


const n0 = document.getElementById('n0');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const n6 = document.getElementById('n6');
const n7 = document.getElementById('n7');
const n8 = document.getElementById('n8');
const n9 = document.getElementById('n9');
const n10 = document.getElementById('n10');
const n11 = document.getElementById('n11');
const n12 = document.getElementById('n12');

const p0 = document.getElementById('p0');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const p7 = document.getElementById('p7');
const p8 = document.getElementById('p8');
const p9 = document.getElementById('p9');
const p10 = document.getElementById('p10');
const p11 = document.getElementById('p11');
const p12 = document.getElementById('p12');


function calcular () {
    let receberValor = parseFloat(receber.value);

    let value0 = receberValor * 100 / 97
    let value1 = receberValor * 100 / 97
    let value2 = receberValor * 100 / 95.3
    let value3 = receberValor * 100 / 94.55
    let value4 = receberValor * 100 / 93.8
    let value5 = receberValor * 100 / 93.05
    let value6 = receberValor * 100 / 92.3
    let value7 = receberValor * 100 / 91.3
    let value8 = receberValor * 100 / 90.55
    let value9 = receberValor * 100 / 89.8
    let value10 = receberValor * 100 / 89.05
    let value11 = receberValor * 100 / 88.3
    let value12 = receberValor * 100 / 87.55

    let parcela0 = "Não se aplica";
    let parcela1 = value1 / 1;
    let parcela2 = value2 / 2;
    let parcela3 = value3 / 3;
    let parcela4 = value4 / 4;
    let parcela5 = value5 / 5;
    let parcela6 = value6 / 6;
    let parcela7 = value7 / 7;
    let parcela8 = value8 / 8;
    let parcela9 = value9 / 9;
    let parcela10 = value10 / 10;
    let parcela11 = value11 / 11;
    let parcela12 = value12 / 12;

    n0.innerHTML = value0.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n1.innerHTML = value1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n2.innerHTML = value2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n3.innerHTML = value3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n4.innerHTML = value4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n5.innerHTML = value5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n6.innerHTML = value6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n7.innerHTML = value7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n8.innerHTML = value8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n9.innerHTML = value9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n10.innerHTML = value10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n11.innerHTML = value11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n12.innerHTML = value12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


    p0.innerHTML = parcela0.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p1.innerHTML = parcela1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p2.innerHTML = parcela2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p3.innerHTML = parcela3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p4.innerHTML = parcela4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p5.innerHTML = parcela5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p6.innerHTML = parcela6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p7.innerHTML = parcela7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p8.innerHTML = parcela8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p9.innerHTML = parcela9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p10.innerHTML = parcela10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p11.innerHTML = parcela11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p12.innerHTML = parcela12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

sendBtn.addEventListener('click', calcular)

// CALCULO PARA TAXAS DE VISA E MASTER
