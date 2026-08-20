"use client";

export type PronunciationGuide = {
  ipa: string;
  syllables: string;
  note: string;
};

const SPEAKER_LABEL = /^[^:]+:\s*/;

const pronunciationGuides: Record<string, PronunciationGuide> = {
  hola: {
    ipa: "[\u02c8o.la]",
    syllables: "ho-la",
    note: "h 不发音；重音在 o。"
  },
  "hola.": {
    ipa: "[\u02c8o.la]",
    syllables: "ho-la",
    note: "h 不发音；重音在 o。"
  },
  "buenos d\u00edas": {
    ipa: "[\u02c8bwe.nos \u02c8di.as]",
    syllables: "bue-nos di-as",
    note: "ue 连成一拍；d\u00edas 分成 di-as。"
  },
  "buenos d\u00edas.": {
    ipa: "[\u02c8bwe.nos \u02c8di.as]",
    syllables: "bue-nos di-as",
    note: "ue 连成一拍；d\u00edas 分成 di-as。"
  },
  "buenas tardes": {
    ipa: "[\u02c8bwe.nas \u02c8ta\u027e.des]",
    syllables: "bue-nas tar-des",
    note: "tardes 的 r 是单 r，轻弹一下。"
  },
  "buenas tardes.": {
    ipa: "[\u02c8bwe.nas \u02c8ta\u027e.des]",
    syllables: "bue-nas tar-des",
    note: "tardes 的 r 是单 r，轻弹一下。"
  },
  "buenas noches": {
    ipa: "[\u02c8bwe.nas \u02c8no.t\u0283es]",
    syllables: "bue-nas no-ches",
    note: "ch 短促清楚；noches 不要读成英文。"
  },
  "buenas noches.": {
    ipa: "[\u02c8bwe.nas \u02c8no.t\u0283es]",
    syllables: "bue-nas no-ches",
    note: "ch 短促清楚；noches 不要读成英文。"
  },
  "me llamo...": {
    ipa: "[me \u02c8\u029da.mo]",
    syllables: "me lla-mo",
    note: "ll 在墨西哥西语里接近 y 的音。"
  },
  "soy...": {
    ipa: "[soj]",
    syllables: "soy",
    note: "oy 是一个滑音，别读成英文 soy。"
  },
  "mucho gusto": {
    ipa: "[\u02c8mu.t\u0283o \u02c8\u0263us.to]",
    syllables: "mu-cho gus-to",
    note: "ch 像中文“吃”的开头，但更短更轻。"
  },
  "mucho gusto.": {
    ipa: "[\u02c8mu.t\u0283o \u02c8\u0263us.to]",
    syllables: "mu-cho gus-to",
    note: "ch 像中文“吃”的开头，但更短更轻。"
  },
  "\u00bfy t\u00fa?": {
    ipa: "[i \u02c8tu]",
    syllables: "y t\u00fa",
    note: "y 单独出现时读 i；t\u00fa 重读。"
  },
  "\u00bfc\u00f3mo te llamas?": {
    ipa: "[\u02c8ko.mo te \u02c8\u029da.mas]",
    syllables: "c\u00f3-mo te lla-mas",
    note: "c\u00f3mo 的重音在 c\u00f3；ll 接近 y。"
  },
  "encantado": {
    ipa: "[e\u014b.kan\u02c8ta.\u00f0o]",
    syllables: "en-can-ta-do",
    note: "重音在 ta；d 在两个元音之间很轻。"
  },
  "encantado.": {
    ipa: "[e\u014b.kan\u02c8ta.\u00f0o]",
    syllables: "en-can-ta-do",
    note: "重音在 ta；d 在两个元音之间很轻。"
  },
  "encantada": {
    ipa: "[e\u014b.kan\u02c8ta.\u00f0a]",
    syllables: "en-can-ta-da",
    note: "女性说法；重音在 ta。"
  },
  "encantada.": {
    ipa: "[e\u014b.kan\u02c8ta.\u00f0a]",
    syllables: "en-can-ta-da",
    note: "女性说法；重音在 ta。"
  },
  gracias: {
    ipa: "[\u02c8\u0261\u027ea.sjas]",
    syllables: "gra-cias",
    note: "cia 是一拍里的滑音，不要拆太重。"
  },
  "gracias.": {
    ipa: "[\u02c8\u0261\u027ea.sjas]",
    syllables: "gra-cias",
    note: "cia 是一拍里的滑音，不要拆太重。"
  },
  "\u00bfde d\u00f3nde eres?": {
    ipa: "[de \u02c8don.de \u02c8e.\u027ees]",
    syllables: "de d\u00f3n-de e-res",
    note: "r 是轻弹一下的单 r，不是英语 r。"
  },
  "\u00bfc\u00f3mo est\u00e1s?": {
    ipa: "[\u02c8ko.mo es\u02c8tas]",
    syllables: "c\u00f3-mo es-t\u00e1s",
    note: "est\u00e1s 的重音在 t\u00e1s。"
  },
  "hola, me llamo jane.": {
    ipa: "[\u02c8o.la me \u02c8\u029da.mo \u029dein]",
    syllables: "ho-la me lla-mo Jane",
    note: "Jane 这里按名字读成 Yein；ll 接近 y。"
  },
  "hola, me llamo jane. mucho gusto.": {
    ipa: "[\u02c8o.la me \u02c8\u029da.mo \u029dein \u02c8mu.t\u0283o \u02c8\u0263us.to]",
    syllables: "ho-la me lla-mo Jane | mu-cho gus-to",
    note: "先把两句话分开练，再连起来。"
  },
  "mucho gusto. \u00bfy t\u00fa?": {
    ipa: "[\u02c8mu.t\u0283o \u02c8\u0263us.to i \u02c8tu]",
    syllables: "mu-cho gus-to | y t\u00fa",
    note: "y 读 i；最后 t\u00fa 重读。"
  },
  "soy de china y vivo en shanghai.": {
    ipa: "[soj de \u02c8t\u0283i.na i \u02c8\u03b2i.\u03b2o en \u0283a\u014b\u02c8xaj]",
    syllables: "soy de Chi-na y vi-vo en Shang-h\u00e1i",
    note: "vivo 里的 v 接近很轻的 b；y 读 i。"
  },
  "trabajo en una empresa.": {
    ipa: "[t\u027ea\u02c8\u03b2a.xo en \u02c8u.na em\u02c8p\u027ee.sa]",
    syllables: "tra-ba-jo en u-na em-pre-sa",
    note: "j 是喉部轻擦音，像很轻的 h。"
  },
  perro: {
    ipa: "[\u02c8pe.ro]",
    syllables: "pe-rro",
    note: "rr 是颤音，要比 pero 的 r 更明显。"
  },
  pero: {
    ipa: "[\u02c8pe.\u027eo]",
    syllables: "pe-ro",
    note: "单 r 只轻轻弹一下。"
  },
  carro: {
    ipa: "[\u02c8ka.ro]",
    syllables: "ca-rro",
    note: "rr 是颤音；a 是干净的 a，不要拖。"
  },
  correo: {
    ipa: "[ko\u02c8re.o]",
    syllables: "co-rre-o",
    note: "rr 颤音；重音在 re。"
  }
};

function normalizeSpanishText(text: string) {
  return text
    .replaceAll("\u9a74", "\u00bf")
    .replaceAll("\u7164", "\u00fa")
    .replaceAll("\u8d38", "\u00f3")
    .replaceAll("\u8c29", "\u00e1")
    .replaceAll("\u8305", "\u00e9")
    .replaceAll("\u94c6", "\u00ed")
    .replaceAll("\u5e3d", "\u00f1");
}

function normalizePhrase(text: string) {
  return normalizeSpanishText(text)
    .replace(SPEAKER_LABEL, "")
    .trim()
    .toLowerCase();
}

export function getPronunciationGuide(text: string) {
  return pronunciationGuides[normalizePhrase(text)];
}
