window.onload = function() {

    const divpergunta = document.getElementById("perguntas")
    const nome = document.getElementById("nome");
    let select = document.querySelector("select");
    let paragrafo = document.createElement("p");
    

    function duvidas() {
    
    divpergunta.appendChild(paragrafo);
    const pergunta = select.value;  
    if (nome.value === ""){
        paragrafo.textContent = "Digite seu nome, dúvida e click em enviar"; 
    }else if (pergunta === 'p1') {
        paragrafo.textContent = `Não se preocupe ${nome.value}, a depilação feita de maneira correta por profissional da área e produtos de qualidade, não causa danos a pele, e aqui no nosso espaço cuidamos para te fornecer um procedimento de qualidade.`;
    }else if (pergunta === 'p2') {
        paragrafo.textContent = `${nome.value}, vejo que está com dúvidas sobre a dor na depilação com cera, bom deixa eu te explicar um pouquinho: A dor é relativa de pessoa para pessoa, e depende da sensibilidade de cada uma, muitas  clientes não sentem nada, outras sentem um incomodo mas é suportável.`;
    }else if (pergunta === 'p3') {
        paragrafo.textContent = `${nome.value}, essa é uma dúvida bem comum, o design de sobrancelha vai levar em consideração toda a estrutura do seu rosto, e moldar sua sobrancelha da maneira mais harmoniosa possível.`;
    }else if (pergunta === 'p4') {
        paragrafo.textContent = `O resultado é incrível, mas não é definitivo, dura em média de seis meses a um ano, depende do tipo de pele e dos cuidados após o procedimento, que eu explico direitinho pra você. Então ${nome.value}, está esperando o que pra marcar a sua micropigmentação? Aproveita que está em promoção!`;
    }else {
        paragrafo.textContent = "";
    }


    
}

const botao = document.getElementById("btenviar");
botao.onclick = duvidas;

}
