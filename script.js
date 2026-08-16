const translations = {
  zh: {
    pageTitle: "Actor.D｜个人主页",
    pageDescription:
      "Actor.D 的个人主页——浙江大学信息管理与信息系统专业毕业，现就读于香港中文大学商业分析理学硕士。",
    accessibility: {
      skip: "跳到主要内容",
      home: "返回首页",
      language: "切换页面语言",
      menuOpen: "打开导航菜单",
      menuClose: "关闭导航菜单",
      navigation: "主导航",
      portrait: "Actor.D 个人标识",
      focusList: "专业方向列表",
    },
    nav: { about: "关于我", journey: "学习经历", contact: "联系我" },
    hero: {
      eyebrow: "信息系统 × 商业分析",
      greeting: "你好，我是",
      name: "Actor.D。",
      intro:
        "从浙江大学信息管理与信息系统专业，到香港中文大学商业分析理学硕士，我正在数据、技术与商业的交汇处持续探索。",
      primaryAction: "了解我的经历",
      secondaryAction: "联系我",
      scroll: "向下探索",
    },
    about: {
      title: "关于我",
      lead: "以数据理解问题，用分析支持更好的商业决策。",
      body:
        "我毕业于浙江大学信息管理与信息系统专业，目前就读于香港中文大学商业分析理学硕士项目。这段跨越信息系统与商业分析的学习经历，让我持续关注如何连接数据、技术与真实的商业问题。",
    },
    focus: {
      informationManagement: "信息管理",
      informationSystems: "信息系统",
      businessAnalytics: "商业分析",
      dataDriven: "数据驱动决策",
    },
    journey: {
      title: "学习与方向",
      zjuType: "本科 · ZJU",
      zjuTitle: "浙江大学",
      zjuBody: "信息管理与信息系统专业毕业，建立了信息技术、数据与管理相结合的知识基础。",
      cuhkType: "硕士 · CUHK",
      cuhkTitle: "香港中文大学",
      cuhkBody: "现就读于商业分析理学硕士项目，进一步探索数据分析在商业场景中的应用。",
      focusType: "专业方向",
      focusTitle: "跨学科视角",
      focusBody:
        "将信息系统背景与商业分析方法相连接，从数据中提炼洞察，为复杂问题寻找清晰、可执行的答案。",
    },
    contact: { lineOne: "期待与你连接，", lineTwo: "聊聊新的想法。" },
    footer: { backToTop: "回到顶部 ↑" },
  },
  en: {
    pageTitle: "Actor.D | Personal Website",
    pageDescription:
      "Actor.D's personal website — ZJU graduate in Information Management & Information Systems and MSc Business Analytics student at CUHK.",
    accessibility: {
      skip: "Skip to main content",
      home: "Back to home",
      language: "Switch page language",
      menuOpen: "Open navigation menu",
      menuClose: "Close navigation menu",
      navigation: "Main navigation",
      portrait: "Actor.D monogram",
      focusList: "Areas of focus",
    },
    nav: { about: "About", journey: "Journey", contact: "Contact" },
    hero: {
      eyebrow: "INFORMATION SYSTEMS × BUSINESS ANALYTICS",
      greeting: "Hi, I'm",
      name: "Actor.D.",
      intro:
        "From Information Management & Information Systems at Zhejiang University to an MSc in Business Analytics at CUHK, I continue to explore the intersection of data, technology, and business.",
      primaryAction: "Explore my journey",
      secondaryAction: "Get in touch",
      scroll: "Scroll to explore",
    },
    about: {
      title: "About me",
      lead: "Understanding problems through data and enabling better business decisions through analytics.",
      body:
        "I graduated from Zhejiang University with a degree in Information Management & Information Systems and am currently pursuing an MSc in Business Analytics at The Chinese University of Hong Kong. This interdisciplinary journey keeps me focused on connecting data and technology with real business challenges.",
    },
    focus: {
      informationManagement: "Information Management",
      informationSystems: "Information Systems",
      businessAnalytics: "Business Analytics",
      dataDriven: "Data-driven Decisions",
    },
    journey: {
      title: "Journey & focus",
      zjuType: "UNDERGRADUATE · ZJU",
      zjuTitle: "Zhejiang University",
      zjuBody:
        "Graduated in Information Management & Information Systems, building a foundation across technology, data, and management.",
      cuhkType: "MASTER'S · CUHK",
      cuhkTitle: "The Chinese University of Hong Kong",
      cuhkBody:
        "Currently pursuing an MSc in Business Analytics and exploring how analytics can be applied to real-world business contexts.",
      focusType: "AREA OF FOCUS",
      focusTitle: "An interdisciplinary lens",
      focusBody:
        "Connecting an information systems background with business analytics to turn data into insight and complex questions into clear, actionable answers.",
    },
    contact: { lineOne: "Let's connect and", lineTwo: "explore new ideas." },
    footer: { backToTop: "Back to top ↑" },
  },
};

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");
const navigationLinks = document.querySelectorAll(".site-nav a");
const languageButtons = document.querySelectorAll("[data-lang]");
const description = document.querySelector('meta[name="description"]');
const year = document.querySelector("#current-year");

let currentLanguage = getInitialLanguage();
year.textContent = new Date().getFullYear();

function getTranslation(language, path) {
  return path.split(".").reduce((value, key) => value?.[key], translations[language]);
}

function getInitialLanguage() {
  try {
    const savedLanguage = localStorage.getItem("actor-language");
    if (savedLanguage === "zh" || savedLanguage === "en") return savedLanguage;
  } catch {
    // The page still works when browser storage is unavailable.
  }

  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = translations[language].pageTitle;
  description.setAttribute("content", translations[language].pageDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(language, element.dataset.i18n);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getTranslation(language, element.dataset.i18nAriaLabel);
    if (value) element.setAttribute("aria-label", value);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("actor-language", language);
  } catch {
    // No persistence is required for the language switcher to function.
  }
}

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", translations[currentLanguage].accessibility.menuOpen);
  navigation.classList.remove("is-open");
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen
      ? translations[currentLanguage].accessibility.menuOpen
      : translations[currentLanguage].accessibility.menuClose,
  );
  navigation.classList.toggle("is-open", !isOpen);
});

navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.14 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
setLanguage(currentLanguage);
