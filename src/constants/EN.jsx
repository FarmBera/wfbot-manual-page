// [수정] circular dependency 방지를 위해 원본 경로(../locale/common)에서 직접 import 합니다.
import { COMMON } from "./common";

export const uiTextsEn = {
  name: `WarframeUtils (서버관리봇 III)`,
  docTitle: "User Manual",
  updated: "Updated",
  searchPlaceholder: "Search...",
  contents: "Contents",
  next: "Next",
  footerMsg: "End of document. Need help?",
  contactSupport: "Contact Support",
  copyright: `© ${COMMON.year} ${COMMON.company}`,
};
