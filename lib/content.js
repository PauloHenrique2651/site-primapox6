// Textos copiados de primapox.com (páginas A Primapox, Serviços e Fale Conosco).
// Mantidos como estão no site original; ajuste aqui e o site inteiro atualiza.

export const contato = {
  telefonePrincipal: "(21) 3448-7320",
  telefones: ["(21) 3448-7320", "(21) 3452-8763", "(21) 3452-8764", "(21) 3452-8765"],
  email: "primapox@primapox.com",
  endereco: "Praça Itapitanga 10, Vigário Geral",
  cidade: "Rio de Janeiro - RJ",
  chamada: "Entre em contato pelo telefone (21) 3448-7320 ou preencha o formulário abaixo:",
};

export const quemSomos = {
  titulo: "Quem Somos",
  paragrafos: [
    "Atuando há mais de 20 anos no ramo de pintura industrial, a Primapox é uma empresa que vem se destacando no mercado, pelo alto padrão de qualidade de sua pintura e pelo atendimento personalizado ao cliente; fatores predominantes de seu desempenho e credibilidade.",
    "Seus projetos vão vibrar com nossas cores vivas nas esquadrias, batentes, caixilhos, forros, divisórias, fachadas, telhas metálicas, coberturas, estruturas espaciais, etc.",
    "Além disso, vão durar muito mais tempo, pois a proteção anti-corrosiva é superior ao da anodização e da pintura líquida, como também à resistência química e física.",
    "Estamos capacitados para executar pintura em peças com até 6,5m de comprimento.",
    "CONSULTE-NOS! Nós teremos o máximo prazer em mostrar-lhes todas as vantagens deste sistema de revestimento.",
  ],
};

export const beneficios = {
  titulo: "Benefícios da Tinta em Pó",
  itens: [
    "Isenta de solventes orgânicos e não produz odores, nem vapores.",
    "Reduz os riscos de combustão e elimina as perdas.",
    "Não agride ao meio ambiente.",
    "Fácil aplicação em uma única demão (evitando escorrimento e bolhas)",
    "Economia de energia com alta produtividade.",
    "Tempo de processo reduzido.",
    "Possibilidade de obter-se camadas de 50 à 70 microns.",
    "Alta resistência química e mecânica (corrosão, impactos, radiação U.V; etc.)",
    "Diversos tipos de acabamento e sistemas de resinas.",
    "Acabamento de alto nível.",
  ],
};

export const tiposDeTinta = {
  titulo: "Tipos de Tinta em pó",
  itens: [
    { nome: "Híbrida", texto: "Compostas por resinas epóxi poliéster e indicadas para superfícies metálicas em peças de uso interior.", usa: true },
    { nome: "Poliéster", texto: "Composta por resinas poliésteres e indicada para superfícies metálicas em peças de uso exterior, especialmente peças de efeito arquitetônico.", usa: true },
    { nome: "Epóxi", texto: "Composta por resinas epóxidas e indicada para superfícies metálicas em peças de uso em ambientes quimicamente agressivos.", usa: false },
    { nome: "Poliuretano", texto: "Composta e com características semelhantes às dos poliésteres, porém com alastramento superior e possibilidade de atingir camadas inferiores a 40 micra na aplicação de cores escuras.", usa: false },
  ],
  obs: "Obs.: A Primapox trabalha apenas com as resinas Híbrida e Poliéster.",
};

export const fichaPoliester = {
  titulo: "Tinta em pó à base de poliéster",
  fisicas: [
    ["Peso Específico", "1,4 – 1,8 (DC)"],
    ["Sólidos", "100%"],
    ["Ponto de Fusão", "105 - 110°C"],
    ["Tempo de Secagem", "12/15' a 200°C"],
    ["Espessura do Filme", "50 - 60µ"],
    ["Brilho (Gloss – 60°)", "90 – 100%"],
    ["Dureza (Koening)", "170\""],
    ["Flexibilidade (Mandril cônico)", "6 - (SF)"],
    ["Aderência (Scratch-test)", "100%"],
    ["Embutimento (Erichsen)", "8mm"],
    ["Impacto (50kg/cm²)", "(SD)"],
    ["Rendimento médio (m²/kg)", "10/12"],
    ["Resistência aos raios (Q,U,V) 120h", "Ótimo (SC)"],
    ["(Q,U,V) 250h", "Ótimo (SC)"],
    ["(Q,U,V) 500h", "Ótimo (SC)"],
    ["Teste umidade 100%/40°C – 500h", "(I)"],
    ["Teste umidade 100%/40°C – 1000h", "(I)"],
    ["Teste SO2 (Kesternich)", "10 rondas (I)"],
    ["Resistência às intempéries (Weather-O-Meter)", "(SC)"],
    ["Dureza (com lápis Hardmuth)", "2 - 4h"],
    ["Intemperismo natural (12 meses)", "(PI)"],
  ],
  quimicos: [
    ["Soda cáustica 10%", "600h (LA)"],
    ["Soda cáustica 20%", "600h (LA)"],
    ["Ácido clorídrico 10%", "300h (I)"],
    ["Ácido clorídrico 30%", "200h (LA)"],
    ["Ácido sulfúrico 10%", "300h (I)"],
    ["Ácido sulfúrico 40%", "300h (I)"],
    ["Ácido acético 10%", "300h (LA)"],
    ["Ácido acético concentrado", "não resiste"],
    ["Ácido nítrico 10%", "300h (LA/AM)"],
    ["Toluol (imersão)", "200h (LB/LA)"],
    ["Xilol (imersão)", "200h (PB/LA)"],
    ["Solvesso 100 (imersão)", "200h (LA)"],
    ["Metanol (imersão)", "200h (PB/LA)"],
    ["Amoníaco 10%", "100h (I)"],
    ["Formol 10%", "1000h (LA)"],
    ["Água industrial", "1000h (I)"],
    ["Água destilada", "1000h (I)"],
    ["Água do mar", "1000h (I)"],
    ["Vários detergentes", "800h (I)"],
    ["Óleos comestíveis", "1000h (I)"],
    ["Óleos para motores", "1000h (I)"],
    ["Butanol", "100h (PB/LA)"],
    ["Hipoclorito de sódio 5%", "100h (LA/AM)"],
  ],
  legendas:
    "(SA) Sem Ataque · (DC) Dependendo das cores · (SC) Sem Calcinação · (PI) Praticamente inalterado · (SD) Sem descamações · (LA) Leve amolecimento do filme · (I) Inalterado · (SF) Sem fissuras · (AM) Amolecimento do filme · (PB) Perda de brilho",
  fonte: "FONTE: Catálogo Coraldur - Tintas em Pó",
};

export const destaque = {
  titulo: "Com Primapox o metal não dá na pinta!",
  paragrafos: [
    "O acabamento e a aparência da pintura com Primapox são superiores aos processos convencionais. A aplicação eletrostática forma uma película uniforme sobre a peça, recobrindo por igual, cantos, bordas e arestas, dando assim, uma completa proteção anticorrosiva.",
    "A pintura é feita com tinta apropriada para o uso ao qual a peça será submetida. As cores e os efeitos podem ser brilhante ou fosco. A resistência térmica, química, mecânica e a aderência são superiores as dos processos comuns. E as peças podem ser cortadas após serem pintadas. Tudo o que é usualmente fabricado em latão, cobre, alumínio e em chapa de ferro, pode ser executado através do processo Primapox. E o que é mais importante: por um preço que não vai corroer o seu bolso.",
  ],
};

export const aplicacoes = {
  titulo: "Material",
  intro: "As aplicações para a pintura em pó pelo processo Primapox são as seguintes:",
  itens: [
    { nome: "Construção Civil", texto: "esquadrias de ferro e de alumínio (na Europa, 90% das esquadrias de alumínio são pintadas por esse processo), varandas, corrimãos, maçanetas, porta corta-fogo, caixas para mangueiras e disjuntores, forros metálicos, tubulações aparentes ou concretadas, etc.", cor: "#e3121a" },
    { nome: "Na Decoração", texto: "temos móveis metálicos, divisórias, luminárias e spots, aramados, armários de banheiro e cozinha.", cor: "#1fa34a" },
    { nome: "Supermercados e lojas", texto: "gôndolas, araras, cestinhas, carrinhos, placas de sinalização.", cor: "#f2b705" },
    { nome: "Equipamentos industriais", texto: "gabinetes, painéis e estruturas.", cor: "#1e9bd7" },
    { nome: "Indústria naval", texto: "gaiútas, esquadrias e painéis.", cor: "#0b2a8f" },
  ],
  slogan: "Se é metal, Primapox pinta e protege!",
};

export const processo = [
  {
    n: "01",
    nome: "Pré-tratamento",
    resumo: "O material, ou peça, é limpa por completo. São extintos os vestígios de graxa, gordura e corrosão.",
    textos: [
      "O Pré Tratamento da superfície antes da aplicação do Pó, quando o material é preparado para entrar no processo Primapox, é uma etapa crítica para a garantia de uma adesão apropriada da tinta no substrato metálico. Aplicadores profissionais realizam procedimentos específicos e controlados para assegurar que os perfis, como o de Alumínio, estejam adequadamente preparados para a obtenção de uma longa resistência aos ambientes agressivos.",
      "A Limpeza, Preparação e Tratamento Químico dos substratos metálicos são operações fundamentais para a performance de longo prazo dos revestimentos.",
      "O material, ou peça, é limpa por completo.",
      "São extintos os vestígios de graxa, gordura e corrosão. E a superfície é preparada por processos químicos para receber a tinta em pó dando o máximo de aderência.",
    ],
    fotos: [
      { src: "/img/foto-02.webp", cap: "Tanques de pré-tratamento" },
      { src: "/img/foto-27.webp", cap: "Preparação química" },
    ],
  },
  {
    n: "02",
    nome: "Pintura",
    resumo: "Recobrimento uniforme de aproximadamente 60 mícrons de tinta em pó, aplicado por duas pistolas eletrostáticas.",
    textos: [
      "A peça é levada por um transportador aéreo contínuo à uma cabine onde recebe um recobrimento uniforme de aproximadamente 60 mícrons de tinta em pó epóxi, poliéster ou híbrida conforme o caso, aplicado por duas pistolas eletrostáticas. A tinta em pó tem grande vantagem sobre a tinta convencional de recobrir por inteiro a peça pintada, não deixando microcanais como a tinta líquida, por onde a corrosão tem penetração e início.",
    ],
    fotos: [
      { src: "/img/foto-03.webp", cap: "Aplicação eletrostática" },
      { src: "/img/foto-29.webp", cap: "Transportador aéreo" },
    ],
  },
  {
    n: "03",
    nome: "Cura",
    resumo: "Uma estufa de 18 metros de comprimento, a 200°C, onde a tinta é polimerizada.",
    textos: [
      "Chegamos à última etapa.",
      "O transportador aéreo atravessa com a peça numa estufa de 18 metros de comprimento, onde à uma temperatura de 200°C, a tinta é polimerizada. A função básica da estufa é ativar a reação química do sistema de resinas. O perfeito balanceamento entre o período de aquecimento do substrato e o período em que a temperatura deste substrato permanece, determinará o perfeito alastramento e a performance especificada para os ensaios Físico-Químicos.",
      "O resultado? Um acabamento liso, plenamente uniforme e perfeito, com total resistência a impactos e a corrosão.",
      "Depois de passar pelo nosso controle de qualidade, sua peça estará pronta para você gravar a sua marca e fazer o seu nome aparecer no mercado.",
    ],
    fotos: [
      { src: "/img/foto-32.webp", cap: "Estufa de cura" },
      { src: "/img/foto-31.webp", cap: "Linha de produção" },
    ],
  },
];

export const coresLinha1 = [13, 5, 10, 22, 9, 41, 43, 20, 45];
export const coresLinha2 = [21, 18, 16, 42, 44, 8, 6, 14, 15];

export const obras = {
  perto: [
    { n: 17, cap: "Passarelas", w: 34, x: 8, y: 6 },
    { n: 38, cap: "Esquadrias", w: 32, x: 40, y: 46 },
    { n: 36, cap: "Coberturas", w: 30, x: 78, y: 8 },
  ],
  meio: [
    { n: 25, w: 22, x: 24, y: 58 },
    { n: 40, w: 22, x: 56, y: 2 },
    { n: 35, w: 22, x: 96, y: 52 },
  ],
  longe: [
    { n: 37, w: 16, x: 2, y: 66 },
    { n: 24, w: 16, x: 74, y: 76 },
    { n: 26, w: 16, x: 46, y: 80 },
    { n: 39, w: 16, x: 108, y: 4 },
  ],
};

export const anel = [13, 17, 5, 38, 10, 36, 22, 25, 41, 2, 43, 3];
