export interface Disciplina {
  nome: string;
  curso: string;
  semestre: string;
}

export interface Professor {
  id: string;
  nome: string;
  titulo: string;
  email: string;
  foto: string;
  area: string;
  disciplinas: Disciplina[];
}

export const professores: Professor[] = [
  {
    id: "1",
    nome: "Dr. Carlos Mendonça",
    titulo: "Doutor em Ciência da Computação",
    email: "carlos.mendonca@universidade.edu.br",
    foto: "CM",
    area: "Engenharia de Software",
    disciplinas: [
      { nome: "Desenvolvimento Web", curso: "Sistemas de Informação", semestre: "3º Semestre" },
      { nome: "Arquitetura de Software", curso: "Ciência da Computação", semestre: "5º Semestre" },
      { nome: "Banco de Dados", curso: "Análise e Desenvolvimento de Sistemas", semestre: "2º Semestre" },
    ],
  },
  {
    id: "2",
    nome: "Dra. Ana Paula Lima",
    titulo: "Doutora em Inteligência Artificial",
    email: "ana.lima@universidade.edu.br",
    foto: "AL",
    area: "Inteligência Artificial",
    disciplinas: [
      { nome: "Machine Learning", curso: "Ciência da Computação", semestre: "6º Semestre" },
      { nome: "Processamento de Linguagem Natural", curso: "Ciência da Computação", semestre: "7º Semestre" },
      { nome: "Redes Neurais", curso: "Engenharia de Computação", semestre: "5º Semestre" },
    ],
  },
  {
    id: "3",
    nome: "Prof. Ricardo Souza",
    titulo: "Mestre em Redes de Computadores",
    email: "ricardo.souza@universidade.edu.br",
    foto: "RS",
    area: "Redes e Segurança",
    disciplinas: [
      { nome: "Segurança da Informação", curso: "Sistemas de Informação", semestre: "4º Semestre" },
      { nome: "Redes de Computadores", curso: "Análise e Desenvolvimento de Sistemas", semestre: "3º Semestre" },
      { nome: "Infraestrutura Cloud", curso: "Ciência da Computação", semestre: "6º Semestre" },
    ],
  }, {
    id: "4",
    nome: "Dr. neymar jr",
    titulo: "Doutor em Ciência da Computação",
    email: "neymar.jr@universidade.edu.br",
    foto: "NJ",
    area: "Engenharia de Software",
    disciplinas: [
      { nome: "Versionamento de Código", curso: "Sistemas de Informação", semestre: "4º Semestre" },
      { nome: "Desenvolvimento de Software", curso: "Ciência da Computação", semestre: "5º Semestre" },
      { nome: "Banco de Dados", curso: "Análise e Desenvolvimento de Sistemas", semestre: "2º Semestre" },
    ],
  },
];