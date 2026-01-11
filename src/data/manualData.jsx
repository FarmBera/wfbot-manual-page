import React from "react";
import {
  Info, Zap, // Settings,
  HelpCircle, FileText, Terminal, UsersRound, Handshake, Contact2,
} from "lucide-react";
import {htags, tw, TXT_SIZE} from "../style/tailwind";

// UI components
import DocImage from "../components/DocImage";
import {P, HR, H2, H3, UL_LINK_GRID} from "../ui/CustomElements";

export const getManualSections = (t, isMobile) => {
  // setup automatic image width
  const getImageWidth = (customWidth) => {
    if (isMobile) return "90%";
    return customWidth || "60%";
  };
  return [{
    id: t.intro.id, title: t.intro.title, icon: <Info size={18}/>, content: (<div className="space-y-4">
      <h1 className={`${tw.txt.bright} ${tw.tcd} mb-4 text-3xl font-bold`}>
        {t.intro.welcomeTitle}
      </h1>
      <p className={`${tw.txt.dim} ${tw.tcd} leading-relaxed whitespace-pre-line`}>
        {t.intro.welcomeDesc}
      </p>
      <DocImage src="/logo.webp" maxWidth="40%" caption={t.intro.imgDesc}/>
      {t.intro.foot}
    </div>),
  }, {
    id: t.features.id, title: t.features.title, icon: <Zap size={18}/>, content: (<div className="space-y-6">
      <H2 text={t.features.mainTitle}/>
      {t.features.head}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.features.items.map((item, idx) => (<div
          key={idx}
          className={`border ${tw.border.dim} p-4 rounded-lg shadow-sm dark:shadow-sm hover:shadow-md dark:hover:shadow-xl transition-shadow ${tw.tcd}`}>
          <h4 className={`font-bold text-lg mb-2 ${tw.txt.theme}`}>
            {item.title}
          </h4>
          {/* text-gray-500 dark:text-gray-200 */}
          <div className={`text-sm ${tw.txt.light}`}>
            {item.desc}
            {item.subDesc && (<>
              <br/>
              <span className="text-xs">{item.subDesc}</span>
            </>)}
          </div>
        </div>))}
      </div>
    </div>),
  }, {
    id: t.manual.id, title: t.manual.title, icon: <Terminal size={18}/>, subSections: t.manual.list.map((cmd) => ({
      id: cmd.id, title: cmd.title,
    })), content: (<div className="space-y-4">
      <H2 text={t.manual.mainTitle}/>
      <UL_LINK_GRID content={t.manual.list}/>
      {t.manual.list.map((cmd, idx) => (<div key={cmd.id} className="mt-12 first:mt-8">
        <HR/>
        <H3 id={cmd.id} text={`/${cmd.title}`}/>
        <P text={cmd.desc}/>
        {cmd.head}
        {cmd.image && (<DocImage
          src={cmd.image}
          caption={<>
            <strong className="font-extrabold">/{cmd.title}</strong>{" "}
            {t.picEx}
          </>}
          alt={cmd.title}
          maxWidth={getImageWidth(cmd.width)}
        />)}
        {cmd.foot && (<div className={`mt-2 ${TXT_SIZE} ${tw.txt.normal}`}>
          {cmd.foot}
        </div>)}
      </div>))}
    </div>),
  }, {
    id: t.party.id, title: t.party.title, icon: <UsersRound size={18}/>, subSections: t.party.list.map((item) => ({
      id: item.id, title: item.title,
    })), content: (<div className="space-y-4">
      <H2 text={t.party.mainTitle}/>
      <UL_LINK_GRID content={t.party.list}/>
      {t.party.list.map((item) => (<div key={item.id} className="mt-12 first:mt-8">
        <HR/>
        <H3 id={item.id} text={item.title}/>
        <P text={item.desc}/>
        {item.head}
        {item.image && (<DocImage
          src={item.image}
          caption={`${item.title} 명령어 출력 예시`}
          maxWidth={getImageWidth(item.width)}
          alt={item.title}
        />)}
        {item.foot}
      </div>))}
    </div>),
  }, {
    id: t.trade.id, title: t.trade.title, icon: <Handshake size={18}/>, subSections: t.trade.list.map((item) => ({
      id: item.id, title: item.title,
    })), content: (<div className="space-y-4">
      <H2 text={t.trade.mainTitle}/>
      <UL_LINK_GRID content={t.trade.list}/>
      {t.trade.list.map((item) => (<div key={item.id} className="mt-12 first:mt-8">
        <HR/>
        <H3 id={item.id} text={item.title}/>
        <P text={item.desc}/>
        {item.head}
        {item.image && (<DocImage
          src={item.image}
          caption={item.title}
          alt={item.title}
          maxWidth={getImageWidth(item.width)}
        />)}
        {item.foot}
      </div>))}
    </div>),
  }, {
    id: t.troubleshooting.id,
    title: t.troubleshooting.title,
    icon: <HelpCircle size={18}/>,
    content: (<div className="space-y-4">
      <H2 text={t.troubleshooting.mainTitle}/>
      <div className="space-y-4">
        {t.troubleshooting.list.map((qna, idx) => (// className="border-b pb-4"
          <div key={idx}>
            {idx !== 0 && <HR/>}
            <div className={`${htags.H4} ${tw.bold.b}`}>Q. {qna.q}</div>
            <div className={`${tw.txt.dim}`}>
              <span className="font-black">A. </span>
              {qna.a}
            </div>
          </div>))}
      </div>
    </div>),
  }, {
    id: t.terms.id,
    title: t.terms.title,
    icon: <FileText size={18}/>,
    content: (<div className={`space-y-4 text-md ${tw.txt.normal}`}>
      {/* <H2_4XL text={t.terms.termsTitle} /> */}
      {t.terms.desc}
    </div>),
  }, {
    id: t.privacy.id,
    title: t.privacy.title,
    icon: <FileText size={18}/>,
    content: (<div className={`space-y-4 text-md ${tw.txt.normal}`}>
      {/* <H2_4XL text={t.privacy.termsTitle} /> */}
      {t.privacy.desc}
    </div>),
  }, {
    id: t.legal.id,
    title: t.legal.title,
    icon: <FileText size={18}/>,
    content: (<div className={`space-y-4 text-md ${tw.txt.normal}`}>
      {t.legal.desc}
    </div>),
  }, {
    id: t.contact.id,
    title: t.contact.title,
    icon: <Contact2 size={20}/>,
    strong: `${tw.bold.b} ${tw.txt.orange}`,
    content: (<div className={`space-y-4 ${TXT_SIZE} ${tw.txt.normal}`}>
      <div className={htags.pTag}>{t.contact.desc}</div>
      <div className={htags.pTag}>{t.contact.foot}</div>
    </div>),
  },];
};
