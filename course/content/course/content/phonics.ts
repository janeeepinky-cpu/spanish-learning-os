export type PhonicsDrill = {
  id: string;
  spanish: string;
  syllables: string;
  ipa: string;
  meaning: string;
  focus: string;
  stage: "now" | "next";
};

export type PhonicsRule = {
  id: string;
  title: string;
  pattern: string;
  explanation: string;
  examples: string[];
  watchOut: string;
  priority: "now" | "soon" | "reference";
  variant?: "broad_latam" | "mexico" | "spain" | "regional";
};

export type PhonicsSection = {
  id: string;
  title: string;
  subtitle: string;
  rules: PhonicsRule[];
};

export const currentPhonicsDrills: PhonicsDrill[] = [
  {
    id: "hola",
    spanish: "Hola.",
    syllables: "ho-la",
    ipa: "[ˈo.la]",
    meaning: "你好。",
    focus: "h 不发音，开头直接像 o。",
    stage: "now"
  },
  {
    id: "me-llamo",
    spanish: "Me llamo Jane.",
    syllables: "me lla-mo Jane",
    ipa: "[me ˈʝa.mo ʝein]",
    meaning: "我叫 Jane。",
    focus: "ll 在拉美常见读法里接近 y，不读成两个 l。",
    stage: "now"
  },
  {
    id: "como-te-llamas",
    spanish: "¿Cómo te llamas?",
    syllables: "có-mo te lla-mas",
    ipa: "[ˈko.mo te ˈʝa.mas]",
    meaning: "你叫什么名字？",
    focus: "ó 表示重音在 có，llamas 的 lla 要清楚。",
    stage: "now"
  },
  {
    id: "como-estas",
    spanish: "¿Cómo estás?",
    syllables: "có-mo es-tás",
    ipa: "[ˈko.mo esˈtas]",
    meaning: "你怎么样？",
    focus: "estás 的 á 必须重读，不要把整句读平。",
    stage: "now"
  },
  {
    id: "de-donde-eres",
    spanish: "¿De dónde eres?",
    syllables: "de dón-de e-res",
    ipa: "[de ˈdon.de ˈe.ɾes]",
    meaning: "你来自哪里？",
    focus: "eres 里的 r 是单 r，舌尖轻轻弹一下。",
    stage: "now"
  },
  {
    id: "soy-de",
    spanish: "Soy de China.",
    syllables: "soy de Chi-na",
    ipa: "[soj de ˈtʃi.na]",
    meaning: "我来自中国。",
    focus: "soy 是一个滑音，别读成英语 soy。",
    stage: "now"
  },
  {
    id: "vivo-en",
    spanish: "Vivo en Shanghai.",
    syllables: "vi-vo en Shang-hái",
    ipa: "[ˈbi.βo en ʃaŋˈxaj]",
    meaning: "我住在上海。",
    focus: "v 接近轻 b；vivo 两个音节都短稳。",
    stage: "next"
  },
  {
    id: "mucho-gusto",
    spanish: "Mucho gusto.",
    syllables: "mu-cho gus-to",
    ipa: "[ˈmu.tʃo ˈɣus.to]",
    meaning: "很高兴认识你。",
    focus: "ch 短促清楚，u 不要读成英语 yu。",
    stage: "next"
  }
];

export const alphabetRows = [
  ["a", "a", "Ana"],
  ["b", "be", "bien"],
  ["c", "ce", "casa / cine"],
  ["d", "de", "día"],
  ["e", "e", "eres"],
  ["f", "efe", "familia"],
  ["g", "ge", "gato / gente"],
  ["h", "hache", "hola"],
  ["i", "i", "sí"],
  ["j", "jota", "trabajo"],
  ["k", "ka", "kilo"],
  ["l", "ele", "la"],
  ["m", "eme", "me"],
  ["n", "ene", "no"],
  ["ñ", "eñe", "niño"],
  ["o", "o", "hola"],
  ["p", "pe", "pero"],
  ["q", "cu", "que"],
  ["r", "erre", "eres / perro"],
  ["s", "ese", "soy"],
  ["t", "te", "tú"],
  ["u", "u", "gusto"],
  ["v", "uve", "vivo"],
  ["w", "uve doble", "web"],
  ["x", "equis", "examen / México"],
  ["y", "ye", "yo / y"],
  ["z", "zeta", "zapato"]
];

export const phonicsSections: PhonicsSection[] = [
  {
    id: "vowels",
    title: "1. 元音和滑音",
    subtitle: "西语拼读的地基：五个元音短、稳、干净。",
    rules: [
      {
        id: "five-vowels",
        title: "五个元音很稳定",
        pattern: "a e i o u",
        explanation: "a 像“啊”，e 像“诶”，i 像“衣”，o 像“哦”，u 像“乌”。它们通常比英语短，不要读成双元音。",
        examples: ["Ana", "me", "sí", "hola", "gusto"],
        watchOut: "不要把 o 读成英语 ow，也不要把 u 读成 yu。",
        priority: "now"
      },
      {
        id: "diphthongs",
        title: "两个元音可以合成一拍",
        pattern: "ie / ue / ai / ei / oy",
        explanation: "弱元音 i、u 和另一个元音放在一起时，常常合成一拍读。",
        examples: ["bien", "Buenos días", "seis", "soy"],
        watchOut: "soy 是一拍里的滑音，不是英语 soy。",
        priority: "now"
      },
      {
        id: "hiatus",
        title: "重音可以把元音拆开",
        pattern: "í / ú + vowel",
        explanation: "í 或 ú 带重音时，常把本来可能合成一拍的元音拆成两拍。",
        examples: ["día", "país", "María"],
        watchOut: "días 常读成 di-as，两拍要分清。",
        priority: "soon"
      }
    ]
  },
  {
    id: "stress",
    title: "2. 重音规则",
    subtitle: "看到一个新词时，先判断哪一拍重读。",
    rules: [
      {
        id: "stress-vowel-n-s",
        title: "以元音、n、s 结尾，通常倒数第二拍重读",
        pattern: "vowel / n / s",
        explanation: "没有重音符号时，如果词尾是元音、n 或 s，通常重音在倒数第二个音节。",
        examples: ["hola", "llamas", "tardes", "trabajo"],
        watchOut: "llamas 是 lla-mas，重音在 lla。",
        priority: "now"
      },
      {
        id: "stress-other-consonants",
        title: "以其他辅音结尾，通常最后一拍重读",
        pattern: "other consonants",
        explanation: "没有重音符号时，如果词尾不是元音、n、s，通常重音在最后一个音节。",
        examples: ["español", "usted", "Madrid"],
        watchOut: "这是之后读新词很有用的规则。",
        priority: "reference"
      },
      {
        id: "written-accent",
        title: "重音符号优先级最高",
        pattern: "á é í ó ú",
        explanation: "有重音符号时，直接读重音符号所在那一拍。它也常用来区别词义或语法功能。",
        examples: ["¿Cómo?", "estás", "¿dónde?", "tú", "sí"],
        watchOut: "中文母语者容易把问句读平；西语需要明显重拍。",
        priority: "now"
      }
    ]
  },
  {
    id: "core-consonants",
    title: "3. 高频辅音",
    subtitle: "先掌握会改变读音的字母组合。",
    rules: [
      {
        id: "silent-h",
        title: "h 不发音",
        pattern: "h = silent",
        explanation: "h 写出来但不读。Hola 不是英语 ho-la，而是直接从 o 开始。",
        examples: ["Hola", "hoy", "hotel"],
        watchOut: "读 Hola 时，不要在开头加 h 气音。",
        priority: "now"
      },
      {
        id: "b-v",
        title: "b / v 发音很接近",
        pattern: "b ≈ v",
        explanation: "大多数西语里，b 和 v 都接近 b。词中两个元音之间会更轻。",
        examples: ["bien", "vivo", "Buenos días"],
        watchOut: "不要用英语 very 的 v 去读 vivo。",
        priority: "soon",
        variant: "broad_latam"
      },
      {
        id: "d-between-vowels",
        title: "d 在元音之间会变轻",
        pattern: "ado / ada / ido",
        explanation: "d 在两个元音之间常读得很轻，像轻轻擦过去。",
        examples: ["Encantado", "Encantada", "cansado"],
        watchOut: "初学先不要吞掉，先读轻、读清楚。",
        priority: "soon"
      },
      {
        id: "ch",
        title: "ch 是短促的 ch",
        pattern: "ch",
        explanation: "ch 像中文“吃”的开头，但更短更干净。",
        examples: ["mucho", "China", "noche"],
        watchOut: "不要拉长，也不要读成英语 sh。",
        priority: "now"
      },
      {
        id: "n-tilde",
        title: "ñ 是一个单独字母",
        pattern: "ñ",
        explanation: "ñ 接近中文“尼亚”里 ni 的鼻化连读，不是 n + y 两个完全分开的音。",
        examples: ["niño", "España", "mañana"],
        watchOut: "n 和 ñ 能区别词义，之后要单独练。",
        priority: "reference"
      }
    ]
  },
  {
    id: "c-g-q",
    title: "4. c / g / q 的拼写规则",
    subtitle: "这些是西语看词读音的关键规则。",
    rules: [
      {
        id: "c-hard",
        title: "c + a/o/u 读 k",
        pattern: "ca / co / cu",
        explanation: "c 在 a、o、u 前面读 k。",
        examples: ["casa", "como", "Cuba"],
        watchOut: "como 没重音是“像/我吃”，cómo 有重音常用于“怎样”。",
        priority: "now"
      },
      {
        id: "c-soft-z",
        title: "c + e/i 和 z 在拉美多读 s",
        pattern: "ce / ci / z",
        explanation: "拉美常见读法里，ce、ci、z 多读 s。西班牙部分地区会读成类似 th 的音。",
        examples: ["gracias", "cine", "zapato"],
        watchOut: "这是地区差异，不是对错差异。",
        priority: "soon",
        variant: "regional"
      },
      {
        id: "qu",
        title: "qu + e/i 读 k，u 不发音",
        pattern: "que / qui",
        explanation: "que、qui 里的 u 通常不读，只表示 q 在 e/i 前保持 k 音。",
        examples: ["que", "quién", "México"],
        watchOut: "que 读 ke，不读 kwe。",
        priority: "reference"
      },
      {
        id: "g-hard",
        title: "g + a/o/u 读 g",
        pattern: "ga / go / gu",
        explanation: "g 在 a、o、u 前面读 g；在词中可能比英语 g 更轻。",
        examples: ["gato", "gusto", "amigo"],
        watchOut: "gusto 的 gu 是 g + u，u 要读。",
        priority: "soon"
      },
      {
        id: "g-soft-j",
        title: "g + e/i 像 j，是喉部轻擦音",
        pattern: "ge / gi / j",
        explanation: "ge、gi 和 j 常读成喉部轻擦音，像很轻的 h。",
        examples: ["gente", "gimnasio", "trabajo"],
        watchOut: "不要读成英语 job 的 j。",
        priority: "soon"
      },
      {
        id: "gue-gui-gue-gui",
        title: "gue/gui 与 güe/güi",
        pattern: "gue / gui / güe / güi",
        explanation: "gue、gui 里的 u 通常不读；如果写成 güe、güi，u 要读出来。",
        examples: ["guerra", "guitarra", "vergüenza", "pingüino"],
        watchOut: "两个点的 ü 是“这里 u 要发音”的标记。",
        priority: "reference"
      }
    ]
  },
  {
    id: "r-ll-y",
    title: "5. r / rr / ll / y",
    subtitle: "这些最影响“听起来像不像西语”，但目标仍是清楚可懂。",
    rules: [
      {
        id: "single-r",
        title: "单 r 多数时候轻弹一下",
        pattern: "r",
        explanation: "eres、pero、tardes 里的 r 是舌尖轻轻弹一下，不是英语 r。",
        examples: ["eres", "pero", "gracias", "tardes"],
        watchOut: "刚开始弹不出来没关系，先避免英语 r。",
        priority: "now"
      },
      {
        id: "strong-r",
        title: "词首 r 和 rr 更强",
        pattern: "r- / rr",
        explanation: "词首 r 和双 rr 通常是更强的颤音。这个后面会集中练。",
        examples: ["rojo", "perro", "carro"],
        watchOut: "pero 和 perro 是一组重要对比。",
        priority: "reference"
      },
      {
        id: "ll-y",
        title: "ll / y 先按拉美常见 y 音",
        pattern: "ll ≈ y",
        explanation: "核心课程按 broadly understandable Latin American Spanish。llamo、llamas 里的 ll 先练成接近 y 的音。",
        examples: ["llamo", "llamas", "yo", "¿Y tú?"],
        watchOut: "不要把 llamo 读成 la-mo，也不要把 y tú 的 y 读成英文 why。",
        priority: "now",
        variant: "regional"
      }
    ]
  },
  {
    id: "syllables",
    title: "6. 音节、连读和节奏",
    subtitle: "不要只读单词，要练成短句节奏。",
    rules: [
      {
        id: "syllable-rhythm",
        title: "每个音节都比较清楚",
        pattern: "CV rhythm",
        explanation: "西语节奏比英语更平均，元音不容易被弱化成含糊音。",
        examples: ["me lla-mo", "mu-cho gus-to", "bue-nos dí-as"],
        watchOut: "不要把非重读元音全部吞掉。",
        priority: "now"
      },
      {
        id: "linking",
        title: "词和词之间会自然连起来",
        pattern: "vowel linking",
        explanation: "一个词以元音结尾、下一个词以元音开头时，说话中常自然连起来。",
        examples: ["vivo en", "mucho gusto", "de dónde"],
        watchOut: "初学先慢读清楚，再逐渐连起来。",
        priority: "soon"
      },
      {
        id: "question-rhythm",
        title: "问句从开头就准备好语调",
        pattern: "¿ ... ?",
        explanation: "西语问句前面有倒问号 ¿，它不发音，但提醒你从句首就是问句。",
        examples: ["¿Cómo te llamas?", "¿Cómo estás?", "¿De dónde eres?"],
        watchOut: "不要读到最后才突然变成问句。",
        priority: "now"
      }
    ]
  },
  {
    id: "orthography",
    title: "7. 拼写符号",
    subtitle: "这些符号不是装饰，它们会影响读音或句子功能。",
    rules: [
      {
        id: "acute",
        title: "尖音符号标重音",
        pattern: "á é í ó ú",
        explanation: "尖音符号告诉你这一拍重读，也可能区分词义。",
        examples: ["sí", "tú", "día", "estás"],
        watchOut: "键盘打不出来时可以先学会识别，后面再练输入。",
        priority: "now"
      },
      {
        id: "diaeresis",
        title: "ü 表示 u 要读",
        pattern: "ü",
        explanation: "在 güe、güi 中，两个点告诉你 u 要读出来。",
        examples: ["vergüenza", "pingüino"],
        watchOut: "这是低频但规则很清楚，看到再查即可。",
        priority: "reference"
      },
      {
        id: "inverted-punctuation",
        title: "倒问号和倒感叹号",
        pattern: "¿ ? / ¡ !",
        explanation: "¿ 和 ¡ 放在句子开头，告诉你从哪里开始进入疑问或感叹语气。",
        examples: ["¿Cómo estás?", "¡Hola!"],
        watchOut: "它们不是可有可无的乱码，是西语标准标点。",
        priority: "now"
      }
    ]
  },
  {
    id: "variants",
    title: "8. 地区差异",
    subtitle: "变体不是错误，学习时先选一个主目标，再能听懂其他变体。",
    rules: [
      {
        id: "latam-spain-c-z",
        title: "拉美与西班牙的 c/z",
        pattern: "seseo / distinción",
        explanation: "拉美大多数地区把 z、ce、ci 读成 s；西班牙部分地区把它们读成类似 th 的音。",
        examples: ["gracias", "zapato", "cine"],
        watchOut: "核心课程先按拉美可懂发音练，听到西班牙读法时不要判成错。",
        priority: "reference",
        variant: "regional"
      },
      {
        id: "mexico-x",
        title: "Mexico 里的 x 是特殊历史拼写",
        pattern: "x in México",
        explanation: "México 里的 x 常读成 j 的喉音。普通 x 还有 ks、s、h 等读法，常见词逐个记。",
        examples: ["México", "examen", "Xochimilco"],
        watchOut: "x 不是一个永远固定的音，遇到专名尤其要查。",
        priority: "reference",
        variant: "mexico"
      },
      {
        id: "yeismo",
        title: "ll / y 有地区差异",
        pattern: "yeísmo",
        explanation: "许多拉美地区 ll 和 y 接近同音；也有地区保留区别或读成不同音色。",
        examples: ["llamo", "yo", "calle"],
        watchOut: "我们先练常见拉美可懂读法，不把其他正常变体判成错。",
        priority: "reference",
        variant: "regional"
      }
    ]
  }
];

export const sourceNotes = [
  "Reference basis: Spanish orthography and phonology conventions used in standard Spanish teaching, with CEFR phonological competence focused on intelligibility, articulation, stress, rhythm and prosody.",
  "Course target: broadly understandable Latin American Spanish. Mexico-specific items are marked as Mexico or regional reference items.",
  "Pedagogy: current-stage drills stay tied to the learner's Can-Do tasks; the full system remains available as a lookup reference."
];
