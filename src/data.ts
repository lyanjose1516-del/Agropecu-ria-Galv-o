import { 
  Dog, 
  Bone, 
  Scale, 
  ShoppingBag, 
  Star, 
  CheckCircle2, 
  Truck, 
  Heart, 
  ShieldCheck,
  MessageCircle,
  MapPin,
  Phone,
  Clock
} from 'lucide-react';

export const breeds = [
  { id: 'labrador', name: 'Labrador', image: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eca6?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 'golden', name: 'Golden Retriever', image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 'shihtzu', name: 'Shih Tzu', image: 'https://images.unsplash.com/photo-1494947665470-20322015e3a8?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 'poodle', name: 'Poodle', image: 'https://images.unsplash.com/photo-1616149562385-1d84e79478bb?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 'bulldog', name: 'Bulldog Francês', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 'viralata', name: 'Vira-lata (SRD)', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 'yorkshire', name: 'Yorkshire', image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 'pastor', name: 'Pastor Alemão', image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 'other', name: 'Outra Raça', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=200&h=200' },
];

export const products = {
  puppy: {
    name: 'Ração Premium Filhotes Crescimento Saudável',
    description: 'Fórmula rica em proteínas e cálcio para o desenvolvimento ósseo e muscular do seu filhote.',
    pricePerKg: 24.90,
    image: 'https://images.unsplash.com/photo-1589924691195-41432c84c161?auto=format&fit=crop&q=80&w=400&h=400',
    dailyPortionFactor: 0.05 // 5% of body weight
  },
  adult: {
    name: 'Ração Super Premium Adultos Performance',
    description: 'Nutrição balanceada com ingredientes selecionados para manter a energia e pelagem brilhante.',
    pricePerKg: 21.50,
    image: 'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?auto=format&fit=crop&q=80&w=400&h=400',
    dailyPortionFactor: 0.03 // 3% of body weight
  },
  senior: {
    name: 'Ração Sênior Care +7 Anos',
    description: 'Enriquecida com condroitina e glucosamina para proteção das articulações e fácil digestão.',
    pricePerKg: 28.90,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=400&h=400',
    dailyPortionFactor: 0.025 // 2.5% of body weight
  }
};

export const testimonials = [
  {
    name: 'Ana Paula S.',
    role: 'Tutora de um Shih Tzu',
    text: 'Eu sempre tinha dúvida de qual ração comprar. A calculadora me ajudou muito e o preço foi ótimo!',
    stars: 5
  },
  {
    name: 'Ricardo M.',
    role: 'Tutor de um Labrador',
    text: 'Atendimento excelente e entrega super rápida. Meu cachorro adorou a ração recomendada.',
    stars: 5
  },
  {
    name: 'Fernanda L.',
    role: 'Tutora de um Vira-lata',
    text: 'Amei a facilidade de ver o preço final antes de pedir. Recomendo demais!',
    stars: 5
  }
];

export const faqs = [
  {
    question: 'Como faço a troca da ração atual para a nova?',
    answer: 'A troca deve ser gradual ao longo de 7 dias, misturando a ração nova com a antiga para evitar desconforto intestinal.'
  },
  {
    question: 'Vocês entregam em minha região?',
    answer: 'Realizamos entregas em toda a cidade com taxa fixa. Para bairros vizinhos, consulte nosso atendimento.'
  },
  {
    question: 'Como é feita a recomendação da ração?',
    answer: 'Nossa recomendação baseia-se na idade, porte e necessidades nutricionais gerais da raça do seu cão.'
  },
  {
    question: 'Meu cachorro tem alergia, o que faço?',
    answer: 'Nesse caso, recomendamos falar diretamente com nosso atendimento veterinário para uma indicação hipoalergênica específica.'
  }
];

export const benefits = [
  {
    icon: ShoppingBag,
    title: 'Variedade Premium',
    description: 'Trabalhamos apenas com as melhores marcas do mercado pet.'
  },
  {
    icon: ShieldCheck,
    title: 'Confiança Total',
    description: 'Produtos originais e armazenados corretamente.'
  },
  {
    icon: Heart,
    title: 'Foco no Bem-estar',
    description: 'Recomendações pensadas na saúde do seu animal.'
  },
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Receba no conforto da sua casa com agilidade.'
  }
];
