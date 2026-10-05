import { Tour, FaqItem, BlogPost } from '../types';
import logoImg from '../assets/images/logo.jpg';
import heroImg from '../assets/images/hero-schooner.jpg';
import deckImg from '../assets/images/tour-deck.jpg';
import coastalImg from '../assets/images/floripa-coastal.jpg';
import sunsetImg from '../assets/images/sunset-navigation.jpg';

export const COMPANY_INFO = {
  name: 'EU SOU FLORIPA',
  tagline: 'Passeios de Escuna em Florianópolis – SC',
  phoneDisplay: '(48) 98468-5643',
  phoneRaw: '5548984685643',
  whatsappBaseUrl: 'https://wa.me/5548984685643',
  defaultWhatsAppMessage: 'Olá! Quero saber mais sobre os passeios de escuna da EU SOU FLORIPA.',
  boardingLocation: '[INSERIR LOCAL DE EMBARQUE], Florianópolis – SC',
  socialLinks: {
    instagram: '#[INSERIR_LINK_INSTAGRAM]',
    facebook: '#[INSERIR_LINK_FACEBOOK]',
    tiktok: '#[INSERIR_LINK_TIKTOK]',
    youtube: '#[INSERIR_LINK_YOUTUBE]',
  },
  n8nWebhookDefault: 'https://webhook.n8n.cloud/webhook/eu-sou-floripa-leads',
};

export const getWhatsAppLink = (customText?: string) => {
  const text = customText ? encodeURIComponent(customText) : encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage);
  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`;
};

export const IMAGES = {
  logo: logoImg || '/assets/images/logo.jpg',
  hero: heroImg || '/assets/images/hero-schooner.jpg',
  deck: deckImg || '/assets/images/tour-deck.jpg',
  coastal: coastalImg || '/assets/images/floripa-coastal.jpg',
  sunset: sunsetImg || '/assets/images/sunset-navigation.jpg',
};



export const TOURS: Tour[] = [
  {
    id: 'passeio-de-escuna',
    name: 'PASSEIO DE ESCUNA',
    tagline: 'A clássica navegação pelas águas encantadas de Florianópolis',
    description: 'Embarque em uma tradicional escuna de madeira e navegue pela costa da Ilha com brisa fresca, visual panorâmico e parada para banho.',
    longDescription: 'O tradicional Passeio de Escuna da EU SOU FLORIPA proporciona momentos relaxantes e divertidos para todas as idades. A bordo da nossa embarcação de madeira com temática náutica e de aventura, você vivencia a história e a exuberância da costa de Florianópolis do melhor ângulo: pelo mar.',
    duration: '[PREENCHER]',
    departureTime: '[PREENCHER]',
    departureLocation: COMPANY_INFO.boardingLocation,
    highlights: [
      'Navegação panorâmica pela costa de Floripa',
      'Parada para banho de mar em águas calmas',
      'Atmosfera náutica clássica e segura',
      'Excelente para casais, famílias e grupos de amigos',
    ],
    included: [
      'Passeio a bordo da escuna temática',
      'Tripulação experiente e habilitada pela Capitania dos Portos',
      'Equipamentos de salvatagem certificados',
      'Som ambiente e guia condutor náutico',
    ],
    recommendations: [
      'Protetor solar, óculos de sol e chapéu/boné',
      'Roupas leves de banho e toalha',
      'Câmera ou smartphone para fotos inesquecíveis',
    ],
    priceAdult: 'Consulte valores',
    priceChild: 'Consulte valores',
    image: IMAGES.deck,
    badge: 'Mais Procurado',
  },
  {
    id: 'passeio-completo',
    name: 'PASSEIO COMPLETO',
    tagline: 'Expedição marítima aprofundada com paisagens deslumbrantes',
    description: 'Uma jornada mais abrangente pelas belezas marinhas da Ilha, combinando pontos históricos, ilhas próximas e cenários paradisíacos.',
    longDescription: 'Uma experiência completa para quem deseja passar mais tempo navegando e conhecer múltiplos encantos do litoral catarinense. Nossa escuna oferece áreas cobertas e deck aberto com vista 360 graus, perfeito para contemplação e registros fotográficos memoráveis.',
    duration: '[PREENCHER]',
    departureTime: '[PREENCHER]',
    departureLocation: COMPANY_INFO.boardingLocation,
    highlights: [
      'Roteiro estendido pelo mar de Florianópolis',
      'Visual de ilhas, costões e fortalezas históricas',
      'Tempo livre para mergulho e relaxamento',
      'Ambiente festivo e receptivo com conforto a bordo',
    ],
    included: [
      'Navegação completa em escuna',
      'Marinheiros e tripulação profissional',
      'Colete salva-vidas de padrão normativo',
      'Suporte e orientação turística',
    ],
    recommendations: [
      'Traje de banho e protetor solar',
      'Casaco corta-vento leve para o retorno',
      'Bolsa impermeável para pertences',
    ],
    priceAdult: 'Consulte valores',
    priceChild: 'Consulte valores',
    image: IMAGES.hero,
    badge: 'Experiência Completa',
  },
  {
    id: 'passeio-especial',
    name: 'PASSEIO ESPECIAL',
    tagline: 'Navegação mágica ao entardecer ou fretamentos exclusivos',
    description: 'Aprecie as cores do pôr do sol sobre as montanhas de Florianópolis ou realize eventos privativos e comemorações a bordo.',
    longDescription: 'O Passeio Especial reúne a atmosfera cinematográfica da nossa escuna com o espetáculo dourado do fim de tarde em Floripa. Uma experiência pensada para quem busca encanto visual, tranquilidade ou um momento memorável com seu grupo.',
    duration: '[PREENCHER]',
    departureTime: '[PREENCHER]',
    departureLocation: COMPANY_INFO.boardingLocation,
    highlights: [
      'Contemplação do pôr do sol no mar de Floripa',
      'Luz perfeita para fotos e vídeos profissionais',
      'Disponibilidade para grupos, eventos e fretamentos',
      'Atendimento personalizado da tripulação',
    ],
    included: [
      'Navegação no horário nobre do entardecer',
      'Tripulação e comando habilitado',
      'Seguro náutico obrigatório e salvatagem',
    ],
    recommendations: [
      'Câmera fotográfica ou celular com bateria',
      'Roupa confortável para o fim de tarde no mar',
    ],
    priceAdult: 'Consulte valores',
    priceChild: 'Consulte valores',
    image: IMAGES.sunset,
    badge: 'Exclusivo',
  },
];

export const HIGHLIGHTS_DATA = [
  {
    id: 'escuna',
    iconText: '⛵',
    title: 'ESCUNA',
    description: 'Embarcação tradicional construída em madeira nobre, com estabilidade, decks arejados e total segurança marítima.',
  },
  {
    id: 'mar',
    iconText: '🌊',
    title: 'MAR E PAISAGENS',
    description: 'Águas cristalinas, montanhas verdes da Mata Atlântica e a brisa revigorante da Ilha da Magia em cada milha náutica.',
  },
  {
    id: 'aventura',
    iconText: '🏴‍☠️',
    title: 'AVENTURA',
    description: 'O clima clássico dos grandes navegadores com elegância, descontração e uma tripulação acolhedora.',
  },
  {
    id: 'florianopolis',
    iconText: '📍',
    title: 'FLORIANÓPOLIS',
    description: 'Conheça Floripa do ângulo mais privilegiado: o oceano. Uma perspectiva única que só a navegação proporciona.',
  },
];

export const EXPERIENCE_BLOCKS = [
  {
    icon: '🌊',
    title: 'Mar',
    description: 'Navegue pelas águas calmas e cristalinas da baía de Florianópolis com todo o frescor da brisa atlântica.',
  },
  {
    icon: '🏝️',
    title: 'Praias e Ilhas',
    description: 'Aviste praias preservadas, costões rochosos e ilhas costeiras intocadas pelo turismo convencional.',
  },
  {
    icon: '⛵',
    title: 'Navegação',
    description: 'A tradição das escunas artesanais combinada ao rigor dos equipamentos de navegação e marinharia.',
  },
  {
    icon: '📸',
    title: 'Fotos Incríveis',
    description: 'Cenários de cartão-postal a cada curva do barco para eternizar suas férias com registros memoráveis.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Família',
    description: 'Passeio seguro e planejado para acolher com conforto crianças, jovens, adultos e a melhor idade.',
  },
  {
    icon: '🏴‍☠️',
    title: 'Aventura',
    description: 'Um espírito náutico lúdico e elegante que transforma um simples passeio de barco em uma expedição inesquecível.',
  },
];

export const ITINERARY_STEPS = [
  {
    step: '01',
    title: 'EMBARQUE',
    description: 'Comece sua aventura a bordo da escuna.',
    details: 'Recepção amigável pela nossa tripulação no cais, orientações de segurança e acomodação com conforto.',
  },
  {
    step: '02',
    title: 'NAVEGAÇÃO',
    description: 'Contemple o litoral e as paisagens de Florianópolis.',
    details: 'Zarpamos para o oceano calmo, contemplando a costa montanhosa, vilas tradicionais e o horizonte aberto.',
  },
  {
    step: '03',
    title: 'EXPERIÊNCIA',
    description: 'Aproveite o mar e o visual da Ilha.',
    details: 'Momento de parada em local abrigado para banho de mar, contemplação das ilhas e integração a bordo.',
  },
  {
    step: '04',
    title: 'MOMENTOS INESQUECÍVEIS',
    description: 'Registre seus melhores momentos.',
    details: 'Fotos memoráveis, retorno tranquilo com música e as melhores recordações das suas férias em Floripa.',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    icon: '⛵',
    title: 'Experiência de escuna',
    description: 'Navegar em uma escuna tradicional é uma vivência sensorial única, com o som do mar na madeira e amplitude de convés.',
  },
  {
    icon: '🌊',
    title: 'Paisagens incríveis',
    description: 'Contraste único entre o azul turquesa do mar e as encostas verdes de Mata Atlântica de Florianópolis.',
  },
  {
    icon: '📍',
    title: 'Florianópolis',
    description: 'A Ilha da Magia é consagrada como um dos destinos turísticos mais cobiçados do Brasil e do mundo.',
  },
  {
    icon: '📸',
    title: 'Momentos inesquecíveis',
    description: 'Cada etapa do roteiro é uma oportunidade de celebrar a vida e produzir fotos de tirar o fôlego.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Para toda a família',
    description: 'Estrutura pensada para o bem-estar e diversão de todas as gerações, do bebê aos avós.',
  },
  {
    icon: '🏴‍☠️',
    title: 'Clima de aventura',
    description: 'A energia fascinante dos mares em uma atmosfera elegante, cinematográfica e acolhedora.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Quanto custa o passeio?',
    answer: 'Os valores são definidos conforme a modalidade do passeio (Passeio de Escuna, Passeio Completo ou Passeio Especial), época do ano e eventuais condições para grupos e crianças. Consulte valores atualizados diretamente com nossa equipe pelo WhatsApp oficial: (48) 98468-5643.',
    category: 'reserva',
  },
  {
    id: 'faq-2',
    question: 'Onde fica o embarque?',
    answer: 'O ponto de embarque da EU SOU FLORIPA fica localizado em Florianópolis – SC ([INSERIR LOCAL DE EMBARQUE]). Após a confirmação da sua reserva, nossa equipe envia a localização exata no Google Maps com orientações de estacionamento e chegada.',
    category: 'embarque',
  },
  {
    id: 'faq-3',
    question: 'Quais são os horários?',
    answer: 'Operamos saídas diárias nos períodos matutino e vespertino ([PREENCHER HORÁRIOS]). Como as condições de mar e vento são monitoradas constantemente para sua segurança, consulte a grade de horários do dia com nosso atendimento via WhatsApp.',
    category: 'geral',
  },
  {
    id: 'faq-4',
    question: 'Quanto tempo dura?',
    answer: 'A duração varia de acordo com o roteiro escolhido ([PREENCHER DURAÇÃO]). Em média, os passeios oferecem tempo suficiente para navegação cênica, parada para banho de mar e retorno confortável.',
    category: 'geral',
  },
  {
    id: 'faq-5',
    question: 'Crianças podem participar?',
    answer: 'Sim! Nossos passeios de escuna são totalmente adequados para famílias com crianças de todas as idades. A embarcação dispõe de coletes salva-vidas homologados nos tamanhos infantil e adulto, além de proteções laterais ao longo do convés.',
    category: 'geral',
  },
  {
    id: 'faq-6',
    question: 'O que devo levar?',
    answer: 'Recomendamos protetor solar, óculos de sol, chapéu ou boné, roupa de banho, toalha e calçado confortável com solado de borracha. Não se esqueça de carregar a bateria do seu celular para registrar as paisagens!',
    category: 'geral',
  },
  {
    id: 'faq-7',
    question: 'O passeio acontece em dias de chuva?',
    answer: 'A segurança da tripulação e dos passageiros é nossa prioridade máxima. Em caso de chuva fraca e mar calmo, o passeio pode ocorrer normalmente pois a escuna possui área coberta. Caso haja ventos fortes ou condições marítimas desfavoráveis, a saída é remarcada ou cancelada.',
    category: 'geral',
  },
  {
    id: 'faq-8',
    question: 'Como funciona o cancelamento?',
    answer: 'Em caso de cancelamento da saída por determinação da Marinha do Brasil ou por motivos meteorológicos, o cliente pode optar pela remarcação para outra data disponível ou pelo reembolso integral conforme a nossa política de cancelamento informada no momento da reserva.',
    category: 'cancelamento',
  },
  {
    id: 'faq-9',
    question: 'Como faço minha reserva?',
    answer: 'Você pode solicitar sua reserva diretamente pelo formulário em nosso site ou conversando com nossa equipe pelo WhatsApp oficial (48) 98468-5643. Informando a data desejada e o número de pessoas, enviamos a confirmação imediata.',
    category: 'reserva',
  },
  {
    id: 'faq-10',
    question: 'Posso reservar pelo WhatsApp?',
    answer: 'Com certeza! O WhatsApp oficial (48) 98468-5643 é o canal mais rápido e direto para tirar dúvidas, verificar saídas disponíveis e garantir seus lugares com facilidade e atendimento humanizado.',
    category: 'reserva',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'passeio-de-escuna-em-florianopolis',
    title: 'Passeio de escuna em Florianópolis: tudo o que você precisa saber',
    excerpt: 'Descubra por que navegar a bordo de uma escuna tradicional é uma das experiências mais marcantes para quem visita a Ilha da Magia.',
    content: [
      'Florianópolis é internacionalmente famosa por suas mais de quarenta praias, natureza preservada e culinária litorânea. No entanto, muitos viajantes visitam a cidade sem conhecer o ângulo mais impressionante da Ilha: a visão contemplativa a partir do mar.',
      'O passeio de escuna oferece uma desaceleração natural. Enquanto o barco desliza suavemente sobre as águas calmas da baía, os visitantes podem contemplar a densa vegetação de Mata Atlântica que recobre os morros e costões rochosos da costa catarinense.',
      'Ao planejar seu passeio com a EU SOU FLORIPA, você tem a tranquilidade de contar com uma tripulação credenciada pela Capitania dos Portos e embarcações equipadas com rigorosos itens de salvatagem e conforto náutico.',
    ],
    readTime: '4 min',
    category: 'Passeios Náuticos',
    date: 'Temporada 2026',
    image: IMAGES.deck,
  },
  {
    id: 'post-2',
    slug: 'barco-pirata-em-florianopolis-como-funciona',
    title: 'Barco pirata em Florianópolis: como funciona e o que esperar',
    excerpt: 'Entenda como o conceito náutico de aventura pirata combina história, diversão familiar e encanto natural em Floripa.',
    content: [
      'A temática das grandes aventuras no oceano desperta a imaginação de adultos e crianças há séculos. Em Florianópolis, a tradição dos passeios de barco com inspiração nas grandes expedições marítimas tornou-se um verdadeiro clássico das férias.',
      'Diferente de atrações artificiais, o foco da EU SOU FLORIPA é aliar a elegância das escunas de madeira à riqueza natural da baía de Florianópolis. A bordo, o ambiente é festivo e acolhedor, com música agradável, brisa do oceano e momentos dedicados para banho de mar.',
      'Para quem busca um passeio descontraído para reunir a família ou o grupo de amigos, a escuna proporciona espaço amplo para circulação, bancos acolchoados e áreas de sombra para relaxar.',
    ],
    readTime: '3 min',
    category: 'Aventura & Família',
    date: 'Temporada 2026',
    image: IMAGES.hero,
  },
  {
    id: 'post-3',
    slug: 'o-que-fazer-em-florianopolis-com-criancas',
    title: 'O que fazer em Florianópolis com crianças: guia para famílias',
    excerpt: 'Dicas práticas de passeios seguros e encantadores para quem viaja com pequenos na capital catarinense.',
    content: [
      'Viajar com crianças exige roteiros que combinem segurança, conforto e estímulo à imaginação. Um passeio de escuna pelo mar de Florianópolis reúne todos esses ingredientes em uma só atividade.',
      'Crianças adoram a sensação de subir a bordo de uma embarcação de madeira, observar gaivotas, avistar ilhas distantes e sentir o balanço suave das ondas. A equipe da EU SOU FLORIPA zela pela atenção com os pequenos, disponibilizando coletes adequados e orientações claras aos pais.',
      'Dica: traga protetor solar, roupas confortáveis, chapéu e uma toalha. A parada de banho em águas calmas é sempre um dos momentos mais celebrados pela garotada.',
    ],
    readTime: '4 min',
    category: 'Turismo em Família',
    date: 'Temporada 2026',
    image: IMAGES.coastal,
  },
  {
    id: 'post-4',
    slug: 'florianopolis-vista-do-mar-encantos-da-ilha',
    title: 'Florianópolis vista do mar: encantos naturais da Ilha da Magia',
    excerpt: 'A perspectiva náutica revela costões intocados, enseadas secretas e a imponência da costa montanhosa.',
    content: [
      'Existe uma Florianópolis que os automóveis e as trilhas convencionais não conseguem alcançar: as enseadas protegidas e os recortes geográficos formados por milhões de anos de encontro entre o continente e o Atlântico.',
      'Ao navegar com a EU SOU FLORIPA, o passageiro tem uma aula viva de geografia e belezas cênicas. As montanhas esmeralda contrastam com os tons azulados do mar da Baía, criando momentos de serenidade raros na rotina moderna.',
      'Seja no primeiro passeio da manhã ou na saída dourada do entardecer, vivenciar Floripa pelo mar é um rito imperdível para qualquer amante do turismo de qualidade.',
    ],
    readTime: '3 min',
    category: 'Ecoturismo & Paisagens',
    date: 'Temporada 2026',
    image: IMAGES.sunset,
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    src: IMAGES.hero,
    title: 'Escuna tradicional navegando em Florianópolis',
    category: 'A Escuna',
  },
  {
    id: 'gal-2',
    src: IMAGES.deck,
    title: 'Deck de madeira e vista panorâmica para o mar',
    category: 'A Bordo',
  },
  {
    id: 'gal-3',
    src: IMAGES.coastal,
    title: 'Paisagem costeira com montanhas e mar turquesa',
    category: 'Paisagens da Ilha',
  },
  {
    id: 'gal-4',
    src: IMAGES.sunset,
    title: 'Pôr do sol dourado na Baía de Florianópolis',
    category: 'Pôr do Sol',
  },
];
