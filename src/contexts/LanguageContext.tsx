import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys
const translations = {
  en: {
    // Header
    'nav.about': 'About Me',
    'nav.experience': 'Experience',
    'nav.skills': 'Technical Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact Me',
    'nav.projects': 'Projects',
    
    // Hero Section
    'hero.title': 'Hi, Nice to meet you!',
    'hero.intro': 'My name is Henry Lee, and I am an Expert Full Stack & Blockchain Developer with over 8 years of experience.',
    'hero.specialization': 'I specialize in building secure, scalable web applications and delivering decentralized solutions tailored to client needs.',
    'hero.expertise': 'My core expertise lies in the React and MERN stack, along with strong proficiency in Blockchain technologies.',
    'hero.achievements': 'Over the years, I have successfully led and contributed to projects that required high performance, reliability, and innovation.',
    'hero.passion': 'I am passionate about translating complex requirements into efficient solutions that help businesses grow.',
    
    // Contact Section
    'contact.title': "Let's Work Together",
    'contact.subtitle': "Ready to bring your next project to life? I'm currently available for freelance opportunities.",
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.connect': "Let's Connect",
    'contact.description': "I'm always interested in discussing new opportunities, whether it's a challenging project, a great team to work with, or just to have a chat about technology.",
    'contact.github': 'Check out',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'A showcase of my recent work and technical expertise',
    'projects.technologies': 'Technologies Used:',
    
    // Project descriptions
    'project1.title': 'healthcare SaaS platform',
    'project1.description': 'This Healthcare SASS Planform is a planform that monitors people\'s health indicators in real time and provides artificial intelligence responses tailored to the corresponding symptoms.',
    
    'project2.title': 'Hi Gas - Fuel Tank Driver Booking Application similar to Uber',
    'project2.description': 'This app revolutionizes fuel delivery by enabling users to book drivers, track deliveries in real time, manage secure payments, and access detailed records and 24/7 support.',
    
    'project3.title': 'AI Skincare Tracker iOS App',
    'project3.description': 'I developed an iOS skincare app with AI face scanning that tracks skin health, offers personalized routines, and features progress charts, habit tracking, and a sleek dark mode design.',
    
    'project4.title': 'BurstMode.AI - AI-powered photography platform',
    'project4.description': 'Burst Mode is an AI-powered platform that transforms photography by enabling users to generate professional headshots, product photos, and stylized content with advanced artificial intelligence.',
    
    'project5.title': 'Enhanced RAG AI Agent & Automated Document Ingestion Workflow',
    'project5.description': 'A growing knowledge-management firm enhanced its RAG pipeline in n8n to autonomously process hundreds of Google Drive documents daily, maintaining a clean vector index and delivering 95% relevance in answering internal and client queries.',
    
    'project6.title': 'Nimbus Platform',
    'project6.description': 'A DeFi solutions provider aims to be a one-stop platform that seamlessly integrates multiple revenue-generating services, catering to everyone from crypto beginners to seasoned enthusiasts.',
    
    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technologies and tools I work with',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.database': 'Database & Storage',
    'skills.cloud': 'Cloud & DevOps',
    'skills.blockchain': 'Blockchain & Web3',
    'skills.tools': 'Tools & Others',
    'skills.fullstack': 'Full Stack Frameworks',
    'skills.styling': 'Styling & UI',
    'skills.ecommerce': 'E-commerce',
    'skills.achievements': 'Notable Achievements',
    'skills.project_value': 'Software Project Value',
    'skills.project_value_desc': 'Led from design to distribution as senior engineer',
    'skills.query_efficiency': 'Query Efficiency',
    'skills.query_efficiency_desc': 'Improved by redesigning MySQL databases',
    'skills.cost_reduction': 'Cost Reduction',
    'skills.cost_reduction_desc': 'Chatbot implementation for customer service',
    
    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.subtitle': 'My career journey and key achievements',
    'experience.current': 'Current',
    
    // Experience entries
    'exp1.title': 'Expert Full Stack & Blockchain Developer',
    'exp1.company': 'Freelancer',
    'exp1.location': 'Ontario, Canada',
    'exp1.period': '01/2025 - Present',
    'exp1.achievement1': 'Built full-stack decentralized applications (DApps) integrating smart contracts with React, Web3.js, and Node.js',
    'exp1.achievement2': 'Developed backend systems to interact with MongoDB and PostgreSQL databases',
    'exp1.achievement3': 'Created RESTful APIs to interface with smart contracts and blockchain networks',
    
    'exp2.title': 'Senior Full Stack & Blockchain Developer',
    'exp2.company': 'OpenText',
    'exp2.location': 'Waterloo, Canada',
    'exp2.period': '2021 - 12/2024',
    'exp2.achievement1': 'Developed and deployed smart contracts on Ethereum and Binance Smart Chain (ERC-20, ERC-721, ERC-1155)',
    'exp2.achievement2': 'Moved automation solution into commercial software generating $55k/year',
    'exp2.achievement3': 'Designed reusable software components used in 4 projects, reducing development effort by 40%',
    'exp2.achievement4': 'Re-engineered critical modules to optimize performance by 59%',
    'exp2.achievement5': 'Rated with best annual performance rating (top ~5% employees)',
    
    'exp3.title': 'Software Developer',
    'exp3.company': 'Hodfords',
    'exp3.location': 'Hong Kong, Hong Kong',
    'exp3.period': '07/2017 - 2021',
    'exp3.achievement1': 'Generated $15k in new license sales within first 3 weeks through responsive customer support',
    'exp3.achievement2': 'Improved user interfaces by 6% in sales through intuitive menu updates',
    'exp3.achievement3': 'Reduced processing time by 65% (14+ seconds to <5 seconds) for 70k-100k instruments',
    'exp3.achievement4': 'Led tech stack revamp resulting in 30% decrease in server costs',
    
    // Education Section
    'education.title': 'Education & Certifications',
    'education.subtitle': 'Academic background and professional certifications',
    'education.academic': 'Academic Background',
    'education.recognition': 'Recognition & Leadership',
    'education.gold_medalist': 'Gold Medalist',
    'education.gold_medalist_desc': 'Awarded gold medal for 5 years of consecutive excellence in academics (2013-2017)',
    'education.csr': 'Corporate Social Responsibility',
    'education.csr_desc': 'Volunteered in CSR team for Amadeus, organized tuition platforms for underprivileged, designed confluence page for book drives',
    
    // Education entries
    'education.degree1': 'Faculty of Mathematics',
    'education.institution1': 'University of Waterloo',
    'education.location1': 'Ontario, Canada',
    'education.period1': '2013 - 06/2017',
    'education.type1': 'Bachelor\'s Degree',
    'education.achievement1': 'Gold Medalist - 5 years consecutive academic excellence (2013-2017)',
    
    'education.degree2': 'Software Licensing and Distribution',
    'education.institution2': 'Kenfil Hong Kong',
    'education.location2': 'Wanchai, Hong Kong',
    'education.period2': '2009 - 2012',
    'education.type2': 'Specialization',
    'education.achievement2': 'Specialized training in software distribution and licensing',
    
    // Tech Stacks
    'techstacks.title': 'Technology Stacks',
    'techstacks.subtitle': 'The technologies I use to build amazing applications',
  },
  pt: {
    // Header
    'nav.about': 'Sobre Mim',
    'nav.experience': 'Experiência',
    'nav.skills': 'Habilidades Técnicas',
    'nav.education': 'Educação',
    'nav.contact': 'Entre em Contato',
    'nav.projects': 'Projetos',
    
    // Hero Section
    'hero.title': 'Olá, Prazer em conhecê-lo!',
    'hero.intro': 'Meu nome é Henry Lee, e sou um Desenvolvedor Full Stack e Blockchain Expert com mais de 8 anos de experiência.',
    'hero.specialization': 'Especializo-me em construir aplicações web seguras e escaláveis e fornecer soluções descentralizadas adaptadas às necessidades dos clientes.',
    'hero.expertise': 'Minha expertise principal está no React e MERN stack, junto com forte proficiência em tecnologias Blockchain.',
    'hero.achievements': 'Ao longo dos anos, liderei e contribuí com sucesso para projetos que exigiram alta performance, confiabilidade e inovação.',
    'hero.passion': 'Sou apaixonado por traduzir requisitos complexos em soluções eficientes que ajudam as empresas a crescer.',
    
    // Contact Section
    'contact.title': 'Vamos Trabalhar Juntos',
    'contact.subtitle': 'Pronto para dar vida ao seu próximo projeto? Estou atualmente disponível para oportunidades de freelancer.',
    'contact.info': 'Informações de Contato',
    'contact.email': 'Email',
    'contact.location': 'Localização',
    'contact.connect': 'Vamos Conectar',
    'contact.description': 'Estou sempre interessado em discutir novas oportunidades, seja um projeto desafiador, uma grande equipe para trabalhar, ou apenas para conversar sobre tecnologia.',
    'contact.github': 'Confira',
    
    // Projects
    'projects.title': 'Meus Projetos',
    'projects.subtitle': 'Uma vitrine do meu trabalho recente e expertise técnica',
    'projects.technologies': 'Tecnologias Utilizadas:',
    
    // Project descriptions
    'project1.title': 'plataforma SaaS de saúde',
    'project1.description': 'Esta Plataforma SaaS de Saúde é uma plataforma que monitora indicadores de saúde das pessoas em tempo real e fornece respostas de inteligência artificial adaptadas aos sintomas correspondentes.',
    
    'project2.title': 'Hi Gas - Aplicativo de Reserva de Motoristas de Tanque de Combustível similar ao Uber',
    'project2.description': 'Este aplicativo revoluciona a entrega de combustível permitindo que os usuários reservem motoristas, rastreiem entregas em tempo real, gerenciem pagamentos seguros e acessem registros detalhados e suporte 24/7.',
    
    'project3.title': 'App iOS de Rastreamento de Pele com IA',
    'project3.description': 'Desenvolvi um aplicativo iOS de cuidados com a pele com escaneamento facial por IA que rastreia a saúde da pele, oferece rotinas personalizadas e apresenta gráficos de progresso, rastreamento de hábitos e um design elegante no modo escuro.',
    
    'project4.title': 'BurstMode.AI - plataforma de fotografia com IA',
    'project4.description': 'Burst Mode é uma plataforma com IA que transforma a fotografia permitindo que os usuários gerem fotos profissionais de cabeça, fotos de produtos e conteúdo estilizado com inteligência artificial avançada.',
    
    'project5.title': 'Agente RAG IA Aprimorado e Fluxo de Trabalho de Ingestão Automatizada de Documentos',
    'project5.description': 'Uma empresa de gestão de conhecimento em crescimento aprimorou seu pipeline RAG no n8n para processar autonomamente centenas de documentos do Google Drive diariamente, mantendo um índice vetorial limpo e entregando 95% de relevância ao responder consultas internas e de clientes.',
    
    'project6.title': 'Plataforma Nimbus',
    'project6.description': 'Um provedor de soluções DeFi visa ser uma plataforma única que integra perfeitamente múltiplos serviços geradores de receita, atendendo desde iniciantes em cripto até entusiastas experientes.',
    
    // Skills Section
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Tecnologias e ferramentas com as quais trabalho',
    'skills.frontend': 'Desenvolvimento Frontend',
    'skills.backend': 'Desenvolvimento Backend',
    'skills.database': 'Banco de Dados e Armazenamento',
    'skills.cloud': 'Cloud e DevOps',
    'skills.blockchain': 'Blockchain e Web3',
    'skills.tools': 'Ferramentas e Outros',
    'skills.fullstack': 'Frameworks Full Stack',
    'skills.styling': 'Estilização e UI',
    'skills.ecommerce': 'E-commerce',
    'skills.achievements': 'Conquistas Notáveis',
    'skills.project_value': 'Valor do Projeto de Software',
    'skills.project_value_desc': 'Liderou do design à distribuição como engenheiro sênior',
    'skills.query_efficiency': 'Eficiência de Consulta',
    'skills.query_efficiency_desc': 'Melhorou redesenhando bancos de dados MySQL',
    'skills.cost_reduction': 'Redução de Custos',
    'skills.cost_reduction_desc': 'Implementação de chatbot para atendimento ao cliente',
    
    // Experience Section
    'experience.title': 'Experiência Profissional',
    'experience.subtitle': 'Minha jornada profissional e conquistas principais',
    'experience.current': 'Atual',
    
    // Experience entries
    'exp1.title': 'Desenvolvedor Full Stack e Blockchain Expert',
    'exp1.company': 'Freelancer',
    'exp1.location': 'Ontário, Canadá',
    'exp1.period': '01/2025 - Presente',
    'exp1.achievement1': 'Construiu aplicações descentralizadas full-stack (DApps) integrando contratos inteligentes com React, Web3.js e Node.js',
    'exp1.achievement2': 'Desenvolveu sistemas backend para interagir com bancos de dados MongoDB e PostgreSQL',
    'exp1.achievement3': 'Criou APIs RESTful para interface com contratos inteligentes e redes blockchain',
    
    'exp2.title': 'Desenvolvedor Full Stack e Blockchain Sênior',
    'exp2.company': 'OpenText',
    'exp2.location': 'Waterloo, Canadá',
    'exp2.period': '2021 - 12/2024',
    'exp2.achievement1': 'Desenvolveu e implantou contratos inteligentes na Ethereum e Binance Smart Chain (ERC-20, ERC-721, ERC-1155)',
    'exp2.achievement2': 'Moveu solução de automação para software comercial gerando $55k/ano',
    'exp2.achievement3': 'Projetou componentes de software reutilizáveis usados em 4 projetos, reduzindo esforço de desenvolvimento em 40%',
    'exp2.achievement4': 'Re-engenhou módulos críticos para otimizar performance em 59%',
    'exp2.achievement5': 'Avaliado com melhor classificação de performance anual (top ~5% funcionários)',
    
    'exp3.title': 'Desenvolvedor de Software',
    'exp3.company': 'Hodfords',
    'exp3.location': 'Hong Kong, Hong Kong',
    'exp3.period': '07/2017 - 2021',
    'exp3.achievement1': 'Gerou $15k em novas vendas de licenças nas primeiras 3 semanas através de suporte responsivo ao cliente',
    'exp3.achievement2': 'Melhorou interfaces de usuário em 6% nas vendas através de atualizações intuitivas de menu',
    'exp3.achievement3': 'Reduziu tempo de processamento em 65% (14+ segundos para <5 segundos) para 70k-100k instrumentos',
    'exp3.achievement4': 'Liderou reforma da stack tecnológica resultando em 30% de diminuição nos custos do servidor',
    
    // Education Section
    'education.title': 'Educação e Certificações',
    'education.subtitle': 'Formação acadêmica e certificações profissionais',
    'education.academic': 'Formação Acadêmica',
    'education.recognition': 'Reconhecimento e Liderança',
    'education.gold_medalist': 'Medalhista de Ouro',
    'education.gold_medalist_desc': 'Concedida medalha de ouro por 5 anos consecutivos de excelência acadêmica (2013-2017)',
    'education.csr': 'Responsabilidade Social Corporativa',
    'education.csr_desc': 'Voluntariei-me na equipe de RSC da Amadeus, organizei plataformas de tutoria para carentes, projetei página do Confluence para campanhas de livros',
    
    // Education entries
    'education.degree1': 'Faculdade de Matemática',
    'education.institution1': 'Universidade de Waterloo',
    'education.location1': 'Ontário, Canadá',
    'education.period1': '2013 - 06/2017',
    'education.type1': 'Bacharelado',
    'education.achievement1': 'Medalhista de Ouro - 5 anos consecutivos de excelência acadêmica (2013-2017)',
    
    'education.degree2': 'Licenciamento e Distribuição de Software',
    'education.institution2': 'Kenfil Hong Kong',
    'education.location2': 'Wanchai, Hong Kong',
    'education.period2': '2009 - 2012',
    'education.type2': 'Especialização',
    'education.achievement2': 'Treinamento especializado em distribuição e licenciamento de software',
    
    // Tech Stacks
    'techstacks.title': 'Stacks Tecnológicos',
    'techstacks.subtitle': 'As tecnologias que uso para construir aplicações incríveis',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};