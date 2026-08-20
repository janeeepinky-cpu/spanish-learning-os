import type { Lesson } from "../types";
import { buildActivities, lexicalTarget, noviceAssessment, pronunciationTarget, unit1SourceBasis } from "./lesson-design";

const starter = {
  level: "pre-a1" as const,
  unit: "pre-a1-unit-01",
  pronunciation: {
    sounds: ["a", "e", "i", "o", "u"],
    notes: ["Focus on intelligibility, word stress and clear rhythm. Native-like accent is not the goal."]
  },
  regionalVariant: "broad_latam" as const,
  sourceBasis: unit1SourceBasis,
  assessment: noviceAssessment
};

export const mockLessons: Lesson[] = [
  {
    ...starter,
    id: "day-2-como-te-llamas",
    day: 2,
    title: "¿Cómo te llamas?",
    mission: "I can ask someone's name and answer mine.",
    canDo: "I can ask someone's name.",
    realLifeTask: "在第一次见面时，能问对方名字，并用自己的名字回答。",
    estimatedMinutes: 38,
    pcicFunctions: ["preguntar por el nombre", "dar el nombre", "saludar", "mantener un intercambio breve"],
    grammarTargets: ["interrogative formula ¿Cómo te llamas?", "me llamo + nombre", "te llamas as unanalyzed chunk", "encantado/a gender agreement as noticing"],
    newVocabulary: ["¿Cómo te llamas?", "Me llamo...", "¿Y tú?", "Encantado.", "Encantada.", "Perdón."],
    lexicalTargets: [
      lexicalTarget("¿Cómo te llamas?", "你叫什么名字？", "第一次见面高实用问题。"),
      lexicalTarget("Me llamo...", "我叫……", "回答姓名的核心 chunk。"),
      lexicalTarget("¿Y tú?", "你呢？", "互动话轮交还。"),
      lexicalTarget("Encantado.", "很高兴认识你。男性说法。", "寒暄收束。"),
      lexicalTarget("Encantada.", "很高兴认识你。女性说法。", "寒暄收束，注意形式选择。"),
      lexicalTarget("Perdón.", "不好意思 / 请再说一次。", "交际修复策略，帮助真实互动。")
    ],
    chunks: ["¿Cómo te llamas?", "Me llamo + name", "¿Y tú?", "Encantado/a"],
    grammar: ["¿Cómo te llamas? 先作为完整公式掌握，不拆语法。", "Me llamo + 名字 用来回答自己的名字。", "Encantado/Encantada 根据说话者身份选择。"],
    pronunciationTargets: [
      pronunciationTarget("stress in cómo", "漏掉重音导致问句不清楚。", "có-mo 第一音节清楚。"),
      pronunciationTarget("ll in llamas", "把 ll 读成两个 l。", "llamas 可被听懂为 /yamas/。")
    ],
    prerequisites: ["Day 1 greetings", "Me llamo...", "¿Y tú?"],
    input: {
      title: "Names",
      type: "mini-dialogue",
      lines: ["Luz: Hola, ¿cómo te llamas?", "Max: Me llamo Max. ¿Y tú?", "Luz: Me llamo Luz. Encantada."]
    },
    inputActivities: [{ id: "day-2-input", mode: "listening", task: "听姓名交换对话，找出两个人的名字。", support: "提供逐句文本和跟读。" }],
    noticingActivities: [{ id: "day-2-notice", mode: "reading", task: "注意问句 ¿Cómo te llamas? 和回答 Me llamo... 的配对。", support: "用高亮 chunk，不讲变位表。" }],
    retrievalActivities: [{ id: "day-2-retrieval", mode: "writing", task: "看到中文“你叫什么名字？”时回忆 ¿Cómo te llamas?", support: "先给 ¿Cómo te ____? 提示。" }],
    productionActivities: [{ id: "day-2-production", mode: "speaking", task: "录音问对方名字并回答自己的名字。", support: "提供 model line。" }],
    interactionActivities: [{ id: "day-2-interaction", mode: "interaction", task: "A 问名字，B 回答后用 ¿Y tú? 接回去。", support: "两人脚本式互动。" }],
    quickCheck: [{ id: "day-2-q1", type: "production", prompt: "Ask: What is your name?", answer: "¿Cómo te llamas?" }],
    reviewTargets: ["Hola.", "Me llamo...", "¿Cómo te llamas?", "¿Y tú?", "llamas pronunciation"],
    activities: buildActivities({
      id: "day-2",
      recall: "复习 Day 1：Hola. Me llamo... Mucho gusto. ¿Y tú?",
      micro: "今天的 Can-Do 是问名字和回答名字，不是学完整变位表。",
      input: "听 Luz 和 Max 交换名字，抓住问句和回答。",
      notice: "注意 ¿Cómo te llamas? 和 Me llamo... 是固定配对。",
      useIt: "Complete: ¿Cómo te ______?",
      expectedAnswer: "llamas",
      referenceAnswer: "¿Cómo te llamas?",
      speak: "Hola, ¿cómo te llamas?",
      quickCheck: "用西语问：你叫什么名字？"
    })
  },
  {
    ...starter,
    id: "day-3-de-donde-eres",
    day: 3,
    title: "¿De dónde eres?",
    mission: "I can say where I am from.",
    canDo: "I can say where I am from.",
    realLifeTask: "第一次聊天时，能问和回答来自哪里。",
    estimatedMinutes: 40,
    pcicFunctions: ["preguntar por el origen", "dar información sobre procedencia", "mantener un intercambio breve"],
    grammarTargets: ["¿De dónde eres?", "Soy de + lugar", "vivo en + lugar as recognition and extension"],
    newVocabulary: ["¿De dónde eres?", "Soy de...", "Vivo en...", "También.", "Aquí.", "Allá."],
    lexicalTargets: [
      lexicalTarget("¿De dónde eres?", "你来自哪里？", "真实第一次聊天常见问题。"),
      lexicalTarget("Soy de...", "我来自……", "说明来源的核心 chunk。"),
      lexicalTarget("Vivo en...", "我住在……", "扩展个人信息，高复用。"),
      lexicalTarget("También.", "也。", "互动回应高复用。"),
      lexicalTarget("Aquí.", "这里。", "基本空间概念。"),
      lexicalTarget("Allá.", "那里。", "基本空间概念。")
    ],
    chunks: ["¿De dónde eres?", "Soy de + place", "Vivo en + place", "Yo también"],
    grammar: ["de 用来连接来源：Soy de + 地点。", "en 用来连接居住地：Vivo en + 地点。", "地点名称是替换位，不作为本课核心新词。"],
    pronunciationTargets: [
      pronunciationTarget("stress in dónde", "把 dónde 读平导致问题不清楚。", "dón-de 第一音节清楚。"),
      pronunciationTarget("single r in eres", "把 r 读成英语 r。", "eres 的 r 轻弹，不卷舌成英语音。")
    ],
    prerequisites: ["Day 1 self-introduction", "Day 2 asking names"],
    input: {
      title: "Where from?",
      type: "mini-dialogue",
      lines: ["Nora: ¿De dónde eres?", "Jian: Soy de China. Vivo en Shanghai.", "Nora: Yo soy de México."]
    },
    inputActivities: [{ id: "day-3-input", mode: "listening", task: "听来源对话，判断谁来自哪里、住在哪里。", support: "地点作为例子，不要求背国家表。" }],
    noticingActivities: [{ id: "day-3-notice", mode: "reading", task: "对比 Soy de... 和 Vivo en... 的介词。", support: "只看 de/en 的功能差异。" }],
    retrievalActivities: [{ id: "day-3-retrieval", mode: "writing", task: "从中文“我来自中国”回忆 Soy de China.", support: "给 Soy ___ 提示。" }],
    productionActivities: [{ id: "day-3-production", mode: "speaking", task: "说自己的来源和居住地。", support: "允许替换地点名。" }],
    interactionActivities: [{ id: "day-3-interaction", mode: "interaction", task: "问对方来自哪里，回答后用 ¿Y tú? 继续。", support: "脚本式短互动。" }],
    quickCheck: [{ id: "day-3-q1", type: "fillBlank", prompt: "Soy ___ China.", answer: "de" }],
    reviewTargets: ["¿Cómo te llamas?", "Me llamo...", "Soy de...", "Vivo en...", "de/en contrast"],
    activities: buildActivities({
      id: "day-3",
      recall: "复习问名字，再进入来源信息：¿Cómo te llamas? Me llamo...",
      micro: "今天的 Can-Do 是说明来自哪里：Soy de + 地点。",
      input: "听 Nora 和 Jian 的小对话，抓住 de 和 vivo en。",
      notice: "注意 de 表示来源，en 表示居住地点。",
      useIt: "Complete: Soy ___ China.",
      expectedAnswer: "de",
      referenceAnswer: "Soy de China.",
      speak: "Soy de China. Vivo en Shanghai.",
      quickCheck: "用西语说：我来自中国。"
    })
  },
  {
    ...starter,
    id: "day-4-como-estas",
    day: 4,
    title: "¿Cómo estás?",
    mission: "I can ask and answer how someone feels.",
    canDo: "I can ask how someone is.",
    realLifeTask: "寒暄时能问候近况，并给出一个简单状态回应。",
    estimatedMinutes: 38,
    pcicFunctions: ["preguntar por el estado", "responder sobre estado físico o emocional", "usar fórmulas de cortesía"],
    grammarTargets: ["¿Cómo estás?", "Estoy + estado", "adjective gender noticing: cansado/cansada"],
    newVocabulary: ["¿Cómo estás?", "Estoy bien.", "Estoy cansado.", "Estoy cansada.", "Más o menos.", "Muy bien."],
    lexicalTargets: [
      lexicalTarget("¿Cómo estás?", "你怎么样？", "高频寒暄问题。"),
      lexicalTarget("Estoy bien.", "我很好。", "基本状态回答。"),
      lexicalTarget("Estoy cansado.", "我累了。男性说法。", "真实状态表达。"),
      lexicalTarget("Estoy cansada.", "我累了。女性说法。", "真实状态表达，注意形式。"),
      lexicalTarget("Más o menos.", "一般般。", "自然短回应。"),
      lexicalTarget("Muy bien.", "很好。", "高频积极回应。")
    ],
    chunks: ["¿Cómo estás?", "Estoy + feeling", "Más o menos", "Muy bien"],
    grammar: ["estar 用于当前状态；本课只掌握 Estoy + 状态。", "cansado/cansada 先作为形式选择观察，不扩展形容词系统。"],
    pronunciationTargets: [
      pronunciationTarget("stress in estás", "漏掉 estás 的重音。", "tás 清楚重读。"),
      pronunciationTarget("más o menos rhythm", "把 más o menos 逐字割裂。", "短语整体流畅，可被听懂。")
    ],
    prerequisites: ["greetings", "¿Y tú?", "short answer chunks"],
    input: {
      title: "How are you?",
      type: "mini-dialogue",
      lines: ["Mia: ¿Cómo estás?", "Leo: Estoy bien. ¿Y tú?", "Mia: Más o menos. Estoy cansada."]
    },
    inputActivities: [{ id: "day-4-input", mode: "listening", task: "听寒暄对话，识别每个人的状态。", support: "提供状态词中文意思。" }],
    noticingActivities: [{ id: "day-4-notice", mode: "reading", task: "注意 Estoy 后接状态词。", support: "只对比 bien / cansado / cansada。" }],
    retrievalActivities: [{ id: "day-4-retrieval", mode: "writing", task: "看到“我很好”回忆 Estoy bien.", support: "给 Estoy ____ 提示。" }],
    productionActivities: [{ id: "day-4-production", mode: "speaking", task: "录音问候并回答自己的状态。", support: "可选择 bien / más o menos。" }],
    interactionActivities: [{ id: "day-4-interaction", mode: "interaction", task: "A 问状态，B 回答并用 ¿Y tú? 接回。", support: "脚本式互动。" }],
    quickCheck: [{ id: "day-4-q1", type: "production", prompt: "Say: I am fine.", answer: "Estoy bien." }],
    reviewTargets: ["Hola.", "¿Cómo estás?", "Estoy bien.", "¿Y tú?", "word stress in estás"],
    activities: buildActivities({
      id: "day-4",
      recall: "复习名字和来源，再加入寒暄状态。",
      micro: "今天的 Can-Do 是问候近况并给出一个简单状态。",
      input: "听 Mia 和 Leo 的寒暄对话，抓住 bien / más o menos / cansada。",
      notice: "注意 Estoy + 状态；estás 的重音在 tás。",
      useIt: "Complete: Estoy ______.",
      expectedAnswer: "bien",
      referenceAnswer: "Estoy bien.",
      speak: "Hola, ¿cómo estás? Estoy bien.",
      quickCheck: "用西语说：我很好。"
    })
  },
  {
    ...starter,
    id: "day-5-trabajo-en",
    day: 5,
    title: "Trabajo en...",
    mission: "I can say where I work or study.",
    canDo: "I can say where I work or study.",
    realLifeTask: "简单介绍自己的工作或学习地点。",
    estimatedMinutes: 40,
    pcicFunctions: ["dar información sobre ocupación", "hablar de lugar de trabajo o estudio", "preguntar y responder información personal básica"],
    grammarTargets: ["Trabajo en + place", "Estudio en + place", "en for location"],
    newVocabulary: ["Trabajo en...", "Estudio en...", "Una empresa", "Una escuela", "En casa", "Hoy"],
    lexicalTargets: [
      lexicalTarget("Trabajo en...", "我在……工作。", "高复用职业信息 chunk。"),
      lexicalTarget("Estudio en...", "我在……学习。", "学生/学习场景高复用。"),
      lexicalTarget("Una empresa", "一家公司。", "常见工作地点。"),
      lexicalTarget("Una escuela", "一所学校。", "常见学习/工作地点。"),
      lexicalTarget("En casa", "在家。", "地点表达高复用。"),
      lexicalTarget("Hoy", "今天。", "之后叙述日常/状态的时间词前置。")
    ],
    chunks: ["Trabajo en + place", "Estudio en + place", "en casa", "hoy"],
    grammar: ["en 用来说明地点：Trabajo en casa.", "Trabajo 和 Estudio 作为第一人称 chunks 掌握，不扩展完整变位。"],
    pronunciationTargets: [
      pronunciationTarget("j in trabajo", "把 j 读成英语 j。", "trabajo 的 j 是轻喉擦音。"),
      pronunciationTarget("empresa cluster", "empresa 的 em-pre-sa 容易吞音。", "三音节清楚，重音在 pre。")
    ],
    prerequisites: ["Soy de + place", "Vivo en + place", "basic greetings"],
    input: {
      title: "Work and study",
      type: "mini-dialogue",
      lines: ["Sofi: Trabajo en una empresa.", "Tom: Yo estudio en una escuela.", "Sofi: Trabajo en casa hoy."]
    },
    inputActivities: [{ id: "day-5-input", mode: "listening", task: "听工作/学习地点对话，匹配人物和地点。", support: "只要求理解地点，不要求职业表。" }],
    noticingActivities: [{ id: "day-5-notice", mode: "reading", task: "注意 Trabajo en / Estudio en 都用 en。", support: "和 Day 3 Vivo en 复用。" }],
    retrievalActivities: [{ id: "day-5-retrieval", mode: "writing", task: "看到“我在家工作”回忆 Trabajo en casa.", support: "给 Trabajo ___ 提示。" }],
    productionActivities: [{ id: "day-5-production", mode: "speaking", task: "说一句关于自己工作或学习地点的话。", support: "可选 en casa / una empresa / una escuela。" }],
    interactionActivities: [{ id: "day-5-interaction", mode: "interaction", task: "问候后补充工作/学习地点。", support: "和 Day 1-4 chunks 混合使用。" }],
    quickCheck: [{ id: "day-5-q1", type: "fillBlank", prompt: "Trabajo ___ casa.", answer: "en" }],
    reviewTargets: ["Vivo en...", "Trabajo en...", "Estudio en...", "en as location", "j in trabajo"],
    activities: buildActivities({
      id: "day-5",
      recall: "复习 Soy de / Vivo en，再进入工作和学习地点。",
      micro: "今天的 Can-Do 是说明自己在哪里工作或学习。",
      input: "听 Sofi 和 Tom 的对话，抓住 Trabajo en / Estudio en。",
      notice: "注意 en 继续表示地点；trabajo 的 j 不是英语 j。",
      useIt: "Complete: Trabajo ___ casa.",
      expectedAnswer: "en",
      referenceAnswer: "Trabajo en casa.",
      speak: "Trabajo en una empresa. Vivo en Shanghai.",
      quickCheck: "用西语说：我在家工作。"
    })
  },
  {
    ...starter,
    id: "day-6-mini-story-1",
    day: 6,
    title: "Mini Story #1",
    mission: "I can understand a tiny story about a person.",
    canDo: "I can understand a tiny Spanish story.",
    realLifeTask: "读懂一段关于第三个人的极短介绍，抓住名字、来源、居住地和工作地点。",
    estimatedMinutes: 36,
    pcicFunctions: ["identificar a una persona", "comprender información personal básica", "describir a otra persona con apoyo"],
    grammarTargets: ["se llama for third person", "es de + place", "vive en + place", "trabaja en + place"],
    newVocabulary: ["Se llama", "Es de", "Vive", "Trabaja", "Hoy", "Ella"],
    lexicalTargets: [
      lexicalTarget("Se llama", "他/她叫……", "从自我介绍迁移到介绍别人。"),
      lexicalTarget("Es de", "来自……", "第三人称来源信息。"),
      lexicalTarget("Vive", "住在……", "第三人称居住信息。"),
      lexicalTarget("Trabaja", "工作。", "第三人称工作信息。"),
      lexicalTarget("Hoy", "今天。", "时间词复用。"),
      lexicalTarget("Ella", "她。", "故事理解中识别主语。")
    ],
    chunks: ["Ella se llama Ana.", "Es de + place", "Vive en + place", "Trabaja en + place"],
    grammar: ["se llama 用来介绍第三个人叫什么。", "vive/trabaja 先作为故事理解 chunks，不讲完整动词变位。", "旧知识 Me llamo / Soy de 迁移到 Ella se llama / Es de。"],
    pronunciationTargets: [
      pronunciationTarget("sentence rhythm in mini-story", "逐词读导致节奏断。", "每句保持短、清楚、可懂。"),
      pronunciationTarget("j in trabaja", "把 j 读成英语 j。", "trabaja 的 j 是轻喉擦音。")
    ],
    prerequisites: ["Me llamo", "Soy de", "Vivo en", "Trabajo en"],
    input: {
      title: "Ana",
      type: "mini-story",
      lines: ["Ana es de México.", "Ana vive en Puebla.", "Ana trabaja en una escuela.", "Hoy Ana está bien."]
    },
    inputActivities: [{ id: "day-6-input", mode: "reading", task: "读 Ana 的四句小故事，回答她来自哪里、住哪里、在哪里工作。", support: "提供逐句意思。" }],
    noticingActivities: [{ id: "day-6-notice", mode: "reading", task: "注意自己说 Me llamo，介绍别人说 se llama。", support: "用对比表，不扩展代词系统。" }],
    retrievalActivities: [{ id: "day-6-retrieval", mode: "writing", task: "看到“她叫 Ana”回忆 Ella se llama Ana.", support: "给 Ella se ____ 提示。" }],
    productionActivities: [{ id: "day-6-production", mode: "speaking", task: "用两句话介绍 Ana。", support: "可照着故事替换。" }],
    interactionActivities: [{ id: "day-6-interaction", mode: "interaction", task: "听一段别人介绍第三个人，指出名字和地点。", support: "理解优先，不要求自由叙事。" }],
    quickCheck: [{ id: "day-6-q1", type: "recognition", prompt: "Ana lives in Puebla.", answer: "true" }],
    reviewTargets: ["Me llamo vs se llama", "Soy de vs es de", "Vivo en vs vive en", "Trabajo en vs trabaja en"],
    activities: buildActivities({
      id: "day-6",
      recall: "复习介绍自己：Me llamo... Soy de... Vivo en... Trabajo en...",
      micro: "今天把第一人称迁移到介绍第三个人。",
      input: "读 Ana 的极短故事，抓住名字、地点和状态。",
      notice: "注意 Me llamo 和 se llama 的功能差异。",
      useIt: "Complete: Ella se ______ Ana.",
      expectedAnswer: "llama",
      referenceAnswer: "Ella se llama Ana.",
      speak: "Ella se llama Ana. Vive en Puebla.",
      quickCheck: "用西语说：她叫 Ana。"
    })
  },
  {
    ...starter,
    id: "day-7-first-conversation",
    day: 7,
    title: "First Conversation",
    mission: "I can handle a very short first conversation.",
    canDo: "I can complete a first conversation.",
    realLifeTask: "完成一次 30 秒以内的第一次见面对话：问候、名字、来源、状态和礼貌收束。",
    estimatedMinutes: 45,
    pcicFunctions: ["saludar", "presentarse", "preguntar y responder información personal", "preguntar por estado", "cerrar un intercambio breve"],
    grammarTargets: ["combine formulaic chunks", "question-answer adjacency pairs", "reuse de/en", "guided transfer to new conversation"],
    newVocabulary: ["Hola", "¿Cómo te llamas?", "¿De dónde eres?", "¿Cómo estás?", "Mucho gusto", "Hasta luego."],
    lexicalTargets: [
      lexicalTarget("Hola", "你好。", "对话开场。"),
      lexicalTarget("¿Cómo te llamas?", "你叫什么名字？", "问名字。"),
      lexicalTarget("¿De dónde eres?", "你来自哪里？", "问来源。"),
      lexicalTarget("¿Cómo estás?", "你怎么样？", "问状态。"),
      lexicalTarget("Mucho gusto", "很高兴认识你。", "礼貌收束。"),
      lexicalTarget("Hasta luego.", "回头见。", "离开时的高复用表达。")
    ],
    chunks: ["Hola, me llamo...", "Soy de...", "Estoy bien.", "Mucho gusto.", "Hasta luego."],
    grammar: ["把 Unit 01 的 chunks 连成自然话轮，而不是逐词翻译。", "问题和回答要成对出现。", "完成本课只记录 performance evidence，不标记 mastery。"],
    pronunciationTargets: [
      pronunciationTarget("conversation rhythm", "每句之间停顿过长，无法形成互动。", "短句清楚，有自然停顿。"),
      pronunciationTarget("question intonation", "问句语调太平。", "问句结尾有可理解的上扬或问句轮廓。")
    ],
    prerequisites: ["Day 1-6 chunks", "asking names", "origin", "state", "basic third-person story comprehension"],
    input: {
      title: "First conversation",
      type: "mini-dialogue",
      lines: ["A: Hola, ¿cómo te llamas?", "B: Me llamo Jane. ¿Y tú?", "A: Soy Luis. ¿De dónde eres?", "B: Soy de China. Mucho gusto."]
    },
    inputActivities: [{ id: "day-7-input", mode: "listening", task: "听完整第一次见面对话，标出每个话轮功能。", support: "功能标签：问候/名字/来源/收束。" }],
    noticingActivities: [{ id: "day-7-notice", mode: "reading", task: "注意问题和回答如何成对出现。", support: "把对话分成 adjacency pairs。" }],
    retrievalActivities: [{ id: "day-7-retrieval", mode: "writing", task: "从中文提示回忆一个三句自我介绍。", support: "给 chunks 列表。" }],
    productionActivities: [{ id: "day-7-production", mode: "speaking", task: "录制 20-30 秒第一次见面对话中的 B 角色。", support: "脚本逐步减少提示。" }],
    interactionActivities: [{ id: "day-7-interaction", mode: "interaction", task: "根据对方问题选择合适回答，并用 ¿Y tú? 继续。", support: "从 guided production 转向更少支持。" }],
    quickCheck: [{ id: "day-7-q1", type: "production", prompt: "Introduce yourself and say where you are from.", answer: "Hola, me llamo Jane. Soy de China." }],
    reviewTargets: ["Unit 01 spaced review", "question-answer pairs", "de/en", "intelligibility over native-like accent"],
    activities: buildActivities({
      id: "day-7",
      recall: "复习 Unit 01 的名字、来源、状态和寒暄。",
      micro: "今天的 Can-Do 是完成一次短对话，而不是再学一个孤立语法点。",
      input: "听完整对话，注意问题和回答怎么接在一起。",
      notice: "注意不要逐词翻译；先用 chunks 完成互动。",
      useIt: "Complete: Hola, me llamo Jane. Soy ___ China.",
      expectedAnswer: "de",
      referenceAnswer: "Hola, me llamo Jane. Soy de China.",
      speak: "Hola, me llamo Jane. Soy de China. Mucho gusto.",
      quickCheck: "完成一个两句以上的自我介绍。"
    })
  }
];
