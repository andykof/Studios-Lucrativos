/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Property, FaqItem } from './types';

export interface Author {
  role: string;
  name: string;
  image: string;
  description: string;
}

export interface LazerUnit {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
}

export interface PlantaPlan {
  size: string;
  title: string;
  suites: string;
  vagas: string;
  kitchenType: string;
  description: string;
  features: string[];
  image?: string;
}

export const PROPERTIES: Property[] = [
  {
    id: 'uniko',
    title: 'UNIKO Vila Olímpia (Kazzas)',
    tagline: 'Sua Máquina de Dividendos no Quadrilátero de Ouro de SP',
    neighborhood: 'Vila Olímpia',
    shortDescription: 'Studios ultra-modernos planejados especificamente para locação por temporada ou Airbnb. Uma oportunidade rara de possuir um pedaço do quadrilátero financeiro mais cobiçado da Faria Lima/Vila Olímpia com fluxo de pagamento imbatível de obras.',
    longDescription: 'O UNIKO foi milimetricamente desenhado pela Kazzas para capturar a altíssima demanda corporativa das maiores empresas de tecnologia, consultoria e bancos de investimento de São Paulo. Com áreas comuns de altíssima atratividade para nômades digitais e executivos de curta temporada, é o ativo definitivo para o rentista moderno.',
    sizeRange: '24 m² a 29 m²',
    highlights: [
      'Investimento a partir de R$ 275k facilitados',
      'Localização estratégica no coração da Vila Olímpia',
      'Liberdade total de gestão: escolha sua administradora de preferência',
      'Infraestrutura moderna para nômades digitais com coworking bento-style',
      'Isolamento acústico de ponta de acordo com padrões internacionais'
    ],
    features: [
      {
        icon: 'Layout',
        title: 'Estúdio Otimizado',
        description: 'Todo centímetro planejado para maximizar a percepção de amplitude, essencial para elevar os ratings de check-in e tarifas diárias no Airbnb.'
      },
      {
        icon: 'Activity',
        title: 'Rendimento Corporativo',
        description: 'Posicionado ao lado de conglomerados tech da Berrini e Faria Lima. Deixe o aluguel cobrir o financiamento para você.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    whatsappText: 'Olá! Gostaria de receber a simulação de payback para o UNIKO Vila Olímpia. Tenho interesse no fluxo de entrada e fluxo do investidor.'
  },
  {
    id: 'verus',
    title: 'VERUS Mackenzie (Verus Incorporadora)',
    tagline: 'Distorção Matemática do m² Mais Barato da Região Central',
    neighborhood: 'Higienópolis / Consolação',
    shortDescription: 'O m² mais barato de Higienópolis e Mackenzie: apenas R$ 13.900/m² em uma das microrregiões de maior demanda estudantil de alta renda e vacância zero de São Paulo.',
    longDescription: 'O VERUS Mackenzie se destaca pela matemática indiscutível: custo por metro quadrado abaixo do padrão tradicional de Higienópolis aliado a uma população acadêmica do Mackenzie e FAAP de alto poder aquisitivo em busca contínua de studios modernos e confortáveis a passos do campus.',
    sizeRange: '20 m² a 35 m²',
    highlights: [
      'Custo do m² fixado em R$ 13.900 - uma clara distorção comercial',
      'A apenas 3 minutos a pé do metrô Higienópolis-Mackenzie',
      'Polo estudantil com histórico de vacância recorde e sem concorrência direta',
      'Ideal para investidores analíticos que valorizam o custo real do ativo',
      'Dupla utilidade: moradia para filhos universitários ou investimento de alta liquidez'
    ],
    features: [
      {
        icon: 'Sparkles',
        title: 'Zero Vacância Histórica',
        description: 'Demanda contínua alimentada por mais de 50.000 estudantes e profissionais médicos de Higienópolis, garantindo ocupação o ano todo.'
      },
      {
        icon: 'Award',
        title: 'Arbitragem Matemática',
        description: 'Compra segura com preço por m² fora da curva de SP. Margem de valorização superior já na entrega das chaves.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
    ],
    whatsappText: 'Olá! Gostaria de falar com o corretor VIP sobre o VERUS Mackenzie. Qual o desconto ou fluxo exclusivo para pagamento à vista ou na compra de 2 unidades?'
  }
];

export const AUTHORS: Author[] = [
  {
    role: 'VILA OLÍMPIA',
    name: 'Quadrilátero Corporativo',
    image: 'https://blintz-properties-sandbox.s3.amazonaws.com/65539eea33901a0b4c67d421/images/yYgWRH94xtKE6-AwqwXCt9dJxcVnN7sHxOR5VFXEID_XTJsE4jPjmtsGJwgJE1xVeLx2dG1GY4FTBy7etb8PXTovOs1uqg4vSA3nONBfAimNmnA=w1024-h768',
    description: 'A Vila Olímpia concentra gigantes globais como Google, BTG Pactual e Facebook. O fluxo incessante de executivos e consultores corporativos garante demanda ininterrupta durante os dias úteis.'
  },
  {
    role: 'HIGIENÓPOLIS',
    name: 'Ancoragem Estudantil',
    image: 'https://www.mackenzie.br/fileadmin/_processed_/1/f/csm_chamberlaim_83f12d9f76.jpg',
    description: 'A poucos passos da Universidade Mackenzie (mais de 40 mil alunos). Famílias exigentes de todo o Brasil alugam e financiam moradias compactas de alto padrão para seus filhos estudarem em SP.'
  },
  {
    role: 'VILA OLÍMPIA',
    name: 'Hub de Negócios e Eventos',
    image: 'https://www.aceleravarejo.com.br/wp-content/uploads/2025/12/Copia-de-DJI-0150-2.jpg',
    description: 'Nômades digitais e executivos buscam o coração financeiro. A proximidade a shoppings de alta renda (JK Iguatemi, Vila Olímpia) atrai inquilinos dispostos a pagar diárias premium no short stay.'
  },
  {
    role: 'HIGIENÓPOLIS',
    name: 'Polo de Saúde e Hospitais',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3AZnvzYP_CKYrDpRsL1g_iUsWDdXoaqCZg&s',
    description: 'Cercado por grandes hospitais como Sabará, Santa Casa de Misericórdia e Samaritano. Médicos residentes, pesquisadores e pacientes geram ocupação robusta com baixíssima oscilação.'
  },
  {
    role: 'MICROZONAS EM SP',
    name: 'Escassez Crítica de Terrenos',
    image: 'https://noticias.esquemaimoveis.com.br/wp-content/uploads/2022/04/materia1.jpg',
    description: 'A falta crônica de terrenos disponíveis tanto em Higienópolis quanto na Vila Olímpia blinda o investidor de supersaturação de imóveis, garantindo valorização patrimonial perpétua.'
  }
];

export const LAZER_UNITS: LazerUnit[] = [
  {
    id: 'gestao-automatico',
    title: 'PILOTO AUTOMÁTICO (ADMINISTRAÇÃO LIVRE)',
    tagline: 'Sua Gestão de Aluguel Sem Telefonemas ou Burocracia',
    description: 'Com total liberdade de mercado, você escolhe qual empresa especializada deseja contratar. Elas gerenciam sua página de anúncios, otimizam as tarifas diárias de acordo com a demanda em SP e cuidam da governança, entregando os dividendos direto na sua conta.',
    image: 'https://kasa.com.br/wp-content/uploads/2020/02/cropped-melhores-bairros-sp-investir-1024x576.jpg',
    badge: 'Short Stay Profissional'
  },
  {
    id: 'uniko-infra',
    title: 'ATRAÇÃO CORPORATIVA NA VILA OLÍMPIA',
    tagline: 'Invista R$ 275k na Vila Olímpia com Alta Demanda de Negócios',
    description: 'Estrategicamente posicionada no ecossistema financeiro e tech da Faria Lima/Berrini. O UNIKO oferece infraestrutura de coliving de alto nível, coworking silencioso bento-box, academia de musculação equipada e lavanderia por app, atraindo executivos dispostos a pagar tarifas premium por estadias.',
    image: 'https://images.unsplash.com/photo-1545231027-63bab3f16b37?auto=format&fit=crop&w=1200&q=80',
    badge: 'UNIKO Vila Olímpia'
  },
  {
    id: 'verus-infra',
    title: 'O M² DE R$ 13.900 EM HIGIENÓPOLIS/CONSOLAÇÃO',
    tagline: 'Fora de Qualquer Lógica Histórica da Zona Central de SP',
    description: 'Arbítrio financeiro puro para o Rentista Serial. O VERUS Mackenzie está situado no quadrilátero de ouro de Higienópolis, a passos da Universidade Mackenzie e do metrô. Um endereço onde a vacância de calouros e médicos residentes é historicamente inexistente há mais de 3 décadas.',
    image: 'https://tpaempreendimentos.com.br/blog/wp-content/uploads/2022/02/concolacao-5-1024x683.jpg',
    badge: 'VERUS Mackenzie'
  }
];

export const PLANTAS_DATA: PlantaPlan[] = [
  {
    size: 'Uniko 24m²',
    title: 'Planta Studio de 24m² com living do Uniko Vila Olímpia',
    suites: 'Concepção Lazer & Short Stay',
    vagas: 'Infraestrutura Otimizada Airbnb',
    kitchenType: 'Cozinha Americana Compacta',
    description: 'Layout otimizado com living integrado, varanda e marcenaria inteligente milimetricamente desenhada para garantir máxima sensação de amplitude e check-ins impecáveis de hóspedes nômades tech.',
    image: 'https://kazzas.com.br/wp-content/uploads/2025/08/KALLAS_CASA-DO-ATOR_PLANTA-TIPO-A_AMPLIADA_R04_LR.jpg',
    features: [
      'Entrada por biometria e fechadura digital inteligente',
      'Portas com borracha de vedação dupla contra ruídos',
      'Copa/Cozinha integrada para preparação rápida de refeições',
      'Previsão de ar-condicionado silencioso de alta potência'
    ]
  },
  {
    size: 'Uniko 29m²',
    title: 'Planta Studio de 29m² com living do Uniko Vila Olímpia',
    suites: 'Studio Inteligente & Living de Estar',
    vagas: 'Máximo fluxo de aluguel short stay',
    kitchenType: 'Cozinha Linear Funcional',
    description: 'Uma das tipologias mais nobres do empreendimento, com excelente aproveitamento de ventilação cobiçada do ar livre para hóspedes de estadias médias, agregando valor e ticket médio diário.',
    image: 'https://kazzas.com.br/wp-content/uploads/2025/08/KALLAS_CASA-DO-ATOR_PLANTA-TIPO-B_AMPLIADA_R04_LR.jpg',
    features: [
      'Entrada por biometria e fechadura híbrida ultra-segura',
      'Bancada estendida em quartzo branco na cozinha linear',
      'Varanda social com fechamento em vidro acústico aprovado',
      'Ponto elétrico extra para adega compacta ou frigobar de luxo'
    ]
  },
  {
    size: 'Verus 24m²',
    title: 'Planta Studio de 24m² para o Verus Mackenzie',
    suites: '1 Suíte Integrada com Varanda',
    vagas: 'Isenção de vaga para maior economia de condomínio',
    kitchenType: 'Cozinha com Bancada Otimizada',
    description: 'Planta projetada para acomodar com altíssima eficiência um estudante, médico residente ou pesquisador nas redondezas de Higienópolis. Ampla iluminação natural e excelente setorização interna.',
    image: 'https://drive.google.com/thumbnail?id=1FyMZTEAKxTGDBon5otYm2wXvBPpCFeMI&sz=w1000',
    features: [
      'Ralos lineares e metais alemães com acionamento suave',
      'Janelas antirruído de padrão construtivo superior',
      'Piso nivelado da varanda para ampliação do living room',
      'Automação de interruptores integrada via Alexa instalada'
    ]
  }
];

export const DECORADOS_PHOTOS = [
  {
    url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    caption: 'Conceito de Studio Moderno com divisória de marcenaria inteligente integrada — Projeto Decorado de Short Stay'
  },
  {
    url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    caption: 'Cozinha americana planejada com iluminação em fitas de LED — Otimização de espaço para Airbnb premium'
  },
  {
    url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    caption: 'Dormitório acolhedor integrado à varanda — Foco nas fotos e no apelo estético para check-ins instantâneos'
  },
  {
    url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    caption: 'Banheiro moderno em tons minerais escuros — Sensação de hotelaria 5 estrelas para atrair executivos'
  }
];

export const TECHNICAL_SHEETS = [
  {
    category: 'VILA OLÍMPIA - DETALHES DE ENTRADA UNIKO',
    items: [
      'Incorporadora e Execução: Kazzas / Grupo Kallas (Mais de 40 anos de solidez).',
      'Investimento Descomplicado: Studio a partir de R$ 275k, ideal para blindagem de capital e fuga de inflação.',
      'Configuração do Empreendimento: Torre única, com lobby suntuoso, coliving de alta cooperação, coworking bento-box.',
      'Gestão em Short-Stay Livre: Flexibilidade total para contratar o administrador profissional de sua inteira preferência.'
    ]
  },
  {
    category: 'MACKENZIE HIGIENÓPOLIS - MATEMÁTICA VERUS',
    items: [
      'Distorção Comercial Registrada: m² fixado em R$ 13.900/m² de partida de pré-lançamento.',
      'Proximidade do Metrô: Apenas 3 minutos de caminhada da Estação Metrô Higienópolis-Mackenzie.',
      'Demanda Universitária: Cerca de 50.000 calouros rotativos a cada 6 meses procurando moradia compacta de qualidade.',
      'Custo Condominial Otimizado: Planta sem vaga e infraestrutura de alta eficiência energética para manter taxa de condomínio baixa.'
    ]
  },
  {
    category: 'OPÇÕES DE GESTÃO AUTOMATIZADA AIRBNB',
    items: [
      'Autonomia de Plataforma: Envie a chave virtual do estúdio diretamente ao hóspede via fechadura com QR Code.',
      'Seu gestor contratado cuida de toda a governança, vistorias de saída dos hóspedes e trocas de enxoval.',
      'Estratégia de Precificação Livre: Ajuste diário de diárias conforme grandes shows na Arena Allianz ou reuniões corporativas.',
      'Rentabilidade Potencial: Aproveite a força do aluguel de curta temporada nas áreas de maior dinamismo e escassez de SP.'
    ]
  },
  {
    category: 'TECNOLOGIA DE DESEMPENHO ATIVO',
    items: [
      'Manta com isolamento acústico superior no contrapiso reduzindo ruídos entre pavimentos de stúdios.',
      'Infraestrutura para aquecedores a gás, chuveiros com alta pressão e monocomando de grande elegância.',
      'Áreas comuns prontas com infra de gerador de energia que atende 100% das fechaduras eletrônicas e elevadores sociais.',
      'Portaria mista inteligente com reconhecimento facial para hóspedes e nômades de curta duração.'
    ]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'rentabilidade-rendafixa',
    question: 'Por que investir em estúdios compactos em SP é melhor que a renda fixa pós-impostos?',
    answer: 'A renda fixa tradicional atual sofre com impostos regressivos de até 22,5% e inflação real de serviços. Os estúdios geridos de forma independente ou por administradoras eleitas pelo proprietário em polos de vacância zero (Vila Olímpia e Mackenzie) oferecem retorno expressivo por diárias hoteleiras, além de reter o ativo de tijolo de altíssima liquidez com real valorização de SP.'
  },
  {
    id: 'como-funciona-gestao',
    question: 'Eu preciso me preocupar com check-in, anúncios ou chaves do Airbnb?',
    answer: 'NÃO. Você pode comissionar a administradora imobiliária de sua inteira confiança para gerenciar o estúdio de forma 100% passiva. Elas cuidam das fotos, listam o imóvel no Airbnb e Booking, respondem hóspedes no app, efetuam a governança completa e a limpeza do imóvel, depositando o valor líquido do aluguel diretamente na sua conta corrente todos os meses.'
  },
  {
    id: 'distorcao-verus',
    question: 'Por que o m² do VERUS Mackenzie a R$ 13.900/m² é chamado de distorção matemática?',
    answer: 'A Consolação, em sua microrregião de Higienópolis e entorno direto do Mackenzie, possui um valor de metro quadrado médio para novos lançamentos compacto variando entre R$ 17.500 e R$ 22.000/m². O VERUS Mackenzie a R$ 13.900/m² representa um gap brutal de mercado que gera lucro imediato para o investidor rentista que adquire sua unidade na fase preliminar de pré-lançamento.'
  },
  {
    id: 'fluxo-uniko-275k',
    question: 'Como funciona o ticket de R$ 275k do UNIKO Vila Olímpia?',
    answer: 'A Kazzas preparou um ticket de entrada acessível com fluxo de obras adaptado para o investidor de renda passiva. Você adquire a unidade com parcelas leves durante o período de construção e, ao receber as chaves, financia o saldo residual que será pago pelo fluxo orgânico contínuo das hospedagens de executivos da Faria Lima/Berrini.'
  },
  {
    id: 'anti-familia',
    question: 'Esses projetos são recomendados para moradia de famílias tradicionais com filhos?',
    answer: 'Estes projetos têm as plantas compostas 100% por studios e apartamentos compactos inteligentes, planejados especificamente para obter o maior retorno de caixa por metro quadrado. Não incluímos plantas familiares grandes a fim de manter o foco total de rentabilidade em aluguel Short Stay (Airbnb e locação por temporada), aproveitando a inesgotável demanda corporativa da Vila Olímpia e estudantil de Higienópolis.'
  }
];
