export const posts = [
  {
    slug: "cafe-especial",
    image: "/blog/posts/coffee.jpg",
    title: "Café especial",
    description: "Conheça os melhores cafés do mundo.",
  },
  {
    slug: "cafes-do-brasil",
    image: "/blog/posts/coffee.jpg",
    title: "Cafés do Brasil",
    description: "Conheça os melhores cafés do mundo.",
  },
];

export type PostType = (typeof posts)[number];
