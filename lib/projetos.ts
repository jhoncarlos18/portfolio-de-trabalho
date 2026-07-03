export type Projeto = {
  slug: string;
  titulo: string;
  cliente: string;
  categoria: string;
  ano: string;
  problema: string;
  solucao: string;
  resultado: string;
  metricas: { label: string; valor: string }[];
  stack: string[];
  cor: string;
  destaque?: boolean;
};

export const projetos: Projeto[] = [
  {
    slug: "sorria-odonto",
    titulo: "Sorria Odonto",
    cliente: "Clínica odontológica",
    categoria: "Landing page premium",
    ano: "2026",
    problema:
      "Clínica sem presença digital perdia pacientes para concorrentes com site profissional. Orçamentos chegavam só por indicação.",
    solucao:
      "Landing page dark com identidade turquesa/cyan, galeria antes/depois para gerar confiança visual, FAQ para reduzir objeções e botão de WhatsApp flutuante para captar contato no momento de decisão.",
    resultado:
      "Site no ar com captação direta via WhatsApp, eliminando o atrito de formulário e ligação.",
    metricas: [
      { label: "Tempo de carregamento", valor: "< 1s" },
      { label: "Conversão", valor: "WhatsApp direto" },
      { label: "Responsivo", valor: "100% mobile" },
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    cor: "#5FD9D9",
    destaque: true,
  },
  {
    slug: "larissa-modas",
    titulo: "Larissa Modas",
    cliente: "E-commerce de moda feminina",
    categoria: "Loja virtual completa",
    ano: "2026",
    problema:
      "Venda só por Instagram direct, sem catálogo organizado, sem controle de estoque e sem forma de escalar pedidos.",
    solucao:
      "E-commerce completo com catálogo, páginas de produto, painel administrativo com CRUD e checkout via WhatsApp — mantendo o canal que a cliente já confiava, mas com vitrine profissional por trás.",
    resultado:
      "Loja publicada e no ar, com gestão de produtos autônoma para a cliente, sem depender de desenvolvedor para cada atualização.",
    metricas: [
      { label: "Painel admin", valor: "CRUD completo" },
      { label: "Checkout", valor: "Via WhatsApp" },
      { label: "Deploy", valor: "Vercel" },
    ],
    stack: ["Next.js 14", "Supabase", "Tailwind CSS", "Vercel"],
    cor: "#E8889C",
    destaque: true,
  },
  {
    slug: "deliverygift",
    titulo: "DeliveryGift",
    cliente: "Sistema de gestão de entregas",
    categoria: "Plataforma operacional",
    ano: "2025–2026",
    problema:
      "Pequenos negócios de entrega em Curitiba geriam pedidos e motoristas manualmente, sem visibilidade de rotas, preços por bairro ou repasse de ganhos.",
    solucao:
      "Plataforma com mapas interativos (Leaflet/OpenStreetMap), precificação por bairro editável em linha, fluxo de aprovação de motoristas e relatórios de ganhos por entregador.",
    resultado:
      "Sistema em produção, usado para operação real de entregas com controle de preço e repasse automatizado.",
    metricas: [
      { label: "Mapas", valor: "Tempo real" },
      { label: "Precificação", valor: "Por bairro" },
      { label: "Status", valor: "Em produção" },
    ],
    stack: ["Next.js 14", "Supabase", "Leaflet", "Tailwind CSS", "Vercel"],
    cor: "#7FD9A8",
    destaque: true,
  },
  {
    slug: "cnn-mnist",
    titulo: "Classificador CNN — MNIST",
    cliente: "Projeto acadêmico — SENAC",
    categoria: "Visão computacional",
    ano: "2026",
    problema:
      "Construir e treinar uma rede neural convolucional do zero, capaz de reconhecer dígitos escritos à mão com alta precisão, como avaliação prática de aprendizado profundo.",
    solucao:
      "Rede convolucional treinada em TensorFlow sobre o dataset MNIST, com relatório técnico completo e apresentação dos resultados experimentais.",
    resultado:
      "Modelo treinado localmente atingindo mais de 99% de acurácia de validação, documentado em relatório formal.",
    metricas: [
      { label: "Acurácia de validação", valor: "> 99%" },
      { label: "Dataset", valor: "MNIST" },
      { label: "Framework", valor: "TensorFlow" },
    ],
    stack: ["Python", "TensorFlow", "Keras", "NumPy"],
    cor: "#D9784F",
    destaque: true,
  },
  {
    slug: "jarvis-assistente-ia",
    titulo: "JARVIS",
    cliente: "Projeto pessoal — automação residencial",
    categoria: "Assistente de voz com IA",
    ano: "2025",
    problema:
      "Precisava de um assistente de voz próprio, sem depender de assistentes prontos de mercado, capaz de responder por voz, controlar o computador e manter contexto entre conversas.",
    solucao:
      "Assistente de voz em Python ativado por palma (clap-detection), usando a API da Groq (Llama 3.3 70B) para conversação, com interface gráfica animada em Tkinter, integração de clima e notícias em tempo real, leitura de arquivos, controle do computador e memória persistente entre sessões.",
    resultado:
      "Assistente funcional rodando localmente no Windows, com início automático no boot e memória que mantém contexto entre conversas, sem depender de serviços de terceiros para a interface.",
    metricas: [
      { label: "Ativação", valor: "Por palma" },
      { label: "Memória", valor: "Persistente" },
      { label: "Modelo", valor: "Llama 3.3 70B" },
    ],
    stack: ["Python", "Groq API", "Tkinter", "NewsAPI"],
    cor: "#7FD9A8",
    destaque: true,
  },
  {
    slug: "sistema-caixa",
    titulo: "Caixa & Estoque Distribuidora",
    cliente: "Distribuidora — gestão interna",
    categoria: "Sistema de gestão local",
    ano: "2025",
    problema:
      "Distribuidora controlava caixa e estoque de forma manual, sem visibilidade clara de entradas, saídas e quantidade real de produtos disponíveis.",
    solucao:
      "Sistema local em Python com controle de caixa (entradas e saídas), gestão de estoque por produto e geração de relatórios de vendas, com persistência de dados local e interface simples para uso diário sem depender de internet.",
    resultado:
      "Sistema em uso na operação real da distribuidora, dando controle direto sobre o fluxo de caixa e o estoque disponível, com relatórios para acompanhar as vendas ao longo do tempo.",
    metricas: [
      { label: "Controle de caixa", valor: "Tempo real" },
      { label: "Estoque", valor: "Por produto" },
      { label: "Relatórios", valor: "De vendas" },
    ],
    stack: ["Python", "JSON", "Tkinter"],
    cor: "#D9784F",
    destaque: true,
  },
];
