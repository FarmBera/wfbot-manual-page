import { COMMON } from "./common";
import { htags, tw } from "../style/tailwind";

import { H2, P, A, NOTE, BOLD, H4, H3 } from "../ui/CustomElements";
import TipTime from "../components/TipTime";
import DocImage from "../components/DocImage";
import ContactMe from "../components/ContactAdmin";

const IMG_PATH = "/imgko/";
const IMG_EXT = ".webp";

const SUB = {
  HELP: "cmd-help",
  ANNOUNCEMENT: "cmd-announcement",
  PATCHNOTE: "cmd-patchnote",
  PRIVACY: "cmd-privacy",
  ALERTS: "Alerts",
  NEWS: "Events",
  SORTIE: "Sorties",
  ARCHONHUNT: "LiteSorties",
  VOIDTRADERS: "VoidTraders",
  VOIDTRADERSITEM: "VoidTradersItem",
  STEELPATH: "steelPath",
  FISSURES: "ActiveMissions",
  CALENDAR: "KnownCalendarSeasons",
  DAILYDEALS: "DailyDeals",
  INVASIONS: "Invasions",
  MARKET_SEARCH: "market-search",
  MARKET_HELP: "market-help",
  PARTY_CREATE: "partys",
  TRADE_CREATE: "trades",
  DUVIRI_WF: "EndlessXpChoicesWF",
  DUVIRI_INC: "EndlessXpChoicesINC",
  EVENTS: "Goals",
};

export const uiTextsEn = {
  // common UI
  docTitle: "이용 가이드",
  searchPlaceholder: "검색하기...는 아직 사용할 수 없어요...",
  contents: "목차",
  next: "다음",
  footerMsg: "문서의 끝부분 입니다.",
  copyright: `© ${COMMON.year} ${COMMON.company}`,

  picEx: "내용 예시",

  // tiptime: {
  //   title: "시간 확인 꿀팁",
  //   text: "텍스트에 마우스를 가져다 놓으면 정확한 종료 날짜 & 시간이 표시됩니다!",
  // },

  // 1. 소개 섹션
  intro: {
    id: "intro",
    title: "1. Introduction",
  },
  // 2. 주요 기능 섹션
  features: {
    id: "features",
    title: "2. Key Features",
    mainTitle: "핵심만 빠르게 살펴보죠!",
    items: [],
  },
  // 3. 명령어 섹션
  manual: {
    id: "manual",
    title: "3. Commands",
    mainTitle: "All Commands",
    list: [],
  },
  // 4. 파티 섹션
  party: {
    id: "party",
    title: "4. Party System",
    mainTitle: "Party Commands",
    list: [],
  },
  // 5. 거래 섹션
  trade: {
    id: "trade",
    title: "5. Trade System",
    mainTitle: "Trade Commands",
    list: [],
  },
  // 6. FAQ 섹션
  troubleshooting: {
    id: "faq",
    title: "Troubleshooting / FAQ",
    list: [],
  },
  // 7. 이용 약관
  terms: {
    id: "tos",
    title: "Terms of Service",
  },
  // 8. 개인정보 처리방침
  privacy: {
    id: "privacy",
    title: "Privacy Policy",
  },
  // 9. 법적 고지
  contact: {
    id: "contact",
    title: "Need Help?",
  },
};
