import { 
  PortfolioItem, 
  BeforeAfterPair, 
  ServiceItem, 
  PricingPlan, 
  TestimonialItem, 
  FAQItem 
} from '../types';

export interface CarouselPhotoItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  url: string;
  camera: string;
  lens: string;
  lighting: string;
  badge: string;
  styleTags: string[];
}

export const CAROUSEL_PHOTOS: CarouselPhotoItem[] = [
  {
    id: 'carousel-brand-main',
    title: 'Retrato Executivo de Alto Padrão',
    subtitle: 'Posicionamento magnético com máxima autoridade visual, olhar confiante e iluminação cinematográfica.',
    category: 'Corporativo',
    url: '/images/hero-brand.png',
    camera: 'Hasselblad H6D • 100c',
    lens: '85mm f/1.4 Art Master',
    lighting: 'Luz Editorial Esculpida & Pele Realista',
    badge: 'Destaque Oficial • Presença',
    styleTags: ['Autoridade Máxima', 'Executivo', 'Presença Marcante', '8K Realista']
  },
  {
    id: 'carousel-photo-1',
    title: 'Retrato Executivo Minimalista',
    subtitle: 'Postura sóbria, alfaiataria impecável e autoridade em estúdio digital.',
    category: 'Corporativo',
    url: '/images/foto-executivo-1.jpg',
    camera: 'Hasselblad H6D • 100c',
    lens: '85mm f/1.4 Art',
    lighting: 'Chiaroscuro Suave & Fundo Minimalista',
    badge: 'Presença & Autoridade',
    styleTags: ['Executivo', 'Autoridade', 'Minimalismo', '8K Realista']
  },
  {
    id: 'carousel-photo-2',
    title: 'Empresário em Estúdio Tecnológico',
    subtitle: 'Posicionamento moderno com notebook, dinamismo e foco em inovação digital.',
    category: 'Corporativo',
    url: '/images/foto-executivo-2.jpg',
    camera: 'Sony A1 • Full Frame',
    lens: '50mm f/1.2 GM',
    lighting: 'Iluminação Difusa de Escritório Moderno',
    badge: 'Tecnologia & Negócios',
    styleTags: ['Tecnologia', 'Produtividade', 'Liderança Digital']
  },
  {
    id: 'carousel-photo-3',
    title: 'Liderança & Decisão à Mesa',
    subtitle: 'Ensaio executivo em ambiente de gestão, planejamento e alta credibilidade.',
    category: 'Corporativo',
    url: '/images/foto-executivo-3.jpg',
    camera: 'Canon EOS R5',
    lens: '85mm f/1.4L II',
    lighting: 'Window Rim Light & Tons Terrosos Elegantes',
    badge: 'Gestão & Estratégia',
    styleTags: ['Liderança', 'Decisão', 'Mesa de Trabalho']
  },
  {
    id: 'carousel-photo-4',
    title: 'Posicionamento Humanizado & Conexão',
    subtitle: 'Expressão natural, empatia e carisma profissional para networking de alto valor.',
    category: 'Retratos',
    url: '/images/foto-executivo-4.jpg',
    camera: 'Leica SL2',
    lens: '50mm f/1.4 Summilux',
    lighting: 'Difusão Suave Natural com Warm Tone',
    badge: 'Humanizado & Conexão',
    styleTags: ['Humanizado', 'Empatia', 'Networking', 'Presença']
  }
];

export const HERO_GALLERY_IMAGES = [
  {
    id: 'hero-main-brand',
    title: 'Retrato Executivo de Alto Padrão',
    tag: 'Destaque Oficial • Presença',
    url: '/images/hero-brand.png',
    camera: 'Hasselblad H6D • 100c',
    lens: '85mm f/1.4 Art Master',
    lighting: 'Luz Editorial Esculpida & Pele Realista'
  },
  {
    id: 'hero-1',
    title: 'Retrato Executivo Minimalista',
    tag: 'Corporativo • Presença',
    url: '/images/foto-executivo-1.jpg',
    camera: 'Hasselblad H6D • 100c',
    lens: '85mm f/1.4 Art',
    lighting: 'Chiaroscuro Suave & Fundo Neutro'
  },
  {
    id: 'hero-2',
    title: 'Empresário em Estúdio Tecnológico',
    tag: 'Corporativo • Tecnologia',
    url: '/images/foto-executivo-2.jpg',
    camera: 'Sony A1 • Full Frame',
    lens: '50mm f/1.2 GM',
    lighting: 'Iluminação Difusa de Escritório Moderno'
  },
  {
    id: 'hero-3',
    title: 'Liderança & Decisão à Mesa',
    tag: 'Corporativo • Gestão',
    url: '/images/foto-executivo-3.jpg',
    camera: 'Canon EOS R5',
    lens: '85mm f/1.4L II',
    lighting: 'Window Rim Light & Tons Terrosos'
  },
  {
    id: 'hero-4',
    title: 'Posicionamento Humanizado & Conexão',
    tag: 'Retratos • Humanizado',
    url: '/images/foto-executivo-4.jpg',
    camera: 'Leica SL2',
    lens: '50mm f/1.4 Summilux',
    lighting: 'Difusão Suave Natural Warm Tone'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-brand-main',
    title: 'Retrato Executivo de Alto Padrão',
    category: 'Corporativo',
    imageUrl: '/images/hero-brand.png',
    aspectRatio: 'portrait',
    promptDescription: 'Retrato executivo de alto impacto com máxima autoridade, postura firme, iluminação esculpida e realismo fotográfico impecável.',
    styleTags: ['Presença & Autoridade', 'Executivo', 'Alta Fidelidade', 'Fotos com IA'],
    lighting: 'Luz Editorial Esculpida & Pele Realista',
    cameraLens: 'Hasselblad H6D • 85mm f/1.4 Art',
    clientType: 'Empresário / Líder Executivo'
  },
  {
    id: 'port-real-1',
    title: 'Retrato Executivo Minimalista',
    category: 'Corporativo',
    imageUrl: '/images/foto-executivo-1.jpg',
    aspectRatio: 'portrait',
    promptDescription: 'Retrato executivo em estúdio de alta fidelidade com iluminação chiaroscuro sutil, alfaiataria escura e postura imponente com autoridade.',
    styleTags: ['Presença & Autoridade', 'Executivo', 'Minimalismo', 'Fotos com IA'],
    lighting: 'Chiaroscuro Suave & Fundo Minimalista',
    cameraLens: 'Hasselblad H6D • 85mm f/1.4 Art',
    clientType: 'Empresário / C-Level'
  },
  {
    id: 'port-real-2',
    title: 'Empresário em Estúdio Tecnológico',
    category: 'Corporativo',
    imageUrl: '/images/foto-executivo-2.jpg',
    aspectRatio: 'portrait',
    promptDescription: 'Retrato dinâmico de empresário com notebook em ambiente moderno de negócios digitais, transmitindo inovação, foco e liderança.',
    styleTags: ['Tecnologia', 'Produtividade', 'Empreendedorismo', 'Fotos com IA'],
    lighting: 'Iluminação Difusa de Escritório Moderno',
    cameraLens: 'Sony A1 • 50mm f/1.2 GM',
    clientType: 'Founder & Tech Leader'
  },
  {
    id: 'port-real-3',
    title: 'Liderança & Decisão à Mesa',
    category: 'Corporativo',
    imageUrl: '/images/foto-executivo-3.jpg',
    aspectRatio: 'portrait',
    promptDescription: 'Composição editorial executiva com ambiente acolhedor e requintado, transmitindo estratégia, solidez e autoridade corporativa.',
    styleTags: ['Liderança', 'Decisão Estratégica', 'Gestão', 'Fotos com IA'],
    lighting: 'Window Rim Light & Tons Terrosos Elegantes',
    cameraLens: 'Canon EOS R5 • 85mm f/1.4L II',
    clientType: 'Diretor Executivo'
  },
  {
    id: 'port-real-4',
    title: 'Posicionamento Executivo Humanizado',
    category: 'Retratos',
    imageUrl: '/images/foto-executivo-4.jpg',
    aspectRatio: 'portrait',
    promptDescription: 'Retrato executivo com abordagem humanizada, expressão genuína de simpatia e alta confiança, ideal para networking e redes sociais.',
    styleTags: ['Humanizado', 'Empatia', 'Networking VIP', 'Fotos com IA'],
    lighting: 'Difusão Suave Natural com Warm Tone',
    cameraLens: 'Leica SL2 • 50mm f/1.4 Summilux',
    clientType: 'Especialista & Consultor'
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterPair[] = [
  {
    id: 'case-1',
    title: 'Transformação Corporativa Executiva',
    category: 'Corporativo & Presença',
    beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=60&w=800&auto=format&fit=crop&sat=-30&con=-20',
    afterImage: '/images/foto-executivo-1.jpg',
    beforeLabel: 'Selfie ou foto comum com smartphone',
    afterLabel: 'Resultado IA: Retrato Executivo Minimalista',
    description: 'A partir de fotos simples tiradas no dia a dia, recriamos sua identidade com iluminação de estúdio profissional, nitidez 8K e alfaiataria impecável.',
    details: [
      'Preservação precisa dos seus traços e expressão facial',
      'Iluminação de estúdio profissional com luz chiaroscuro',
      'Fundo limpo e sofisticado com presença executiva',
      'Acabamento de pele natural com textura e microporos'
    ]
  },
  {
    id: 'case-2',
    title: 'Liderança Corporativa & Gestão',
    category: 'Corporativo & Negócios',
    beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=60&w=800&auto=format&fit=crop&sat=-40',
    afterImage: '/images/foto-executivo-3.jpg',
    beforeLabel: 'Foto casual sem produção',
    afterLabel: 'Resultado IA: Liderança & Decisão à Mesa',
    description: 'Transformação de um registro simples em um posicionamento de alta autoridade para sites, palestras, LinkedIn e imprensa.',
    details: [
      'Direção artística executiva em ambiente sofisticado',
      'Iluminação suave com tons quentes e presença elegante',
      'Alta resolução otimizada para web e impressos',
      'Pronto para sites, apresentações e redes sociais'
    ]
  },
  {
    id: 'case-3',
    title: 'Lifestyle Europeu & Viagem',
    category: 'Social Media & Lifestyle',
    beforeImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=60&w=800&auto=format&fit=crop&blur=2',
    afterImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=90&w=1200&auto=format&fit=crop',
    beforeLabel: 'Foto cotidiana sem produção',
    afterLabel: 'Ensaio Golden Hour em Cenário Exclusivo',
    description: 'Criação de um acervo completo de fotografias de viagem e estilo de vida sem necessidade de deslocamento ou passagens aéreas.',
    details: [
      'Atmosfera de fim de tarde europeu realista',
      'Composição dinâmica com profundidade e calor',
      'Harmonia de cores refinada para feed de redes sociais',
      'Múltiplas variações de ângulos e expressões'
    ]
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'service-1',
    iconName: 'Camera',
    title: 'Ensaio Profissional',
    subtitle: 'Crie um ensaio completo sem precisar sair de casa.',
    description: 'Uma sessão fotográfica digital completa adaptada ao seu estilo pessoal, com múltiplos cenários, iluminações e enquadramentos que valorizam sua autenticidade.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Múltiplas opções de cenários e iluminações de estúdio',
      'Preservação rigorosa da sua anatomia e traços faciais',
      'Entrega em altíssima resolução (4K / 8K)',
      'Perfeito para quem busca renovar sua presença visual'
    ],
    deliverables: 'De 15 a 40 fotografias tratadas e prontas para uso',
    idealFor: 'Pessoas que buscam uma renovação completa de imagem com praticidade'
  },
  {
    id: 'service-2',
    iconName: 'Briefcase',
    title: 'Imagem Corporativa',
    subtitle: 'Fotografias profissionais para LinkedIn, currículo, site e perfil empresarial.',
    description: 'Eleve seu posicionamento no mercado com retratos executivos que transmitem autoridade, liderança, confiança e sofisticação para conselhos, palestras e mídias corporativas.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Composições pensadas para perfis de alta liderança e LinkedIn',
      'Opções de figurino em alfaiataria moderna e executiva',
      'Fundos arquitetônicos, escritórios modernos ou estúdio neutro',
      'Orientação de poses que transmitem credibilidade'
    ],
    deliverables: 'Fotografias em alta definição em formatos quadrado, vertical e banner',
    idealFor: 'CEOs, Diretores, Consultores, Advogados, Médicos e Executivos'
  },
  {
    id: 'service-3',
    iconName: 'Sparkles',
    title: 'Moda & Editorial',
    subtitle: 'Produções sofisticadas inspiradas em campanhas e revistas.',
    description: 'Sua presença transformada em um ensaio de moda digno das principais revistas do mundo. Direção artística arrojada, tecidos estruturados e iluminação cinematográfica.',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Direção visual com referências de alta costura internacional',
      'Iluminação dramática (Chiaroscuro, High-Key, Hard Flash)',
      'Figurinos contemporâneos, clássicos e vanguardistas',
      'Edição com textura analógica e acabamento de revista'
    ],
    deliverables: 'Ensaio editorial com narrativa visual e coerência estética',
    idealFor: 'Modelos, Estilistas, Artistas e apaixonados por moda e estética'
  },
  {
    id: 'service-4',
    iconName: 'Smartphone',
    title: 'Social Media',
    subtitle: 'Imagens estratégicas para Instagram, TikTok e outras plataformas.',
    description: 'Construa um feed coeso e magnético com fotografias envolventes, pensadas para reter atenção, gerar conexões reais e elevar sua percepção de autoridade nas redes.',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Formatos otimizados para Stories (9:16) e Feed (4:5)',
      'Paletas de cores coordenadas para harmonizar o perfil',
      'Cenas espontâneas, dinâmicas e de alto engajamento',
      'Acervo variado para semanas de publicações consistentes'
    ],
    deliverables: 'Pacote multimídia com variações de cortes e proporções',
    idealFor: 'Influenciadores, Criadores de Conteúdo, Infoprodutores e Especialistas'
  },
  {
    id: 'service-5',
    iconName: 'Gem',
    title: 'Lifestyle',
    subtitle: 'Fotografias que representam seu estilo de vida e personalidade.',
    description: 'Imagens que capturam momentos autênticos em ambientes exclusivos — cafés parisienses, lofts minimalistas, resorts paradisíacos ou paisagens urbanas sofisticadas.',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Locações virtuais deslumbrantes sem custo de viagem',
      'Atmosfera natural com luz dourada e estética leve',
      'Expressões espontâneas e genuínas',
      'Composição equilibrada entre sujeito e ambiente'
    ],
    deliverables: 'Série de imagens lifestyle com ambientações distintas',
    idealFor: 'Profissionais autônomos, viajantes e marcas pessoais'
  },
  {
    id: 'service-6',
    iconName: 'ShoppingBag',
    title: 'Produtos',
    subtitle: 'Imagens profissionais para marcas, lojas e campanhas digitais.',
    description: 'Fotografia publicitária de produto com qualidade de estúdio global. Valorize cosméticos, acessórios, moda, eletrônicos e embalagens com iluminação de precisão milimétrica.',
    imageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Cenografia 3D e texturas hiper-realistas sob medida',
      'Iluminação macro que destaca materiais, vidros e metais',
      'Composições para e-commerce, banners e anúncios pagos',
      'Possibilidade de troca instantânea de fundos e suportes'
    ],
    deliverables: 'Catálogo de imagens de produto com fundo transparente ou ambientado',
    idealFor: 'E-commerces, Marcas de Beleza, Joalherias e Agências de Publicidade'
  }
];

export const DIFFERENTIALS_DATA = [
  {
    title: 'Produção 100% Online',
    description: 'Sem necessidade de deslocamento, agendamentos complexos ou contratação de equipes físicas.'
  },
  {
    title: 'Sem Necessidade de Estúdio Físico',
    description: 'Acesse infinitas locações mundiais e estúdios cinematográficos sem pagar por locação de espaço.'
  },
  {
    title: 'Fotografias com Aparência Profissional',
    description: 'Acabamento que preserva poros, cabelos e expressões naturais com fidelidade fotográfica de ponta.'
  },
  {
    title: 'Personalização Completa',
    description: 'Escolha roupas, cortes de cabelo, cenários, clima e iluminação exatamente como imaginou.'
  },
  {
    title: 'Mais Praticidade e Rapidez',
    description: 'Receba sua sessão pronta em dias ou horas, contra semanas de prazos em estúdios tradicionais.'
  },
  {
    title: 'Possibilidades Criativas Ilimitadas',
    description: 'Crie conceitos ousados e produções de milhões sem o orçamento estratosférico de campanhas físicas.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-essencial',
    name: 'COMBO ESSENCIAL',
    icon: '❄️',
    tagline: 'Sua imagem renovada com agilidade e qualidade.',
    priceDisplay: 'R$ 20',
    billingPeriod: 'produção única',
    popular: false,
    imagesCount: '4 fotos profissionais',
    stylesCount: '1 estilo visual',
    resolution: 'Alta qualidade',
    turnaround: 'Entrega rápida',
    features: [
      '4 fotos profissionais',
      'Tratamento com IA',
      'Alta qualidade',
      'Prontas para redes sociais'
    ],
    ctaText: 'ESCOLHER ESSENCIAL',
    whatsappMessage: 'Olá! Quero começar com o COMBO ESSENCIAL (4 fotos profissionais por R$ 20).'
  },
  {
    id: 'plan-pro',
    name: 'COMBO PRO',
    icon: '🧊',
    tagline: 'Ideal para renovar seu perfil com variedade de poses.',
    priceDisplay: 'R$ 40',
    billingPeriod: 'produção única',
    popular: false,
    imagesCount: '8 fotos profissionais',
    stylesCount: 'Diferentes poses e estilos',
    resolution: 'Alta resolução',
    turnaround: 'Entrega ágil',
    features: [
      '8 fotos profissionais',
      'Diferentes poses e estilos',
      'Tratamento profissional com IA',
      'Alta resolução',
      'Ideal para renovar seu perfil'
    ],
    ctaText: 'ESCOLHER COMBO PRO',
    whatsappMessage: 'Olá! Quero começar com o COMBO PRO (8 fotos profissionais por R$ 40).'
  },
  {
    id: 'plan-premium',
    name: 'COMBO PREMIUM',
    icon: '💎',
    badge: '⭐ MAIS COMPLETO',
    tagline: 'O combo mais completo para todas as suas redes e perfis.',
    priceDisplay: 'R$ 60',
    billingPeriod: 'produção única',
    popular: true,
    imagesCount: '12 fotos profissionais',
    stylesCount: 'Maior variedade de imagens',
    resolution: 'Alta resolução',
    turnaround: 'Entrega prioritária',
    features: [
      '12 fotos profissionais',
      'Maior variedade de imagens',
      'Tratamento profissional com IA',
      'Alta resolução',
      'Fotos para Instagram, WhatsApp e perfil profissional'
    ],
    ctaText: 'QUERO O MAIS COMPLETO',
    whatsappMessage: 'Olá! Quero começar com o COMBO PREMIUM (12 fotos profissionais por R$ 60 - ⭐ Mais Completo).'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Mariana Drummond',
    role: 'Empresária & Investidora',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    resultImageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    quote: 'Eu precisava atualizar minhas fotos profissionais para o LinkedIn e palestras, e o resultado ficou muito acima do que eu imaginava. Meus clientes elogiaram a sofisticação da imagem sem desconfiarem que foi produzido por IA.',
    rating: 5,
    highlight: 'Sofisticação sem perder minha identidade'
  },
  {
    id: 'test-2',
    name: 'Rodrigo Vasconcellos',
    role: 'Diretor de Tecnologia & Founder',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
    resultImageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    quote: 'Detesto passar horas em estúdios de fotografia. O Studio Digital resolveu meu posicionamento executivo em 24 horas, do meu escritório, com qualidade de capa da Bloomberg. A praticidade é surreal.',
    rating: 5,
    highlight: 'Praticidade absurda com qualidade de capa de revista'
  },
  {
    id: 'test-3',
    name: 'Camila Rossi',
    role: 'Consultora de Moda & Influencer',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    resultImageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop',
    quote: 'Como trabalho com moda, sou extremamente crítica com iluminação e caimento de tecidos. O nível de realismo das texturas e a direção de arte das fotos me deixaram impressionada. Virou meu estúdio fixo.',
    rating: 5,
    highlight: 'Perfeição nos detalhes e na estética editorial'
  }
];

export const STATS_DATA = [
  { value: '+5.000', label: 'Imagens criadas com perfeição' },
  { value: '+1.200', label: 'Clientes atendidos globalmente' },
  { value: '98%', label: 'Taxa de satisfação comprovada' },
  { value: '100%', label: 'Digital, ágil e sem estúdio físico' }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'As imagens ficam realistas?',
    answer: 'Sim, absolutamente realistas. Nossa tecnologia de ponta e refinamento artístico avançado preservam os poros, texturas de pele naturais, reflexos nos olhos e caimento orgânico das roupas. O objetivo central é entregar um resultado com acabamento de fotografia analógica ou digital de câmeras de médio formato (como Hasselblad e Leica), sem aquele aspecto plástico ou artificial de ferramentas genéricas.'
  },
  {
    question: 'Preciso ter experiência com IA ou saber criar prompts?',
    answer: 'Nenhuma experiência é necessária! Você não precisa saber nada sobre inteligência artificial nem escrever comandos complicados. Você simplesmente escolhe o estilo desejado através do nosso painel intuitivo ou envia suas referências, e nossa equipe e tecnologia cuidam de toda a direção criativa, iluminação e pós-produção.'
  },
  {
    question: 'Preciso enviar minhas próprias fotos? Como devem ser?',
    answer: 'Sim, você envia algumas fotos do seu rosto (selfies ou fotos casuais do dia a dia, com boa iluminação natural e diferentes ângulos). Não é preciso nenhuma produção prévia nas fotos enviadas — nossa IA aprende seus traços reais e cria as novas composições com figurinos e cenários profissionais.'
  },
  {
    question: 'Posso escolher roupas, estilos e cenários específicos?',
    answer: 'Com certeza! Você tem total controle sobre a proposta visual. Pode optar por ternos em alfaiataria italiana, looks casuais elegantes, vestidos de alta costura, cenários de coberturas em grandes metrópoles, cafés europeus, praias paradisíacas ou fundos clássicos de estúdio fotográfico.'
  },
  {
    question: 'Quanto tempo demora para eu receber as minhas fotos?',
    answer: 'O prazo de entrega varia conforme o plano escolhido: o plano Essencial é entregue em até 48 horas, o Profissional em até 24 horas, e o plano Premium conta com produção expressa em até 12 horas úteis. Todas as fotos são entregues em uma galeria privada e protegida para download.'
  },
  {
    question: 'Posso utilizar as imagens comercialmente?',
    answer: 'Sim! Você recebe os direitos totais de uso das imagens geradas. Elas podem ser utilizadas livremente em campanhas publicitárias, capas de livros, sites corporativos, outdoors, anúncios digitais e em todas as suas redes sociais sem royalties adicionais.'
  },
  {
    question: 'As imagens podem ser usadas nas redes sociais e LinkedIn?',
    answer: 'Perfeitamente! Todas as fotos são entregues nos formatos ideais e otimizados para LinkedIn, Instagram (Feed 4:5 e Stories 9:16), WhatsApp, sites institucionais e materiais de assessoria de imprensa, mantendo altíssima nitidez em qualquer tela.'
  },
  {
    question: 'Como funciona o pagamento e quais são as garantias?',
    answer: 'Aceitamos PIX, cartões de crédito em até 12x e métodos de pagamento internacionais seguros. Oferecemos garantia de satisfação: se alguma imagem precisar de ajustes na iluminação ou enquadramento, realizamos os refinamentos necessários para garantir que você ame o resultado.'
  }
];

export const STUDIO_CONFIG_OPTIONS = {
  categories: [
    { id: 'Corporativo', label: 'Corporativo & Executivo', icon: 'Briefcase' },
    { id: 'Moda', label: 'Moda & Editorial High Fashion', icon: 'Sparkles' },
    { id: 'Retratos', label: 'Retratos Artísticos & Close-up', icon: 'User' },
    { id: 'Lifestyle', label: 'Lifestyle & Viagens Exclusivas', icon: 'Sun' },
    { id: 'Social Media', label: 'Social Media & Personal Branding', icon: 'Smartphone' },
    { id: 'Beleza', label: 'Beleza, Skincare & Glow', icon: 'Heart' },
    { id: 'Produtos', label: 'Publicidade de Produtos', icon: 'ShoppingBag' }
  ],
  lightingOptions: [
    { id: 'natural-window', label: 'Luz de Janela Suave (Chiaroscuro)', desc: 'Elegante, intimista e natural' },
    { id: 'golden-hour', label: 'Golden Hour Sunset Glow', desc: 'Tons quentes e atmosfera cinematográfica' },
    { id: 'studio-octabox', label: 'Estúdio Profissional Octabox 150cm', desc: 'Nítido, contrastado e corporativo' },
    { id: 'editorial-flash', label: 'Hard Flash Editorial Vogue', desc: 'Moderno, de alto impacto visual' },
    { id: 'neon-noir', label: 'Cyber Noir & Luzes Noturnas', desc: 'Atmosfera contemporânea e urbana' }
  ],
  environments: [
    { id: 'manhattan-loft', label: 'Penthouse Executiva em Manhattan', desc: 'Janelões de vidro, arquitetura minimalista' },
    { id: 'paris-cafe', label: 'Bistrô & Varanda Parisiense', desc: 'Charme clássico europeu e elegância discreta' },
    { id: 'studio-minimal', label: 'Estúdio Monocromático Cinza & Preto', desc: 'Foco absoluto na sua presença e olhar' },
    { id: 'art-gallery', label: 'Galeria de Arte Contemporânea', desc: 'Espaço amplo, esculturas e luz filtrada' },
    { id: 'nature-resort', label: 'Resort de Luxo na Costa Mediterrânea', desc: 'Ar livre, natureza e luz solar cristalina' }
  ],
  wardrobes: [
    { id: 'tailored-suit', label: 'Alfaiataria Italiana Sob Medida', desc: 'Blazer estruturado, corte clássico impecável' },
    { id: 'minimal-chic', label: 'Minimalist Cashmere & Tons Neutros', desc: 'Sofisticação sem esforço, elegância discreta' },
    { id: 'haute-couture', label: 'Alta Costura & Tecidos Nobres', desc: 'Peças de passarela com volume e presença' },
    { id: 'smart-casual', label: 'Smart Casual Contemporâneo', desc: 'Camisa de linho, jaqueta de couro nobre ou gola alta' },
    { id: 'evening-black-tie', label: 'Black Tie / Vestido de Gala Noturno', desc: 'Máxima elegância para ocasiões de destaque' }
  ]
};
