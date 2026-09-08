export interface ClueItem {
  id: 'clue1' | 'clue2' | 'clue3';
  type: 'ESER' | 'DÜŞÜNCE / ÇALIŞMA' | 'ETKİ';
  label: string;
  badge: string;
  text: string;
}

export interface ScholarData {
  id: string;
  number: number;
  name: string;
  period: string;
  field: string;
  work: string;
  image?: string;
  avatar?: string;
  figure?: string;
  clue1: ClueItem;
  clue2: ClueItem;
  clue3: ClueItem;
  contribution: string;
  anatoliaImpact: string;
  geography: string;
  influence: string;
  quote: string;
  
  // Evaluation questions
  curatorQuestion: string;
  curatorOptions: string[];
  curatorFeedbacks?: string[];
  correctCuratorOption: number;
  
  anatoliaQuestion: string;
  anatoliaOptions: string[];
  anatoliaFeedbacks?: string[];
  correctAnatoliaOption: number;
  
  evidenceQuestion: string;
  evidenceOptions: { text: string; isCorrect: boolean; explanation: string }[];
  
  // Dimensions this figure influenced
  dimensions: {
    bilim: boolean;
    egitim: boolean;
    dilVeKultur: boolean;
    sanat: boolean;
    dusunce: boolean;
    islamlasma: boolean;
    anadoluTurklesmesi: boolean;
  };
  
  accentColor: string;
  symbolName: string;
}

export interface DiscoveredScholarState {
  isNameGuessed: boolean;
  unlockedClues: string[];
  curatorAnswerIndex?: number;
  anatoliaAnswerIndex?: number;
  evidenceAnswerIndex?: number;
  isFullyEvaluated: boolean;
  evaluatedAt?: string;
}

export interface FinalCuratorSubmission {
  selectedScholarIds: string[];
  reasons: Record<string, string>;
  thesisStatement: string;
  completedAt: string;
}
