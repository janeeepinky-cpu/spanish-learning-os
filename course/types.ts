export type LevelId = "pre-a1" | "a1" | "a2" | "b1";

export type ReviewStatus =
  | "NEW"
  | "LEARNING"
  | "FAMILIAR"
  | "ACTIVE"
  | "STRONG"
  | "MASTERED";

export type ActivityKind =
  | "recall"
  | "mission"
  | "microLesson"
  | "input"
  | "notice"
  | "useIt"
  | "speak"
  | "quickCheck"
  | "complete";

export type LessonActivity = {
  id: string;
  kind: ActivityKind;
  title: string;
  prompt: string;
  xp: number;
  expectedAnswer?: string;
  referenceAnswer?: string;
  speakingPrompt?: string;
};

export type QuickCheck = {
  id: string;
  type: "fillBlank" | "production" | "recognition";
  prompt: string;
  answer: string;
  reference?: string;
};

export type Lesson = {
  id: string;
  day: number;
  level: LevelId;
  unit: string;
  title: string;
  mission: string;
  estimatedMinutes: number;
  newVocabulary: string[];
  chunks: string[];
  grammar: string[];
  realLifeTask: string;
  pcicFunctions: string[];
  grammarTargets: string[];
  lexicalTargets: LexicalTarget[];
  pronunciationTargets: PronunciationTarget[];
  prerequisites: string[];
  inputActivities: LessonTask[];
  noticingActivities: LessonTask[];
  retrievalActivities: LessonTask[];
  productionActivities: LessonTask[];
  interactionActivities: LessonTask[];
  assessment: LessonAssessment;
  reviewTargets: string[];
  regionalVariant: RegionalVariant;
  sourceBasis: LessonSourceBasis;
  pronunciation: {
    sounds: string[];
    notes: string[];
  };
  activities: LessonActivity[];
  input: {
    title: string;
    type: "mini-dialogue" | "mini-story" | "audio-script";
    lines: string[];
  };
  quickCheck: QuickCheck[];
  canDo: string;
};

export type Unit = {
  id: string;
  level: LevelId;
  order: number;
  title: string;
  subtitle: string;
  lessonIds: string[];
  locked?: boolean;
};

export type Level = {
  id: LevelId;
  label: string;
  description: string;
  unitIds: string[];
  locked?: boolean;
};

export type ExploreItem = {
  id: string;
  title: string;
  level: LevelId;
  duration: string;
  type: "Video" | "Podcast" | "Mini Story" | "Reading";
  topic: string;
  variant: "México" | "Latin America" | "España";
  category: string;
};

export type RegionalVariant = "broad_latam" | "mexico" | "spain" | "needs_review";

export type VariantTag = "broad_latam" | "mexico" | "spain";

export type LexicalTarget = {
  text: string;
  meaning: string;
  rationale: string;
  variant: VariantTag;
};

export type PronunciationTarget = {
  focus: string;
  learnerProblem: string;
  successCriterion: string;
};

export type LessonTask = {
  id: string;
  mode: "listening" | "reading" | "speaking" | "writing" | "interaction";
  task: string;
  support: string;
};

export type LessonAssessment = {
  evidence: string;
  feedbackFocus: string[];
  masteryPolicy: string;
};

export type LessonSourceBasis = {
  cefr: string[];
  actfl: string[];
  pcic: string[];
  sla: string[];
  frequency: string[];
  regional: string[];
  needsReview: boolean;
};

export type VocabItem = {
  id: string;
  term: string;
  meaning: string;
  meaningZh: string;
  lessonId: string;
  status: ReviewStatus;
  strength: number;
  lastSeen: string | null;
  nextReview: string;
  correctStreak: number;
  wrongCount: number;
  productionScore: number;
  listeningScore: number;
  contextScore: number;
};
