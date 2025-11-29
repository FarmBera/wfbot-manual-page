import React from "react";
import {
  Info,
  Zap,
  // Settings,
  HelpCircle,
  FileText,
  Terminal,
  UsersRound,
  Handshake,
} from "lucide-react";

// UI components
import DocImage from "../components/DocImage";
import H2 from "../ui/H2";
import H3 from "../ui/H3";
import P from "../ui/P";
import HR from "../ui/HR";
import UL_LINK_GRID from "../ui/UL_LINK_GRID";
import H2_4XL from "../ui/H2_4XL";
import NOTE from "../ui/NOTE";

export const getManualSections = (t, isMobile) => {
  // 모바일일 때 기본 너비 90%, 아니면 각 아이템의 설정 너비 또는 기본값
  const getImageWidth = (customWidth) => {
    if (isMobile) return "90%";
    return customWidth || "70%"; // DocImage의 기본값에 위임하거나 명시
  };
  return [
    // 1. 소개 (Intro)
    {
      id: t.intro.id,
      title: t.intro.title,
      icon: <Info size={18} />,
      content: (
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t.intro.welcomeTitle}
          </h1>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {t.intro.welcomeDesc}
          </p>
          <NOTE
            color="red"
            icon="trianglealert"
            title={t.intro.noteTitle}
            text={t.intro.note}
          />
        </div>
      ),
    },
    // 2. 주요 기능 (Features)
    {
      id: t.features.id,
      title: t.features.title,
      icon: <Zap size={18} />,
      content: (
        <div className="space-y-6">
          <H2 text={t.features.mainTitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.features.items.map((item, idx) => (
              <div
                key={idx}
                className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-lg mb-2 text-indigo-600">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.desc}
                  {item.subDesc && (
                    <>
                      <br />
                      <span className="text-xs">{item.subDesc}</span>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // 3. 명령어 (Manual/Commands)
    {
      id: t.manual.id,
      title: t.manual.title,
      icon: <Terminal size={18} />,
      subSections: t.manual.list.map((cmd) => ({
        id: cmd.id,
        title: cmd.title,
      })),
      content: (
        <div className="space-y-4">
          <H2 text={t.manual.mainTitle} />
          {/* 상단 빠른 링크 */}
          <UL_LINK_GRID content={t.manual.list} />

          {/* 명령어 본문 루프 */}
          {t.manual.list.map((cmd, idx) => (
            <div key={cmd.id} className="mt-12 first:mt-8">
              <H3 id={cmd.id} text={cmd.title} />
              <P text={cmd.desc} />
              {cmd.head}
              {cmd.image && (
                <DocImage
                  src={cmd.image}
                  caption={
                    <>
                      <strong className="font-extrabold">/{cmd.title}</strong>{" "}
                      {t.picEx}
                    </>
                  }
                  alt={cmd.title}
                  maxWidth={getImageWidth(cmd.width)}
                />
              )}
              {cmd.foot && (
                <div className="mt-2 text-lg text-gray-500">
                  <p>{cmd.foot}</p>
                </div>
              )}
              <HR />
            </div>
          ))}
        </div>
      ),
    },
    // 4. 파티 (Party)
    {
      id: t.party.id,
      title: t.party.title,
      icon: <UsersRound size={18} />,
      subSections: t.party.list.map((item) => ({
        id: item.id,
        title: item.title,
      })),
      content: (
        <div className="space-y-4">
          <H2 text={t.party.mainTitle} />
          <UL_LINK_GRID content={t.party.list} />

          {t.party.list.map((item) => (
            <div key={item.id} className="mt-12 first:mt-8">
              <H3 id={item.id} text={item.title} />
              <P text={item.desc} />
              {item.head}
              {item.image && (
                <DocImage
                  src={item.image}
                  caption={`${item.title} 명령어 출력 예시`}
                  maxWidth={getImageWidth(item.width)}
                  alt={item.title}
                />
              )}
              {item.foot}
              <HR />
            </div>
          ))}
        </div>
      ),
    },
    // 5. 거래 (Trade)
    {
      id: t.trade.id,
      title: t.trade.title,
      icon: <Handshake size={18} />,
      subSections: t.trade.list.map((item) => ({
        id: item.id,
        title: item.title,
      })),
      content: (
        <div className="space-y-4">
          <H2 text={t.trade.mainTitle} />
          <UL_LINK_GRID content={t.trade.list} />
          {t.trade.list.map((item) => (
            <div key={item.id} className="mt-12 first:mt-8">
              <H3 id={item.id} text={item.title} />
              <P text={item.desc} />
              {item.head}
              {item.image && (
                <DocImage
                  src={item.image}
                  caption={item.title}
                  alt={item.title}
                  maxWidth={getImageWidth(item.width)}
                />
              )}
              {item.foot}
              <HR />
            </div>
          ))}
        </div>
      ),
    },
    // 6. 문제 해결 (FAQ)
    {
      id: t.troubleshooting.id,
      title: t.troubleshooting.title,
      icon: <HelpCircle size={18} />,
      content: (
        <div className="space-y-4">
          <H2 text={t.troubleshooting.mainTitle} />
          <div className="space-y-4">
            {t.troubleshooting.list.map((qna, idx) => (
              <div key={idx} className="border-b pb-4">
                <h4 className="font-medium text-gray-900 mb-2">Q. {qna.q}</h4>
                <p className="text-gray-600">A. {qna.a}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // 7. 법적 고지 (Legal)
    {
      id: t.legal.id,
      title: t.legal.title,
      icon: <FileText size={18} />,
      content: (
        <div className="space-y-4 text-sm text-gray-500">
          <H2_4XL text={t.legal.termsTitle} />
          <P text={t.legal.termsDesc1} />
          <P text={t.legal.termsDesc2} />

          <H2_4XL text={t.legal.privacyTitle} />
          <P text={t.legal.privacyDesc} />
        </div>
      ),
    },
  ];
};
