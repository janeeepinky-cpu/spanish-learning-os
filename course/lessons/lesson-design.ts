import type { Lesson, LessonActivity, LessonSourceBasis, LexicalTarget, PronunciationTarget } from "../types";

export type LessonActivitySeed = {
  id: string;
  recall: string;
  micro: string;
  input: string;
  notice: string;
  useIt: string;
  expectedAnswer?: string;
  referenceAnswer: string;
  speak: string;
  quickCheck: string;
};

export function buildActivities(seed: LessonActivitySeed): LessonActivity[] {
  return [
    {
      id: `${seed.id}-recall`,
      kind: "recall",
      title: "Recall",
      prompt: seed.recall,
      xp: 5
    },
    {
      id: `${seed.id}-mission`,
      kind: "mission",
      title: "Mission",
      prompt: "今天完成后，要能在一个真实互动里完成这个 Can-Do。",
      xp: 0
    },
    {
      id: `${seed.id}-micro`,
      kind: "microLesson",
      title: "Words + Grammar",
      prompt: seed.micro,
      xp: 10
    },
    {
      id: `${seed.id}-input`,
      kind: "input",
      title: "Input",
      prompt: seed.input,
      xp: 10
    },
    {
      id: `${seed.id}-notice`,
      kind: "notice",
      title: "Pronunciation",
      prompt: seed.notice,
      xp: 5
    },
    {
      id: `${seed.id}-use-it`,
      kind: "useIt",
      title: "Use It",
      prompt: seed.useIt,
      expectedAnswer: seed.expectedAnswer,
      referenceAnswer: seed.referenceAnswer,
      xp: 10
    },
    {
      id: `${seed.id}-speak`,
      kind: "speak",
      title: "Speak",
      prompt: "听示范，然后录下自己说这一句。",
      speakingPrompt: seed.speak,
      xp: 15
    },
    {
      id: `${seed.id}-check`,
      kind: "quickCheck",
      title: "Quick Check",
      prompt: seed.quickCheck,
      referenceAnswer: seed.referenceAnswer,
      xp: 10
    },
    {
      id: `${seed.id}-complete`,
      kind: "complete",
      title: "Day Complete",
      prompt: "完成今天的小课包：新词、语法、输入、跟读、输出。",
      xp: 30
    }
  ];
}

export function lexicalTarget(text: string, meaning: string, rationale: string): LexicalTarget {
  return {
    text,
    meaning,
    rationale,
    variant: "broad_latam"
  };
}

export function pronunciationTarget(focus: string, learnerProblem: string, successCriterion: string): PronunciationTarget {
  return { focus, learnerProblem, successCriterion };
}

export const unit1SourceBasis: LessonSourceBasis = {
  cefr: [
    "CEFR Companion Volume 2020: action-oriented Can-Do design, Pre-A1/A1 social interaction, phonological competence focused on intelligibility rather than native-like accent."
  ],
  actfl: [
    "ACTFL Novice-range Can-Do framing: rehearsed words, formulaic chunks, simple personal information, short social exchanges."
  ],
  pcic: [
    "Instituto Cervantes PCIC A1 reference categories: objectives, social functions, asking/giving personal information, greetings, introductions, basic notions, pronunciation/prosody, orthography and pragmatic strategies."
  ],
  sla: [
    "Meaningful comprehensible input, interaction, meaningful output, noticing, retrieval practice, spaced practice, feedback and later transfer across contexts."
  ],
  frequency: [
    "Lexical choices prioritize communicative utility, frequency, reuse potential and prerequisite value; RAE CORPES XXI review is required before claiming modern frequency rank."
  ],
  regional: [
    "Core language targets broadly understandable Latin American Spanish. Mexico-specific expressions must be marked variant: mexico and checked against Diccionario del Español de México before inclusion."
  ],
  needsReview: true
};

export const noviceAssessment = {
  evidence: "Learner completes the communicative task with supported chunks and can be understood by a sympathetic listener.",
  feedbackFocus: ["intelligibility", "word stress", "chunk choice", "successful completion of the real-life task"],
  masteryPolicy: "Completing one lesson records exposure and practice only. Mastery requires repeated successful performance across later days, review, speaking and transfer tasks."
};
