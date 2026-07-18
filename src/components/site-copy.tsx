"use client";

import { useMemo } from "react";
import {
  type ChannelCard,
  type ChatMessage,
  type ConversationItem,
  type SidebarItem,
  type UserProfile,
} from "@/data/mock-chat-data";
import { type Language, useLanguage } from "@/components/language-provider";

type NavLink = { name: string; href: string };
type TitleDescription = { title: string; description: string };
type FooterGroup = { title: string; links: { label: string; href: string }[] };

type SiteCopy = {
  navbar: {
    navLinks: NavLink[];
    brandTagline: string;
    signIn: string;
    getStarted: string;
    toggleTheme: string;
    openNavigation: string;
    closeNavigation: string;
    languageLabel: string;
    languageShort: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    pillars: string[];
    livePresenceLabel: string;
    livePresenceValue: string;
    sharedLabel: string;
    sharedValue: string;
  };
  socialProof: {
    eyebrow: string;
    title: string;
    audiences: string[];
    marks: string[];
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    items: TitleDescription[];
  };
  privateChat: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
  };
  groups: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  channels: {
    eyebrow: string;
    title: string;
    description: string;
    permissionsEyebrow: string;
    permissionsTitle: string;
    permissionsPoints: string[];
    visibilityLabels: Record<"Public" | "Private" | "Announcement", string>;
  };
  unified: {
    eyebrow: string;
    title: string;
    description: string;
    foundations: { title: string; note: string }[];
    becomes: string;
    workspaceEyebrow: string;
    workspaceTitle: string;
    systems: string[];
  };
  realtime: {
    eyebrow: string;
    title: string;
    description: string;
    signals: TitleDescription[];
    liveStatusTitle: string;
    liveStatusSubtitle: string;
    mayaTyping: string;
    lastDelivered: string;
    presenceTitle: string;
    presenceSubtitle: string;
    onlineNow: string;
    unreadMentions: string;
    activeThreads: string;
  };
  responsive: {
    eyebrow: string;
    title: string;
    description: string;
    desktop: string;
    tablet: string;
    mobile: string;
  };
  security: {
    eyebrow: string;
    title: string;
    description: string;
    sessionTitle: string;
    currentSessionDevice: string;
    currentSessionMeta: string;
    active: string;
    mobileDevice: string;
    mobileMeta: string;
    review: string;
    cards: TitleDescription[];
  };
  useCases: {
    eyebrow: string;
    title: string;
    items: TitleDescription[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    tagline: string;
    description: string;
    groups: FooterGroup[];
    copyright: string;
  };
  chatDemo: {
    backHome: string;
    title: string;
    description: string;
    previewMode: string;
    responsiveLayouts: string;
    privateTitle: string;
    privateDescription: string;
    mobileTitle: string;
    mobileDescription: string;
  };
  preview: {
    dashboardSubtitle: string;
    typingSarah: string;
    composerMain: string;
    privateSubtitle: string;
    privateComposer: string;
    groupTitle: string;
    groupSubtitle: string;
    groupPinned: string;
    groupTyping: string;
    groupComposer: string;
    mobileEyebrow: string;
    mobileTitle: string;
    mobileStatus: string;
    mobileComposer: string;
    conversationEyebrow: string;
    conversationTitle: string;
    searchConversations: string;
    pinned: string;
    directMessage: string;
    today: string;
    voiceCall: string;
    videoCall: string;
    details: string;
    attachFile: string;
    emoji: string;
    voiceMessage: string;
    sendMessage: string;
    presence: {
      online: string;
      focus: string;
      away: string;
      offline: string;
    };
  };
};

export type MockChatData = {
  users: Record<string, UserProfile>;
  sidebarItems: SidebarItem[];
  conversations: ConversationItem[];
  privateMessages: ChatMessage[];
  groupMessages: ChatMessage[];
  channelCards: ChannelCard[];
};

const siteCopy: Record<Language, SiteCopy> = {
  fa: {
    navbar: {
      navLinks: [
        { name: "ویژگی‌ها", href: "#features" },
        { name: "چت خصوصی", href: "#private-chat" },
        { name: "گروه‌ها", href: "#groups" },
        { name: "کانال‌ها", href: "#channels" },
        { name: "امنیت", href: "#security" },
        { name: "سوالات پرتکرار", href: "#faq" },
      ],
      brandTagline: "پیام‌رسانی برای تیم‌های مدرن",
      signIn: "ورود",
      getStarted: "شروع",
      toggleTheme: "تغییر پوسته",
      openNavigation: "باز کردن منو",
      closeNavigation: "بستن منو",
      languageLabel: "تغییر زبان",
      languageShort: "FA",
    },
    hero: {
      badge: "اویا چت خصوصی، گروه‌ها و کانال‌ها را یک‌جا جمع می‌کند.",
      title: "یک‌جا برای همه گفتگوها.",
      description:
        "از گفتگوی دونفره تا اتاق‌های تیمی، کانال‌های کامیونیتی، فایل‌ها و پیام‌های صوتی جابه‌جا شوید، بدون اینکه ابزار عوض کنید یا زمینه گفتگو را از دست بدهید.",
      primaryCta: "شروع",
      secondaryCta: "دیدن دمو",
      pillars: ["چت خصوصی", "گروه‌ها", "کانال‌ها"],
      livePresenceLabel: "حضور زنده",
      livePresenceValue: "۷ نفر در اتاق انتشار آنلاین هستند",
      sharedLabel: "اشتراک‌گذاری فوری",
      sharedValue: "فایل‌ها، پیام‌های صوتی و رشته‌ها",
    },
    socialProof: {
      eyebrow: "طراحی‌شده برای همه لایه‌های ارتباطی",
      title: "برای تیم‌ها، کامیونیتی‌ها، دوستان و سازمان‌ها ساخته شده است.",
      audiences: ["تیم‌ها", "کامیونیتی‌ها", "دوستان", "سازمان‌ها", "سازندگان"],
      marks: ["Northstar", "Pulse Studio", "Juniper", "Arc Society", "Mosaic Labs"],
    },
    features: {
      eyebrow: "ویژگی‌های اصلی",
      title: "همه‌چیز برای اینکه گفتگوها سریع و شفاف بمانند.",
      description:
        "اویا چت خصوصی، گروه‌ها، کانال‌ها، فایل‌ها و حضور کاربران را در یک سیستم نگه می‌دارد تا کار، فعالیت کامیونیتی و گفتگوی روزمره از هم جدا نشوند.",
      items: [
        {
          title: "پیام‌رسانی خصوصی",
          description: "گفتگوی دونفره تمیز با پاسخ، وضعیت خوانده‌شدن و کنترل‌های سبک.",
        },
        {
          title: "چت گروهی",
          description: "تیم‌ها، دوستان و کامیونیتی‌ها را داخل اتاق‌های مشترک منظم جمع کنید.",
        },
        {
          title: "کانال‌ها",
          description: "فضاهای عمومی، خصوصی و اطلاع‌رسانی را برای مدیریت موضوعات در مقیاس بالا داشته باشید.",
        },
        {
          title: "رشته‌ها",
          description: "بحث‌های فرعی را داخل پاسخ‌ها نگه دارید تا تایم‌لاین اصلی آرام بماند.",
        },
        {
          title: "اشتراک‌گذاری فایل",
          description: "اسناد، تصویر، صدا و رسانه را بدون خروج از جریان گفتگو بفرستید.",
        },
        {
          title: "پیام صوتی",
          description: "وقتی متن کند یا بی‌روح است، سریع یک پیام صوتی بفرستید.",
        },
        {
          title: "جستجو",
          description: "قبل از اینکه تصمیم‌ها و فایل‌ها در تاریخچه گم شوند، پیدایشان کنید.",
        },
        {
          title: "اعلان‌ها",
          description: "به‌جای اعلان‌های پرسر و صدا، هشدارهای مبتنی بر منشن و پاسخ بگیرید.",
        },
        {
          title: "پروفایل و حضور",
          description: "وضعیت، نقش و در دسترس‌بودن را نشان دهید تا بقیه بدانند چه زمانی و چگونه سراغ شما بیایند.",
        },
      ],
    },
    privateChat: {
      eyebrow: "چت خصوصی",
      title: "گفتگوی دونفره‌ای که همچنان ساختار خود را حفظ می‌کند.",
      description:
        "مستقیم صحبت کنید، زمینه گفتگو را به اشتراک بگذارید، یک پیام صوتی کوتاه بفرستید و گفتگو را آن‌قدر تمیز نگه دارید که بعداً بدون کندوکاو برگردید.",
      bullets: [
        "کنترل حریم خصوصی و اعلان برای هر چت، بدون تنظیمات اضافی.",
        "پاسخ، واکنش، فایل و پیام صوتی در همان جریان پیام‌ها.",
        "وضعیت آنلاین، تحویل و خوانده‌شدن که سبک و قابل‌فهم می‌ماند.",
        "تاریخچه قابل‌جستجو برای تصمیم‌ها، فایل‌ها و جزئیات مهم بعدی.",
      ],
    },
    groups: {
      eyebrow: "نمایش چت گروهی",
      title: "اتاق‌های مشترک برای تیم محصول، گروه دوستان و کامیونیتی‌های فعال.",
      description:
        "گروه‌ها برای هر اتاق یک مرکز ثقل روشن می‌سازند: جایی برای وضعیت‌ها، اعضای فعال، زمینه سنجاق‌شده و رفت‌وبرگشت سریع گفتگو.",
      points: [
        "به‌روزرسانی‌های سنجاق‌شده اتاق انتشار، عملیات و کامیونیتی را هم‌راستا نگه می‌دارد.",
        "منشن‌ها، پاسخ‌های آماده برای رشته و فایل‌های مشترک، سر و صدای پیگیری را کمتر می‌کند.",
        "حضور کاربران قبل از منشن‌کردن نشان می‌دهد چه کسی آنلاین، در تمرکز یا دور است.",
      ],
    },
    channels: {
      eyebrow: "نمایش کانال‌ها",
      title: "بحث عمومی، هماهنگی خصوصی و اطلاع‌رسانی را سازمان‌دهی کنید.",
      description:
        "کانال‌ها به فضاهای بزرگ ساختار واقعی می‌دهند. اتاق‌های باز قابل کشف می‌مانند، اتاق‌های خصوصی کنترل‌شده هستند و جریان‌های اطلاع‌رسانی تمیز می‌مانند.",
      permissionsEyebrow: "دسترسی‌ها",
      permissionsTitle: "ساختار آگاه از نقش",
      permissionsPoints: [
        "کانال‌های عمومی کمک می‌کنند افراد بدون درخواست دسترسی، زمینه مشترک را پیدا کنند.",
        "کانال‌های خصوصی برنامه‌ریزی حساس را برای اعضای درست نگه می‌دارند.",
        "کانال‌های اطلاع‌رسانی اجازه می‌دهند مدیران به‌روزرسانی‌های پرارزش را بدون شلوغی منتشر کنند.",
      ],
      visibilityLabels: {
        Public: "عمومی",
        Private: "خصوصی",
        Announcement: "اطلاع‌رسانی",
      },
    },
    unified: {
      eyebrow: "همه‌چیز در یک‌جا",
      title: "چت خصوصی، گروه‌ها و کانال‌ها زیر یک سیستم ارتباطی واحد.",
      description:
        "اویا سه محصول جدا از هم نیست. معماری اطلاعاتی آن هر نوع گفتگو را به همان لایه جستجو، حضور، فایل و اعلان متصل نگه می‌دارد.",
      foundations: [
        { title: "چت خصوصی", note: "گفتگوی مستقیم و زمینه شخصی" },
        { title: "گروه‌ها", note: "اتاق‌های تیمی، دوستانه و کامیونیتی" },
        { title: "کانال‌ها", note: "فضاهای موضوع‌محور با دسترسی روشن" },
      ],
      becomes: "تبدیل می‌شود به",
      workspaceEyebrow: "فضای کاری اویا",
      workspaceTitle: "یک پلتفرم برای ارتباط و هماهنگی",
      systems: ["جستجو", "اعلان‌ها", "فایل‌ها"],
    },
    realtime: {
      eyebrow: "تجربه لحظه‌ای",
      title: "آن‌قدر سریع که زنده حس شود. آن‌قدر آرام که خوانا بماند.",
      description:
        "بهترین محصولات لحظه‌ای فقط وقتی حرکت نشان می‌دهند که فهم را بهتر کند. اویا تایپ، حضور و وضعیت تحویل را بدون شلوغ‌کردن تایم‌لاین نشان می‌دهد.",
      signals: [
        {
          title: "نشانگر تایپ",
          description: "قصد فعال کاربر را نشان می‌دهد، بدون اینکه رابط را پر از حرکت‌های اضافه کند.",
        },
        {
          title: "تحویل و خوانده‌شدن",
          description: "نشانه‌های ساده برای ارسال، تحویل و خوانده‌شدن را همان‌جایی نگه می‌دارد که لازم است.",
        },
        {
          title: "اعلان زنده",
          description: "منشن‌ها، پاسخ‌ها و به‌روزرسانی‌ها را سریع نشان می‌دهد بدون اینکه کاربر را مجبور به چک‌کردن دائم کند.",
        },
      ],
      liveStatusTitle: "وضعیت زنده اتاق",
      liveStatusSubtitle: "همین حالا",
      mayaTyping: "مایا در حال تایپ است",
      lastDelivered: "آخرین پیام تحویل شد",
      presenceTitle: "نمای حضور",
      presenceSubtitle: "فضای انتشار",
      onlineNow: "آنلاین الآن",
      unreadMentions: "منشن‌های خوانده‌نشده",
      activeThreads: "رشته‌های فعال",
    },
    responsive: {
      eyebrow: "تجربه واکنش‌گرا",
      title: "برای دسکتاپ، تبلت و موبایل طراحی شده؛ بدون اینکه محصول به یک نمای فشرده و مبهم تبدیل شود.",
      description:
        "در صفحه‌های کوچک‌تر، پیش‌نمایش ساده‌تر و سلسله‌مراتب فشرده‌تر می‌شود؛ نه اینکه فقط نسخه دسکتاپ کوچک شود.",
      desktop: "دسکتاپ",
      tablet: "تبلت",
      mobile: "موبایل",
    },
    security: {
      eyebrow: "امنیت و حریم خصوصی",
      title: "کنترل دقیق، دسترسی روشن و پیش‌فرض‌های منطقی.",
      description:
        "اویا روی چیزهایی تمرکز می‌کند که یک محصول ارتباطی باید شفاف بگوید: گفتگوهای خصوصی، وضعیت نشست‌ها، امنیت حساب و دسترسی مبتنی بر نقش.",
      sessionTitle: "نشست‌های فعال",
      currentSessionDevice: "MacBook Pro · Chrome",
      currentSessionMeta: "نشست فعلی · لندن",
      active: "فعال",
      mobileDevice: "iPhone · برنامه موبایل",
      mobileMeta: "آخرین بازدید ۴ دقیقه پیش",
      review: "بررسی",
      cards: [
        {
          title: "کنترل حریم خصوصی",
          description: "اعلان‌ها، سطح دیده‌شدن اتاق و ترجیحات گفتگو را در سطح چت، گروه یا کانال تنظیم کنید.",
        },
        {
          title: "ایمنی حساب",
          description: "دستگاه‌های فعال را مرور کنید، دسترسی را محدود کنید و مسیرهای ورود را برای کاربران قابل‌فهم نگه دارید.",
        },
        {
          title: "مدیریت نشست",
          description: "ببینید حسابتان کجا فعال است و نشست‌هایی را که دیگر لازم نیست قطع کنید.",
        },
        {
          title: "کانال‌های آگاه از سطح دسترسی",
          description: "بحث عمومی، برنامه‌ریزی خصوصی و اطلاع‌رسانی را با قوانین ارسال روشن از هم جدا کنید.",
        },
      ],
    },
    useCases: {
      eyebrow: "موارد استفاده",
      title: "یک پلتفرم ارتباطی که با نوع استفاده‌کننده سازگار می‌شود.",
      items: [
        {
          title: "برای تیم‌ها",
          description: "کار را با پیام مستقیم، اتاق‌های متمرکز و تصمیم‌های قابل‌جستجو جلو ببرید.",
        },
        {
          title: "برای کامیونیتی‌ها",
          description: "بحث عمومی، مدیریت خصوصی و اطلاع‌رسانی را در یک محیط منظم اجرا کنید.",
        },
        {
          title: "برای دوستان",
          description: "گفتگوی گروهی، فایل‌های مشترک و پیام‌های صوتی را سبک و ساده نگه دارید.",
        },
        {
          title: "برای سازندگان",
          description: "فضاهای هواداری، کانال‌های مخصوص اعضا و جریان به‌روزرسانی را بدون از دست‌دادن ارتباط شخصی جدا کنید.",
        },
        {
          title: "برای سازمان‌ها",
          description: "وقتی ارتباط بین نقش‌های مختلف پخش می‌شود، از کانال‌های مبتنی بر دسترسی و کنترل نشست استفاده کنید.",
        },
      ],
    },
    faq: {
      eyebrow: "سوالات پرتکرار",
      title: "پرسش‌های رایج، مستقیم پاسخ داده شده‌اند.",
      items: [
        {
          question: "این پلتفرم چیست؟",
          answer: "اویا یک پلتفرم ارتباطی مدرن برای گفتگوهای خصوصی، اتاق‌های گروهی، کانال‌های عمومی و خصوصی، فایل‌ها، پیام صوتی و همکاری منظم است.",
        },
        {
          question: "می‌توانم گروه خصوصی بسازم؟",
          answer: "بله. گروه‌ها می‌توانند فقط برای افرادی که لازم‌اند در دسترس باشند و فضاهای عمومی هم همچنان راحت‌تر پیدا شوند.",
        },
        {
          question: "فرق گروه و کانال چیست؟",
          answer: "گروه‌ها اتاق‌های گفتگوی مشترک برای بحث فعال هستند. کانال‌ها فضاهای موضوع‌محورند که می‌توانند عمومی، خصوصی یا اطلاع‌رسانی باشند.",
        },
        {
          question: "آیا کانال‌ها می‌توانند خصوصی باشند؟",
          answer: "بله. کانال‌های خصوصی برای گفتگوهای مدیریتی، برنامه‌ریزی، مدیریت کامیونیتی و بحث‌های محدود مناسب‌اند.",
        },
        {
          question: "روی موبایل هم کار می‌کند؟",
          answer: "بله. رابط در صفحه‌های کوچک خودش را ساده می‌کند، نه اینکه فقط نسخه دسکتاپ را کوچک کند.",
        },
        {
          question: "می‌توانم فایل و پیام صوتی بفرستم؟",
          answer: "بله. اشتراک فایل و پیام صوتی بخشی از همان جریان پیام‌رسانی است که در لندینگ و دمو می‌بینید.",
        },
        {
          question: "حالت تیره دارد؟",
          answer: "بله. لندینگ کلید تغییر تم دارد و سیستم بصری از روشن و تیره پشتیبانی می‌کند.",
        },
        {
          question: "نیاز به نصب برنامه دارم؟",
          answer: "خیر. این دمو به‌صورت تجربه وبی نمایش داده می‌شود و می‌تواند بدون نصب برنامه بومی هم قابل‌استفاده باشد.",
        },
      ],
    },
    finalCta: {
      eyebrow: "دعوت نهایی",
      title: "گفتگوهای شما. کامیونیتی شما. همه در یک‌جا.",
      description:
        "با دمو شروع کنید، رابط را ببینید و تجربه کنید که چطور پیام خصوصی، گروه و کانال داخل یک محصول کنار هم می‌نشینند.",
      primaryCta: "شروع",
      secondaryCta: "دیدن ویژگی‌ها",
    },
    footer: {
      tagline: "یک‌جا برای همه گفتگوها",
      description: "پیام‌رسانی مدرن برای گفتگوهای خصوصی، هماهنگی گروهی، کانال‌های کامیونیتی، فایل‌ها و پیام‌های صوتی.",
      groups: [
        {
          title: "محصول",
          links: [
            { label: "ویژگی‌ها", href: "#features" },
            { label: "چت خصوصی", href: "#private-chat" },
            { label: "گروه‌ها", href: "#groups" },
            { label: "کانال‌ها", href: "#channels" },
          ],
        },
        {
          title: "شرکت",
          links: [
            { label: "درباره ما", href: "#" },
            { label: "تماس", href: "#" },
          ],
        },
        {
          title: "منابع",
          links: [
            { label: "راهنما", href: "#" },
            { label: "مستندات", href: "#" },
          ],
        },
        {
          title: "حقوقی",
          links: [
            { label: "حریم خصوصی", href: "#" },
            { label: "شرایط استفاده", href: "#" },
          ],
        },
      ],
      copyright: "همه حقوق محفوظ است.",
    },
    chatDemo: {
      backHome: "بازگشت به خانه",
      title: "دموی چت فقط فرانت‌اند",
      description: "داده‌های ساختگی و محلی. نه بک‌اند، نه احراز هویت، نه دیتابیس. فقط حس محصول، ریتم چیدمان و سطوح پیام‌رسانی که در لندینگ دیده می‌شود.",
      previewMode: "حالت پیش‌نمایش",
      responsiveLayouts: "چیدمان واکنش‌گرا",
      privateTitle: "گفتگوهای خصوصی",
      privateDescription: "پاسخ، اشتراک فایل، واکنش، پیام صوتی و زمینه تمیز گفتگو.",
      mobileTitle: "سازگار با موبایل",
      mobileDescription: "در سطوح کوچک‌تر، رابط ساده‌تر می‌شود؛ نه اینکه همه‌چیز فقط کوچک شود.",
    },
    preview: {
      dashboardSubtitle: "رهبر طراحی · آنلاین",
      typingSarah: "سارا در حال تایپ است",
      composerMain: "یک پیام بنویسید، فایل بفرستید یا پیام صوتی ضبط کنید...",
      privateSubtitle: "رهبر طراحی · آنلاین",
      privateComposer: "به سارا درباره یادداشت‌های انتشار پیام بدهید...",
      groupTitle: "راه‌اندازی محصول",
      groupSubtitle: "۱۲ عضو · ۷ نفر آنلاین",
      groupPinned: "سنجاق‌شده: چک‌لیست نهایی انتشار و فهرست تماس‌های ضروری",
      groupTyping: "نینا داخل رشته در حال نوشتن است",
      groupComposer: "به گروه پاسخ بدهید یا یک رشته تازه شروع کنید...",
      mobileEyebrow: "اویا موبایل",
      mobileTitle: "چت خصوصی",
      mobileStatus: "آنلاین",
      mobileComposer: "یک پیام بنویسید",
      conversationEyebrow: "صندوق گفتگو",
      conversationTitle: "همه گفتگوها",
      searchConversations: "جستجوی گفتگوها",
      pinned: "سنجاق‌شده",
      directMessage: "گفتگوی مستقیم",
      today: "امروز",
      voiceCall: "تماس صوتی",
      videoCall: "تماس تصویری",
      details: "جزئیات گفتگو",
      attachFile: "پیوست فایل",
      emoji: "ایموجی",
      voiceMessage: "پیام صوتی",
      sendMessage: "ارسال پیام",
      presence: {
        online: "آنلاین",
        focus: "حالت تمرکز",
        away: "دور",
        offline: "آفلاین",
      },
    },
  },
  en: {
    navbar: {
      navLinks: [
        { name: "Features", href: "#features" },
        { name: "Private Chat", href: "#private-chat" },
        { name: "Groups", href: "#groups" },
        { name: "Channels", href: "#channels" },
        { name: "Security", href: "#security" },
        { name: "FAQ", href: "#faq" },
      ],
      brandTagline: "Messaging for modern teams",
      signIn: "Sign In",
      getStarted: "Get Started",
      toggleTheme: "Toggle theme",
      openNavigation: "Open navigation",
      closeNavigation: "Close navigation",
      languageLabel: "Switch language",
      languageShort: "EN",
    },
    hero: {
      badge: "Ovea brings private chat, groups, and channels together.",
      title: "One place for every conversation.",
      description:
        "Move from one-to-one conversations to team rooms, community channels, files, and voice messages without switching tools or losing context.",
      primaryCta: "Get Started",
      secondaryCta: "View Demo",
      pillars: ["Private chat", "Groups", "Channels"],
      livePresenceLabel: "Live presence",
      livePresenceValue: "7 people online in launch room",
      sharedLabel: "Shared instantly",
      sharedValue: "Files, voice notes, and threads",
    },
    socialProof: {
      eyebrow: "Designed for every communication layer",
      title: "Built for teams, communities, friends, and organizations.",
      audiences: ["Teams", "Communities", "Friends", "Organizations", "Creators"],
      marks: ["Northstar", "Pulse Studio", "Juniper", "Arc Society", "Mosaic Labs"],
    },
    features: {
      eyebrow: "Core features",
      title: "Everything needed to keep conversations clear and fast.",
      description:
        "Ovea keeps private chat, groups, channels, files, and presence in one system so work, community activity, and casual conversation stay connected.",
      items: [
        {
          title: "Private messaging",
          description: "Clean one-to-one conversations with replies, read state, and lightweight controls.",
        },
        {
          title: "Group chats",
          description: "Bring teams, friends, and communities into structured shared rooms.",
        },
        {
          title: "Channels",
          description: "Use public, private, and announcement spaces to organize topics at scale.",
        },
        {
          title: "Threads",
          description: "Keep the main timeline calm by moving side discussions into replies.",
        },
        {
          title: "File sharing",
          description: "Share docs, images, audio, and media without leaving the conversation flow.",
        },
        {
          title: "Voice messages",
          description: "Drop a voice clip when text is too slow or too flat for the moment.",
        },
        {
          title: "Search",
          description: "Find people, messages, files, and decisions before they disappear into history.",
        },
        {
          title: "Notifications",
          description: "Stay informed with mention-aware alerts instead of noisy all-or-nothing pings.",
        },
        {
          title: "Profiles and presence",
          description: "Show status, role, and availability so people know when and how to reach you.",
        },
      ],
    },
    privateChat: {
      eyebrow: "Private chat",
      title: "One-on-one conversations that still feel structured.",
      description:
        "Talk directly, share context, send a quick voice note, and keep the conversation clean enough that you can return to it later without digging.",
      bullets: [
        "Per-chat privacy and notification controls without extra setup.",
        "Replies, reactions, files, and voice notes in the same message flow.",
        "Online state, delivery status, and read cues that stay lightweight.",
        "Searchable history for decisions, files, and the small details that matter later.",
      ],
    },
    groups: {
      eyebrow: "Group chat showcase",
      title: "Shared rooms for product teams, friend groups, and active communities.",
      description:
        "Groups give every room a clear center of gravity: one place for status updates, active members, pinned context, and fast back-and-forth conversation.",
      points: [
        "Pinned updates keep launch, ops, and community rooms aligned.",
        "Mentions, thread-ready replies, and shared files reduce follow-up noise.",
        "Presence makes it clear who is online, focused, or away before you ping them.",
      ],
    },
    channels: {
      eyebrow: "Channels showcase",
      title: "Organize public discussion, private coordination, and broadcast updates.",
      description:
        "Channels give large spaces real structure. Open rooms stay discoverable, private rooms stay controlled, and announcement streams stay clean when one-to-many communication matters.",
      permissionsEyebrow: "Permissions",
      permissionsTitle: "Role-aware structure",
      permissionsPoints: [
        "Public channels help people discover shared context without asking for access first.",
        "Private channels keep sensitive planning scoped to the right members.",
        "Announcement channels let admins publish high-signal updates without chat drift.",
      ],
      visibilityLabels: {
        Public: "Public",
        Private: "Private",
        Announcement: "Announcement",
      },
    },
    unified: {
      eyebrow: "Everything in one place",
      title: "Private chats, groups, and channels under one communication system.",
      description:
        "Ovea is not three disconnected products. The information architecture keeps every conversation format connected to the same search, presence, files, and notification layer.",
      foundations: [
        { title: "Private chats", note: "Direct conversation and personal context" },
        { title: "Groups", note: "Teams, friends, and community rooms" },
        { title: "Channels", note: "Topic-based spaces with clear permissions" },
      ],
      becomes: "becomes",
      workspaceEyebrow: "Ovea workspace",
      workspaceTitle: "One platform for communication and coordination",
      systems: ["Search", "Notifications", "Files"],
    },
    realtime: {
      eyebrow: "Real-time experience",
      title: "Fast enough to feel live. Calm enough to stay readable.",
      description:
        "The best real-time products show motion only when it helps understanding. Ovea keeps typing, presence, and delivery cues visible without overwhelming the timeline.",
      signals: [
        {
          title: "Typing indicators",
          description: "Show active intent without turning the interface into motion-heavy noise.",
        },
        {
          title: "Delivery and read state",
          description: "Keep simple cues for sent, delivered, and read moments where they matter.",
        },
        {
          title: "Live notifications",
          description: "Surface mentions, replies, and updates quickly without forcing constant checking.",
        },
      ],
      liveStatusTitle: "Live room status",
      liveStatusSubtitle: "Right now",
      mayaTyping: "Maya is typing",
      lastDelivered: "Last message delivered",
      presenceTitle: "Presence overview",
      presenceSubtitle: "Launch workspace",
      onlineNow: "Online now",
      unreadMentions: "Unread mentions",
      activeThreads: "Active threads",
    },
    responsive: {
      eyebrow: "Responsive experience",
      title: "Designed for desktop, tablet, and mobile without shrinking the product into a blur.",
      description:
        "Smaller screens simplify the preview and tighten the hierarchy. They do not just compress the desktop layout.",
      desktop: "Desktop",
      tablet: "Tablet",
      mobile: "Mobile",
    },
    security: {
      eyebrow: "Security and privacy",
      title: "Accurate controls, clear access, and sensible defaults.",
      description:
        "Ovea focuses on the things a communication product should state clearly: private conversations, session visibility, account safety, and role-based channel permissions.",
      sessionTitle: "Active sessions",
      currentSessionDevice: "MacBook Pro · Chrome",
      currentSessionMeta: "Current session · London",
      active: "Active",
      mobileDevice: "iPhone · Mobile app",
      mobileMeta: "Last seen 4 min ago",
      review: "Review",
      cards: [
        {
          title: "Privacy controls",
          description: "Tune notifications, room visibility, and conversation preferences at the chat, group, or channel level.",
        },
        {
          title: "Account safety",
          description: "Review active devices, limit access, and keep sign-in surfaces understandable for real people.",
        },
        {
          title: "Session management",
          description: "See where your account is active and revoke sessions that no longer belong in the loop.",
        },
        {
          title: "Permission-aware channels",
          description: "Separate public discussion, private planning, and broadcast updates with clear posting rules.",
        },
      ],
    },
    useCases: {
      eyebrow: "Use cases",
      title: "A communication platform that adapts to who is using it.",
      items: [
        {
          title: "For teams",
          description: "Ship work with direct messages, focused rooms, and searchable decisions that do not vanish in side tools.",
        },
        {
          title: "For communities",
          description: "Run public discussion, private moderation, and announcements in one structured environment.",
        },
        {
          title: "For friends",
          description: "Keep casual group chat, shared files, and voice notes lightweight without losing core messaging basics.",
        },
        {
          title: "For creators",
          description: "Separate fan spaces, member-only channels, and update streams while keeping engagement personal.",
        },
        {
          title: "For organizations",
          description: "Use permission-aware channels and visible session control when communication spans many roles.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions, answered directly.",
      items: [
        {
          question: "What is this platform?",
          answer: "Ovea is a modern communication platform for private conversations, group rooms, public and private channels, files, voice messages, and organized collaboration.",
        },
        {
          question: "Can I create private groups?",
          answer: "Yes. Groups can be scoped to the people who need them, while public spaces stay easier to discover.",
        },
        {
          question: "What is the difference between groups and channels?",
          answer: "Groups are shared conversation rooms for active discussion. Channels are structured topic spaces that can be public, private, or announcement-only.",
        },
        {
          question: "Can channels be private?",
          answer: "Yes. Private channels are useful for leadership conversations, planning, moderation, and other restricted discussions.",
        },
        {
          question: "Does it support mobile devices?",
          answer: "Yes. The interface is designed to simplify itself on smaller screens instead of shrinking the desktop layout.",
        },
        {
          question: "Can I send files and voice messages?",
          answer: "Yes. File sharing and voice messages are part of the same messaging flow shown throughout the landing page and demo.",
        },
        {
          question: "Is there a dark mode?",
          answer: "Yes. The landing page includes a light and dark mode switch, and the visual system supports both.",
        },
        {
          question: "Do I need to install an application?",
          answer: "No. This demo is shown as a web experience. Product packaging can support browser-based access without requiring a native install.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Final call to action",
      title: "Your conversations. Your community. One place.",
      description:
        "Start with the demo, explore the interface, and see how private messages, groups, and channels fit together inside one product.",
      primaryCta: "Get Started",
      secondaryCta: "Explore Features",
    },
    footer: {
      tagline: "One place for every conversation",
      description: "Modern messaging for private conversations, group coordination, community channels, files, and voice messages.",
      groups: [
        {
          title: "Product",
          links: [
            { label: "Features", href: "#features" },
            { label: "Private Chat", href: "#private-chat" },
            { label: "Groups", href: "#groups" },
            { label: "Channels", href: "#channels" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About", href: "#" },
            { label: "Contact", href: "#" },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "Help", href: "#" },
            { label: "Documentation", href: "#" },
          ],
        },
        {
          title: "Legal",
          links: [
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
          ],
        },
      ],
      copyright: "All rights reserved.",
    },
    chatDemo: {
      backHome: "Back to home",
      title: "Frontend-only chat demo",
      description: "Static mock data. No backend, no auth, no database. Just the product feel, layout rhythm, and the messaging surfaces from the landing page.",
      previewMode: "Preview mode",
      responsiveLayouts: "Responsive layouts",
      privateTitle: "Private conversations",
      privateDescription: "Replies, file sharing, reactions, voice clips, and clean message context.",
      mobileTitle: "Mobile-friendly",
      mobileDescription: "Smaller surfaces simplify the interface instead of shrinking everything.",
    },
    preview: {
      dashboardSubtitle: "Design lead · Online",
      typingSarah: "Sarah is typing",
      composerMain: "Write a message, drop a file, or record a voice note...",
      privateSubtitle: "Design lead · Online",
      privateComposer: "Message Sarah about launch notes...",
      groupTitle: "Product launch",
      groupSubtitle: "12 members · 7 online now",
      groupPinned: "Pinned: final rollout checklist and escalation contacts",
      groupTyping: "Nina is writing in thread",
      groupComposer: "Reply to the group or start a thread...",
      mobileEyebrow: "Ovea mobile",
      mobileTitle: "Private chat",
      mobileStatus: "Online",
      mobileComposer: "Write a message",
      conversationEyebrow: "Inbox",
      conversationTitle: "All conversations",
      searchConversations: "Search conversations",
      pinned: "Pinned",
      directMessage: "Direct message",
      today: "Today",
      voiceCall: "Voice call",
      videoCall: "Video call",
      details: "Conversation details",
      attachFile: "Attach file",
      emoji: "Emoji",
      voiceMessage: "Voice message",
      sendMessage: "Send message",
      presence: {
        online: "Online",
        focus: "Focus mode",
        away: "Away",
        offline: "Offline",
      },
    },
  },
};

export function useSiteCopy() {
  const { language } = useLanguage();
  return useMemo(() => siteCopy[language], [language]);
}

export function buildMockChatData(language: Language): MockChatData {
  const isFa = language === "fa";

  const users: Record<string, UserProfile> = {
    current: {
      id: "u1",
      name: "Alex Morgan",
      avatar: "AM",
      role: isFa ? "رهبر محصول" : "Product lead",
      presence: "online",
    },
    sarah: {
      id: "u2",
      name: "Sarah Chen",
      avatar: "SC",
      role: isFa ? "رهبر طراحی" : "Design lead",
      presence: "online",
    },
    maya: {
      id: "u3",
      name: "Maya Johnson",
      avatar: "MJ",
      role: isFa ? "مدیر کامیونیتی" : "Community manager",
      presence: "focus",
    },
    david: {
      id: "u4",
      name: "David Miller",
      avatar: "DM",
      role: isFa ? "مهندسی" : "Engineering",
      presence: "away",
    },
    nina: {
      id: "u5",
      name: "Nina Patel",
      avatar: "NP",
      role: isFa ? "عملیات" : "Operations",
      presence: "online",
    },
  };

  const sidebarItems: SidebarItem[] = [
    { id: "messages", label: isFa ? "پیام‌ها" : "Messages", icon: "messages", active: true },
    {
      id: "notifications",
      label: isFa ? "اعلان‌ها" : "Notifications",
      icon: "notifications",
      unread: 3,
    },
    { id: "groups", label: isFa ? "گروه‌ها" : "Groups", icon: "groups" },
    { id: "channels", label: isFa ? "کانال‌ها" : "Channels", icon: "channels" },
    { id: "settings", label: isFa ? "تنظیمات" : "Settings", icon: "settings" },
  ];

  const conversations: ConversationItem[] = [
    {
      id: "c1",
      type: "private",
      name: users.sarah.name,
      subtitle: isFa
        ? "نسخه اولیه خوب شده. می‌خواهی متن هدر را هم تیزتر کنم؟"
        : "Draft looks sharp. Want me to tighten the hero copy too?",
      time: "10:42",
      unread: 0,
      avatar: users.sarah.avatar,
      presence: users.sarah.presence,
      pinned: true,
    },
    {
      id: "c2",
      type: "group",
      name: isFa ? "راه‌اندازی محصول" : "Product launch",
      subtitle: isFa
        ? "مایا: چک‌لیست نهایی انتشار را سنجاق کردم."
        : "Maya: I pinned the final rollout checklist.",
      time: "09:15",
      unread: 4,
      avatar: "PL",
      members: isFa ? "۱۲ عضو" : "12 members",
      pinned: true,
    },
    {
      id: "c3",
      type: "channel",
      name: "#design",
      subtitle: isFa
        ? "دیوید مشخصات زمان‌بندی موشن را فرستاد."
        : "David shared the motion timing spec.",
      time: "08:56",
      unread: 2,
      avatar: "#",
      members: isFa ? "کانال باز" : "Open channel",
    },
    {
      id: "c4",
      type: "channel",
      name: "#announcements",
      subtitle: isFa
        ? "نسخه ۲.۴ امروز ساعت ۱۶:۰۰ منتشر می‌شود."
        : "Release 2.4 ships today at 16:00 UTC.",
      time: isFa ? "دیروز" : "Yesterday",
      unread: 1,
      avatar: "📢",
      members: isFa ? "اطلاع‌رسانی" : "Broadcast",
      muted: true,
    },
  ];

  const privateMessages: ChatMessage[] = [
    {
      id: "pm1",
      senderId: users.sarah.id,
      senderName: users.sarah.name,
      senderAvatar: users.sarah.avatar,
      time: "10:02",
      text: isFa
        ? "صبح بخیر. تغییر متن ورود را ادغام کردم و دو یادداشت هم برای هدر گذاشتم."
        : "Morning. I merged the onboarding copy update and left two notes on the hero.",
    },
    {
      id: "pm2",
      senderId: users.current.id,
      senderName: users.current.name,
      senderAvatar: users.current.avatar,
      time: "10:05",
      reply: isFa ? "می‌شود متن دکمه را مستقیم‌تر کنی؟" : "Can you make the CTA more direct?",
      text: isFa
        ? "دیدم. تیتر را فشرده‌تر می‌کنم و متن توضیحی را کوتاه نگه می‌دارم."
        : "Saw them. I am tightening the headline and keeping the supporting text shorter.",
      status: "read",
    },
    {
      id: "pm3",
      senderId: users.sarah.id,
      senderName: users.sarah.name,
      senderAvatar: users.sarah.avatar,
      time: "10:11",
      kind: "file",
      text: isFa
        ? "آخرین فایل طراحی و یادداشت‌های فاصله‌گذاری اینجاست."
        : "Here is the latest fig file and the spacing notes.",
      file: {
        name: "ovea-landing-v3.fig",
        size: "4.2 MB",
      },
    },
    {
      id: "pm4",
      senderId: users.current.id,
      senderName: users.current.name,
      senderAvatar: users.current.avatar,
      time: "10:17",
      kind: "voice",
      voice: {
        duration: "0:28",
        waveform: [24, 40, 34, 55, 42, 30, 20, 28, 52, 44],
      },
      reactions: [{ emoji: "🔥", count: 2, active: true }],
      status: "delivered",
    },
    {
      id: "pm5",
      senderId: users.sarah.id,
      senderName: users.sarah.name,
      senderAvatar: users.sarah.avatar,
      time: "10:21",
      text: isFa
        ? "عالی شد. بعد از ناهار وضعیت خالی را هم پرداخت می‌کنم."
        : "Perfect. I will polish the empty state after lunch.",
      reactions: [{ emoji: "👍", count: 1 }],
    },
  ];

  const groupMessages: ChatMessage[] = [
    {
      id: "gm1",
      senderId: users.maya.id,
      senderName: users.maya.name,
      senderAvatar: users.maya.avatar,
      time: "09:02",
      text: isFa
        ? "یادآوری: اتاق انتشار ساعت ۱۵:۳۰ باز می‌شود. لطفاً موانع را داخل رشته پاسخ‌ها نگه دارید."
        : "Reminder: launch room opens at 15:30. Please keep blockers in thread replies.",
      reactions: [{ emoji: "✅", count: 5 }],
    },
    {
      id: "gm2",
      senderId: users.david.id,
      senderName: users.david.name,
      senderAvatar: users.david.avatar,
      time: "09:11",
      text: isFa
        ? "الکس را منشن می‌کنم؛ نسخه کاهش حرکت برای نشانگر تایپ را فرستادم."
        : "Mentioning @Alex — I shipped the reduced-motion fallback for typing indicators.",
      mention: true,
    },
    {
      id: "gm3",
      senderId: users.current.id,
      senderName: users.current.name,
      senderAvatar: users.current.avatar,
      time: "09:14",
      text: isFa
        ? "خوب است. حرکت را ظریف نگه دارید. ما سرنخ حضور می‌خواهیم، نه شلوغی بصری."
        : "Nice. Keep the animation subtle. We want presence cues, not visual noise.",
      status: "read",
      reactions: [{ emoji: "🫡", count: 3 }],
    },
    {
      id: "gm4",
      senderId: users.nina.id,
      senderName: users.nina.name,
      senderAvatar: users.nina.avatar,
      time: "09:18",
      kind: "file",
      text: isFa
        ? "چک‌لیست انتشار و برگه تماس‌ها را به اشتراک گذاشتم."
        : "Shared the rollout checklist and contact sheet.",
      file: {
        name: "launch-checklist.pdf",
        size: "860 KB",
      },
    },
  ];

  const channelCards: ChannelCard[] = [
    {
      id: "public",
      name: "#general",
      visibility: "Public",
      description: isFa
        ? "گفتگوی باز برای همه افراد داخل فضای کاری."
        : "Open discussion for everyone in the workspace.",
      members: isFa ? "۲.۴ هزار عضو" : "2.4k members",
      activity: isFa ? "۳۱۲ پست امروز" : "312 posts today",
    },
    {
      id: "private",
      name: "#product-leadership",
      visibility: "Private",
      description: isFa
        ? "برنامه‌ریزی و تصمیم‌گیری داخلی فقط با دعوت."
        : "Invite-only planning and internal decision making.",
      members: isFa ? "۱۸ عضو" : "18 members",
      activity: isFa ? "۸ رشته فعال" : "8 active threads",
    },
    {
      id: "announcement",
      name: "#announcements",
      visibility: "Announcement",
      description: isFa
        ? "به‌روزرسانی‌های مهم با دسترسی کنترل‌شده برای ارسال."
        : "Important updates with controlled posting permissions.",
      members: isFa ? "همه دنبال می‌کنند" : "Everyone follows",
      activity: isFa ? "۱ یادداشت انتشار امروز" : "1 release note today",
    },
  ];

  return {
    users,
    sidebarItems,
    conversations,
    privateMessages,
    groupMessages,
    channelCards,
  };
}

export function useMockChatData() {
  const { language } = useLanguage();
  return useMemo(() => buildMockChatData(language), [language]);
}
