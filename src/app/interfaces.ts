export interface Curriculum {
  introduction: string;
  experiences: Experience[];
}

export interface Experience {
  id?: number;
  entreprise: string;
  poste: string;
  lieu: string;
  typeContrat: 'Freelance' | 'CDI' | 'CDD';
  dateDebut: Date;
  dateFin?: Date;
  description: string;
  competences: string[];
}
