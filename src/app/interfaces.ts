export interface Curriculum {
  introduction: string;
  experiences: Experience[];
  studies: Study[];
}

export interface Experience {
  entreprise: string;
  poste: string;
  lieu: string;
  typeContrat: 'Freelance' | 'CDI' | 'CDD';
  dateDebut: Date;
  dateFin?: Date;
  description: string;
  competences: string[];
}

export interface Study {
  startYear: number;
  endYear: number;
  shortTitle: string;
  title: string;
  location: string;
  competences: string[];
}
