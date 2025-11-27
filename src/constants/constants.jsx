import { COMMON } from "./common";
import { uiTextsKo } from "./KO";
import { uiTextsEn } from "./EN";

// 필요하다면 다른 공통 상수도 여기에 추가할 수 있습니다.
// 예: export const SUPPORT_EMAIL = `support@superapp.com`;

export { COMMON as APP_INFO };

// UI 텍스트 통합
export const UI_TEXTS = {
  ko: uiTextsKo,
  en: uiTextsEn,
};
