import { COMMON } from "./common";

// TODO: add english image files
const IMG_PATH = "/imgen"
const IMG_EXT = ".png";

export const uiTextsEn = {
  // common UI
  docTitle: "User Manual",
  searchPlaceholder: "Search...",
  contents: "Contents",
  next: "Next",
  footerMsg: "End of document. Need help?",
  contactSupport: "Contact Support",
  copyright: `© ${COMMON.year} ${COMMON.company}`,

  // 1. Intro
  intro: {
    id: "intro",
    title: "1. Introduction",
    welcomeTitle: `Welcome to the ${COMMON.name} Guide`,
    welcomeDesc: `This document covers everything from installation to advanced features of **${COMMON.name}**.`,
    note: `This document is based on version ${COMMON.version}.`,
  },

  // 2. Features
  features: {
    id: "features",
    title: "2. Key Features",
    mainTitle: "Core Features",
    items: [
      {
        title: "Real-time Notifications",
        desc: "Get notified about new Warframe content in real-time.",
        subDesc: "(Requires admin privileges)",
      },
      {
        title: "Market Search",
        desc: "Search for item prices on Warframe Market directly from Discord.",
      },
      // ... items must match the count in KO.jsx
    ],
  },

  // 3. Manual (Commands)
  manual: {
    id: "manual",
    title: "3. Commands",
    mainTitle: "All Commands",
    list: [
      {
        id: "cmd-help",
        title: "Help",
        desc: "Check available commands and help info.",
        image: `${IMG_PATH}help1${IMG_EXT}`,
      },
      // ... keep structure same as KO
    ],
  },

  // 4. Party
  party: {
    id: "party",
    title: "4. Party System",
    mainTitle: "Party Commands",
    list: [],
  },

  // 5. Trade
  trade: {
    id: "trade",
    title: "5. Trade System",
    mainTitle: "Trade Commands",
    list: [],
  },

  // 6. FAQ
  troubleshooting: {
    id: "troubleshooting",
    title: "Troubleshooting / FAQ",
    mainTitle: "FAQ",
    list: [
      {
        q: "Interaction Failed Error",
        a: "Desktop: Press Ctrl+R. Mobile: Restart the app.",
      },
    ],
  },

  // 7. Legal
  legal: {
    id: "eula",
    title: "Legal / Terms",
    termsTitle: "Terms of Service",
    termsDesc1: `Copyright belongs to **${COMMON.company}**.`,
    termsDesc2: "By using this software, you agree to the EULA.",
    privacyTitle: "Privacy Policy",
    privacyDesc: "We collect the following information...",
  },
};