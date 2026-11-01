// Textos de primapox.com, página por página, exatamente como estão lá.
// A única alteração foi corrigir os caracteres que o site antigo mostra como "?"
// (acentos gravados em Windows-1252). Não há texto novo: ajuste aqui e o site inteiro atualiza.

export const menu = [
  ["#home", "Home"],
  ["#a-primapox", "A Primapox"],
  ["#servicos", "Serviços"],
  ["#manutencao", "Manutenção"],
  ["#galeria", "Galeria de Fotos"],
  ["#fale-conosco", "Fale Conosco"],
];

// ---------- Home (index.php) ----------
export const home = {
  servicosTitulo: "Nossos Serviços",
  servicosTexto:
    "Executamos pintura eletrostática com tinta em pó, ideais para: esquadrias, batentes, caixilhos, forros, divisórias, fachadas, telhas metálicas, coberturas, estruturas espaciais, etc.",
  vantagensTitulo: "Principais Vantagens:",
  vantagens: ["Alto Padrão de Qualidade", "Maior durabilidade", "Cores Diversificadas e vivas"],
  localizacaoTitulo: "Localização",
  localizacaoTexto:
    "Localizados na Praça Itapitanga nº 10, em Vigario Geral, contamos com a estrutura ideal pra atender você e seus clientes",
  saibaMais: "Saiba Mais",
};

// ---------- A Primapox (empresa.php) ----------
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

// ---------- Serviços (servicos.php) ----------
export const servicosTitulo = "Serviços";

export const beneficios = {
  titulo: "Benefícios da Tinta em Pó:",
  itens: [
    "Isenta de solventes orgânicos e não produz odores, nem vapores.",
    "Reduz os riscos de combustão e elimina as perdas.",
    "Não agride ao meio ambiente.",
    "Fácil aplicação em uma única demão (evitando escorrimento e bolhas)",
    "Economia de energia com alta produtividade.",
    "Tempo de processo reduzido.",
    "Possibilidade de obter-se camadas de 50 À 70 microns.",
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
    { nome: "Poliuretano", texto: "Composta e com características semelhantes às dos poliésteres , porém com alastramento superior e possibilidade de atingir camadas inferiores a 40 micra na aplicação de cores escuras.", usa: false },
  ],
  obs: "Obs.: A Primapox trabalha apenas com as resinas Híbrida e Poliéster.",
};

export const fichaPoliester = {
  titulo: "TINTA EM PÓ À BASE DE POLIÉSTER",
  fisicasTitulo: "Propriedades Físicas e Mecânicas",
  quimicosTitulo: "Resistência aos Agentes Químicos",
  fisicas: [
    ["Peso Específico", "1,4 – 1,8 (DC)"],
    ["Sólidos", "100%"],
    ["Ponto de Fusão", "105 - 110ºC"],
    ["Tempo de Secagem", "12/15´ a 200ºC"],
    ["Espessura do Filme", "50 - 60µ"],
    ["Brilho ( Glass – 60ºC )", "90 – 100%"],
    ["Dureza ( Koening )", "170”"],
    ["Flexibilidade ( Mandril cônico )", "6 - (SF)"],
    ["Aderência ( Scrath-test )", "100%"],
    ["Embutimento ( Erichsen )", "8mm"],
    ["Impacto ( 50kg/cm·² )", "(SD)"],
    ["Rendimento médio ( m²/kg )", "10/12"],
    ["Resistencia aos raios (Q,U,V) 120h", "Ótimo(SC)"],
    ["(Q,U,V) 250h", "Ótimo(SC)"],
    ["(Q,U,V) 500h", "Ótimo(SC)"],
    ["Teste umidade 100%/40ºC 500 h", "(I)"],
    ["1000h", "(I)"],
    ["Teste SO2 ( Kesternich )", "10 rondas(I)"],
    ["Resistência aos intempéries (Weather-O-Meter ).", "(SC)"],
    ["Dureza ( com lápis Hardmuth )", "2 - 4h"],
    ["Intemperismo natural ( 12 meses )", "(PI)"],
  ],
  quimicos: [
    ["Soda cáustica 10%", "600h(LA)"],
    ["Soda cáustica 20%", "600h (LA)"],
    ["Ácido clorídrico 10%", "300h (I)"],
    ["Ácido clorídrico 30%", "200h(LA)"],
    ["Ácido sulfúrico 10%", "300h(I)"],
    ["Ácido sulfúrico 40%", "300h(I)"],
    ["Ácido acético 10%", "300h(LA)"],
    ["Ácido acético concentrado", "não resiste"],
    ["Ácido nítrico 10%", "300h (LA/AM)"],
    ["Tutuol ( imersão", "200h (LB/LA)"],
    ["Xilol ( imersão )", "200h (PB/LA)"],
    ["Solvesso 100 ( imersão )", "200h (LA)"],
    ["Metanol ( imersão )", "200h (PB/LA)"],
    ["Amoníaco 10%", "100h(I)"],
    ["Formol 10%", "1000h(LA)"],
    ["Água industrial", "1000h (I)"],
    ["Água destilada", "1000h (I)"],
    ["Água do mar", "1000h(I)"],
    ["Vários detergentes", "800h(I)"],
    ["Óleos comestíveis", "1000h(I)"],
    ["Óleos para motores", "1000h (I)"],
    ["Butanol", "100h (PB/LA)"],
    ["Hipoclorito de sódio 5%", "100h (LA/AM)"],
  ],
  legendasTitulo: "LEGENDAS:",
  legendas: [
    "(SA) Sem Ataque",
    "(DC) Dependendo das cores",
    "(SC) Sem Calcinação",
    "(PI) Praticamente inalterado",
    "(SD) Sem descamações",
    "(LA) Leve amolecimento do filme",
    "(I) Inalterado",
    "(SF) Sem fisuras",
    "(AM) Amolecimento do filme",
    "(PB) Perda de brilho",
  ],
  fonte: "FONTE: Catálogo Coraldur - Tintas em Pó",
};

export const destaque = {
  titulo: "COM PRIMAPOX O METAL NÃO DÁ NA PINTA!",
  paragrafos: [
    "O acabamento e a aparência da pintura com Primapox são superiores aos processos convencionais. A aplicação eletrostática forma uma película uniforme sobre a peça, recobrindo por igual, cantos, bordas e arestas, dando assim, uma completa proteção anticorrosiva.",
    "A pintura é feita com tinta apropriada para o uso ao qual a peça será submetida. As cores e os efeitos podem ser brilhante ou fosco. A resistência térmica, química, mecânica e a aderência são superiores as dos processos comuns. E as peças podem ser cortadas após serem pintadas. Tudo o que é usualmente fabricado em latão, cobre, alumínio e em chapa de ferro, pode ser executado através do processo Primapox. E o que é mais importante: por um preço que não vai corroer o seu bolso.",
  ],
};

export const aplicacoes = {
  titulo: "Material",
  intro: "As aplicações para a pintura em pó pelo processo Primapox são as seguintes:",
  itens: [
    { nome: "Construção Civil", texto: "esquadrias de ferro e de alumínio ( na Europa, 90% das esquadrias de alumínio são pintadas por esse processo ), varandas, corrimãos, maçanetas, porta corta-fogo, caixas para mangueiras e disjuntores, forros metálicos, tubulações aparentes ou concretadas, etc.", cor: "#e3121a" },
    { nome: "Na Decoração", texto: "temos móveis metálicos, divisórias, luminárias e spots, aramados, armários de banheiro e cozinha.", cor: "#1fa34a" },
    { nome: "Supermercados e lojas", texto: "gôndolas, araras, cestinhas, carrinhos, placas de sinalização.", cor: "#f2b705" },
    { nome: "Equipamentos industriais", texto: "gabinetes, painéis e estruturas.", cor: "#1e9bd7" },
    { nome: "Indústria naval", texto: "gaiútas, esquadrias e painéis.", cor: "#0b2a8f" },
  ],
  slogan: "Se é metal, Primapox pinta e protege!",
};

// Etapas na ordem da página; "Antes" e "Depois" são as legendas das fotos da Cura.
export const processo = [
  {
    nome: "Pré-tratamento",
    textos: [
      "O Pré Tratamento da superfície antes da aplicação do Pó, quando o material é preparado para entrar no processo Primapox, é uma etapa crítica para a garantia de uma adesão apropriada da tinta no substrato metálico. Aplicadores profissionais realizam procedimentos específicos e controlados para assegurar que os perfis, como o de Alumínio, estejam adequadamente preparados para a obtenção de uma longa resistência aos ambientes agressivos.",
      "A Limpeza, Preparação e Tratamento Químico dos substratos metálicos são operações fundamentais para a performance de longo prazo dos revestimentos.",
      "O material, ou peça, é limpa por completo.",
      "São extintos os vestígios de graxa, gordura e corrosão. E a superfície é preparada por processos químicos para receber a tinta em pó dando o máximo de aderência.",
    ],
    fotos: ["/img/foto-02.webp", "/img/foto-27.webp"],
  },
  {
    nome: "Pintura",
    textos: [
      "A peça é levada por um transportador aéreo contínuo à uma cabine onde recebe um recobrimento uniforme de aproximadamente 60 mícrons de tinta em pó epóxi, poliéster ou híbrida conforme o caso, aplicado por duas pistolas eletrostáticas. A tinta em pó tem grande vantagem sobre a tinta convencional de recobrir por inteiro a peça pintada, não deixando microcanais como a tinta líquida, por onde a corrosão tem penetração e início.",
    ],
    fotos: ["/img/foto-03.webp", "/img/foto-29.webp"],
  },
  {
    nome: "Cura",
    textos: [
      "Chegamos à última etapa.",
      "O transportador aéreo atravessa com a peça numa estufa de 18 metros de comprimento, onde à uma temperatura de 200ºC, a tinta é polimerizada. A função básica da estufa é ativar a reação química do sistema de resinas.O perfeito balanceamento entre o período de aquecimento do substrato e o período em que a temperatura deste substrato permanece, determinará o perfeito alastramento e a performance especificada para os ensaios Físico-Químicos.",
      "O resultado? Um acabamento liso, plenamente uniforme e perfeito, com total resistência a impactos e a corrosão.",
      "Depois de passar pelo nosso controle de qualidade, sua peça estará pronta para você gravar a sua marca e fazer o seu nome aparecer no mercado.",
    ],
    antesDepois: [
      { src: "/img/antes.jpg", cap: "Antes" },
      { src: "/img/depois.jpg", cap: "Depois" },
    ],
    fotos: ["/img/foto-32.webp", "/img/foto-31.webp"],
  },
];

// ---------- Manutenção (manutencao.php) ----------
export const manutencao = {
  titulo: "Manutenção",
  intro: "A pintura Poliéster deve ser limpa regularmente para manter suas propriedades decorativas. A freqüência de limpeza depende dos seguintes fatores:",
  fatores: [
    "Localização geográfica do edifício;",
    "Meio ambiente (Marítimo, Industrial, etc...);",
    "Nível de poluição do ar;",
    "Ventos predominantes;",
    "Proteção da construção;",
    "Resistência a atritos do ar que causam erosão na camada pintada (Areia, etc...).",
  ],
  paragrafos: [
    "Manchas na camada de pintura, resultante da poluição do ar, não devem ser removidas com material abrasivos ou produtos contendo acetonas, éter ou álcool.",
    "A limpeza de pintura Poliéster deve ser feita com uma solução de detergente neutro em água quente , usando uma flanela ou uma esponja macia. Nunca se deve usar material áspero no auxílio da limpeza.",
  ],
  intervaloTitulo: "Intervalo da limpeza",
  intervaloIntro: "Para se manter as propriedades decorativas da pintura Poliéster é necessário seguir os intervalos de limpeza recomendados abaixo:",
  intervalos: [
    ["Zona Marítima", "Mensal"],
    ["Zona Industrial", "Trimestral"],
    ["Zona não poluída de baixo risco ambiental", "A cada 18 meses"],
  ],
  ambientaisTitulo: "Fatores ambientais que afetam a pintura Poliéster",
  ambientais: [
    ["Luz Ultravioleta", "A radiação da Luz Ultravioleta é maior em zonas marítimas que em zonas industriais ou rurais, devido a umidade do ar. Nas zonas costeiras, a degradação do filme de Poliéster é proporcionado ao descoloramento da cor."],
    ["Atmosfera Salina", "O sal do mar é muito corrosivo e afeta sobremaneira os substratos ferrosos e não ferrosos."],
    ["Erosão", "A combinação de ventos e detritos do litoral produz uma força de erosão que afeta a camada de Poliéster, causando danos a pintura."],
  ],
  requisitosTitulo: "Os requisitos necessários para garantia da pintura Poliéster são os seguintes:",
  requisitos: [
    "Camada de tinta de 50 a 70 microns;",
    "Reparos imediatos em locais danificados;",
    "Cobertura e selagem de cortes e junções de esquadrias;",
    "Limpeza freqüente.",
  ],
  extras: [
    ["Retoque", "O retoque deverá ser feito com uma tinta líquida de boa solidez à luz como a alquídica (EX.: Cromadex 259). O local a ser retocado deve ser previamente lixado com lixa d´água grão 400."],
    ["Silicone industrial", "A aderência do silicone estrutural sobre o material pintado é de responsabilidade do fabricante do silicone."],
  ],
};

// ---------- Galeria de Fotos (galeria.php) ----------
export const galeria = {
  titulo: "Galeria de Fotos",
  fotos: Array.from({ length: 46 }, (_, i) => `/img/foto-${String(i + 1).padStart(2, "0")}.webp`),
};

// ---------- Fale Conosco (contato.php) ----------
export const contato = {
  titulo: "Contato",
  chamada: "Entre em contato pelo telefone (21) 3448-7320 ou preencha o formulário abaixo:",
  campos: { nome: "Nome:", telefone: "Telefone:", email: "E-mail:", assunto: "Assunto:", mensagem: "Mensagem:" },
  limpar: "Limpar",
  enviar: "Enviar",
  empresa: "Primapox",
  endereco: "Praça Itapitanga 10, Vigário Geral",
  cidade: "Rio de Janeiro - RJ",
  telefonesLinhas: ["Tels.: (21) 3448-7320 / 3452-8763", "3452-8764 / 3452-8765"],
  telefonePrincipal: "(21) 3448-7320",
  email: "primapox@primapox.com",
  localizacao: "Localização",
};

// ---------- Rodapé ----------
// Formato do rodapé antigo; endereço e telefone da página Fale Conosco (o rodapé antigo
// trazia "Praça 10, 42" e (21) 3172-2000, dados desatualizados segundo o cliente).
export const rodape = {
  direitos: "Primapox - Todos os Direitos Reservados",
  endereco: `${contato.endereco} - ${contato.cidade}`,
  contato: `${contato.telefonePrincipal} - ${contato.email}`,
};

// ---------- fotos usadas nas cenas animadas ----------
export const coresLinha1 = [13, 5, 10, 22, 9, 41, 43, 20, 45];
export const coresLinha2 = [21, 18, 16, 42, 44, 8, 6, 14, 15];

export const obras = {
  perto: [
    { n: 17, w: 34, x: 8, y: 6 },
    { n: 38, w: 32, x: 40, y: 46 },
    { n: 36, w: 30, x: 78, y: 8 },
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
