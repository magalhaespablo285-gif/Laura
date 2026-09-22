export interface LookItem {
  id: string;
  tag: 'LOOK FEMININO' | 'LOOK MASCULINO' | 'CONJUNTOS' | 'VESTIDOS' | 'NOVIDADES';
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  emoji: string;
  color: string;
  accentColor: string;
  image: string;
  tagline: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
  lookTag: string;
}
