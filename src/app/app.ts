import { CommonModule, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project');

  tools = [
    {
      texto: 'Cobertura nacional.'
    },
    {
      texto: 'Atendimento 24h.'
    },
    {
      texto: 'Planos funerais acessíveis.'
    },

  ]

  card = [
    {
      number: 1,
      titulo: 'Sem custo, nem esquentação de cabeça',
      texto: 'Cuidamos de todas as despesas funerais e processos burocráticos, para que sua família não precise se preocupar.'
    },
    {
      number: 2,
      titulo: 'Atendimento 24h',
      texto: 'Estamos disponíveis o tempo todo, em qualquer dia da semana, com uma equipe acolhedora e preparada para ajudar.'
    },
    {
      number: 3,
      titulo: 'Cobertura nacional',
      texto: 'Conte com suporte em qualquer lugar do Brasil, garantindo tranquilidade e segurança onde quer que você esteja.'
    },
    {
      number: 4,
      titulo: 'Clube de Vantagens',
      texto: 'Mais de 30 mil estabelecimentos com descontos exclusivos e telemedicina gratuita para cuidar da sua saúde e bem-estar.'
    },
  ]

  cardsRecomendacao = [
    {
      img: 'ana-lucia.png',
      nome: 'Ana Lúcia, 53 anos',
      texto: '“Perder meu pai foi muito difícil, mas o atendimento da Continental Pax fez toda diferença. Eles resolveram tudo com rapidez e empatia. Sou muito grata.”'
    },
    {
      img: 'paulo-henrique.png',
      nome: 'Paulo Henrique, 59 anos',
      texto: '“Fiz o plano pensando na minha família, pra não deixar preocupações quando eu me for. Hoje tenho tranquilidade sabendo que tudo está organizado.”'
    },
    {
      img: 'maria.png',
      nome: 'Maria das Dores, 62 anos',
      texto: '“No momento mais difícil da minha vida, fui tratada com muito carinho e respeito. A equipe cuidou de tudo e eu pude me despedir em paz.”'
    },
    {
      img: 'jose.png',
      nome: 'José Carlos, 47 anos',
      texto: '“Achei que um plano funeral fosse caro, mas as parcelas são bem acessíveis. Recomendo pra todo mundo.”'
    },
  ]

  expansivePanel = [
    {
      titulo: 'O que é um plano funeral?',
      texto: 'É um serviço que garante toda a assistência necessária no momento do falecimento, desde o atendimento 24h até a organização do velório, sepultamento e parte burocrática. Assim, sua família não precisa se preocupar nem gastar de última hora.',
      aberto: true
    },
    {
      aberto: false,
      titulo: 'Posso incluir meus familiares no plano?',
      texto: 'Sim, inclusive não familiares'
    },
    {
      titulo: 'Quanto custa por mês?',
      aberto: false,
      texto: `
      O valor varia de acordo com as ideias e com o número de participantes do plano. Fale com nossa equipe para saber mais detalhes.`
    },
    {
      titulo: 'O atendimento é só na minha cidade?',
      aberto: false,
      texto: 'Atendemos em todo o Brasil e sepultamos no seu munícipio de residência; '
    },
    {
      titulo: 'Como faço para contratar o plano?',
      aberto: false,
      texto: 'É simples e fácil, precisamos de apenas algumas informações básicas sua.'
    }
  ]

  clickExpansivePanel(item: any) {
    this.expansivePanel.forEach(panel => panel.aberto = false);

    item.aberto = !item.aberto;
  }

}
