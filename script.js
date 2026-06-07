/* ===== Header shadow on scroll ===== */
const header = document.querySelector("[data-header]");
const syncHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

/* ===== Bilingual (EN / 中文) ===== */
const I18N = {
  en: {
    "skip": "Skip to the apps",
    "nav.apps": "Apps",
    "nav.principles": "Principles",
    "nav.plans": "Plans",
    "nav.contact": "Contact",

    "hero.eyebrow": "Two kinds of seeing",
    "hero.h1": "See clearly,<br /><em>both ways.</em>",
    "hero.lead":
      "Mira Vista is two small daily apps. One helps you look back at yourself. One helps you understand the world. Both are calm, local-first, and quiet by design.",
    "hero.duoMira": "<strong>Mira</strong> — look back at yourself, every day.",
    "hero.duoVista": "<strong>Vista</strong> — understand the world, every day.",
    "hero.metaMira": "Meet Mira",
    "hero.metaVista": "Meet Vista",

    "thesis.kicker": "Why we built this",
    "thesis.line":
      "In the age of AI, the most important thing is your own thinking.",
    "thesis.body":
      "Answers are everywhere now — instant, fluent, endless. What's rare is the habit of stopping to think for yourself. Mira Vista is built around that one habit: Mira turns it inward, to know yourself; Vista turns it outward, to understand the world. Two small daily practices for keeping a mind of your own.",

    "apps.kickerMira": "Look inward",
    "apps.leadMira":
      "A mirror for your own thoughts — not a feed, not advice. Mira asks you better questions and keeps the answers on your phone.",
    "apps.forMira": "For people tired of being cheerleaded by their own apps.",
    "apps.miraL1": "Asks sharper questions the longer you use it",
    "apps.miraL2": "Quotes you back to yourself, instead of praising you",
    "apps.miraL3": "Remembers the promise you made last week",
    "apps.status": "Coming to the App Store",
    "apps.kickerVista": "Look outward",
    "apps.leadVista":
      "Understand the news that actually matters — each story in six parts, then a question back to you. A daily way to train how you read the world.",
    "apps.forVista": "For people tired of doomscrolling headlines.",
    "apps.vistaL1": "Six-part analysis, not a hot take",
    "apps.vistaL2": "Ask anything about a story and follow up",
    "apps.vistaL3": "Five questions a day — no streak, no guilt",

    "principles.kicker": "Principles",
    "principles.h2": "Three things we won't do.",
    "principles.t1": "We won't think for you.",
    "principles.b1":
      "The apps ask; you answer. No AI verdicts, no “you should,” no conclusions handed to you.",
    "principles.t2": "We won't manufacture anxiety.",
    "principles.b2":
      "No outrage feed. No streak guilt. No red badges screaming for your attention.",
    "principles.t3": "We won't sell mystical growth.",
    "principles.b3":
      "No horoscopes, no “unlock your true potential.” Just two honest tools that respect your time.",

    "plans.kicker": "Plans & privacy",
    "plans.h2": "Honest by default.",
    "plans.t1": "Free does real work",
    "plans.b1":
      "Mira’s daily reflection and Vista’s news list are free, forever. You get something useful on day one, with no account required.",
    "plans.t2": "Pro, if you want more",
    "plans.b2":
      "$4.99 / month or $39.99 / year, with a 7-day free trial — the same for both apps. Subscriptions are handled by Apple; cancel anytime in your Apple ID. No ads, ever. We never sell your data.",
    "plans.legalLabel": "Read the details:",
    "plans.miraPrivacy": "Mira privacy",
    "plans.miraTerms": "Mira terms",
    "plans.vistaPrivacy": "Vista privacy",
    "plans.vistaTerms": "Vista terms",

    "contact.kicker": "Contact",
    "contact.h2": "Say hello.",
    "contact.copy":
      'Questions, press, or early access — write to <a href="mailto:mira-vista@mira-vista.com">mira-vista@mira-vista.com</a>. One person reads every message.',
    "contact.btn": "Email us",

    "footer.miraPrivacy": "Mira Privacy",
    "footer.miraTerms": "Mira Terms",
    "footer.vistaPrivacy": "Vista Privacy",
    "footer.vistaTerms": "Vista Terms",
  },

  zh: {
    "skip": "跳到应用介绍",
    "nav.apps": "应用",
    "nav.principles": "理念",
    "nav.plans": "价格",
    "nav.contact": "联系",

    "hero.eyebrow": "两种看见",
    "hero.h1": "看清自己，<br /><em>看懂世界。</em>",
    "hero.lead":
      "Mira Vista 是两个小小的日常应用。一个帮你回看自己，一个帮你理解世界。都安静、本地优先、克制设计。",
    "hero.duoMira": "<strong>Mira</strong> — 每天，回看自己。",
    "hero.duoVista": "<strong>Vista</strong> — 每天，理解世界。",
    "hero.metaMira": "认识 Mira",
    "hero.metaVista": "认识 Vista",

    "thesis.kicker": "为什么做这件事",
    "thesis.line": "AI 时代，最重要的，是你自己的思考。",
    "thesis.body":
      "答案如今无处不在——即时、流畅、无穷无尽。稀缺的，是停下来自己思考的习惯。Mira Vista 就是围绕这一件事而生：Mira 向内，认识自己；Vista 向外，理解世界。两个小小的日常练习，守住一个属于你自己的脑子。",

    "apps.kickerMira": "向内看",
    "apps.leadMira":
      "一面照见自己想法的镜子——不是信息流，不是建议。Mira 问你更好的问题，答案只留在你的手机里。",
    "apps.forMira": "给厌倦了被自己的 App 鼓吹打气的人。",
    "apps.miraL1": "用得越久，问题问得越准",
    "apps.miraL2": "用你的原话追问你，而不是夸你",
    "apps.miraL3": "记得你上周许下的承诺",
    "apps.status": "即将登陆 App Store",
    "apps.kickerVista": "向外看",
    "apps.leadVista":
      "看懂真正重要的新闻——每条拆成六段，再反问你一个问题。每天练习你读世界的方式。",
    "apps.forVista": "给厌倦了刷标题、越刷越焦虑的人。",
    "apps.vistaL1": "六段分析，不是一句热评",
    "apps.vistaL2": "任何一条新闻都能追问",
    "apps.vistaL3": "每天五个问题——不打卡，无负担",

    "principles.kicker": "我们的原则",
    "principles.h2": "我们坚持不做的三件事。",
    "principles.t1": "我们不替你思考。",
    "principles.b1":
      "应用提问，你来回答。没有 AI 定论，没有「你应该」，不把结论硬塞给你。",
    "principles.t2": "我们不制造焦虑。",
    "principles.b2":
      "没有激怒你的信息流，没有打卡负罪感，没有抢你注意力的小红点。",
    "principles.t3": "我们不卖玄学成长。",
    "principles.b3":
      "没有星座运势，没有「解锁你的潜能」。只是两个尊重你时间的诚实工具。",

    "plans.kicker": "价格与隐私",
    "plans.h2": "默认诚实。",
    "plans.t1": "免费版真的能用",
    "plans.b1":
      "Mira 的每日自省和 Vista 的新闻列表永久免费。第一天就能用上，全程不需要账号。",
    "plans.t2": "想要更多，再升 Pro",
    "plans.b2":
      "每月 $4.99 或每年 $39.99，含 7 天免费试用——两个应用同价。订阅由 Apple 处理，可随时在 Apple ID 取消。永远没有广告，绝不出售你的数据。",
    "plans.legalLabel": "细则在此：",
    "plans.miraPrivacy": "Mira 隐私",
    "plans.miraTerms": "Mira 条款",
    "plans.vistaPrivacy": "Vista 隐私",
    "plans.vistaTerms": "Vista 条款",

    "contact.kicker": "联系",
    "contact.h2": "打个招呼。",
    "contact.copy":
      '提问、媒体或想抢先体验——写信到 <a href="mailto:mira-vista@mira-vista.com">mira-vista@mira-vista.com</a>。每封信都有人亲自读。',
    "contact.btn": "写信给我们",

    "footer.miraPrivacy": "Mira 隐私",
    "footer.miraTerms": "Mira 条款",
    "footer.vistaPrivacy": "Vista 隐私",
    "footer.vistaTerms": "Vista 条款",
  },
};

// Bumped from "mv-lang" so any value written by the old browser-language
// auto-detect is ignored — everyone now starts in English by default.
const LANG_KEY = "mv-lang2";

function applyLang(lang, persist) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  document.documentElement.setAttribute("data-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n-html")];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll("[data-href-en]").forEach((el) => {
    const href = el.getAttribute(lang === "zh" ? "data-href-zh" : "data-href-en");
    if (href) el.setAttribute("href", href);
  });

  const toggle = document.querySelector("[data-lang-toggle]");
  if (toggle) {
    toggle.textContent = lang === "zh" ? "EN" : "中文";
    toggle.setAttribute(
      "aria-label",
      lang === "zh" ? "Switch to English" : "切换到中文",
    );
  }

  // Only remember the language when the user explicitly picks it.
  if (persist) {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}
  }
}

function initLang() {
  // Default to English. Only honor a language the user explicitly chose
  // before (no browser-language sniffing).
  let saved = null;
  try {
    saved = localStorage.getItem(LANG_KEY);
  } catch (e) {}
  return saved === "zh" ? "zh" : "en";
}

applyLang(initLang(), false);

document.querySelector("[data-lang-toggle]")?.addEventListener("click", () => {
  const current =
    document.documentElement.getAttribute("data-lang") === "zh" ? "zh" : "en";
  applyLang(current === "zh" ? "en" : "zh", true);
});
