import { Language } from '../contexts/LanguageContext';

export const translations = {
  en: {
    // Header
    home: 'HOME',
    smartAssistant: 'SMART ASSISTANT',
    services: 'SERVICES',
    more: 'MORE',
    about: 'About',
    contact: 'Contact',
    
    // Hero Section
    welcome: 'WELCOME',
    heroTitle1: 'All Channels.',
    heroTitle2: 'One Voice.',
    heroTitle3: 'Total',
    heroTitle4: 'Connection',
    heroDescription: 'From first inquiry to final offer, we connect buyers and sellers through every channel with clarity and ease.',
        
    // Features Section
    featuresTitle: 'WHAT IS "TOTAL CONNECTION"?',
    //feature1Title: 'Faster Lead Response and Higher Conversion Rates',
    feature1Title: 'Faster Lead Response',
    feature1Description: 'With all channels (calls, emails, texts, web chats) connected in one system:',
    feature1Bullet1: 'Sales reps are alerted in real time when a lead comes in, regardless of the channel.',
    feature1Bullet2: 'They can follow up immediately with full context of prior interactions.',
    feature1Result: 'Rapid response = better first impressions and significantly higher close rates.',
    
    feature2Title: 'Improved Customer Experience',
    feature2Description: 'Integrated communications unify all customer touchpoints—voice, chat, email, SMS, and web—into a seamless experience. This ensures:',
    feature2Bullet1: 'Faster response times',
    feature2Bullet2: 'Consistent messaging',
    feature2Bullet3: 'Context-aware support (agents can see all past interactions regardless of channel)',
    feature2Result: 'Happier customers.',
    
    feature3Title: 'Increased Efficiency and Productivity',
    feature3Description: 'With all communication channels connected in one platform, your team can:',
    feature3Bullet1: 'Handle multiple interactions more easily',
    feature3Bullet2: 'Avoid switching between tools',
    feature3Bullet3: 'Access shared data and histories instantly',
    feature3Result: 'Reduced handling times, fewer errors, and better collaboration among departments.',
    
    // Mission/Vision Section
    whySmartDialogs: 'WHY SMART DIALOGS AI?',
    missionCard1Title: 'CRAFTING INTUITIVE,',
    missionCard1Title2: 'ELEGANT INTERFACES',
    missionCard1Subtitle: 'UNIFYING COMMUNICATION',
    missionCard1Subtitle2: 'CHANNELS',
    missionTitle: 'Mission',
    missionText: 'To craft intuitive, elegant interfaces and unify communication channels—voice, web, chat, and SMS—into seamless, user-centric experiences that empower businesses to connect with their customers effortlessly and meaningfully.',
    
    togetherTitle1: 'TOGETHER',
    togetherTitle2: 'WE SUCCEED',
    togetherText1: 'We believe that real success happens through partnership. That\'s why our approach goes beyond just building beautiful interfaces and connecting communication channels—it\'s about aligning with your sales goals and helping you reach them faster. Our solutions are designed to turn every interaction into opportunity, making it easier for your tea',
    togetherText2: 'to engage with customers across all channels. We\'re committed to helping your business grow through seamless communication and exceptional user experiences.',
    showMore: 'Show More',
    showLess: 'Show Less',
    
    //visionCard1Title: 'SETTING THE STANDARD',
    visionCard1Title: 'SETTING THE STANDARD',
    visionCard1Title2: 'IN INTEGRATED COMMUNICATION',
    visionCard1Title3: '',
    visionCard1Subtitle: 'WHERE CONVERSATIONS ARE SIMPLE',
    visionCard1Subtitle2: 'AND BEAUTIFULLY CONNECTED',
    visionCard1Subtitle3: '',
    visionTitle: 'Vision',
    visionText: 'To be the leading provider of data analytics services, constantly pushing the boundaries of what\'s possible through technology, expertise, and unparalleled customer satisfaction.',
    
    // Footer
    copyright: 'COPYRIGHT © 2025 SMART DIALOG AI - ALL RIGHTS RESERVED.',
    poweredBy: 'POWERED BY Phase4Systems.COM',
    terms: 'Terms and Conditions',
    privacy: 'Privacy Policy',
    result: 'Result:',
    
    // Smart Assistant Page
    smartAssistantTitle: 'Smart Assistant',
    smartAssistantTagline: 'All Channels, One Voice. Total Connection.',
    smartAssistantDescription: 'Smart Assistant is your always-on, multilingual phone companion—designed specifically for small and medium-sized businesses. It handles incoming calls, sends SMS and WhatsApp messages, and ensures you never miss a customer interaction. Whether you\'re a boutique shop or a growing service provider, Smart Assistant helps you stay connected, professional, and responsive—without breaking the bank.',
    neverMissCall: 'Never miss a call',
    expandCommunication: 'Expand communication to SMS & WhatsApp',
    multilingualAvailability: 'Multilingual & 24/7 availability',
    fullyBrandable: 'Fully brandable to match your business',
    choosePersonas: 'Choose from multiple personas (corporate, casual, male, female, etc.)',
    scalesWithBusiness: 'Scales with your business needs',
    
    keyFeatures: 'Key Features',
    keyFeaturesSubtitle: 'Affordable, Scalable and Professional.',
    automatedAssistance: '24/7 Automated Assistance: Always available to greet and assist callers.',
    customizableResponses: 'Customizable Responses: Tailor messages to fit your brand voice.',
    analyticsDashboard: 'Analytics Dashboard: Track performance and customer interactions.',
    multiChannelIntegration: 'Multi Channel Integration: Works seamlessly with SMS, WhatsApp, email, and Messenger.',
    personaSelection: 'Persona Selection: Choose the assistant personality that fits your clientele.',
    subscribeNow: 'SUBSCRIBE NOW',
    connectWithUs: 'CONNECT WITH US',
    
    // Services Page
    ourServices: 'OUR SERVICES',
    
    // IVR Service
    ivrTitle: 'Interactive voice response (IVR) solutions',
    ivrSubtitle: 'Give your customers faster answers—and your team a break—with a smarter IVR.',
    ivrDescription: 'Using Smart Dialog, you can build a modern, AI-powered phone system that helps customers help themselves. It\'s logic-driven, easy to use, and reduces the need for live agents, so your support stays sharp, efficient, and always available.',
    
    // Alerts Service
    alertsTitle: 'Alerts and notifications',
    alertsSubtitle: 'Keep your customers in the loop—and ready to act—with personalized messages that actually get through.',
    alertsDescription: 'Whether it\'s a quick email, a phone call, or a message on WhatsApp or SMS, Smart Dialog makes sure your notifications land exactly where they need to. Reach people on the channels they trust most, and turn every update into meaningful action.',
    
    // User Auth Service
    userAuthTitle: 'User Authentication & Identity Verification',
    userAuthSubtitle: 'Keep every interaction safe and seamless with Smart Dialog\'s User Authentication and Identity tools.',
    userAuthDescription: 'We make it easy to verify who\'s who—fast. By using smart signals and trusted data, we help you protect transactions, prevent fraud, and give your customers the confidence to engage, every step of the way.',
    
    learnMore: 'LEARN MORE',
    readyForMore: 'Ready for more?',
    readyForMoreSubtitle: 'Let\'s talk about how Smart Dialog can help you.',
    contactUs: 'CONTACT US',
    
    // Contact Page
    contactPageTitle: 'CONTACT US',
    contactHeading: 'Let\'s build the perfect solution for your business.',
    contactSubheading: 'Share a few details with us, and we\'ll get back to you with tailored ideas that match your goals—fast.',
    nameLabel: 'Name',
    emailLabel: 'Email*',
    messageLabel: 'Message',
    signUpNewsletter: 'Sign up for our email list for updates, promotions, and more.',
    sendButton: 'SEND',
    messageSent: "Message sent successfully! We'll get back to you soon.",
    privacyNotice: 'This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.',
    messageWhatsApp: 'Message us on WhatsApp',
    contactInformation: 'Contact information:',
    mailAddress: 'mail address: 24600 Katy Fwy Ste 834-2154 Katy, TX 77494-7819',
    emailAddress: 'email: contact@smartdialog-ai.com',
    callOrSMS: 'call or SMS us: (657) 378-0660',
    hours: 'Hours',
    openToday: 'Open today 09:00 am – 05:00 pm',
    allHoursCST: 'all hours in Central Standard Time',
  },
  es: {
    // Header
    home: 'INICIO',
    smartAssistant: 'ASISTENTE INTELIGENTE',
    services: 'SERVICIOS',
    more: 'MÁS',
    about: 'Acerca de',
    contact: 'CONTACTO',
    
    // Hero Section
    welcome: 'BIENVENIDO',
    heroTitle1: 'Todos los Canales.',
    heroTitle2: 'Una Voz.',
    heroTitle3: 'Conexión',
    heroTitle4: 'Total',
    heroDescription: 'Desde la primera consulta hasta la oferta final, conectamos compradores y vendedores a través de todos los canales con claridad y facilidad.',
        
    // Features Section
    featuresTitle: '¿QUÉ ES "CONEXIÓN TOTAL"?',
    //feature1Title: 'Respuesta Más Rápida a Clientes Potenciales y Tasas de Conversión Más Altas',
    feature1Title: 'Respuesta Más Rápidas',
    feature1Description: 'Con todos los canales (llamadas, correos electrónicos, mensajes de texto, chats web) conectados en un solo sistema:',
    feature1Bullet1: 'Los representantes de ventas son alertados en tiempo real cuando entra un cliente potencial, sin importar el canal.',
    feature1Bullet2: 'Pueden hacer seguimiento inmediatamente con el contexto completo de interacciones anteriores.',
    feature1Result: 'Respuesta rápida = mejores primeras impresiones y tasas de cierre significativamente más altas.',
    
    feature2Title: 'Experiencia del Cliente Mejorada',
    feature2Description: 'Las comunicaciones integradas unifican todos los puntos de contacto con el cliente—voz, chat, correo electrónico, SMS y web—en una experiencia perfecta. Esto asegura:',
    feature2Bullet1: 'Tiempos de respuesta más rápidos',
    feature2Bullet2: 'Mensajes consistentes',
    feature2Bullet3: 'Soporte con contexto (los agentes pueden ver todas las interacciones pasadas sin importar el canal)',
    feature2Result: 'Clientes más felices.',
    
    feature3Title: 'Mayor Eficiencia y Productividad',
    feature3Description: 'Con todos los canales de comunicación conectados en una sola plataforma, su equipo puede:',
    feature3Bullet1: 'Manejar múltiples interacciones más fácilmente',
    feature3Bullet2: 'Evitar cambiar entre herramientas',
    feature3Bullet3: 'Acceder a datos e historiales compartidos instantáneamente',
    feature3Result: 'Tiempos de manejo reducidos, menos errores y mejor colaboración entre departamentos.',
    
    // Mission/Vision Section
    whySmartDialogs: '¿POR QUÉ SMART DIALOGS AI?',
    missionCard1Title: 'CREANDO INTERFACES',
    missionCard1Title2: 'INTUITIVAS Y ELEGANTES',
    missionCard1Subtitle: 'UNIFICANDO CANALES',
    missionCard1Subtitle2: 'DE COMUNICACIÓN',
    missionTitle: 'Misión',
    missionText: 'Crear interfaces intuitivas y elegantes y unificar los canales de comunicación—voz, web, chat y SMS—en experiencias perfectas y centradas en el usuario que empoderan a las empresas para conectarse con sus clientes de manera fácil y significativa.',
    
    togetherTitle1: 'JUNTOS',
    togetherTitle2: 'TENEMOS ÉXITO',
    togetherText1: 'Creemos que el verdadero éxito ocurre a través de la colaboración. Por eso nuestro enfoque va más allá de simplemente construir interfaces hermosas y conectar canales de comunicación—se trata de alinearnos con sus objetivos de ventas y ayudarle a alcanzarlos más rápido. Nuestras soluciones están diseñadas para convertir cada interacción en oportunidad, facilitando que su equipo',
    togetherText2: 'se conecte con los clientes a través de todos los canales. Estamos comprometidos a ayudar a su negocio a crecer a través de comunicación fluida y experiencias de usuario excepcionales.',
    showMore: 'Mostrar Más',
    showLess: 'Mostrar Menos',
    
    visionCard1Title: 'ESTABLECIENDO EL ESTÁNDAR',
    visionCard1Title2: 'DE COMINICACIÓN INTEGRADA',
    visionCard1Title3: '',
    visionCard1Subtitle: 'DONDE CADA CONVERSACIÓN ES SIMPLE',
    visionCard1Subtitle2: 'Y BELLAMENTE CONECTADA',
    visionCard1Subtitle3: '',
    visionTitle: 'Visión',
    visionText: 'Ser el proveedor líder de servicios de análisis de datos, constantemente empujando los límites de lo que es posible a través de tecnología, experiencia y satisfacción del cliente sin igual.',
    
    // Footer
    copyright: 'COPYRIGHT © 2025 SMART DIALOG AI - TODOS LOS DERECHOS RESERVADOS.',
    poweredBy: 'IMPULSADO POR Phase4Systems.COM',
    terms: 'Términos y Condiciones',
    privacy: 'Política de Privacidad',
    result: 'Resultado:',
    
    // Smart Assistant Page
    smartAssistantTitle: 'Asistente Inteligente',
    smartAssistantTagline: 'Todos los Canales, Una Voz. Conexión Total.',
    smartAssistantDescription: 'Smart Assistant es su compañero telefónico multilingüe siempre activo, diseñado específicamente para pequeñas y medianas empresas. Maneja llamadas entrantes, envía mensajes SMS y WhatsApp, y asegura que nunca pierda una interacción con el cliente. Ya sea una boutique o un proveedor de servicios en crecimiento, Smart Assistant le ayuda a mantenerse conectado, profesional y receptivo, sin gastar demasiado.',
    neverMissCall: 'Nunca pierda una llamada',
    expandCommunication: 'Expanda la comunicación a SMS y WhatsApp',
    multilingualAvailability: 'Disponibilidad multilingüe y 24/7',
    fullyBrandable: 'Totalmente personalizable para su negocio',
    choosePersonas: 'Elija entre múltiples personalidades (corporativa, casual, masculina, femenina, etc.)',
    scalesWithBusiness: 'Se adapta a las necesidades de su negocio',
    
    keyFeatures: 'Características Clave',
    keyFeaturesSubtitle: 'Asequible, Escalable y Profesional.',
    automatedAssistance: 'Asistencia Automatizada 24/7: Siempre disponible para saludar y asistir a los llamadores.',
    customizableResponses: 'Respuestas Personalizables: Adapte los mensajes a la voz de su marca.',
    analyticsDashboard: 'Panel de Análisis: Rastree el rendimiento y las interacciones con los clientes.',
    multiChannelIntegration: 'Integración Multicanal: Funciona perfectamente con SMS, WhatsApp, correo electrónico y Messenger.',
    personaSelection: 'Selección de Personalidad: Elija la personalidad del asistente que se adapte a su clientela.',
    subscribeNow: 'SUSCRÍBASE AHORA',
    connectWithUs: 'CONÉCTESE CON NOSOTROS',
    
    // Services Page
    ourServices: 'NUESTROS SERVICIOS',
    
    // IVR Service
    ivrTitle: 'Soluciones de respuesta de voz interactiva (IVR)',
    ivrSubtitle: 'Dale a tus clientes respuestas más rápidas—y a tu equipo un descanso—con un IVR más inteligente.',
    ivrDescription: 'Usando Smart Dialog, puedes construir un sistema telefónico moderno y alimentado por IA que ayuda a los clientes a ayudarse a sí mismos. Es lógicamente impulsado, fácil de usar y reduce la necesidad de agentes en vivo, por lo que tu soporte se mantiene afilado, eficiente y siempre disponible.',
    
    // Alerts Service
    alertsTitle: 'Alertas y notificaciones',
    alertsSubtitle: 'Mantén a tus clientes informados—y listos para actuar—con mensajes personalizados que realmente llegan.',
    alertsDescription: 'Ya sea un correo electrónico rápido, una llamada telefónica, un mensaje en WhatsApp o SMS, Smart Dialog se asegura de que tus notificaciones lleguen exactamente donde deben. Llega a las personas en los canales que más confían, y convierte cada actualización en una acción significativa.',
    
    // User Auth Service
    userAuthTitle: 'Autenticación de Usuarios y Verificación de Identidad',
    userAuthSubtitle: 'Mantén cada interacción segura y fluida con las herramientas de Autenticación de Usuarios e Identidad de Smart Dialog.',
    userAuthDescription: 'Hacemos que sea fácil verificar quién es quién—rápidamente. Usando señales inteligentes y datos de confianza, ayudamos a proteger las transacciones, prevenir el fraude y dar a tus clientes la confianza de interactuar, en cada paso del camino.',
    
    learnMore: 'APRENDER MÁS',
    readyForMore: '¿Listo para más?',
    readyForMoreSubtitle: 'Hablemos sobre cómo Smart Dialog puede ayudarte.',
    contactUs: 'CONTÁCTANOS',
    
    // Contact Page
    contactPageTitle: 'CONTÁCTANOS',
    contactHeading: 'Construyamos la solución perfecta para tu negocio.',
    contactSubheading: 'Comparte algunos detalles con nosotros, y te responderemos con ideas personalizadas que se ajusten a tus objetivos—rápido.',
    nameLabel: 'Nombre',
    emailLabel: 'Correo Electrónico*',
    messageLabel: 'Mensaje',
    signUpNewsletter: 'Suscríbete a nuestra lista de correo para actualizaciones, promociones y más.',
    sendButton: 'ENVIAR',
    messageSent: "Mensaje enviado con éxito. Te responderemos pronto.",
    privacyNotice: 'Este sitio está protegido por reCAPTCHA y se aplican la Política de Privacidad y los Términos de Servicio de Google.',
    messageWhatsApp: 'Envíanos un mensaje por WhatsApp',
    contactInformation: 'Información de contacto:',
    mailAddress: 'dirección postal: 24600 Katy Fwy Ste 834-2154 Katy, TX 77494-7819',
    emailAddress: 'correo: contact@smartdialog-ai.com',
    callOrSMS: 'llámanos o envíanos SMS: (657) 378-0660',
    hours: 'Horario',
    openToday: 'Abierto hoy 09:00 am – 05:00 pm',
    allHoursCST: 'todos los horarios en hora estándar central',
  },
  pt: {
    // Header
    home: 'INÍCIO',
    smartAssistant: 'ASSISTENTE INTELIGENTE',
    services: 'SERVIÇOS',
    more: 'MAIS',
    about: 'Sobre',
    contact: 'CONTATO',
    
    // Hero Section
    welcome: 'BEM-VINDO',
    heroTitle1: 'Todos os Canais.',
    heroTitle2: 'Uma Voz.',
    heroTitle3: 'Conexão',
    heroTitle4: 'Total',
    heroDescription: 'Da primeira consulta até a oferta final, conectamos compradores e vendedores através de todos os canais com clareza e facilidade.',
        
    // Features Section
    featuresTitle: 'O QUE É "CONEXÃO TOTAL"?',
    //feature1Title: 'Resposta Mais Rápida a Leads e Taxas de Conversão Mais Altas',
    feature1Title: 'Resposta Mais Rápida',
    feature1Description: 'Com todos os canais (chamadas, e-mails, mensagens de texto, chats web) conectados em um único sistema:',
    feature1Bullet1: 'Os representantes de vendas são alertados em tempo real quando um lead chega, independentemente do canal.',
    feature1Bullet2: 'Eles podem fazer o acompanhamento imediatamente com o contexto completo das interações anteriores.',
    feature1Result: 'Resposta rápida = melhores primeiras impressões e taxas de fechamento significativamente mais altas.',
    
    feature2Title: 'Experiência do Cliente Aprimorada',
    feature2Description: 'As comunicações integradas unificam todos os pontos de contato com o cliente—voz, chat, e-mail, SMS e web—em uma experiência perfeita. Isso garante:',
    feature2Bullet1: 'Tempos de resposta mais rápidos',
    feature2Bullet2: 'Mensagens consistentes',
    feature2Bullet3: 'Suporte com contexto (agentes podem ver todas as interações passadas independentemente do canal)',
    feature2Result: 'Clientes mais satisfeitos.',
    
    feature3Title: 'Maior Eficiência e Produtividade',
    feature3Description: 'Com todos os canais de comunicação conectados em uma única plataforma, sua equipe pode:',
    feature3Bullet1: 'Lidar com múltiplas interações mais facilmente',
    feature3Bullet2: 'Evitar trocar entre ferramentas',
    feature3Bullet3: 'Acessar dados e históricos compartilhados instantaneamente',
    feature3Result: 'Tempos de atendimento reduzidos, menos erros e melhor colaboração entre departamentos.',
    
    // Mission/Vision Section
    whySmartDialogs: 'POR QUE SMART DIALOGS AI?',
    missionCard1Title: 'CRIANDO INTERFACES',
    missionCard1Title2: 'INTUITIVAS E ELEGANTES',
    missionCard1Subtitle: 'UNIFICANDO CANAIS',
    missionCard1Subtitle2: 'DE COMUNICAÇÃO',
    missionTitle: 'Missão',
    missionText: 'Criar interfaces intuitivas e elegantes e unificar canais de comunicação—voz, web, chat e SMS—em experiências perfeitas e centradas no usuário que capacitam empresas a se conectarem com seus clientes de forma fácil e significativa.',
    
    togetherTitle1: 'JUNTOS',
    togetherTitle2: 'TEMOS SUCESSO',
    togetherText1: 'Acreditamos que o verdadeiro sucesso acontece através de parceria. É por isso que nossa abordagem vai além de simplesmente construir interfaces bonitas e conectar canais de comunicação—trata-se de alinhar com seus objetivos de vendas e ajudá-lo a alcançá-los mais rápido. Nossas soluções são projetadas para transformar cada interação em oportunidade, facilitando para sua equipe',
    togetherText2: 'se conectar com clientes através de todos os canais. Estamos comprometidos em ajudar seu negócio a crescer através de comunicação fluida e experiências de usuário excepcionais.',
    showMore: 'Mostrar Mais',
    showLess: 'Mostrar Menos',
    
    visionCard1Title: 'ESTABELECENDO O PADRÃO',
    visionCard1Title2: 'PARA COMUNICAÇÃO INTEGRADA',
    visionCard1Title3: '',
    visionCard1Subtitle: 'ONDE CADA CONVERSA É SIMPLES',
    visionCard1Subtitle2: 'E LINDAMENTE CONECTADA',
    visionCard1Subtitle3: '',
    visionTitle: 'Visão',
    visionText: 'Ser o fornecedor líder de serviços de análise de dados, constantemente ultrapassando os limites do que é possível através de tecnologia, expertise e satisfação do cliente incomparável.',
    
    // Footer
    copyright: 'COPYRIGHT © 2025 SMART DIALOG AI - TODOS OS DIREITOS RESERVADOS.',
    poweredBy: 'DESENVOLVIDO POR Phase4Systems.COM',
    terms: 'Termos e Condições',
    privacy: 'Política de Privacidade',
    result: 'Resultado:',
    
    // Smart Assistant Page
    smartAssistantTitle: 'Assistente Inteligente',
    smartAssistantTagline: 'Todos os Canais, Uma Voz. Conexão Total.',
    smartAssistantDescription: 'Smart Assistant é seu companheiro telefônico multilíngue sempre ativo, projetado especificamente para pequenas e médias empresas. Ele lida com chamadas recebidas, envia mensagens SMS e WhatsApp, e garante que você nunca perca uma interação com o cliente. Seja uma boutique ou um provedor de serviços em crescimento, o Smart Assistant ajuda você a permanecer conectado, profissional e responsivo—sem gastar muito.',
    neverMissCall: 'Nunca perca uma chamada',
    expandCommunication: 'Expanda a comunicação para SMS e WhatsApp',
    multilingualAvailability: 'Disponibilidade multilíngue e 24/7',
    fullyBrandable: 'Totalmente personalizável para o seu negócio',
    choosePersonas: 'Escolha entre múltiplas personalidades (corporativa, casual, masculina, feminina, etc.)',
    scalesWithBusiness: 'Se adapta às necessidades do seu negócio',
    
    keyFeatures: 'Características Principais',
    keyFeaturesSubtitle: 'Acessível, Escalável e Profissional.',
    automatedAssistance: 'Assistência Automatizada 24/7: Sempre disponível para cumprimentar e ajudar os chamadores.',
    customizableResponses: 'Respostas Personalizáveis: Adapte as mensagens à voz da sua marca.',
    analyticsDashboard: 'Painel de Análise: Rastreie o desempenho e as interações com os clientes.',
    multiChannelIntegration: 'Integração Multicanal: Funciona perfeitamente com SMS, WhatsApp, e-mail e Messenger.',
    personaSelection: 'Seleção de Personalidade: Escolha a personalidade do assistente que se adapta à sua clientela.',
    subscribeNow: 'INSCREVA-SE AGORA',
    connectWithUs: 'CONECTE-SE CONOSCO',
    
    // Services Page
    ourServices: 'Nossos Serviços',
    
    // IVR Service
    ivrTitle: 'Soluções de Resposta de Voz Interativa (IVR)',
    ivrSubtitle: 'Dê a seus clientes respostas mais rápidas—e ao seu time um descanso—com um IVR mais inteligente.',
    ivrDescription: 'Usando Smart Dialog, você pode construir um sistema telefônico moderno e alimentado por IA que ajuda os clientes a ajudarem-se a si mesmos. É lógicamente impulsionado, fácil de usar e reduz a necessidade de agentes em tempo real, para que seu suporte permaneça afiado, eficiente e sempre disponível.',
    
    // Alerts Service
    alertsTitle: 'Alertas e notificações',
    alertsSubtitle: 'Mantenha seus clientes informados—e prontos para agir—com mensagens personalizadas que realmente chegam.',
    alertsDescription: 'Seja um e-mail rápido, uma ligação telefônica, uma mensagem no WhatsApp ou SMS, Smart Dialog garante que suas notificações cheguem exatamente onde precisam. Alcance as pessoas nos canais que mais confiam, e transforme cada atualização em uma ação significativa.',
    
    // User Auth Service
    userAuthTitle: 'Autenticação de Usuário e Verificação de Identidade',
    userAuthSubtitle: 'Mantenha cada interação segura e fluida com as ferramentas de Autenticação de Usuário e Identidade do Smart Dialog.',
    userAuthDescription: 'Fazemos que seja fácil verificar quem é quem—rápido. Usando sinais inteligentes e dados confiáveis, ajudamos a proteger transações, prevenir fraudes e dar aos seus clientes a confiança de interagir, a cada passo do caminho.',
    
    learnMore: 'SAIBA MAIS',
    readyForMore: 'Pronto para mais?',
    readyForMoreSubtitle: 'Vamos conversar sobre como o Smart Dialog pode ajudar você.',
    contactUs: 'ENTRE EM CONTATO',
    
    // Contact Page
    contactPageTitle: 'ENTRE EM CONTATO',
    contactHeading: 'Vamos construir a solução perfeita para o seu negócio.',
    contactSubheading: 'Compartilhe alguns detalhes conosco, e voltaremos a você com ideias personalizadas que correspondem aos seus objetivos—rápido.',
    nameLabel: 'Nome',
    emailLabel: 'Email*',
    messageLabel: 'Mensagem',
    signUpNewsletter: 'Inscreva-se na nossa lista de e-mail para atualizações, promoções e mais.',
    sendButton: 'ENVIAR',
    messageSent: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    privacyNotice: 'Este site é protegido pelo reCAPTCHA e aplicam-se a Política de Privacidade e os Termos de Serviço do Google.',
    messageWhatsApp: 'Envie uma mensagem no WhatsApp',
    contactInformation: 'Informações de contato:',
    mailAddress: 'endereço postal: 24600 Katy Fwy Ste 834-2154 Katy, TX 77494-7819',
    emailAddress: 'email: contact@smartdialog-ai.com',
    callOrSMS: 'ligue ou envie SMS: (657) 378-0660',
    hours: 'Horários',
    openToday: 'Aberto hoje 09:00 am – 05:00 pm',
    allHoursCST: 'todos os horários no Horário Padrão Central',
  },
};

export function useTranslations(language: Language) {
  return translations[language];
}