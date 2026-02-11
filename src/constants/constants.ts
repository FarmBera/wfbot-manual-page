import {COMMON} from "./common";
import {uiTextsKo} from "./KO";
import {uiTextsEn} from "./EN";

type UITextsType = typeof uiTextsKo;

export {COMMON as APP_INFO, type UITextsType};

export const UI_TEXTS: Record<string, UITextsType | object> = {
    ko: uiTextsKo,
    en: uiTextsEn,
};

