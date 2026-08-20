import type { Lesson } from "../types";
import { buildActivities, lexicalTarget, noviceAssessment, pronunciationTarget, unit1SourceBasis } from "./lesson-design";

export const day1Lesson: Lesson = {
  id: "day-1-hola",
  day: 1,
  level: "pre-a1",
  unit: "pre-a1-unit-01",
  title: "Hola",
  mission: "I can introduce myself for the first time in Spanish.",
  estimatedMinutes: 42,
  newVocabulary: [
    "Hola.",
    "Buenos días.",
    "Buenas tardes.",
    "Buenas noches.",
    "Me llamo...",
    "Soy...",
    "Mucho gusto.",
    "¿Y tú?",
    "¿Cómo te llamas?",
    "Encantado.",
    "Encantada.",
    "Gracias."
  ],
  chunks: ["Me llamo + name", "Soy + name", "¿Cómo te llamas?", "¿Y tú?", "Soy de + place"],
  grammar: [
    "Me llamo + 名字：最稳妥的自我介绍，意思是“我叫……”。",
    "Soy + 名字：也可以介绍自己，但语气更直接、更口语。",
    "¿Y tú?：把问题自然抛回给对方，意思是“你呢？”。",
    "Soy de + 地点：说明来自哪里；地名只是例子，不算今天新词。"
  ],
  realLifeTask: "第一次见到一位西语使用者时，能打招呼、说自己的名字，并把话轮交还给对方。",
  pcicFunctions: ["saludar", "presentarse", "dar información personal básica", "pedir repetición del turno con una fórmula breve"],
  grammarTargets: ["Me llamo + nombre", "Soy + nombre", "pronombres yo/tú as recognition only", "formulaic question ¿Y tú?"],
  lexicalTargets: [
    lexicalTarget("Hola.", "你好。", "最高频开场寒暄，所有后续互动的入口。"),
    lexicalTarget("Buenos días.", "早上好。", "现实问候，高复用。"),
    lexicalTarget("Buenas tardes.", "下午好。", "现实问候，高复用。"),
    lexicalTarget("Buenas noches.", "晚上好 / 晚安。", "现实问候，高复用。"),
    lexicalTarget("Me llamo...", "我叫……", "核心自我介绍 chunk。"),
    lexicalTarget("Soy...", "我是……", "可替换姓名/身份的 productive pattern。"),
    lexicalTarget("Mucho gusto.", "很高兴认识你。", "第一次见面收束语。"),
    lexicalTarget("¿Y tú?", "你呢？", "互动中把话轮交回对方。"),
    lexicalTarget("¿Cómo te llamas?", "你叫什么名字？", "Day 2 的前置问题表达。"),
    lexicalTarget("Encantado/a.", "很高兴认识你。", "性别一致形式，先作为识别和选择。"),
    lexicalTarget("Gracias.", "谢谢。", "跨场景高复用礼貌语。")
  ],
  pronunciationTargets: [
    pronunciationTarget("h in hola", "受英语或拼读影响把 h 发出来。", "hola 可被听成 /ola/，不加 h 音。"),
    pronunciationTarget("stable Spanish vowels", "把 a/e/i/o/u 读成英语式双元音。", "五个元音短、稳、清楚。"),
    pronunciationTarget("ll in llamo", "把 ll 按英语 l+l 读。", "llamo 可被听懂为 /yamo/ 或近似拉美常见 yeísmo。")
  ],
  prerequisites: ["能识别拉丁字母", "能跟读短句", "不要求掌握动词变位术语"],
  inputActivities: [
    {
      id: "day-1-input-dialogue",
      mode: "listening",
      task: "听 Ana 和 Carlos 第一次见面的迷你对话，抓住姓名和寒暄。",
      support: "提供逐句文本、中文意思和可点击朗读。"
    },
    {
      id: "day-1-reading-dialogue",
      mode: "reading",
      task: "读同一段对话，标出 Me llamo / Soy / Mucho gusto。",
      support: "只要求识别 chunks，不要求解释语法术语。"
    }
  ],
  noticingActivities: [
    {
      id: "day-1-notice-form",
      mode: "reading",
      task: "注意 Me llamo 后面接名字，Soy 后面也可以接名字。",
      support: "用例句对比，不讲完整变位表。"
    }
  ],
  retrievalActivities: [
    {
      id: "day-1-retrieval-greeting",
      mode: "writing",
      task: "看到中文“你好，我叫 Jane”时回忆 Hola, me llamo Jane.",
      support: "允许先看首字母提示。"
    }
  ],
  productionActivities: [
    {
      id: "day-1-production-self",
      mode: "speaking",
      task: "录一遍自己的两句自我介绍。",
      support: "提供 model line 和音标/音节。"
    }
  ],
  interactionActivities: [
    {
      id: "day-1-interaction-turn",
      mode: "interaction",
      task: "说完自己的名字后，用 ¿Y tú? 把话轮交给对方。",
      support: "用固定 chunk，不要求自由发挥。"
    }
  ],
  assessment: noviceAssessment,
  reviewTargets: ["Hola.", "Me llamo...", "Mucho gusto.", "¿Y tú?", "h silent", "llamo / yamo/"],
  regionalVariant: "broad_latam",
  sourceBasis: unit1SourceBasis,
  pronunciation: {
    sounds: ["a", "e", "i", "o", "u"],
    notes: ["The letter h is silent in words like hola."]
  },
  input: {
    title: "First hello",
    type: "mini-dialogue",
    lines: ["Ana: Hola, me llamo Ana.", "Carlos: Hola, soy Carlos.", "Ana: Mucho gusto.", "Carlos: Mucho gusto. ¿Y tú?"]
  },
  quickCheck: [
    {
      id: "day-1-fill-blank",
      type: "fillBlank",
      prompt: "Hola, me ______ Ana.",
      answer: "llamo"
    },
    {
      id: "day-1-production",
      type: "production",
      prompt: "Translate: Hello, my name is Jane.",
      answer: "Hola, me llamo Jane.",
      reference: "Hola, me llamo Jane."
    }
  ],
  activities: buildActivities({
    id: "day-1",
    recall: "先熟悉今天会反复用到的 chunks：Hola. Me llamo... Mucho gusto. ¿Y tú?",
    micro: "今天从现实 Can-Do 出发：第一次见面时能介绍自己，而不是背语法表。",
    input: "听 Ana 和 Carlos 的第一次见面对话，先抓意思，再逐句跟读。",
    notice: "注意 h 不发音；llamo 的 ll 在拉美常见读法里接近 y。",
    useIt: "Complete: Hola, me ______ Ana.",
    expectedAnswer: "llamo",
    referenceAnswer: "Hola, me llamo Ana.",
    speak: "Hola, me llamo Jane. Mucho gusto.",
    quickCheck: "用西语写一个最短自我介绍。"
  }),
  canDo: "I can introduce myself."
};
