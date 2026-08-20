export type PhraseTranslation = {
  en: string;
  zh: string;
};

const phraseTranslations: Record<string, PhraseTranslation> = {
  hola: { en: "Hello.", zh: "你好。" },
  "hola.": { en: "Hello.", zh: "你好。" },
  "buenos días": { en: "Good morning.", zh: "早上好。" },
  "buenos días.": { en: "Good morning.", zh: "早上好。" },
  "buenas tardes": { en: "Good afternoon.", zh: "下午好。" },
  "buenas tardes.": { en: "Good afternoon.", zh: "下午好。" },
  "buenas noches": { en: "Good evening / Good night.", zh: "晚上好 / 晚安。" },
  "buenas noches.": { en: "Good evening / Good night.", zh: "晚上好 / 晚安。" },
  "hola, buenos días.": { en: "Hello, good morning.", zh: "你好，早上好。" },
  "me llamo...": { en: "My name is...", zh: "我叫……" },
  "me llamo + name": { en: "My name is + name.", zh: "我叫 + 名字。" },
  "soy...": { en: "I am...", zh: "我是……" },
  "soy + name": { en: "I am + name.", zh: "我是 + 名字。" },
  "soy de + place": { en: "I am from + place.", zh: "我来自 + 地方。" },
  "vivo en + place": { en: "I live in + place.", zh: "我住在 + 地方。" },
  "trabajo en + place": { en: "I work at/in + place.", zh: "我在 + 地方工作。" },
  "estudio en + place": { en: "I study at/in + place.", zh: "我在 + 地方学习。" },
  "mucho gusto": { en: "Nice to meet you.", zh: "很高兴认识你。" },
  "mucho gusto.": { en: "Nice to meet you.", zh: "很高兴认识你。" },
  "¿y tú?": { en: "And you?", zh: "你呢？" },
  "¿cómo te llamas?": { en: "What is your name?", zh: "你叫什么名字？" },
  "encantado": { en: "Nice to meet you. (masculine)", zh: "很高兴认识你。（男性说法）" },
  "encantado.": { en: "Nice to meet you. (masculine)", zh: "很高兴认识你。（男性说法）" },
  "encantada": { en: "Nice to meet you. (feminine)", zh: "很高兴认识你。（女性说法）" },
  "encantada.": { en: "Nice to meet you. (feminine)", zh: "很高兴认识你。（女性说法）" },
  "gracias": { en: "Thank you.", zh: "谢谢。" },
  "gracias.": { en: "Thank you.", zh: "谢谢。" },
  "¿de dónde eres?": { en: "Where are you from?", zh: "你来自哪里？" },
  "¿cómo estás?": { en: "How are you?", zh: "你好吗？" },
  "estoy bien.": { en: "I am fine.", zh: "我很好。" },
  "estoy cansado.": { en: "I am tired. (masculine)", zh: "我累了。（男性说法）" },
  "estoy cansada.": { en: "I am tired. (feminine)", zh: "我累了。（女性说法）" },
  "más o menos.": { en: "So-so.", zh: "一般般。" },
  "soy de china.": { en: "I am from China.", zh: "我来自中国。" },
  "soy de méxico.": { en: "I am from Mexico.", zh: "我来自墨西哥。" },
  "vivo en...": { en: "I live in...", zh: "我住在……" },
  "también.": { en: "Also / too.", zh: "也。" },
  "trabajo en...": { en: "I work at/in...", zh: "我在……工作。" },
  "estudio en...": { en: "I study at/in...", zh: "我在……学习。" },
  "una empresa": { en: "a company", zh: "一家公司" },
  "una escuela": { en: "a school", zh: "一所学校" },
  "en casa": { en: "at home", zh: "在家" },
  "se llama": { en: "he/she is called", zh: "他/她叫" },
  "es de": { en: "is from", zh: "来自" },
  trabaja: { en: "he/she works", zh: "他/她工作" },
  vive: { en: "he/she lives", zh: "他/她住" },
  hoy: { en: "today", zh: "今天" },
  "ella se llama ana.": { en: "Her name is Ana.", zh: "她叫 Ana。" },
  "vive en méxico.": { en: "He/she lives in Mexico.", zh: "他/她住在墨西哥。" },
  "ana es de méxico.": { en: "Ana is from Mexico.", zh: "Ana 来自墨西哥。" },
  "ana vive en puebla.": { en: "Ana lives in Puebla.", zh: "Ana 住在普埃布拉。" },
  "ana trabaja en una escuela.": { en: "Ana works at a school.", zh: "Ana 在一所学校工作。" },
  "hoy ana está bien.": { en: "Today Ana is fine.", zh: "今天 Ana 状态很好。" },
  "hola, me llamo ana.": { en: "Hello, my name is Ana.", zh: "你好，我叫 Ana。" },
  "hola, soy carlos.": { en: "Hello, I am Carlos.", zh: "你好，我是 Carlos。" },
  "hola, me llamo jane.": { en: "Hello, my name is Jane.", zh: "你好，我叫 Jane。" },
  "hola, me llamo jane. mucho gusto.": { en: "Hello, my name is Jane. Nice to meet you.", zh: "你好，我叫 Jane。很高兴认识你。" },
  "mucho gusto. ¿y tú?": { en: "Nice to meet you. And you?", zh: "很高兴认识你。你呢？" },
  "soy de china y vivo en shanghai.": { en: "I am from China and I live in Shanghai.", zh: "我来自中国，住在上海。" },
  "trabajo en una empresa.": { en: "I work at a company.", zh: "我在一家公司工作。" },
  "trabajo en casa. vivo en shanghai.": { en: "I work at home. I live in Shanghai.", zh: "我在家工作。我住在上海。" },
  "ayer hablé con ana.": { en: "Yesterday I spoke with Ana.", zh: "昨天我和 Ana 说话了。" },
  perro: { en: "dog", zh: "狗" },
  pero: { en: "but", zh: "但是" },
  carro: { en: "car", zh: "汽车" },
  correo: { en: "mail / email", zh: "邮件 / 电子邮件" }
};

function normalizePhrase(text: string) {
  return text
    .replace(/^[^:]+:\s*/, "")
    .trim()
    .toLowerCase();
}

export function getPhraseTranslation(text: string): PhraseTranslation | undefined {
  return phraseTranslations[normalizePhrase(text)];
}
