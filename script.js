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
      portrait: "Actor.D 数据化个人信息面板",
      focusList: "专业方向列表",
      techStack: "项目技术栈",
      projectPreview: "浙就来项目交互界面预览",
      projectTabs: "选择要预览的项目界面",
    },
    nav: { about: "关于我", projects: "项目案例", journey: "学习经历", contact: "联系我" },
    hero: {
      eyebrow: "信息系统 × 商业分析",
      greeting: "你好，我是",
      name: "Actor.D。",
      intro:
        "从浙江大学信息管理与信息系统专业，到香港中文大学商业分析理学硕士，我正在数据、技术与商业的交汇处持续探索。",
      primaryAction: "查看我的项目",
      secondaryAction: "联系我",
      scroll: "向下探索",
      metricBuild: "前后端开发",
      metricJourney: "跨校学习经历",
      metricFocus: "交叉专业视角",
      visualStatus: "当前状态",
      visualMode: "探索模式",
    },
    about: {
      title: "关于我",
      lead: "以数据理解问题，用分析支持更好的商业决策。",
      body:
        "我毕业于浙江大学信息管理与信息系统专业，目前就读于香港中文大学商业分析理学硕士项目。这段跨越信息系统与商业分析的学习经历，让我持续关注如何连接数据、技术与真实的商业问题。",
      factFoundation: "本科基础",
      factCurrent: "当前项目",
      factInterest: "关注领域",
    },
    focus: {
      informationManagement: "信息管理",
      informationSystems: "信息系统",
      businessAnalytics: "商业分析",
      dataDriven: "数据驱动决策",
    },
    projects: {
      title: "项目案例",
      type: "全栈 Web 应用",
      subtitle: "面向浙江大学校园场景的配送服务平台",
      summary:
        "项目围绕校园外卖与物品配送需求，连接用户认证、多步骤下单、地址管理、支付选择和订单查询，形成完整的前后端业务流程。",
      challengeEyebrow: "业务问题",
      challengeTitle: "校园配送信息分散，履约流程缺少统一入口",
      challengeBody:
        "学生在外卖、快递与校内物品配送场景中，需要重复沟通取件位置、收货地址、费用和进度，信息容易遗漏。",
      solutionEyebrow: "产品方案",
      solutionTitle: "把身份、订单、地址与支付串成一条数字化链路",
      solutionBody:
        "平台围绕学生身份构建统一账户，用分步表单降低下单复杂度，并通过订单状态和个人中心沉淀完整服务记录。",
      prototype: "交互界面预览",
      tabLogin: "用户登录",
      tabOrder: "创建订单",
      tabOrders: "订单管理",
      mockPlatform: "校园专属配送平台",
      mockWelcome: "欢迎回来",
      mockWelcomeBody: "使用学号登录校园配送系统",
      mockCampus: "选择校区",
      mockCampusValue: "浙江大学紫金港校区",
      mockStudentId: "学号",
      mockPassword: "密码",
      mockLoginButton: "立即登录",
      mockRegister: "注册账号",
      mockReset: "找回密码",
      mockNewOrder: "新建配送订单",
      stepInfo: "订单信息",
      stepAddress: "配送地址",
      stepPayment: "支付方式",
      stepComplete: "完成",
      mockOrderDetail: "填写配送需求",
      mockFoodName: "外卖或物品名称",
      mockFoodValue: "外卖订单",
      mockLocker: "取件柜信息",
      mockLockerValue: "紫金港校区东二门智能柜",
      mockUrgent: "加急配送",
      mockSummary: "订单摘要",
      mockDeliveryFee: "配送费",
      mockPoints: "积分支付",
      mockNext: "下一步",
      mockMyOrders: "我的订单",
      mockSmartLocker: "东二门智能外卖柜",
      mockUrgentTag: "加急",
      mockDelivering: "配送中",
      mockTakeout: "外卖订单",
      mockDetail: "订单详情",
      mockReorder: "再来一单",
      mockDorm: "蓝田学园宿舍",
      mockCompleted: "已完成",
      mockParcel: "快递代取",
      factWorkflow: "步订单流程",
      factModels: "个核心数据模型",
      factAuth: "令牌身份认证",
      flowEyebrow: "核心业务流",
      flowTitle: "从需求提交到订单履约",
      flowOneTitle: "提交需求",
      flowOneBody: "填写物品名称、取件柜与备注，支持加急配送。",
      flowTwoTitle: "确认地址",
      flowTwoBody: "选择常用地址或输入新地点，绑定当前用户。",
      flowThreeTitle: "选择支付",
      flowThreeBody: "按普通或加急规则计算现金与积分费用。",
      flowFourTitle: "追踪订单",
      flowFourBody: "查看订单列表、详情、状态并支持再次下单。",
      featuresEyebrow: "核心功能",
      featuresTitle: "从登录到履约的完整体验",
      featureOne: "学号注册登录、密码加密与受保护路由",
      featureTwo: "订单创建、地址选择、加急费用与多种支付方式",
      featureThree: "个人资料、常用地址、积分和订单状态管理",
      featureFour: "订单图片上传与基于用户的 API 权限控制",
      architectureEyebrow: "系统架构",
      architectureTitle: "清晰的前后端分层",
      archClient: "客户端",
      archData: "数据层",
      engineeringEyebrow: "工程拆解",
      engineeringTitle: "不仅完成页面，也打通真实数据链路",
      engineeringBody:
        "前端路由、状态管理和表单交互与后端认证、数据库关系、文件上传共同组成可运行的全栈原型。",
      engineeringFrontTitle: "前端应用层",
      engineeringFrontBody: "Vue 3 组件化页面，Vue Router 管理受保护路由，Pinia 负责广告等共享状态。",
      engineeringApiTitle: "后端服务层",
      engineeringApiBody: "Flask 提供 REST API，处理注册登录、资料、地址、订单和图片上传。",
      engineeringDataTitle: "数据模型层",
      engineeringDataBody: "User、Address、Order 三个核心模型通过用户外键关联，支持用户级数据隔离。",
      engineeringSecurityTitle: "认证与安全",
      engineeringSecurityBody: "PBKDF2 密码哈希、24 小时 JWT、请求鉴权与上传文件类型、大小限制。",
      apiRegister: "创建学生账户",
      apiLogin: "验证身份并签发令牌",
      apiAddresses: "读取当前用户地址",
      apiOrder: "创建并计算配送订单",
      apiOrderDetail: "获取用户订单详情",
      apiUpload: "上传订单凭证图片",
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
      portrait: "Actor.D data profile panel",
      focusList: "Areas of focus",
      techStack: "Project technology stack",
      projectPreview: "Interactive interface preview for the Zhejiulai project",
      projectTabs: "Choose a project screen to preview",
    },
    nav: { about: "About", projects: "Project", journey: "Journey", contact: "Contact" },
    hero: {
      eyebrow: "INFORMATION SYSTEMS × BUSINESS ANALYTICS",
      greeting: "Hi, I'm",
      name: "Actor.D.",
      intro:
        "From Information Management & Information Systems at Zhejiang University to an MSc in Business Analytics at CUHK, I continue to explore the intersection of data, technology, and business.",
      primaryAction: "View my project",
      secondaryAction: "Get in touch",
      scroll: "Scroll to explore",
      metricBuild: "Front-end & back-end",
      metricJourney: "Cross-campus journey",
      metricFocus: "Interdisciplinary lens",
      visualStatus: "CURRENT STATUS",
      visualMode: "EXPLORATION MODE",
    },
    about: {
      title: "About me",
      lead: "Understanding problems through data and enabling better business decisions through analytics.",
      body:
        "I graduated from Zhejiang University with a degree in Information Management & Information Systems and am currently pursuing an MSc in Business Analytics at The Chinese University of Hong Kong. This interdisciplinary journey keeps me focused on connecting data and technology with real business challenges.",
      factFoundation: "FOUNDATION",
      factCurrent: "CURRENT PROGRAMME",
      factInterest: "INTERESTS",
    },
    focus: {
      informationManagement: "Information Management",
      informationSystems: "Information Systems",
      businessAnalytics: "Business Analytics",
      dataDriven: "Data-driven Decisions",
    },
    projects: {
      title: "Featured project",
      type: "FULL-STACK WEB APPLICATION",
      subtitle: "A campus delivery service platform designed for Zhejiang University",
      summary:
        "Built around campus food and parcel delivery, the project connects authentication, multi-step ordering, address management, payment selection, and order tracking in one complete full-stack workflow.",
      challengeEyebrow: "THE PROBLEM",
      challengeTitle: "Campus delivery information is fragmented, with no unified fulfilment workflow",
      challengeBody:
        "Across food, parcel, and on-campus delivery, students repeatedly communicate pickup points, destinations, fees, and progress—making details easy to miss.",
      solutionEyebrow: "THE SOLUTION",
      solutionTitle: "Connect identity, orders, addresses, and payment in one digital chain",
      solutionBody:
        "The platform builds a unified account around student identity, simplifies ordering with guided steps, and retains the complete service history through status tracking and a personal centre.",
      prototype: "Interactive UI preview",
      tabLogin: "User login",
      tabOrder: "Create order",
      tabOrders: "Order management",
      mockPlatform: "Campus delivery platform",
      mockWelcome: "Welcome back",
      mockWelcomeBody: "Sign in with your student ID",
      mockCampus: "Campus",
      mockCampusValue: "Zijingang Campus, ZJU",
      mockStudentId: "Student ID",
      mockPassword: "Password",
      mockLoginButton: "Sign in",
      mockRegister: "Create account",
      mockReset: "Reset password",
      mockNewOrder: "Create delivery order",
      stepInfo: "Order info",
      stepAddress: "Address",
      stepPayment: "Payment",
      stepComplete: "Complete",
      mockOrderDetail: "Delivery request",
      mockFoodName: "Food or item",
      mockFoodValue: "Takeout order",
      mockLocker: "Pickup locker",
      mockLockerValue: "East Gate 2 smart locker, Zijingang",
      mockUrgent: "Priority delivery",
      mockSummary: "Order summary",
      mockDeliveryFee: "Delivery fee",
      mockPoints: "Pay with points",
      mockNext: "Continue",
      mockMyOrders: "My orders",
      mockSmartLocker: "East Gate 2 smart locker",
      mockUrgentTag: "Priority",
      mockDelivering: "Delivering",
      mockTakeout: "Takeout order",
      mockDetail: "View details",
      mockReorder: "Order again",
      mockDorm: "Lantian College dormitory",
      mockCompleted: "Completed",
      mockParcel: "Parcel pickup",
      factWorkflow: "step order workflow",
      factModels: "core data models",
      factAuth: "token authentication",
      flowEyebrow: "CORE WORKFLOW",
      flowTitle: "From request to fulfilment",
      flowOneTitle: "Submit request",
      flowOneBody: "Enter the item, pickup locker, notes, and optional priority delivery.",
      flowTwoTitle: "Confirm address",
      flowTwoBody: "Select a saved address or add a new location tied to the user.",
      flowThreeTitle: "Choose payment",
      flowThreeBody: "Calculate cash and points pricing using standard or priority rules.",
      flowFourTitle: "Track order",
      flowFourBody: "Review order lists, details, status, and place the same order again.",
      featuresEyebrow: "CORE CAPABILITIES",
      featuresTitle: "A complete experience from sign-in to delivery",
      featureOne: "Student account registration, password hashing, and protected routes",
      featureTwo: "Order creation, address selection, priority pricing, and payment options",
      featureThree: "Profiles, saved addresses, points, and order status management",
      featureFour: "Order image uploads and user-scoped API authorization",
      architectureEyebrow: "SYSTEM ARCHITECTURE",
      architectureTitle: "A clear full-stack separation",
      archClient: "CLIENT",
      archData: "DATA LAYER",
      engineeringEyebrow: "ENGINEERING BREAKDOWN",
      engineeringTitle: "More than screens: a connected, working data flow",
      engineeringBody:
        "Front-end routing, state, and form interactions work with back-end authentication, relational data, and file uploads to form a functional full-stack prototype.",
      engineeringFrontTitle: "Front-end application",
      engineeringFrontBody:
        "Vue 3 powers component-based screens, Vue Router protects authenticated routes, and Pinia handles shared state such as advertisements.",
      engineeringApiTitle: "Back-end services",
      engineeringApiBody:
        "Flask exposes REST endpoints for registration, sign-in, profiles, addresses, orders, and image uploads.",
      engineeringDataTitle: "Data models",
      engineeringDataBody:
        "The User, Address, and Order models are joined by user foreign keys to maintain user-scoped data.",
      engineeringSecurityTitle: "Authentication & security",
      engineeringSecurityBody:
        "PBKDF2 password hashing, 24-hour JWTs, request authorization, plus upload type and size validation.",
      apiRegister: "Create a student account",
      apiLogin: "Verify identity and issue a token",
      apiAddresses: "Read the current user's addresses",
      apiOrder: "Create and price a delivery order",
      apiOrderDetail: "Retrieve user-scoped order details",
      apiUpload: "Upload an order proof image",
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
const showcaseTabs = [...document.querySelectorAll("[data-showcase-tab]")];
const showcasePanels = document.querySelectorAll("[data-showcase-panel]");
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

function activateShowcasePanel(panelName) {
  showcaseTabs.forEach((tab) => {
    const isActive = tab.dataset.showcaseTab === panelName;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });

  showcasePanels.forEach((panel) => {
    const isActive = panel.dataset.showcasePanel === panelName;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
}

showcaseTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateShowcasePanel(tab.dataset.showcaseTab));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const offset = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + offset + showcaseTabs.length) % showcaseTabs.length;
    showcaseTabs[nextIndex].focus();
    activateShowcasePanel(showcaseTabs[nextIndex].dataset.showcaseTab);
  });
});

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

const scrollProgress = document.querySelector(".scroll-progress i");
const pageSections = document.querySelectorAll("main > section[id]");

function updateScrollProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  scrollProgress.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach((link) => {
        link.classList.toggle("is-current", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55%", threshold: 0 },
);

pageSections.forEach((section) => sectionObserver.observe(section));
window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener(
    "pointermove",
    (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    },
    { passive: true },
  );
}

function revealAndJumpToHash() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;

  target.classList.add("is-visible");
  target.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  document.documentElement.style.scrollBehavior = "auto";
  target.scrollIntoView({ block: "start" });
  requestAnimationFrame(() => document.documentElement.style.removeProperty("scroll-behavior"));
}

window.addEventListener("hashchange", revealAndJumpToHash);
requestAnimationFrame(revealAndJumpToHash);

setLanguage(currentLanguage);
