const perguntas = [
    {
      pergunta: "Quando foi lançado Dark Souls 1 ?",
      respostas: [
        "24 de março de 2016",
        "30 de abril de 2018",
        "22 de setembro de 2011",
      ],
      correta: 2
    },
    {
      pergunta: "Complete a frase: Artorias do ?",
      respostas: [
        "Silêncio",
        "Abismo",
        "Crepúsculo",
      ],
      correta: 1
    },
    {
      pergunta: "Dark souls 2 tem quantos finais ?",
      respostas: [
        "3",
        "1",
        "2",
      ],
      correta: 0
    },
    {
      pergunta: "Yhorm o: ?",
      respostas: [
        "Gigante",
        "Dancarino",
        "Malfeitor",
      ],
      correta: 0
    },
    {
      pergunta: "Qual o nome do último chefe de Dark souls 2 ?",
      respostas: [
        "The Rotten",
        "Ruin Sentinels",
        "Aldia, Scholar of the First Sin",
      ],
      correta: 2
    },
    {
      pergunta: "Qual anel que recupera stamina ?",
      respostas: [
        "Favor",
        "Chloranthy",
        "Flynn",
      ],
      correta: 1
    },
    {
      pergunta: "O mago que ensina magia em Dark Souls 1 e: ?",
      respostas: [
        "Vince of Thorolund",
        "Darkstalker Kaathe",
        "Big Hat Logan",
      ],
      correta: 2
    },
     {
      pergunta: "Qual o nome do final secreto de Dark souls 3 ?",
      respostas: [
        "O fim da era do fogo alternativo",
        "O fim da era do fogo",
        "A usurpação do fogo",
      ],
      correta: 0
    },
     {
      pergunta: "Quem era o rei em Dark souls 2 ?",
      respostas: [
        "Fume Knight",
        "Vendrick",
        "Looking Glass Knight",
      ],
      correta: 1
    },
     {
      pergunta: "Quantos pactos existe em Dark souls 1?",
      respostas: [
        "7",
        "15",
        "9",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  //laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }  
    quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }