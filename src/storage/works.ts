export interface WorksItem {
  logo: string;
  company: string;
  title: string;
  startedAt: string;
  finishedAt: string;
}

export const works: WorksItem[] = [
  {
    company: 'Uteis & Razoaveis Lda',
    logo: '/assets/img/uteis_razoaveis.jpeg',
    title: 'Senior Mobile Developer',
    startedAt: '2022',
    finishedAt: 'present'
  },
  {
    company: 'Meu Nascimento',
    logo: '/assets/img/meu_nascimento.jpeg',
    title: 'Mid-Level Front-end Developer',
    startedAt: '2023',
    finishedAt: 'present'
  },
  {
    company: 'Genezys',
    logo: '/assets/img/genezys.jpeg',
    title: 'Mid-Level Full-stack Developer',
    startedAt: '2021',
    finishedAt: '2022'
  },
  {
    company: 'Internacional Seguros',
    logo: '/assets/img/internacional_seguros.jpeg',
    title: 'Mid-Level Front-end and Mobile Developer',
    startedAt: '2020',
    finishedAt: '2021'
  },
  {
    company: 'SNIR',
    logo: '/assets/img/snir.jpeg',
    title: 'Junior Front-end and Mobile Developer',
    startedAt: '2019',
    finishedAt: '2020'
  },
]