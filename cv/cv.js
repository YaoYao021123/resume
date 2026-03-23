if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

const i18n = {
  zh: {
    "nav.education": "教育",
    "nav.experience": "经历",
    "nav.research": "研究",
    "nav.contact": "联系",
    "nav.download": "下载附件",
    "hero.eyebrow": "Research × Strategy × AI Product",
    "hero.title": "从研究判断到方案交付\n我做“能落地”的增长工作",
    "hero.subtitle": "Structured insights, clear strategy, execution that ships.",
    "hero.lead": "我聚焦 AI ToB 场景中的产品化与商业化实践，擅长把行业洞察、用户需求与方案设计连接成完整闭环",
    "hero.cta": "进入简历",
    "hero.tag1": "AI 产品 / 商业化",
    "hero.tag2": "战略分析 / 解决方案",
    "hero.tag3": "上海 · 深圳",
    "edu.title": "教育经历",
    "edu.hku.name": "香港大学 · 金融科技硕士",
    "edu.hku.time": "2025/08 – 2026/07（在读）",
    "edu.hku.p1.h": "课程主线",
    "edu.hku.p1.p": "聚焦机器学习、深度学习、金融编程、量化交易与金融大数据分析。",
    "edu.hku.p2.h": "学习目标",
    "edu.hku.p2.p": "强化“技术理解 + 业务判断”双能力，为 AI 产品与策略岗位提供扎实方法论。",
    "edu.shu.name": "上海大学 · 金融学本科",
    "edu.shu.time": "2021/09 – 2025/07",
    "edu.shu.p1.h": "能力底盘",
    "edu.shu.p1.p": "系统训练经济金融理论、实证研究方法与数据分析能力。",
    "edu.shu.p2.h": "实践导向",
    "edu.shu.p2.p": "在课程与项目中持续结合行业议题，形成“问题拆解—分析—表达”的完整习惯。",
    "exp1.title": "实习经历 01",
    "exp1.name": "百度智能云 · ToB 售前 AI 产品实习生",
    "exp1.meta": "深圳 · 制造业务组 · 2025/11 – 至今",
    "exp1.p1.h": "AI 智能硬件方案设计与交互落地",
    "exp1.p1.p":
      "面向资源受限硬件，参与轻量 SDK 与语音交互方案设计，持续优化 Prompt 与 RAG 结构，明确产品交互边界与专业输出规范。",
    "exp1.p2.h": "市场研究与技术选型支持",
    "exp1.p2.p":
      "围绕 AI 硬件与基础云能力开展对标研究，形成面向售前与客户沟通可直接复用的分析材料，支持方案选择与差异化表达。",
    "exp1.p3.h": "运营提效与低代码应用",
    "exp1.p3.p":
      "在复杂业务场景中推进 Prompt 逻辑结构化，结合低代码平台快速完成展示类与协作类应用落地，提升项目响应速度。",
    "exp2.title": "实习经历 02",
    "exp2.name": "智谱 AI · 大模型商业化实习生",
    "exp2.meta": "上海 · 互联网业务部 · 2025/05 – 2025/09",
    "exp2.p1.h": "产品策略与市场分析",
    "exp2.p1.p": "参与 MaaS 战略研究，通过市场与竞品视角识别增长机会，协助形成面向重点客户与重点行业的策略建议。",
    "exp2.p2.h": "需求洞察与产品研究",
    "exp2.p2.p": "搭建统一研究框架，持续拆解全球标杆 AI 产品的功能逻辑、商业模式与增长路径，为路线规划提供输入。",
    "exp2.p3.h": "解决方案与商业化支持",
    "exp2.p3.p": "结合客户需求与竞品洞察，参与场景化方案整理，补充核心功能点描述与交互表达，提高沟通效率。",
    "exp3.title": "实习经历 03",
    "exp3.name": "复星健康 · 战略分析实习生",
    "exp3.meta": "上海 · 战略规划部 · 2025/02 – 2025/05",
    "exp3.p1.h": "产品原型与效率提升",
    "exp3.p1.p": "通过数据抓取与知识库建设，推动政策与行业情报结构化沉淀，提升团队资料检索效率与复用能力。",
    "exp3.p2.h": "公司研究与需求分析",
    "exp3.p2.p": "围绕上市公司与行业政策开展持续研究，构建“政策—市场—运营”分析视角，为业务讨论提供依据。",
    "exp3.p3.h": "专题研究与表达输出",
    "exp3.p3.p": "产出跨区域专题材料，并把研究结论转化为内部可用图表与汇报内容，提升跨团队协作效率。",
    "exp4.title": "实习经历 04",
    "exp4.name": "奇绩创坛（YC China）· 投资运营实习生",
    "exp4.meta": "上海 · 转化组 · 2024/09 – 2025/01",
    "exp4.p1.h": "用户沟通与转化推进",
    "exp4.p1.p": "设计并执行创业者访谈框架，深度理解项目阶段、需求与资源诉求，持续提升转化链路质量。",
    "exp4.p2.h": "流程与体系建设",
    "exp4.p2.p": "参与 SOP 与标签体系搭建，推动项目线索状态结构化管理，增强团队协同与跟进节奏一致性。",
    "exp4.p3.h": "洞察驱动的支持方案",
    "exp4.p3.p": "基于访谈内容输出定制化建议，帮助创业者更高效理解申请与加速流程。",
    "exp5.title": "实习经历 05",
    "exp5.name": "兴业证券 · 投行实习生（股权承做）",
    "exp5.meta": "上海 · 投资银行总部 · 2024/05 – 2024/08",
    "exp5.p1.h": "财务核查与底稿管理",
    "exp5.p1.p": "参与拟上市企业财务核查与底稿整理，协助项目组完成申报材料复核与结构化归档。",
    "exp5.p2.h": "流程优化与协同支持",
    "exp5.p2.p": "参与跟踪模板和预审清单建设，帮助团队提高复核效率与信息一致性。",
    "exp6.title": "实习经历 06",
    "exp6.name": "中银国际证券 · 行业研究实习生",
    "exp6.meta": "上海 / 线上 · 电新组 · 2024/01 – 2024/04",
    "exp6.p1.h": "深度研究与报告输出",
    "exp6.p1.p": "围绕新能源产业链开展公司与行业研究，持续输出日报、周报和专题材料。",
    "exp6.p2.h": "数据追踪与知识沉淀",
    "exp6.p2.p": "维护多主题行业数据底表，整理会议纪要并沉淀可复用研究方法。",
    "exp7.title": "实习经历 07",
    "exp7.name": "浦发银行 · 对公客户经理助理",
    "exp7.meta": "上海 · 对公业务部 · 2023/08",
    "exp7.p1.h": "财务分析与信贷支持",
    "exp7.p1.p": "参与企业客户财务资料分析与贷后材料撰写，建立银行业务的基础认知。",
    "exp7.p2.h": "业务学习与风险意识",
    "exp7.p2.p": "学习保函及并购流程，理解授信流程中的合规与风险控制逻辑。",
    "research.title": "研究经历",
    "research.r1.name": "房贷利率调整对房地产市场影响（实证研究）",
    "research.r1.meta": "2024/12 – 2025/06",
    "research.r1.p1.h": "数据工程",
    "research.r1.p1.p": "使用 Python 进行多城市房价数据抓取、清洗与月度对齐，构建可分析样本。",
    "research.r1.p2.h": "模型分析",
    "research.r1.p2.p": "采用 DID 与交互模型检验利率变化对城市房价波动的影响机制。",
    "research.r2.name": "产业性别结构对流动人口生育率影响（市级课题）",
    "research.r2.meta": "2023/11 – 2024/11",
    "research.r2.p1.h": "样本构建",
    "research.r2.p1.p": "整合微观调查与城市统计资料，形成跨城市对比样本并完成变量标准化。",
    "research.r2.p2.h": "实证洞察",
    "research.r2.p2.p": "通过 Logistic 与交互项分析识别劳动力结构与生育决策之间的关联特征。",
    "contact.title": "联系我",
    "contact.lead": "如果你在寻找可以从研究走到交付的成员，欢迎联系我。"
  },
  en: {
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.research": "Research",
    "nav.contact": "Contact",
    "nav.download": "Download PDF",
    "hero.eyebrow": "Research × Strategy × AI Product",
    "hero.title": "I turn insights into shipping strategies and execution-ready solutions.",
    "hero.subtitle": "Structured insights, clear strategy, execution that ships.",
    "hero.lead":
      "I focus on AI ToB productization and commercialization, connecting industry insights, user needs, and solution design into one delivery loop.",
    "hero.cta": "Explore Resume",
    "hero.tag1": "AI Product / Commercialization",
    "hero.tag2": "Strategy Analysis / Solutions",
    "hero.tag3": "Shanghai · Shenzhen",
    "edu.title": "Education",
    "edu.hku.name": "The University of Hong Kong · MFinTech",
    "edu.hku.time": "2025/08 – 2026/07 (in progress)",
    "edu.hku.p1.h": "Course Focus",
    "edu.hku.p1.p": "Machine Learning, Deep Learning, Financial Programming, Quant, and Big Data in Finance.",
    "edu.hku.p2.h": "Learning Goal",
    "edu.hku.p2.p": "Strengthen both technical depth and business judgment for AI product and strategy roles.",
    "edu.shu.name": "Shanghai University · B.A. in Finance",
    "edu.shu.time": "2021/09 – 2025/07",
    "edu.shu.p1.h": "Foundational Training",
    "edu.shu.p1.p": "Built solid capability in finance theory, empirical methods, and data analysis.",
    "edu.shu.p2.h": "Practice Orientation",
    "edu.shu.p2.p": "Developed a repeatable pattern of problem framing, analysis, and communication.",
    "exp1.title": "Experience 01",
    "exp1.name": "Baidu AI Cloud · ToB Pre-Sales AI Product Intern",
    "exp1.meta": "Shenzhen · Manufacturing Group · 2025/11 – Present",
    "exp1.p1.h": "AI Hardware Solution & Interaction Delivery",
    "exp1.p1.p": "Worked on lightweight SDK and voice interaction design for resource-constrained devices, refining prompt and RAG structures.",
    "exp1.p2.h": "Market Research & Technical Selection Support",
    "exp1.p2.p": "Produced reusable benchmarking materials across AI hardware and cloud capabilities for client-facing decision support.",
    "exp1.p3.h": "Operational Efficiency & Low-Code Delivery",
    "exp1.p3.p": "Structured prompt logic for complex scenarios and accelerated delivery through low-code workflows.",
    "exp2.title": "Experience 02",
    "exp2.name": "Zhipu AI · LLM Commercialization Intern",
    "exp2.meta": "Shanghai · Internet Business Unit · 2025/05 – 2025/09",
    "exp2.p1.h": "Product Strategy & Market Analysis",
    "exp2.p1.p": "Contributed to MaaS strategy planning and growth opportunity mapping across key industries.",
    "exp2.p2.h": "Demand Insight & Product Research",
    "exp2.p2.p": "Built a unified analysis framework for global AI products to support roadmap planning.",
    "exp2.p3.h": "Solution Design & Commercial Support",
    "exp2.p3.p": "Supported scenario-based solution preparation with clearer feature and interaction articulation.",
    "exp3.title": "Experience 03",
    "exp3.name": "Fosun Health · Strategy Analyst Intern",
    "exp3.meta": "Shanghai · Strategy Planning Department · 2025/02 – 2025/05",
    "exp3.p1.h": "Prototype & Efficiency Improvement",
    "exp3.p1.p": "Improved policy and market intelligence workflows with structured data collection and knowledge base design.",
    "exp3.p2.h": "Company Research & Requirement Analysis",
    "exp3.p2.p": "Conducted ongoing listed-company and policy research with a policy-market-operations lens.",
    "exp3.p3.h": "Thematic Study & Communication Output",
    "exp3.p3.p": "Converted research outcomes into reusable charts and strategy materials for cross-team collaboration.",
    "exp4.title": "Experience 04",
    "exp4.name": "MiraclePlus (YC China) · Investment Operations Intern",
    "exp4.meta": "Shanghai · Conversion Team · 2024/09 – 2025/01",
    "exp4.p1.h": "Founder Communication & Conversion",
    "exp4.p1.p": "Designed and executed founder interview frameworks to improve conversion quality.",
    "exp4.p2.h": "Process Systematization",
    "exp4.p2.p": "Supported SOP and tag-system design for structured tracking and team alignment.",
    "exp4.p3.h": "Insight-led Support Design",
    "exp4.p3.p": "Delivered tailored support suggestions based on interview insights.",
    "exp5.title": "Experience 05",
    "exp5.name": "Industrial Securities · Investment Banking Intern",
    "exp5.meta": "Shanghai · Investment Banking Division · 2024/05 – 2024/08",
    "exp5.p1.h": "Financial Review & Working Papers",
    "exp5.p1.p": "Supported financial checks and working-paper management for listing projects.",
    "exp5.p2.h": "Process Optimization",
    "exp5.p2.p": "Contributed to tracking templates and pre-review checklists for better internal consistency.",
    "exp6.title": "Experience 06",
    "exp6.name": "BOCI Securities · Industry Research Intern",
    "exp6.meta": "Shanghai / Remote · New Energy Team · 2024/01 – 2024/04",
    "exp6.p1.h": "Research Output",
    "exp6.p1.p": "Produced company/industry insights and recurring market tracking outputs.",
    "exp6.p2.h": "Data Tracking & Knowledge Capture",
    "exp6.p2.p": "Maintained sector datasets and documented reusable research methods.",
    "exp7.title": "Experience 07",
    "exp7.name": "SPD Bank · Corporate Banking Assistant Intern",
    "exp7.meta": "Shanghai · Corporate Banking · 2023/08",
    "exp7.p1.h": "Financial Analysis Support",
    "exp7.p1.p": "Supported financial document analysis and post-loan reporting.",
    "exp7.p2.h": "Business Learning & Risk Awareness",
    "exp7.p2.p": "Learned guarantee/M&A workflows and compliance logic in credit processes.",
    "research.title": "Research Experience",
    "research.r1.name": "Mortgage Rate Adjustment and Housing Market Response",
    "research.r1.meta": "2024/12 – 2025/06",
    "research.r1.p1.h": "Data Engineering",
    "research.r1.p1.p": "Used Python for multi-city housing data collection, cleaning, and monthly alignment.",
    "research.r1.p2.h": "Modeling",
    "research.r1.p2.p": "Applied DID and interaction models to test rate transmission effects.",
    "research.r2.name": "Industry Gender Structure and Fertility Decision (City-level Project)",
    "research.r2.meta": "2023/11 – 2024/11",
    "research.r2.p1.h": "Sample Construction",
    "research.r2.p1.p": "Integrated micro-survey and city statistics into normalized cross-city samples.",
    "research.r2.p2.h": "Empirical Insight",
    "research.r2.p2.p": "Used logistic and interaction analysis to identify labor-structure and fertility links.",
    "contact.title": "Contact",
    "contact.lead": "If you need someone who can move from insight to delivery, let's connect."
  }
};

let currentLang = "zh";

const applyLanguage = (lang) => {
  const dict = i18n[lang];
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dict[key]) node.textContent = dict[key];
  });
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = lang === "zh" ? "EN" : "中";
  currentLang = lang;
};

const initLanguage = () => {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    applyLanguage(currentLang === "zh" ? "en" : "zh");
  });
  applyLanguage("zh");
};

const initSplash = () => {
  const splash = document.getElementById("intro-splash");
  if (!splash || !window.gsap) return;
  const title = splash.querySelector(".intro-title");

  if (title) {
    const text = title.textContent || "";
    title.textContent = "";
    const chars = [...text].map((ch, index) => {
      const span = document.createElement("span");
      span.className = "intro-char";
      span.textContent = ch === " " ? "\u00A0" : ch;
      span.style.display = "inline-block";
      span.style.willChange = "transform,opacity";
      title.appendChild(span);
      return { span, index };
    });

    gsap.fromTo(
      chars.map((c) => c.span),
      { y: 20, opacity: 0, rotate: -3 },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 0.58,
        ease: "back.out(1.6)",
        stagger: 0.028
      }
    );
  }

  const tl = gsap.timeline({
    onComplete: () => splash.classList.add("hidden")
  });

  tl.fromTo(
    ".intro-title",
    { y: 18, opacity: 1, scale: 0.98, letterSpacing: "0.05em" },
    { y: 0, opacity: 1, scale: 1, letterSpacing: "0.01em", duration: 0.72, ease: "power3.out" }
  )
    .to(".intro-char", { y: -3, duration: 0.18, stagger: 0.014, yoyo: true, repeat: 1, ease: "power1.inOut" })
    .to(".intro-title", { opacity: 0, scale: 1.03, duration: 0.4, ease: "power2.in" }, "+=0.2");
};

const initHeroLottie = () => {
  if (typeof lottie === "undefined") return;
  const heroContainer = document.getElementById("hero-lottie");
  const bombContainer = document.getElementById("hero-bomb");
  if (!heroContainer || !bombContainer) return;

  const heroAnim = lottie.loadAnimation({
    container: heroContainer,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "assets/hero.json"
  });

  const bombAnim = lottie.loadAnimation({
    container: bombContainer,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "assets/bomb.json"
  });

  if (window.gsap && window.ScrollTrigger) {
    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        heroContainer.style.transform = `translateY(${self.progress * 24}px)`;
      }
    });
  }

  heroAnim.addEventListener("DOMLoaded", () => {
    heroContainer.style.opacity = "1";
  });
  bombAnim.addEventListener("complete", () => {
    bombAnim.goToAndStop(bombAnim.totalFrames - 1, true);
  });
};

const initAnimations = () => {
  if (!(window.gsap && window.ScrollTrigger)) return;
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".stage").forEach((stage) => {
    gsap.fromTo(
      stage,
      { opacity: 0.9, filter: "blur(2px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stage,
          start: "top 72%",
          end: "top 24%",
          scrub: 0.25
        }
      }
    );
  });

  document.querySelectorAll(".reveal").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 30, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.78,
        ease: "back.out(1.35)",
        scrollTrigger: {
          trigger: el,
          start: "top 84%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  document.querySelectorAll(".story-card").forEach((card) => {
    gsap.fromTo(
      card,
      { y: 36, rotate: -0.6, opacity: 0.92 },
      {
        y: 0,
        rotate: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          end: "top 35%",
          scrub: 0.25
        }
      }
    );
  });

  const tocDots = Array.from(document.querySelectorAll(".side-toc__dot"));
  document.querySelectorAll(".stage").forEach((stage) => {
    ScrollTrigger.create({
      trigger: stage,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        tocDots.forEach((d) => d.classList.remove("is-active"));
        const dot = document.querySelector(`.side-toc__dot[data-target="${stage.id}"]`);
        if (dot) dot.classList.add("is-active");
      },
      onEnterBack: () => {
        tocDots.forEach((d) => d.classList.remove("is-active"));
        const dot = document.querySelector(`.side-toc__dot[data-target="${stage.id}"]`);
        if (dot) dot.classList.add("is-active");
      }
    });
  });
};

const initLenis = () => {
  if (typeof Lenis === "undefined" || !(window.gsap && window.ScrollTrigger)) return;
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 0.75,
    wheelMultiplier: 0.86,
    lerp: 0.12,
    infinite: false
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  initKeyboardPaging(lenis);
};

const initKeyboardPaging = (lenis) => {
  const stages = Array.from(document.querySelectorAll(".stage"));
  if (!stages.length) return;

  let busy = false;
  let wheelDelta = 0;
  let wheelResetTimer = null;

  const currentStageIndex = () => {
    const y = window.scrollY + window.innerHeight * 0.4;
    for (let i = 0; i < stages.length; i += 1) {
      const el = stages[i];
      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;
      if (y >= top && y <= bottom) return i;
    }
    return stages.length - 1;
  };

  const canScrollInsideStage = (stage, direction) => {
    const top = stage.offsetTop;
    const bottom = top + stage.offsetHeight;
    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight;
    const overflow = stage.scrollHeight > window.innerHeight + 48 || stage.offsetHeight > window.innerHeight + 48;
    if (!overflow) return false;
    if (direction > 0) return viewportBottom < bottom - 8;
    return viewportTop > top + 8;
  };

  const move = (direction) => {
    if (busy) return;
    const idx = currentStageIndex();
    const stage = stages[idx];
    if (!stage) return;

    if (canScrollInsideStage(stage, direction)) {
      const targetY = Math.max(0, window.scrollY + direction * Math.round(window.innerHeight * 0.75));
      busy = true;
      lenis.scrollTo(targetY, { duration: 0.72, immediate: false });
      setTimeout(() => {
        busy = false;
      }, 410);
      return;
    }

    const nextIndex = Math.min(stages.length - 1, Math.max(0, idx + direction));
    if (nextIndex === idx) return;

    busy = true;
    lenis.scrollTo(stages[nextIndex], { offset: 0, duration: 0.9, immediate: false });
    setTimeout(() => {
      busy = false;
    }, 500);
  };

  const shouldIgnore = (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return true;
    const active = document.activeElement;
    if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.isContentEditable)) return true;
    return false;
  };

  window.addEventListener("keydown", (event) => {
    if (shouldIgnore(event)) return;
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;

    event.preventDefault();
    move(event.key === "ArrowDown" ? 1 : -1);
  });

  window.addEventListener(
    "wheel",
    (event) => {
      if (shouldIgnore(event)) return;
      if (Math.abs(event.deltaY) < 1.5) return;

      // Intercept wheel to create section paging (Apple-like),
      // while still allowing chunked scrolling inside long sections.
      event.preventDefault();

      wheelDelta += event.deltaY;
      if (wheelResetTimer) window.clearTimeout(wheelResetTimer);
      wheelResetTimer = window.setTimeout(() => {
        wheelDelta = 0;
      }, 110);

      if (busy) return;
      if (Math.abs(wheelDelta) < 90) return;

      const direction = wheelDelta > 0 ? 1 : -1;
      wheelDelta = 0;
      move(direction);
    },
    { passive: false, capture: true }
  );
};

const initDynamicShapes = () => {
  const colors = ["--pink", "--mint", "--sand"];
  const types = ["float-shape--pill", "float-shape--circle", "float-shape--diamond"];

  document.querySelectorAll(".stage").forEach((stage, idx) => {
    if (stage.id === "contact" || stage.id === "hero") return;
    const shape = document.createElement("div");
    shape.className = `float-shape ${types[idx % types.length]}`;
    shape.style.top = `${18 + ((idx * 7) % 44)}%`;
    shape.style.left = `${76 + ((idx * 5) % 16)}%`;
    shape.style.background = `var(${colors[idx % colors.length]})`;
    stage.appendChild(shape);

    if (window.gsap) {
      gsap.to(shape, {
        y: "+=16",
        x: idx % 2 ? "+=9" : "-=9",
        duration: 3.5 + (idx % 3) * 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.fromTo(
        shape,
        { opacity: 0.45 },
        {
          opacity: 0.32,
          duration: 1,
          scrollTrigger: {
            trigger: stage,
            start: "top 90%",
            end: "top 20%",
            scrub: 0.35
          }
        }
      );
    }
  });
};

const initHeroTextAnimation = () => {
  if (!window.gsap) return;
  const tl = gsap.timeline({ delay: 0.2 });
  tl.fromTo(
    ".hero-headline",
    { y: 28, opacity: 0, rotate: 0.3 },
    { y: 0, opacity: 1, rotate: 0, duration: 0.9, ease: "power3.out" }
  )
    .fromTo(
      ".hero-subtitle",
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" },
      "-=0.42"
    )
    .fromTo(
      ".hero-tags span",
      { y: 16, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.42, ease: "back.out(1.4)", stagger: 0.07 },
      "-=0.2"
    );
};

initLanguage();
initSplash();
initLenis();
initDynamicShapes();
initHeroLottie();
initHeroTextAnimation();
initAnimations();
