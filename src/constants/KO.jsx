import A from "../ui/A";
import P from "../ui/P";
import NOTE from "../ui/NOTE";
import TipTime from "../components/TipTime";
import { COMMON } from "./common";
import DocImage from "../components/DocImage";
import H2 from "../ui/H2";
// import H2_4XL from "../ui/H2_4XL";

const IMG_PATH = "/imgko/";
const IMG_EXT = ".png";

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

export const uiTextsKo = {
  // common UI
  docTitle: "사용 설명서",
  searchPlaceholder: "검색하기...는 아직 사용할 수 없어요...",
  contents: "목차",
  next: "다음",
  footerMsg: "문서의 끝입니다. 도움이 필요하신가요?",
  contactSupport: "고객지원팀에 문의하기",
  copyright: `© ${COMMON.year} ${COMMON.company}`,

  picEx: "내용 예시",

  // tiptime: {
  //   title: "시간 확인 꿀팁",
  //   text: "텍스트에 마우스를 가져다 놓으면 정확한 종료 날짜 & 시간이 표시됩니다!",
  // },

  // 1. 소개 섹션
  intro: {
    id: "intro",
    title: "1. 소개",
    welcomeTitle: (
      <>
        {COMMON.name}
        <br />
        가이드에 오신 것을 환영합니다!
      </>
    ),
    welcomeDesc: (
      <>
        이 문서는 <strong>{COMMON.name}</strong>의 사용 방법을 알려줍니다.
        왼쪽의 목차를 통해 원하는 정보로 빠르게 이동할 수 있습니다.
      </>
    ),
    noteTitle: "주의!",
    note: "이 문서는 현재 알파 버전으로 개발 중인 문서입니다. 부정확한 정보와 오탈자가 있을 수 있습니다.",
  },
  // 2. 주요 기능 섹션
  features: {
    id: "features",
    title: "2. 주요 기능 소개",
    mainTitle: "핵심 기능 살펴보기",
    items: [
      {
        title: "디스코드에서 실시간 워프레임 컨텐츠 확인",
        desc: "명령어를 이용하여 워프레임 내 컨텐츠를 확인할 수 있어요.",
        subDesc: "(바로키티어 등장 상태, 출격, 침공, 얼럿 미션 등등)",
      },
      {
        title: "마켓 검색 기능",
        desc: "워프레임 마켓에 직접 접속 하지 않고, 디스코드에서 간단하게 시세를 검색할 수 있어요.",
      },
      {
        title: "파티 모집 시스템",
        desc: "간단한 명령어로 파티 모집을 편리하게 할 수 있어요.",
      },
      {
        title: "아이템 거래 시스템",
        desc: "간단한 명령어로 거래 글을 편리하게 게시할 수 있어요.",
      },
    ],
  },
  // 3. 명령어 섹션
  manual: {
    id: "manual",
    title: "3. 워프레임 컨텐츠 명령어",
    mainTitle: "모든 명령어 목록",
    list: [
      {
        id: SUB.HELP,
        title: "도움말",
        desc: "사용 가능한 명령어 및 관련 도움말을 확인할 수 있어요.",
        image: `${IMG_PATH}help1${IMG_EXT}`,
        width: "80%",
        imagetmp:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Help+Command",
        foot: (
          <>
            <P text="지금 보고 계시는 웹 페이지로 이동하는 링크를 보여줘요" />
          </>
        ),
      },
      {
        id: SUB.ANNOUNCEMENT,
        title: "공지사항",
        desc: "봇 공지사항을 확인할 수 있어요.",
        image: `${IMG_PATH}announcement${IMG_EXT}`,
        imagetmp:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Announcement",
      },
      {
        id: SUB.PATCHNOTE,
        title: "패치노트",
        desc: "봇의 최근 업데이트 내역을 확인할 수 있어요.",
        image: `${IMG_PATH}patchnote${IMG_EXT}`,
        imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=Patch+Note",
      },
      {
        id: SUB.PRIVACY,
        title: "개인정보-처리방침",
        desc: "봇의 개인정보 처리방침에 대하여 중요한 내용을 표시합니다.",
        image: `${IMG_PATH}privacy-policy${IMG_EXT}`,
        imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=Privacy",
        foot: (
          <>
            <p>
              자세한 내용은 좌측 <strong>이용약관/법적고지</strong> 섹션을
              확인해주세요.
            </p>
          </>
        ),
      },
      {
        id: SUB.ALERTS,
        title: "얼럿",
        desc: "현재 활성화된 얼럿 미션을 확인할 수 있어요.",
        image: `${IMG_PATH}alerts${IMG_EXT}`,
        imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=Alerts",
        head: (
          <>
            <P text="얻을 수 있는 보상 목록을 우선으로 표시합니다. 이후 아래의 정보를 표시해줍니다." />
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-10 text-lg">
              <li>미션 종류 - 노드 위치</li>
              <li>미션 정보 (적 레벨, 웨이브 수 등)</li>
              <li>종료까지 남은 시간</li>
            </ul>
            <TipTime sampleTime="4일 후" />
          </>
        ),
      },
      {
        id: SUB.NEWS,
        title: "뉴스",
        desc: "최신 워프레임 뉴스를 확인할 수 있어요.",
        image: `${IMG_PATH}news${IMG_EXT}`,
        imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=News",
        head: (
          <>
            <P text="파란색 글씨를 클릭하면 해당 공지로 바로 이동할 수 있습니다." />
          </>
        ),
      },
      {
        id: SUB.SORTIE,
        title: "출격",
        desc: "오늘의 출격 미션을 확인할 수 있어요.",
        image: `${IMG_PATH}sortie${IMG_EXT}`,
        imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=Sortie",
        head: (
          <>
            <P text="출격 미션 종료, 어느 노드에서 이루어지는지, 변수는 무엇인지 간단하게 확인할 수 있어요." />
          </>
        ),
      },
      {
        id: SUB.ARCHONHUNT,
        title: "집정관사냥",
        desc: "이번주 집정관 미션 목록과, 얻을 수 있는 샤드를 확인할 수 있어요",
        image: `${IMG_PATH}archonhunt${IMG_EXT}`,
        imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=Archon+Hunt",
        head: (
          <>
            <NOTE
              color="green"
              title="꿀팁"
              text="얻을 수 있는 샤드 종류에 따라 왼쪽의 띠 색깔이 바뀌어서 어떤 샤드를 얻을 수 있는지 직관적으로 확인할 수 있어요!"
            />
          </>
        ),
      },
      {
        id: SUB.VOIDTRADERS,
        title: "바로키티어",
        desc: "현재 바로 키 티어 상태를 알 수 있어요.",
        image: `${IMG_PATH}voidtraders${IMG_EXT}`,
        imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=Void+Trader",
        head: (
          <>
            <P text="등장 여부, 언제/어디서 나타날지 알려줍니다." />
          </>
        ),
        foot: (
          <>
            <P text="바로 키 티어가 등장했다면 아래와 같이 나타나요" />
            <DocImage
              // src=""
              alt="바로키티어 등장했을 때 이미지"
              caption="바로 키 티어가 등장했을 때 표시되는 내용"
            />
          </>
        ),
      },
      {
        id: SUB.VOIDTRADERSITEM,
        title: "바로키티어-물품",
        desc: "바로 키 티어가 판매하는 물품 목록을 확인할 수 있어요.",
        image: `${IMG_PATH}voidtraders-item${IMG_EXT}`,
        imagetmp:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Void+Trader+Items",
      },
      {
        id: SUB.STEELPATH,
        title: "강길에센스",
        desc: "주간 태신의 강길 에센스 교환 물품을 확인할 수 있어요.",
        image: `${IMG_PATH}steelpath${IMG_EXT}`,
        imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=Steel+Path",
      },
      {
        id: SUB.FISSURES,
        title: "보이드균열",
        desc: "현재 활성화된 보이드 균열 중 빠르게 클리어 가능한 미션 목록을 보여줘요. (예시:섬멸, 생포 등)",
        image: `${IMG_PATH}fissures${IMG_EXT}`,
        width: "50%",
        imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=Fissures",
      },
      {
        id: SUB.CALENDAR,
        title: "헥스캘린더",
        desc: "[베타버전] 이번주 헥스 캘린더 할일/보상 목록 등을 확인할 수 있어요.",
        image: `${IMG_PATH}calendar${IMG_EXT}`,
        width: "50%",
        imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=Calendar",
      },
      {
        id: SUB.DAILYDEALS,
        title: "일일특가",
        desc: "다르보가 제시하는 오늘의 특가 물품을 확인할 수 있어요.",
        image: `${IMG_PATH}dailydeals${IMG_EXT}`,
        width: "50%",
        imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=Daily+Deals",
      },
      {
        id: SUB.INVASIONS,
        title: "침공",
        desc: "현재 활성화된 침공 미션 목록을 확인할 수 있어요.",
        image: `${IMG_PATH}invasions${IMG_EXT}`,
        imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=Invasions",
        foot: (
          <div>
            <p>보여지는 내용이 많아, 이후 내용은 생략되었습니다.</p>
            <p>실제로는 모든 침공 노드가 표시됩니다.</p>
          </div>
        ),
      },
      {
        id: SUB.MARKET_SEARCH,
        title: "마켓검색",
        desc: "'Warframe Market' 에서 원하는 아이템을 검색하여 가장 저렴한 매물을 검색할 수 있어요.",
        image: `${IMG_PATH}market-search-result${IMG_EXT}`,
        imagetmp:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Market+Search",
        foot: (
          <div>
            <p>
              파란색으로 된 아이템 이름을 클릭하면 해당 아이템의 마켓 검색
              결과로 이동할 수 있어요.
            </p>
          </div>
        ),
      },
      {
        id: SUB.MARKET_HELP,
        title: "마켓도움말",
        desc: "'마켓검색' 명령어에 대한 도움말을 확인할 수 있어요.",
        image: `${IMG_PATH}${IMG_EXT}`,
        imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=Market+Help",
      },
      {
        id: SUB.PARTY_CREATE,
        title: "파티생성",
        desc: "새로운 파티 구인 글을 생성합니다. (종합 게임 대상)",
        foot: (
          <div>
            <p>자세한 내용은 이곳에서 확인해주세요 (링크 삽입)</p>
          </div>
        ),
        // imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=Create+Party",
      },
      {
        id: SUB.TRADE_CREATE,
        title: "거래",
        desc: "새로운 거래 글을 생성합니다. (워프레임 아이템 한정)",
        foot: (
          <div>
            <p>자세한 내용은 이곳에서 확인해주세요 (링크 삽입)</p>
          </div>
        ),
        // imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=Create+Trade",
      },
      {
        id: SUB.EVENTS,
        title: "이벤트",
        desc: "[베타버전] 현재 진행중인 정기 이벤트 (써미아, 포모리안 등) 목록을 확인할 수 있어요.",
        image: `${IMG_PATH}events${IMG_EXT}`,
        imagetmp: "https://placehold.co/600x300/e2e8f0/64748b?text=Events",
      },
      {
        id: SUB.DUVIRI_WF,
        title: "순환로-워프레임",
        desc: "이번주 순환로 워프레임 보상 목록을 확인합니다.",
        image: `${IMG_PATH}circuit-warframe${IMG_EXT}`,
        imagetmp:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Duviri+Warframe",
      },
      {
        id: SUB.DUVIRI_INC,
        title: "순환로-인카논",
        desc: "이번주 순환로 인카논 보상 목록을 확인합니다.",
        image: `${IMG_PATH}circuit-incarnon${IMG_EXT}`,
        imagetmp:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Duviri+Incarnon",
      },
    ],
  },
  // 4. 파티 섹션
  party: {
    id: "party",
    title: "4. 파티 모집 기능",
    mainTitle: "파티 모집 명령어",
    list: [
      {
        id: "party-intro",
        title: "파티 생성하기",
        desc: "새로운 파티 구인 글을 생성합니다. 이는 종합 게임을 대상으로 하고 있어 워프레임에 한정되지 않습니다.",
        // image: ...
      },
      {
        id: "party-warning",
        title: "[필독] 기능 이용 전 주의사항",
        desc: "기능 이용 전 주의사항을 안내합니다.",
        //
        foot: (
          <div>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-10 text-lg">
              <li>
                파티를 생성 및 수정할 때 입력되는 내용은 모두에게 공개되는
                내용입니다. 민감한 개인정보는 입력하지 말아주세요.
              </li>
              <li>
                서버 규칙이 동일하게 적용됩니다. 부적절한 단어 사용 시, 게시글
                자동 삭제 및 서버 규칙에 따라 제재 및 처벌됩니다.
              </li>
              <li>
                서버 규칙은{" "}
                <A
                  text="이곳을 클릭하면"
                  href="https://discord.com/channels/569543516749824000/1165264267436638248"
                />{" "}
                확인할 수 있습니다.
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "party-how-create",
        title: "(1) 파티 생성하기",
        desc: "파티 모집 글을 생성하는 방법에 대하여 알려줍니다",
      },
      { id: "party-edit", title: "(2) 파티 정보 수정하기" },
      { id: "party-edit-member", title: "인원 수정" },
      { id: "party-edit-article", title: "게시글 수정" },
      { id: "party-change", title: "모집 상태 전환" },
      { id: "party-call", title: "파티원 호출" },
      { id: "party-kick", title: "파티원 내보내기" },
      { id: "party-exit", title: "모집 종료하기" },
    ],
  },
  // 5. 거래 섹션
  trade: {
    id: "trade",
    title: "5. 거래 기능",
    mainTitle: "거래 명령어",
    list: [
      {
        id: "trade-create",
        title: "거래",
        desc: "새로운 거래 글을 생성합니다. (워프레임 아이템 한정)",
      },
      {
        id: "trade-warning",
        title: "[필독] 기능 이용 전 주의사항",
        desc: "기능 이용 전 주의사항을 안내합니다.",
        foot: (
          <div>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-10 text-lg">
              <li>
                거래 기능은{" "}
                <span className="text-red-500 font-bold">
                  워프레임 아이템으로 한정
                </span>
                합니다. (타 게임 아이템 불가)
              </li>
              <li>
                모든 <span className="text-blue-500 font-bold">거래 시세</span>
                는{" "}
                <span className="text-green-600 font-bold">
                  워프레임 마켓의 실시간 시세값을 기준
                </span>
                으로 합니다.
              </li>
              {/* detailed description */}
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-10 text-lg">
                <li>
                  단, 워프레임 마켓 시세를 잘 모르는 특정 분들을 겨냥하여{" "}
                  <span className="text-red-500 font-semibold">
                    시세값보다 <span className="font-extrabold">매우</span> 높은
                    가격으로 구매하도록 매물을 올리는 것은 금지
                  </span>
                  합니다.
                </li>
                <li>
                  시세를 잘 모르는 분들을 위하여, 게시되어 있는 물품의{" "}
                  <span className="text-blue-500">워프레임 마켓</span> 검색
                  결과를 확인할 수 있도록 바로가기 링크를 제공하고 있습니다.
                  (거래 게시글의{" "}
                  <span className="text-blue-600 font-bold underline">
                    파란색 링크로된 글씨
                  </span>
                  를 클릭하면 마켓 검색 결과로 이동할 수 있습니다.)
                </li>
                <li>
                  또한, 거래 글을 게시하면 실시간 마켓 시세를 기반으로 자동으로
                  가격을 책정해주는 기능을 내장하였으니, 이용에 참고하시길
                  바랍니다.
                </li>
              </ul>
              <li>
                거래하는 아이템에 상응하는 재화가 반드시{" "}
                <span className="font-bold">[플레티넘]</span>일 필요는 없으며,
                이것은 판매자 분들의 결정에 전적으로 달려있습니다.
              </li>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-10 text-lg">
                <li>
                  단,{" "}
                  <span className="text-red-500 font-bold">
                    현찰로의 거래는 금지
                  </span>
                  합니다.
                </li>
                <li className="text-red-500 font-bold">
                  현금 거래 적발 시, 경고조치 없이 바로 클랜 영구 추방합니다.
                </li>
                <li>
                  현금 거래 및 시도는 워프레임 소프트웨어 사용권 계약(EULA)에
                  의거하여 제재 대상이 됩니다. <br />
                  이에 적발 시 DE 측에서 계정을 영구 정지(밴) 시킬 수 있습니다.
                </li>
              </ul>
            </ul>
            <P
              text='위의 금지사항을 위반하여 적발될 경우 다른분들에게 피해가 갈 우려가
              있으므로, 당사자는 클랜 서버에서 "인게임 닉네임"을 전체공개하고,
              경고를 받습니다.'
            />
            <p className="text-lg font-bold">(경고 3회, 이후 클랜 영구 추방)</p>
          </div>
        ),
      },
      { id: "trade-how-create", title: "(1) 거래 글 생성하기" },
      { id: "trade-edit", title: "(2) 거래 게시글 관련" },
      { id: "trade-edit-qty", title: "수량 수정하기", desc: "설명" },
      { id: "trade-edit-price", title: "가격 수정하기" },
      { id: "trade-edit-nick", title: "닉네임 수정하기" },
      { id: "trade-exit", title: "거래 종료하기" },
    ],
  },
  // 6. FAQ 섹션
  troubleshooting: {
    id: "troubleshooting",
    title: "문제 해결 / FAQ",
    mainTitle: "자주 묻는 질문 (FAQ)",
    list: [
      {
        q: "버튼을 누르거나 명령어를 사용하면 상호작용 오류가 떠요",
        a: `데스크탑 및 웹 환경의 경우 Ctrl + R 키를 눌러서 앱을 새로고침 해주세요.<br/>모바일 환경의 경우, 디스코드 앱을 종료했다가 다시 실행해주세요.`,
      },
      {
        q: "기타 등등 질문하고 싶은 것들이나 궁금한 것들에 대하여",
        a: "질문에 대한 답변을 작성해드립니다.",
      },
      {
        q: "질문입니다",
        a: "답변입니다",
      },
    ],
  },
  // 7. 법적 고지
  legal: {
    id: "eula",
    title: "이용 약관 / 법적 고지",
    termsTitle: "이용 약관",
    termsDesc1: `본 소프트웨어의 저작권은 **${COMMON.company}**에게 있습니다.`,
    termsDesc2:
      "사용자는 본 소프트웨어를 사용함으로써 EULA에 동의하는 것으로 간주됩니다.",
    privacyTitle: "개인정보 처리방침",
    privacyDesc: (
      <>
        {/* <H2_4XL text="개인정보 처리방침" /> */}
        <P text="본 디스코드 봇을 사용하는 과정에서 더 나은 서비스 제공을 위해 다음과 같은 정보가 수집될 수 있습니다." />
        <P text="수집되는 내용에 동의하지 않으신다면 해당 봇은 사용할 수 없습니다." />

        <H2 text="수집하는 내용" />
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-10">
          <li>
            <strong>사용자 정보</strong>: 디스코드 사용자 ID 및 닉네임
          </li>
          <li>
            <strong>서버 정보</strong>: 명령어가 사용된 서버의 이름, 채널 이름,
            채널 ID
          </li>
          <li>
            <strong>사용 기록</strong>: 사용한 명령어 및 명령어에 전달한 입력
            내용 (제목 설명 등)
          </li>
        </ul>
        <H2 text="개인정보의 제3자 제공" />
        <p>
          수집된 개인정보는 일반적인 경우에{" "}
          <strong>제3자에게 제공되지 않습니다.</strong>
        </p>
        <br />
        <P text="단, 다음의 경우에는 예외로 합니다." />
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-10">
          <li>이용자가 사전에 제3자 제공에 동의한 경우</li>
          <li>
            법원, 검찰, 경찰 등 수사기관이 수사 목적으로 영장 등 법령에 정해진
            절차와 방법에 따라 정보 제공을 요구하는 경우
          </li>
        </ul>
        <H2 text="정보의 수집 목적 및 이용" />
        <ol className="list-disc pl-5 space-y-2 text-gray-600 mb-10">
          <li>
            <strong>오류 해결 및 지원</strong>: 사용자의 디스코드 ID, 서버 이름,
            채널 정보는{" "}
            <strong>
              서비스 이용 중 발생하는 오류를 추적하고 해결하기 위한 목적
            </strong>
            으로 사용됩니다.
          </li>
          <li>
            <strong>서비스 개선</strong>: 사용된 명령어 및 관련 내용은 통계
            분석을 통해 <strong>사용자가 선호하는 기능을 파악</strong>하고,{" "}
            <strong>향후 새로운 기능을 개발</strong>하거나{" "}
            <strong>기존 기능을 개선</strong> 하는데 참고 자료로 활용됩니다.
          </li>
        </ol>
        {/* 정보의 저장 방법 */}
        <H2 text="정보의 저장 방법" />
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-10">
          <li>
            개인정보는 높은 신뢰성의 미국 연방 표준을 준수하는{" "}
            <strong>FileVault</strong>로 암호화된 저장 장치에 안전하게
            저장됩니다.
          </li>
          <li>
            암호화 기술에 대한 자세한 내용은{" "}
            <A
              text="FileVault 애플 공식 문서"
              href="https://support.apple.com/ko-kr/guide/deployment/dep82064ec40/web"
            />
            를 참고하여주세요.
          </li>
        </ul>
        <H2 text="정보의 보유 기간" />
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-10">
          <li>
            수집된 정보는 원활한 서비스 운영 및 분석을 위해 수집일로부터 최대{" "}
            <strong>5년</strong>간 보관될 수 있으며, 해당 기간이 지나면 안전하게
            파기됩니다.
          </li>
          <li>
            단, 봇 서비스 종료 확정 시, 수집된 모든 정보는 즉시 파기합니다.
          </li>
        </ul>
      </>
    ),
  },
};
