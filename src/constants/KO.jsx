// [수정] circular dependency 방지를 위해 원본 경로(../locale/common)에서 직접 import 합니다.
import { COMMON } from "./common";

export const uiTextsKo = {
  name: `워프레임 유틸봇 (서버관리봇 III)`,
  docTitle: "사용 설명서",
  updated: "업데이트됨",
  searchPlaceholder: "검색하기...",
  contents: "목차",
  next: "다음",
  footerMsg: "문서의 끝입니다. 도움이 필요하신가요?",
  contactSupport: "고객지원팀에 문의하기",
  copyright: `© ${COMMON.year} ${COMMON.company}`,
};
