import { COMMON, SUB } from "./common";
import { htags, tw } from "../style/tailwind";

import { H2, H3, P, A, NOTE, BOLD } from "../ui/CustomElements";
import TipTime from "../components/TipTime";
import DocImage from "../components/DocImage";
import { ContactMe } from "../components/ContactAdmin";

const IMG_PATH = "/imgko/";
const IMG_EXT = ".webp";

export const uiTextsKo = {
  // common UI
  docTitle: (
    <span>
      <span>{COMMON.name}</span> 가이드북
    </span>
  ),
  searchPlaceholder: "검색하기...는 아직 사용할 수 없어요...",
  contents: "목차",
  next: "다음",
  footerMsg: "문서의 끝부분 입니다.",
  copyright: (
    <>
      (C) {COMMON.year}. {COMMON.company}. All rights reserved.
      <br />
      단, 워프레임 관련 이미지/데이터의 저작권은 Digital Extremes Ltd.에 있음
    </>
  ),
  picEx: "내용 예시",

  // 1. 소개 섹션
  intro: {
    id: "intro",
    title: "1. 소개",
    welcomeTitle: <><strong className={`${tw.txt.blue}`}>{COMMON.name}</strong> 봇 홈페이지에 오신 것을 환영합니다!</>,
    welcomeDesc: (
      <>
        {/* 이 문서는 <strong>{COMMON.name}</strong>의 사용 방법을 알려줍니다. */}
        왼쪽의 목차를 통해 원하는 정보로 빠르게 이동할 수 있습니다.
        <br />
        3, 4, 5번 목차는 봇 사용법에 대해서 담고 있습니다.
      </>
    ),
    imgDesc: `야옹~ 나는 ${COMMON.name}! 날 보러 와줘서 고맙다냥`,
    foot: (
      <NOTE
        color="yellow"
        icon="info"
        title="알림"
        text={
          <p>
            이 홈페이지는 현재 베타 버전입니다.
            <br />
            오탈자가 있을 수 있으니, 양해 부탁드립니다.
          </p>
        }
      />
    ),
    note: "",
  },
  // 2. 주요 기능 섹션
  features: {
    id: "features",
    title: "2. 그래서 이게 뭘 하는 봇인데요?",
    mainTitle: "핵심만 빠르게 살펴보죠!",
    head: (
      <P text="실시간 워프레임 컨텐츠를 제공해주고, 추가 편의 기능을 제공합니다." />
    ),
    items: [
      {
        title: "실시간 워프레임 컨텐츠 확인",
        desc: "명령어를 이용하여 워프레임 내 컨텐츠를 확인할 수 있어요.",
        subDesc: "(바로키티어 등장 상태, 출격, 침공, 얼럿 미션 등등)",
      },
      {
        title: "실시간 컨텐츠 알림",
        desc: (
          <>
            확인만 가능할까요?
            <br />
            새로운 컨텐츠가 업데이트 될 때 마다 실시간으로 메시지를 보내 줍니다!
            명령어에서 보던 그 레이아웃 그대로요!
          </>
        ),
      },
      {
        title: "마켓 검색 기능",
        desc: (
          <>
            <p className="text-lg">매번 마켓에 접속해서 시세를 검색하신다면?</p>
            <br />
            이 봇을 이용하면 디스코드에서 간단하게 시세를 검색할 수 있어요. 매번
            워프레임 마켓 웹사이트에 접속할 필요가 없죠!
            <br />
            <br />
            검색 결과에 마켓으로 이동할 수 있는 링크를 제공하고 있으니, 원한다면
            마켓으로 바로 이동할 수도 있죠!
          </>
        ),
        subDesc: "",
      },
      {
        title: "서버 내 파티 모집 시스템",
        desc: (
          <>
            매번 파티원들에게 DM 보내기 힘드셨죠?
            <br />
            이제 간단한 명령어와 관리 시스템으로 파티 모집을 편리하게 할 수
            있어요.
          </>
        ),
      },
      {
        title: "서버 내 아이템 거래 시스템",
        desc: (
          <>
            간단한 명령어와 관리 시스템으로 길드 내에서 판매/구매 거래를
            편리하게 할 수 있어요.
            <br />
            <br />
            또한 마켓 가격을 기반, 자동 가격 책정 기능이 내장되어있어, 초보자
            분들도 시세 걱정 없이 거래 게시글을 작성할 수 있어요.
          </>
        ),
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
        imagealt:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Help+Command",
        head: (
          <>
            <P text="지금 보고 계시는 웹 페이지로 이동하는 링크를 보여줘요." />
          </>
        ),
      },
      {
        id: SUB.ANNOUNCEMENT,
        title: "공지사항",
        desc: "봇 공지사항을 확인할 수 있어요.",
        image: `${IMG_PATH}announcement${IMG_EXT}`,
        imagealt:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Announcement",
      },
      {
        id: SUB.PATCHNOTE,
        title: "패치노트",
        desc: "봇의 최근 업데이트/패치 내역을 확인할 수 있어요.",
        image: `${IMG_PATH}patchnote${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Patch+Note",
        head: (
          <P text="새로 업데이트된 내용, 버그 수정 내역 등을 확인할 수 있어요." />
        ),
      },
      {
        id: SUB.PRIVACY,
        title: "개인정보-처리방침",
        desc: "봇의 개인정보 처리방침에 대하여 중요한 내용을 표시합니다.",
        image: `${IMG_PATH}privacy-policy${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Privacy",
        foot: (
          <>
            <p>
              자세한 내용은 좌측 목차에서{" "}
              <strong>이용 약관 / 개인정보 처리방침</strong> 섹션을
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
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Alerts",
        head: (
          <>
            <p className={htags.pTag}>
              얻을 수 있는 보상 목록을 우선으로 표시합니다. 이후 아래의 정보를
              표시해줍니다.
            </p>
            <ul className={htags.ulTag}>
              <li>미션 종류 - 노드 (위치)</li>
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
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=News",
        head: (
          <>
            <p className={htags.pTag}>
              파란색 글씨를 클릭하면 해당 공지로 바로 이동할 수 있습니다.
            </p>
          </>
        ),
      },
      {
        id: SUB.SORTIE,
        title: "출격",
        desc: "오늘의 출격 미션을 확인할 수 있어요.",
        image: `${IMG_PATH}sortie${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Sortie",
        head: (
          <>
            <p className={htags.pTag}>
              출격 미션 종료까지 남은 시간, 어느 노드에서 이루어지는지, 변수는
              무엇인지 간단하게 확인할 수 있어요.
            </p>
          </>
        ),
      },
      {
        id: SUB.ARCHONHUNT,
        title: "집정관사냥",
        desc: "이번주 집정관 미션 목록과, 얻을 수 있는 샤드를 확인할 수 있어요",
        image: `${IMG_PATH}archonhunt${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Archon+Hunt",
        head: (
          <>
            <NOTE
              color="green"
              icon="tip"
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
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Void+Trader",
        head: (
          <>
            <P text="등장 여부, 언제/어디서 나타날지 알려줍니다." />
          </>
        ),
        foot: (
          <>
            <P text="바로 키 티어가 등장했다면 아래와 같이 나타나요" />
            <DocImage
              src={`${IMG_PATH}voidtraders-activated${IMG_EXT}`}
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
        image: `${IMG_PATH}voidtraders-item-yes${IMG_EXT}`,
        imagealt:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Void+Trader+Items",
        foot: (
          <>
            <P text="만약 바로 키 티어가 등장하지 않았다면, 아래와 같이 표시됩니다" />
            <DocImage
              src={`${IMG_PATH}voidtraders-item-no${IMG_EXT}`}
              alt="바로키티어 미등장"
              caption="키 티어가 등장하지 않았을 때"
            />
          </>
        ),
      },
      {
        id: SUB.STEELPATH,
        title: "강길에센스",
        desc: "태신의 스틸에센스 교환 물품을 확인할 수 있어요.",
        image: `${IMG_PATH}steelpath${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Steel+Path",
      },
      {
        id: SUB.FISSURES,
        title: "보이드균열",
        desc: "현재 활성화된 성유물 노드(보이드 균열) 중 빠르게 클리어 가능한 미션 목록을 보여줘요. (예시:섬멸, 생포 등)",
        image: `${IMG_PATH}fissures${IMG_EXT}`,
        width: "50%",
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Fissures",
      },
      {
        id: SUB.CALENDAR,
        title: "헥스캘린더",
        desc: "[베타버전] 이번주 헥스 캘린더 할일/보상 목록 등을 확인할 수 있어요.",
        image: `${IMG_PATH}calendar${IMG_EXT}`,
        width: "50%",
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Calendar",
        head: (
          <>
            <P text="현재 개선 중인 명령어로, 가독성이 떨어지거나 일부 정보가 표시되지 않을 수 있습니다." />
          </>
        ),
      },
      {
        id: SUB.DAILYDEALS,
        title: "일일특가",
        desc: "다르보가 제시하는 오늘의 특가 물품을 확인할 수 있어요.",
        image: `${IMG_PATH}dailydeals${IMG_EXT}`,
        width: "50%",
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Daily+Deals",
      },
      {
        id: SUB.INVASIONS,
        title: "침공",
        desc: "현재 활성화된 침공 미션 목록을 확인할 수 있어요.",
        image: `${IMG_PATH}invasions${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Invasions",
        foot: (
          <div>
            <P text="(보여지는 내용이 많아 이후 내용은 생략되었습니다. 실제로 사용했을 때는 모든 침공 노드가 표시됩니다.)" />
          </div>
        ),
      },
      {
        id: SUB.MARKET_SEARCH,
        title: "마켓검색",
        desc: (
          <>
            <P text="'Warframe Market'(워프레임 마켓) 에서 원하는 아이템을 검색하여 가장 저렴한 매물을 검색할 수 있어요." />
            <P text="파란색으로 된 아이템 이름을 클릭하면 해당 아이템의 마켓 검색 결과로 이동할 수 있어요." />
          </>
        ),
        image: `${IMG_PATH}market-search-result${IMG_EXT}`,
        imagealt:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Market+Search",
        foot: (
          <>
            <P text="마켓 검색 명령어 사용 방법은 다음과 같습니다." />
            <ol className={htags.olTag}>
              <li>
                검색창에서 <strong>/마켓검색</strong> 명령어를 입력하여 명령어를
                선택 후
              </li>
              <li>
                <strong>item_name</strong> 부분에 검색하고자 하는 아이템을
                입력해주세요.
              </li>
            </ol>
            <DocImage src={`${IMG_PATH}market-search-searching${IMG_EXT}`} />
            <p className={htags.pTag}>
              자동완성 기능을 지원하고 있어, 아이템을 검색 해볼 수 있어요.
            </p>
            <NOTE
              color="yellow"
              icon="alert"
              title="알림"
              text={
                <>
                  일부 변역이 되지 않은 아이템이 있을 수 있습니다.
                  <br />
                  검색이 되지 않는 항목이 있다면 <ContactMe />
                </>
              }
            />
          </>
        ),
      },
      {
        id: SUB.PARTY_CREATE,
        title: "파티생성",
        desc: "새로운 파티 구인 글을 생성합니다. (종합 게임 대상)",
        foot: (
          <div>
            <p className={htags.pTag}>
              자세한 내용은 사이드바 메뉴의 <strong>4. 파티 모집 기능</strong>{" "}
              섹션을 참고 바랍니다. (링크 삽입)
            </p>
          </div>
        ),
        imagealt:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Create+Party",
      },
      {
        id: SUB.TRADE_CREATE,
        title: "거래",
        desc: "새로운 거래 글을 생성합니다. (워프레임 아이템 한정)",
        foot: (
          <div>
            <p className={htags.pTag}>
              자세한 내용은 사이드바 메뉴의 <strong>5. 거래 기능</strong> 섹션을
              참고 바랍니다. (링크 삽입)
            </p>
          </div>
        ),
        imagealt:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Create+Trade",
      },
      {
        id: SUB.EVENTS,
        title: "이벤트",
        desc: "[베타버전] 현재 진행중인 정기 이벤트 (써미아, 포모리안 등) 목록을 확인할 수 있어요.",
        image: `${IMG_PATH}events${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Events",
      },
      {
        id: SUB.DUVIRI_WF,
        title: "순환로-워프레임",
        desc: "이번주 순환로 워프레임 보상 목록을 확인합니다.",
        image: `${IMG_PATH}circuit-warframe${IMG_EXT}`,
        imagealt:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Duviri+Warframe",
      },
      {
        id: SUB.DUVIRI_INC,
        title: "순환로-인카논",
        desc: "이번주 순환로 인카논 보상 목록을 확인합니다.",
        image: `${IMG_PATH}circuit-incarnon${IMG_EXT}`,
        imagealt:
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
      // 파티 기능 개요
      {
        id: "party-intro",
        title: "기능 개요",
        desc: (
          <>
            <P text="간편하게 파티 구인 글을 생성할 수 있습니다." />
            <P
              text="이는 종합 게임을 대상으로 하고 있어 워프레임 뿐만 아니라 다른 게임
            파티 모집도 가능합니다."
            />
            <P text="같이 게임 할 분들을 손쉽게 모집해보세요!" />
          </>
        ),
        // image: ...
      },
      // 이용 전 주의사항
      {
        id: "party-warning",
        title: <span className={tw.txt.red}>[필독] 기능 이용 전 주의사항</span>,
        desc: "기능 이용 전 주의사항을 안내해드립니다.",
        //
        foot: (
          <div>
            <ul className={htags.ulTag}>
              <li>
                파티를 생성 및 수정할 때 입력되는 내용은 모두에게 공개되는
                내용입니다.{" "}
                <strong>민감한 개인정보는 입력하지 말아주세요.</strong>
              </li>
              <li>
                <strong>서버 규칙이 동일하게 적용</strong>됩니다. 부적절한 단어
                사용 시, 게시글 자동 삭제 & 서버 규칙에 따라 제재 및 처벌됩니다.
              </li>
              <li>
                서버 규칙은{" "}
                <A text="이곳에서" href={process.env.REACT_APP_SERVER_RULE} />{" "}
                확인할 수 있습니다.
              </li>
            </ul>
            <p>
              금지사항을 위반하여 적발될 경우, 다른 분들에게 피해가 갈 우려가
              있으므로, 당사자는 클랜 서버에서 '인게임 닉네임' 을 전체 공개하고,
              경고를 받습니다.
            </p>
            <br />
            <p>
              <strong>(경고 3회, 이후 클랜 영구 추방)</strong>
            </p>
          </div>
        ),
      },
      // (1) 파티 정보 확인
      {
        id: "party-list",
        title: "(1) 파티 정보 확인하기",
        desc: "생성된 파티 정보를 확인하는 방법을 안내합니다.",
        foot: (
          <>
            <p className={htags.pTag}>
              <strong className={tw.txt.sky}>일상채널</strong> 카테고리의{" "}
              <strong className={tw.txt.sky}>파티모집</strong> 채널로 이동하면
              모집 중인 모든 파티 목록을 확인할 수 있습니다.
            </p>
            <DocImage
              src={`${IMG_PATH}party-listing${IMG_EXT}`}
              caption="파티 목록 예시"
            />
            <p className={htags.pTag}>
              생성되어있는 스레드를 선택하여 파티 모집 게시글을 확인할 수
              있습니다.
            </p>
          </>
        ),
      },
      // (2) 파티 참여하기
      {
        id: "party-join-leave",
        title: "(2) 파티 참여/탈퇴하기",
        desc: "파티에 참여하는 방법에 대해서 소개합니다.",
        foot: (
          <>
            <h4 className={htags.H4}>어렵지 않습니다!</h4>
            <p className={htags.pTag}>
              초록색{" "}
              <span className={`${tw.txt.green} font-extrabold`}>참여하기</span>{" "}
              버튼만 누르면 파티에 참여할 수 있습니다!
            </p>
            <P />
            <h4 className={htags.H4}>파티 탈퇴의 경우</h4>{" "}
            <p className={htags.pTag}>
              빨간색{" "}
              <span className={`${tw.txt.red} font-extrabold`}>탈퇴하기</span>{" "}
              버튼을 누르면 탈퇴할 수 있습니다.
            </p>
            <DocImage
              src={`${IMG_PATH}party-article${IMG_EXT}`}
              caption="파티 게시글 예시"
            />
            <NOTE
              color="yellow"
              icon="tip"
              title="알림"
              text="디스코드 앱 화면 크기에 따라 버튼 배치는 달라질 수 있습니다."
            />
            {/* <p>
              잘못 누르는 것을 대비하여{" "}
              <span className={`font-extrabold`}>참여하기</span> 버튼을 누르면
              정말 참여를 할 것인지 물어보는 메시지가 추가로 표시됩니다.{" "}
            </p>
            <DocImage
              src={`${IMG_PATH}party-confirm-join${IMG_EXT}`}
              // maxWidth="100%"
              caption="파티 참가 확인 메시지"
            />
            <p>
              <span className={`${tw.txt.green} font-extrabold`}>
                Yes (진행)
              </span>{" "}
              버튼을 눌러야 파티에 참가됩니다.
            </p> */}
          </>
        ),
      },
      // (3) 파티 생성하기
      {
        id: "party-how-create",
        title: "(3) 파티 생성하기",
        desc: "파티 모집 글을 생성하는 방법입니다.",
        foot: (
          <>
            <h4 className={htags.H4}>
              <strong>/파티생성</strong> 명령어를 이용하여 파티를 생성할 수
              있습니다.
            </h4>
            <ul className={htags.ulTag}>
              <li>
                채팅을 입력하는 곳에 / 기호를 입력하면 명령어를 사용할 수
                있습니다.{" "}
              </li>
              <ul className={htags.ulTag}>
                <li>/ 키는 우측 시프트(Shift) 키 바로 왼쪽에 있습니다. </li>
              </ul>
              <li>이후 '파티생성' 을 검색하여 해당 명령어를 선택해주세요.</li>
            </ul>
            <DocImage
              src={`${IMG_PATH}party-cmd0${IMG_EXT}`}
              alt="명령어 검색 결과"
              caption="명령어 검색 결과"
            />
            <h4 className={htags.H4}>
              입력 할 수 있는 내용으로 총 4가지가 있습니다. <br />
            </h4>
            <ul className={htags.ulTag}>
              <li>
                <span className={htags.graveTag}>title</span>: 모집 글 제목
              </li>
              <li>
                <span className={htags.graveTag}>game_type</span>: 플레이 할
                게임 이름 (워프레임, 롤, 배그 등)
              </li>
              <li>
                [선택사항]{" "}
                <span className={htags.graveTag}>number_of_user</span>: 모집
                인원 수
              </li>
              <ul className={htags.ulTag}>
                <li>
                  <strong>파티장(본인)을 포함</strong>한 인원 수 입니다.
                </li>
                <li>
                  <strong>기본값으로 4명</strong>이 설정됩니다. (워프레임 최대
                  파티원 수 4명)
                </li>
                <li>
                  <strong>최대 20명</strong>까지 설정 가능합니다.
                </li>
              </ul>
              <li>
                [선택사항] <span className={htags.graveTag}>description</span>:
                모집 글에 대한 세부 설명 등
              </li>
            </ul>
            <h4 className={htags.H4}>원하는 내용으로 채워주세요.</h4>
            (상단에 어떤 내용이 들어가야할지 알려주는 문구가 있으니
            참고바랍니다)
            <DocImage
              src={`${IMG_PATH}party-cmd-input${IMG_EXT}`}
              maxWidth="100%"
              caption="원하는 내용으로 채워주세요."
            />
            입력 후 엔터 키를 눌러 전송을 하면 <strong>'파티모집'</strong>{" "}
            채널에 공개 스레드 및 모집 글이 생성됩니다.
            <DocImage
              src={`${IMG_PATH}party-created${IMG_EXT}`}
              maxWidth="100%"
              caption="파티 생성 완료 메시지"
            />
            파란색 배경의 링크를 클릭하면 해당 모집글로 바로 이동할 수 있습니다.
            <br />
            또는 직접 파티모집 채널로 이동해주세요.
          </>
        ),
      },
      // (4) 파티 정보 수정하기
      {
        id: "party-edit",
        title: "(4) 파티 정보 수정하기",
        desc: "해당 섹션에서 소개하는 기능은 파티장(파티를 생성한 분)만 사용이 가능해요.",
      },
      // (4-1) 인원 수정
      {
        id: "party-edit-member",
        title: "(4-1) 인원 수정",
        foot: (
          <>
            <p className={htags.pTag}>
              <BOLD text="인원 수정" /> 버튼을 누르면 모집 정원을 수정할 수
              있습니다.
            </p>
            <ul className={htags.ulTag}>
              <li>
                <strong>파티장(본인)을 포함</strong>한 인원 수 입니다.
              </li>
              <li>
                <strong>2 ~ 20명</strong> 사이로 설정 가능합니다.
              </li>
              <li>
                숫자가 아닌 값을 입력할 시, <strong>기본값 4명</strong>이 자동
                설정됩니다. <br />
                (워프레임 최대 파티원 수 4명)
              </li>
            </ul>
            <P text="인원 수정 버튼을 누르면 다음과 같은 창이 표시됩니다." />
            <p className={htags.pTag}>
              원하는 인원수를 입력하고{" "}
              <strong className={`${tw.txt.sky}`}>전송</strong>을 눌러주세요.
            </p>
            <DocImage
              src={`${IMG_PATH}party-nop${IMG_EXT}`}
              caption="인원 수정 팝업창"
            />
          </>
        ),
      },
      // (4-2) 게시글 수정
      {
        id: "party-edit-article",
        title: "(4-2) 게시글 수정",
        desc: "잘못 입력한 내용을 수정하기 위한 기능입니다.",
        foot: (
          <>
            <p className={htags.pTag}>수정 가능한 항목은 다음과 같습니다.</p>
            <ul className={htags.ulTag}>
              <li>글의 제목</li>
              <li>게임 이름</li>
              <li>설명</li>
            </ul>
            <p className={htags.pTag}>
              글 수정 버튼을 누르면 다음과 같은 창이 표시됩니다.
            </p>
            <DocImage
              src={`${IMG_PATH}party-mod1${IMG_EXT}`}
              caption="글 수정 팝업창"
            />
            <p className={htags.pTag}>
              수정하고자 하는 항목을 수정 후{" "}
              <strong className={`${tw.txt.sky} ${tw.bold.eb}`}>전송</strong>{" "}
              버튼을 누르면 항목이 수정됩니다.
            </p>
            <DocImage
              src={`${IMG_PATH}party-mod2${IMG_EXT}`}
              caption="글 수정"
            />
            <DocImage
              src={`${IMG_PATH}party-mod3-result${IMG_EXT}`}
              caption="글 수정 결과"
            />
          </>
        ),
      },
      // (4-3) 모집 상태 전환
      {
        id: "party-change",
        title: "(4-3) 모집 상태 전환",
        desc: "모집 글의 모집 상태를 전환할 수 있습니다.",
        foot: (
          <>
            <p className={htags.pTag}>
              모집 완료 버튼을 누르면 다음과 같이 모집 글을{" "}
              <strong>모집 완료</strong> 상태로 변경됩니다.
            </p>
            <DocImage
              src={`${IMG_PATH}party-toggle${IMG_EXT}`}
              caption="모집 완료 상태"
            />

            <p className={htags.pTag}>모집 완료 상태에서는</p>
            <ul className={htags.ulTag}>
              <li>
                <strong>파티원 참여가 불가</strong> 합니다.
              </li>
              <li>
                <strong>인원 수정이 불가</strong> 합니다
              </li>
            </ul>
            <p className={htags.pTag}>
              <strong className={`${tw.txt.green}`}>모집 활성화</strong> 버튼을
              누르면 다시 글 상태를 "모집 중" 으로 변경할 수 있습니다.{" "}
            </p>
          </>
        ),
      },
      // (4-4) 파티원 호출
      {
        id: "party-call",
        title: "(4-4) 파티원 호출",
        desc: "파티원 분들에게 호출 알림을 보냅니다",
        foot: (
          <>
            <p className={htags.pTag}>
              현재 참여한 파티원 전원에게 멘션 알림을 합니다.
              <br />
              모집 글이 생성된 스레드에 파티원 모두를 호출하는 메시지가
              전송됩니다.
            </p>
            <p className={htags.pTag}>
              사용 예: 출발 알림, 모든 유저들에게 특별 공지 등
            </p>
            <DocImage
              src={`${IMG_PATH}party-call-result${IMG_EXT}`}
              maxWidth="75%"
              caption="파티원 호출 메시지 예"
            />
            <p className={htags.pTag}>
              과도한 사용 방지를 위해 한번 사용 시, 15분 쿨타임이 적용됩니다.
              <br /> 해당 기능을 악용 할 경우 (예: 알림 테러) 봇이 사용 패턴을
              분석하여 블랙리스트에 자동으로 등록 및 제재를 받을 수 있습니다.
              <br />
              또한 사용자에게 지속적으로 부정 사용 건의를 받고 있습니다. 부정
              사용 적발 시, 제재를 받을 수 있습니다
            </p>
            <p className={htags.pTag}>주의하여 사용하시기 바랍니다.</p>
          </>
        ),
      },
      // (4-5) 파티원 내보내기
      {
        id: "party-kick",
        title: "(4-5) 파티원 내보내기",
        desc: "특정 파티원을 선택하여 강제로 내보냅니다.",
        foot: (
          <>
            <NOTE
              color="red"
              icon="alert"
              title="주의사항"
              text={
                <div>
                  <div className={htags.pTag}>
                    <strong>
                      본 기능은 파티원이 개인 사정으로 불참한다고 사전에 연락
                      했음에도 불구하고, 직접 탈퇴 처리를 하지 못한 상황을
                      해결하기 위해 마련된 기능입니다.
                    </strong>
                  </div>
                  <div className={htags.pTag}>
                    <strong className={tw.txt.red}>
                      파티원을 예고도 없이 강제로 내보내는 등 부적절한 사용은
                      금합니다.
                    </strong>
                  </div>
                  <div className={htags.pTag}>
                    지속적으로 사용자들에게서 부정 사용을 건의받고 있습니다.
                    부정 사용 적발 시, 제재가 이루어질 수 있습니다.
                  </div>
                </div>
              }
            />
            <br />
            <p className={htags.pTag}>
              버튼을 누르면 아래와 같은 메시지가 나타납니다.
            </p>
            <p className={htags.pTag}>
              <strong>내보낼 파티원을 선택하세요</strong>(드롭다운 메뉴)를
              클릭하면 내보내고자 하는 파티원을 선택할 수 있습니다.
            </p>
            <DocImage
              src={`${IMG_PATH}party-kick-select${IMG_EXT}`}
              caption="강제 탈퇴 드롭다운 예"
            />
            <NOTE
              color="orange"
              icon="alert"
              title="주의!"
              text={
                <>
                  내보낼 파티원을 클릭하면 즉시 파티원을 탈퇴시킵니다. <br />
                  잘못 클릭하지 않도록 유의하여 사용해주세요!
                </>
              }
            />
          </>
        ),
      },
      // (4-6) 모집 종료하기
      {
        id: "party-exit",
        title: "(4-6) 모집 종료하기",
        desc: "파티 모집을 영구 종료합니다. (글을 비활성화 상태로 변환합니다)",
        foot: (
          <>
            <p className={htags.pTag}>
              <strong>모집 종료</strong> 버튼을 누르면, 정말로 모집 종료 할
              것인지 묻는 버튼이 나타납니다. (실수 방지)
            </p>
            <DocImage
              src={`${IMG_PATH}party-confirm-delete${IMG_EXT}`}
              caption="모집 종료 버튼 클릭 후 내용 예"
            />
            <p className={htags.pTag}>
              <strong>Yes (진행)</strong> 버튼을 누르면 모집이 영구 종료됩니다.
            </p>

            <p className={htags.pTag}>
              아래 사진과 같이 글 전체를 삭제하는 것이 아닌, 게시글을 비활성화
              시킵니다. (유사 아카이브 형태)
            </p>
            <DocImage
              src={`${IMG_PATH}party-deleted${IMG_EXT}`}
              caption="모집 종료 버튼 클릭 후 내용 예"
            />
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <NOTE
              color="orange"
              icon="alert"
              title="주의!"
              text="종료 작업은 되돌릴 수 없습니다."
            />
          </>
        ),
      },
    ],
  },
  // 5. 거래 섹션
  trade: {
    id: "trade",
    title: "5. 거래 기능",
    mainTitle: "거래 명령어",
    list: [
      // trade warnings
      {
        id: "trade-warning",
        title: <span className={tw.txt.red}>[필독] 기능 이용 전 주의사항</span>,
        desc: "기능 이용 전 주의사항을 안내합니다.",
        foot: (
          <div>
            <ul className={htags.ulTag}>
              <li>
                거래는{" "}
                <span className={`${tw.txt.orange}`}>
                  워프레임 아이템으로 한정
                </span>
                합니다. (타 게임 아이템 불가)
              </li>
              <li>
                모든 거래 시세는{" "}
                <span className={`${tw.txt.orange}`}>
                  워프레임 마켓의 실시간 시세값을 기준
                </span>
                으로 합니다.
              </li>
              {/* detailed description */}
              <ul className={htags.ulTag}>
                <li>
                  단, 워프레임 마켓 시세를 잘 모르는 특정 분들을 겨냥하여{" "}
                  <span className={`${tw.txt.red} font-semibold`}>
                    시세값보다 <span className="font-extrabold">매우</span> 높은
                    가격으로 구매하도록 매물을 올리는 것은 금지
                  </span>
                  합니다.
                </li>
                <li>
                  시세를 잘 모르는 분들을 위하여, 게시되어 있는 물품의{" "}
                  <span className={`${tw.txt.sky}`}>워프레임 마켓</span> 검색
                  결과를 확인할 수 있도록 바로가기 링크를 제공하고 있습니다.
                  (거래 게시글의{" "}
                  <span className={`${tw.a.txt}`}>파란색 링크로된 글씨</span>를
                  클릭하면 마켓 검색 결과로 이동할 수 있습니다.)
                </li>
              </ul>
              <li>
                거래하는 아이템에 상응하는 재화가 반드시{" "}
                <span className="font-bold">[플레티넘]</span>일 필요는 없으며,
                이것은 판매자 분들의 결정에 전적으로 달려있습니다.
              </li>
              <ul className={htags.ulTag}>
                <li>
                  단,{" "}
                  <span className={`${tw.txt.red} ${tw.bold.eb}`}>
                    현찰로의 거래는 금지
                  </span>
                  합니다.
                  <span className={`${tw.txt.red} ${tw.bold.b}`}>
                    (적발 시, 경고조치 없이 클랜 영구 추방)
                  </span>
                </li>
                <li>
                  <A
                    href="https://www.warframe.com/ko/eula#virtualGoods"
                    text="워프레임 소프트웨어 사용권 계약(EULA)"
                  />{" "}
                  문서의 <strong>'9. 가상 상품 및 게임 통화' - B 조항</strong>에{" "}
                  <strong className={`${tw.txt.orange}`}>
                    현금(현찰)을 주고받는 형태의 계정·아이템 현물 거래를
                    금지한다고 명시
                  </strong>
                  되어 있습니다. 이에 적발 시 DE 측에서{" "}
                  <strong>계정을 영구 정지(밴)</strong>
                  시킬 수 있습니다.
                </li>
              </ul>
            </ul>
            <P
              text='위의 금지사항을 위반하여 적발될 경우 다른분들에게 피해가 갈 우려가
              있으므로, 당사자는 클랜 서버에서 "인게임 닉네임"을 전체공개하고,
              경고를 받습니다.'
            />
            <p className={`text-lg ${tw.bold.b}`}>
              (경고 3회, 이후 클랜 영구 추방)
            </p>
          </div>
        ),
      },
      // do trade
      {
        id: "trade-request",
        title: "(1) 거래 요청하기",
        desc: "게시되어 있는 거래 글에 거래를 요청하는 방법입니다.",
        foot: (
          <>
            <h4 className={htags.H4}>어렵지 않습니다!</h4>
            <p className={htags.pTag}>
              거래 게시글에 있는 보라색 <strong>거래하기</strong> 버튼을
              눌러주세요.
            </p>
            <P text="버튼을 누르면 거래 글 게시자에게 멘션 알림이 갑니다." />
            <P text="이후 스레드에서 자유롭게 대화를 나누며 거래하시면 됩니다." />
            <NOTE
              color="blue"
              icon="tip"
              title="꿀팁"
              text={
                <>
                  게시글 하단의 귓속말 및 파티초대 명령어에 마우스를 가져다
                  놓으면 우측에 복사하기 버튼이 뜹니다.
                  <br />
                  <br />
                  복사한 뒤, 워프레임 채팅에 붙여넣어서 귓속말 및 파티초대
                  기능을 사용하시면 됩니다.
                </>
              }
            />
            <DocImage
              src={`${IMG_PATH}trade-created${IMG_EXT}`}
              maxWidth="90%"
              caption="거래 게시글 예시"
            />
            <p className={htags.pTag}></p>
          </>
        ),
      },
      // create trade
      {
        id: "trade-how-create",
        title: "(2) 거래 글 생성하기",
        desc: "",
        foot: (
          <>
            <p className={htags.pTag}>
              채팅창에 <strong>/거래</strong>라고 입력하여 거래 명령어를
              검색하고 선택해주세요.
            </p>
            <DocImage
              src={`${IMG_PATH}trade-cmd1${IMG_EXT}`}
              maxWidth="90%"
              caption="채팅창에 거래 명령어 검색"
            />
            <p className={htags.pTag}>입력 가능한 내용은 아래와 같습니다.</p>
            <ul className={htags.ulTag}>
              <li>
                <span className={htags.graveTag}>trade_type</span>: 거래 유형.
                (판매/구매 중 택1)
              </li>
              <li>
                <span className={htags.graveTag}>item_name</span>: 판매/구매
                하고자 하는 아이템 이름 (마켓에서 판매하는 물품 검색 가능)
              </li>
              <li>
                <span className={htags.graveTag}>game_nickname</span>: 사용자
                닉네임 기반으로 자동 설정됩니다.
                {/* 워프레임 닉네임 (디스코드 닉네임 아닙니다!) */}
              </li>
              {/* <ul className={htags.ulTag}>
                <li>
                  귓속말 및 파티초대 명령어에 사용되기에, 정확하게 기입해주세요!
                </li>
              </ul> */}
              <li>
                <span className={htags.graveTag}>item_rank</span>: [선택사항]
                아케인과 같이 아이템 랭크가 존재한다면, 거래하고자 하는 아이템의
                랭크를 입력합니다
              </li>
              <li>
                <span className={htags.graveTag}>price</span>: [선택사항] 물품
                개당 가격
              </li>
              <ul className={htags.ulTag}>
                <li>
                  빈칸으로 설정하면 마켓 최저가 기반 적정 가격으로 자동
                  설정됩니다.
                </li>
              </ul>
              <li>
                <span className={htags.graveTag}>quantity</span>: [선택사항]
                아이템 수량. (기본값으로 1개가 설정됩니다.)
              </li>
            </ul>
            <P
              text="가격을 입력하지 않고 거래 글을 게시하면 실시간 마켓
                  시세를 기반으로 자동으로 가격을 책정해주는 기능을
                  내장하였으니, 이용에 참고하시길 바랍니다."
            />
            <DocImage
              src={`${IMG_PATH}trade-cmd${IMG_EXT}`}
              maxWidth="80%"
              caption="거래 명령어에 입력 가능한 내용들"
            />
            <DocImage
              src={`${IMG_PATH}trade-input-ing${IMG_EXT}`}
              maxWidth="100%"
              caption="원하는 내용 입력"
            />
            <p className={htags.pTag}>
              원하는 내용으로 입력 후 엔터키를 눌러 전송하면 아래와 같은
              메시지와 함께 거래 게시글이 생성됩니다.
            </p>
            <DocImage
              src={`${IMG_PATH}trade-created1${IMG_EXT}`}
              maxWidth="100%"
              caption="거래글 생성 완료 메시지"
            />
            <p className={htags.pTag}>
              파란색 링크를 클릭하면 해당 스레드 (거래글) 로 이동할 수 있어요.{" "}
              <br />
              (또는 직접 거래하기 채널로 이동해주세요.)
            </p>
            <p className={htags.pTag}>
              거래하기 채널에서는 원하는 스레드를 선택하여 거래 게시글을 확인할
              수 있어요
            </p>
            <DocImage
              src={`${IMG_PATH}trade-${IMG_EXT}`}
              caption="거래 게시글 목록 예시"
            />
          </>
        ),
      },
      // edit trade article
      {
        id: "trade-edit",
        title: "(3) 거래 게시글 관련",
        desc: "거래 게시글에서 사용할 수 있는 기능을 소개합니다.",
        foot: (
          <>
            <p className={htags.pTag}>
              거래 게시글은 다음과 같은 형태를 띄고 있습니다.
            </p>
            <DocImage
              src={`${IMG_PATH}trade-created${IMG_EXT}`}
              maxWidth="80%"
              caption="거래 게시글 예시"
            />
            <p className={htags.pTag}>각 버튼에 대한 설명은 다음과 같습니다.</p>
            <ul className={htags.ulTag}>
              <li>거래하기: 상대방에게 거래 요청 메시지를 보냅니다.</li>
              <li>* 수량 변경: 판매 수량을 변경할 수 있습니다.</li>
              <li>* 가격 수정: 물품 가격을 수정할 수 있습니다.</li>
              <li>* 닉네임 변경: 게임 닉네임을 수정할 수 있습니다.</li>
              <li>* 거래 종료: 게시글을 아카이브 상태로 전환합니다.</li>
            </ul>
            <p className={htags.pTag}>
              (* 표기는 거래글 게시자만 사용 가능합니다.)
            </p>
            {/* <DocImage src={`${IMG_PATH}trade-${IMG_EXT}`} caption="" />
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p> */}
          </>
        ),
      },
      // edit qty
      {
        id: "trade-edit-qty",
        title: "수량 수정하기",
        desc: "수량을 변경할 때 사용하는 버튼입니다.",
        foot: (
          <>
            <p className={htags.pTag}>
              거래 게시글에서 <strong>수량 변경</strong>버튼을 누르면 아래와
              같은 창이 뜹니다.
            </p>
            <DocImage
              src={`${IMG_PATH}trade-mod-num${IMG_EXT}`}
              caption="수량 변경 팝업창"
            />
            <p className={htags.pTag}>
              변경하고자 하는 수량을 입력하고 <strong>전송</strong> 버튼을
              누르면 됩니다.
            </p>
            <p className={htags.pTag}>
              숫자가 아닌 값을 입력할 경우, 1개로 자동 설정됩니다.
            </p>
          </>
        ),
      },
      // edit price
      {
        id: "trade-edit-price",
        title: "가격 수정하기",
        desc: "가격을 수정할 때 사용하는 버튼입니다.",
        foot: (
          <>
            <p className={htags.pTag}>
              게시글에서 <strong>가격 변경</strong> 버튼을 누르면 아래와 같은
              창이 표시됩니다.
            </p>
            <DocImage
              src={`${IMG_PATH}trade-mod-price${IMG_EXT}`}
              caption="가격 변경 팝업창"
            />
            <p className={htags.pTag}>
              이후, 변경하고자 하는 가격을 입력하고 <strong>전송</strong> 을
              눌러주세요.
            </p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
          </>
        ),
      },
      // edit nickname
      {
        id: "trade-edit-nick",
        title: "닉네임 수정하기",
        desc: "닉네임을 수정할 때 사용하는 버튼입니다.",
        foot: (
          <>
            <p className={htags.pTag}>
              게시글에서 <strong>닉네임 변경 </strong> 버튼을 누르면 아래와 같은
              창이 표시됩니다.
            </p>
            <DocImage
              src={`${IMG_PATH}trade-nickname${IMG_EXT}`}
              caption="닉네임 변경 팝업창"
            />
            <p className={htags.pTag}>
              수정하고자 하는 닉네임을 입력해주고, <strong>전송</strong> 버튼을
              눌러주세요.
            </p>
            <p className={htags.pTag}>
              입력한 닉네임은 귓속말 명령어 및 초대 명령어를 복사할 때
              사용되므로, 정확하게 기입해주세요.
            </p>
          </>
        ),
      },
      // finish trade
      {
        id: "trade-exit",
        title: "거래 종료하기",
        desc: "거래가 모두 완료되어 거래 게시글을 내려야 할 때 사용하는 버튼입니다.",
        foot: (
          <>
            <p className={htags.pTag}>
              (거래 종료는 거래글 게시자만 가능합니다.)
            </p>
            <p className={htags.pTag}>
              <strong>거래 종료</strong> 버튼을 누르면 정말로 게시글을 내릴지
              확인차 물어봅니다.
            </p>
            <DocImage
              src={`${IMG_PATH}trade-confirm-close${IMG_EXT}`}
              caption="거래 종료 버튼 누른 직후"
            />
            <p className={htags.pTag}>
              <strong>Yes (종료하기)</strong> 버튼을 누르면 거래 게시글이
              아카이브 상태로 전환됩니다. <br /> (완전히 삭제되지 않습니다.)
            </p>
            <DocImage
              src={`${IMG_PATH}trade-deleted${IMG_EXT}`}
              caption="거래 종료 버튼 누른 직후"
            />
            <NOTE
              color="orange"
              icon="alert"
              title="주의!"
              text="안내 문구와 같이 모든 버튼이 비활성화되어, 게시글을 수정할 수 없고 다시 활성화할 수 없습니다."
            />
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
          </>
        ),
      },
    ],
  },
  // 6. FAQ 섹션
  troubleshooting: {
    id: "faq",
    title: "자주 묻는 질문 (FAQ)",
    list: [
      // 상호작용 오류
      {
        q: `버튼을 누르거나 명령어를 사용하면 상호작용 오류가 떠요`,
        a: (
          <>
            <ol className={`${htags.olTag} ${tw.txt.dim}`}>
              <li>
                <strong>서버관리봇 III</strong> 이 <strong>온라인 상태</strong>
                인지 확인해주세요.
              </li>
              <ul className={`${htags.ulTag} ${tw.txt.dim}`}>
                <li>
                  <strong>점검 중</strong> 이라면 점검이 종료될 때 까지 사용이
                  불가능합니다.
                </li>
                <li>
                  봇이 오프라인 상태라면, <ContactMe />
                </li>
              </ul>
              <li>
                <strong>온라인 상태인 것을 확인</strong>했다면
                <ul className={`${htags.ulTag} ${tw.txt.dim}`}>
                  <li>
                    데스크탑 및 웹 환경의 경우 Ctrl + R 키를 눌러서 디스코드
                    앱을 새로고침 해주세요.
                  </li>
                  <li>(macOS 환경일 경우 cmd + R)</li>
                  <li>
                    모바일 환경의 경우, 디스코드 앱을 종료했다가 다시
                    실행해주세요.
                  </li>
                </ul>
              </li>
            </ol>
            {/* <br /> */}
          </>
        ),
      },
      // 애플리케이션 응답 오류
      {
        q: (
          <span>
            '애플리케이션이 응답하지 않았어요' 메시지가 뜨면서 명령어/버튼
            작동이 안돼요.
            <br />
            또는 봇이 생각을 너무 오랫동안 해요 (1분 이상 '생각 중이에요'
            메시지만 뜨는 경우)
          </span>
        ),
        a: (
          <>
            처리 과정에서 예기치 못한 오류가 발생하여 기능 작동이 안되는
            상황입니다.
            <br />
            <ContactMe />
          </>
        ),
      },
      // 파티에서 예고없이 탈퇴당함
      {
        q: `별다른 공지/예고 없이 파티에서 강제 탈퇴 당했어요`,
        a: (
          <>
            <strong>파티장에게 우선 문의해주세요.</strong> 잘못 사용했을
            가능성이 있습니다.
            <br />
            <br /> 파티장과 연락이 되지 않을경우,{" "}
            <strong>부정 사용으로 판단</strong>할 수 있습니다.
            <br />
            <ContactMe />
            <br />
            간부진과 내부 회의를 거친 후, 파티장에게 경고/제재 조치가 이루어질
            예정입니다.
          </>
        ),
      },
      // 지속적인 알림
      {
        q: `특정 유저가 파티 또는 거래 게시글의 알림 시스템을 이용하여 알림 테러를 해요`,
        a: (
          <>
            알림 테러는 본 디스코드 봇 약관 위반 행위 입니다.
            <br />
            <ContactMe />
            신고가 접수된다면 내부 검토 및 간부진과 내부 회의를 거친 후 조치를
            취할 예정입니다.
            <br />
            (대화 스크린샷 첨부해주면 더욱 좋습니다.)
          </>
        ),
      },
      // 개인 서버 추가
      {
        q: "봇을 개인 서버에 추가하고 싶어요",
        a: (
          <>
            해당 기능은 Korea Warframe 서버를 위하여 제작된 기능입니다. <br />
            개인 서버에 기능을 제공해드리긴 어렵습니다.
          </>
        ),
      },
      {
        q: "기타 궁금한 사항이나 문의사항이 있다면?",
        a: <ContactMe />,
      },
    ],
  },
  // 7. 이용 약관
  terms: {
    id: "tos",
    title: "이용 약관",
    desc: (
      <>
        <H2 text="목적" />
        <p>
          본 약관은 {COMMON.name}(이하 "서비스") 봇이 제공하는 모든 기능과
          콘텐츠, 웹사이트를 이용함에 있어, 서비스를 제공해드리는
          {COMMON.company}(이하 "운영자")과 이용자 간의 권리, 의무 및 책임
          사항을 규정함을 목적으로 합니다.
        </p>
        <P text="이용자가 봇을 서버에 추가하거나 기능을 사용함으로써 본 약관에 동의하는 것으로 간주합니다." />
        <H2 text="약관의 효력과 변경" />
        <ul className={htags.ulTag}>
          <li>본 약관은 서비스를 이용하는 모든 이용자에게 적용됩니다.</li>
          <li>
            운영자는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 약관을
            개정할 수 있습니다.
          </li>
          <li>
            약관이 변경될 경우, 디스코드 봇 공지사항 또는 지원 서버 등을 통해
            사전 공지합니다.
          </li>
          <li>
            이용자가 변경된 약관 공지 후에도 서비스를 계속 이용하는 경우, 변경
            사항에 동의한 것으로 간주합니다. 동의하지 않을 경우 서비스 이용을
            중단할 수 있습니다.
          </li>
        </ul>
        <H2 text="서비스의 제공 및 변경" />
        <ul className={htags.ulTag}>
          <li>
            운영자는 디스코드 플랫폼 내에서 사용자 편의를 위한 다양한 기능을
            제공합니다.
          </li>
          <li>
            운영자는 유지/보수, 디스코드 API 정책 변경, 천재지변 등 불가피한
            사유가 발생할 경우 서비스의 전부 또는 일부를 변경하거나 중단할 수
            있습니다.
          </li>
          <li>
            서비스의 변경 또는 중단으로 인해 발생하는 이용자의 손해에 대해서는
            책임을 지지 않고 별도의 보상을 하지 않습니다.
          </li>
        </ul>
        <H2 text="이용자의 의무" />
        <ul className={htags.ulTag}>
          <li>
            이용자는 디스코드의 자체 이용약관(Terms of Service) 및 커뮤니티
            가이드라인을 준수해야 합니다.
          </li>
          <li>
            이용자는 서비스를 오직 합법적인 목적으로만 사용해야 하며, 다음 각
            호의 행위를 금지합니다.
          </li>
          <ul className={htags.ulTag}>
            <li>봇을 활용한 도배, 스팸, 광고 등 타인에게 불쾌감을 주는 행위</li>
            <li>
              서비스의 의도된 이용 범위(운영자의 독자적인 판단에 따름)를 벗어나
              서비스에 접근하거나 이용하는 행위
            </li>
            <li>운영자의 사전 허가 없이 서비스를 상업적으로 이용하는 행위</li>
            <li>서비스를 불법적으로 이용하는 행위</li>
            <li>서비스의 버그나 취약점을 악용하거나 이를 유포하는 행위</li>
            <li>기타 관련 법령을 위반하거나 서비스 운영을 방해하는 행위</li>
          </ul>
        </ul>
        <li>
          서비스 이용 중 버그나 보안 취약점을 발견할 경우, 이용자는 즉시
          운영자에게 제보해야 하며 이를 악용해서는 안 됩니다.
        </li>
        <li>
          위 의무를 위반할 경우, 운영자는 사전 통보 없이 해당 이용자의 서비스
          이용을 제한하거나 영구 차단할 수 있습니다.
        </li>
        <H2 text="개인정보 보호" />
        <P text="운영자는 더 나은 서비스 제공을 위해 데이터를 수집하고 있습니다. " />
        <P text="수집된 정보는 서비스 운영 목적 외의 다른 목적으로 사용하지 않으며, 법령에 의한 요구가 있는 경우를 제외하고는 제3자에게 제공되지 않습니다." />

        <p className={htags.pTag}>
          상세한 내용은 별도로 고지된 <strong>개인정보 처리방침</strong>을
          따릅니다.
          <br />
          좌측 사이드바에서 개인정보 처리방침을 클릭하여 확인해주세요. (모바일은
          우측 상단 메뉴 버튼을 통해 이동할 수 있습니다.)
        </p>

        <H2 text="책임의 제한 (면책)" />
        <ul className={htags.ulTag}>
          <li>
            운영자는 천재지변, 디스코드 플랫폼의 장애, 통신망의 장애 등
            불가항력으로 인해 서비스를 제공할 수 없는 경우에 대해 책임을 지지
            않습니다.
          </li>
          <li>
            운영자는 이용자의 귀책 사유로 인한 서비스 이용의 장애나 데이터
            손실에 대해 책임을 지지 않습니다.
          </li>
          <li>
            운영자는 이용자가 서비스를 이용하여 기대하는 수익을 상실하거나,
            서비스를 통해 얻은 자료로 인해 발생한 손해에 대해 운영자의 고의 또는
            중대 과실이 없는 한 책임을 지지 않습니다.
          </li>
        </ul>

        <H2 text="저작권" />
        <ul className={htags.ulTag}>
          <li>
            서비스가 제공하는 기능, 코드, 디자인 등에 대한 저작권 및
            지적재산권은 운영자에게 귀속됩니다.
          </li>
          <li>
            단, 서비스 내에서 표시되는 게임(Warframe) 관련 데이터, 이미지, 상표
            등은 해당 저작권자(Digital Extremes)에게 권리가 있습니다.
          </li>
          <li>
            이용자는 서비스를 이용하여 얻은 정보를 운영자의 승낙 없이 영리
            목적으로 이용하거나 제3자에게 배포할 수 없습니다.
          </li>
        </ul>

        <H2 text="링크" />
        <P text="서비스 내에 제3자가 제공하는 외부 웹사이트 및 자원에 대한 링크가 포함되는 경우, 이러한 링크는 이용자의 편의를 위해 제공되는 것입니다. 운영자는 해당 외부 사이트의 콘텐츠나 정책을 통제하지 않으며, 이용자가 이를 이용함으로써 발생하는 문제에 대해 책임을 지지 않습니다." />

        <H2 text="이용 제한 및 연령 준수" />
        <P text="본 서비스는 만 14세 이상을 대상으로 합니다. 만 14세 미만의 아동은 서비스를 이용할 수 없으며, 해당 사실이 확인될 경우 서비스 이용이 제한될 수 있습니다." />

        <H2 text="준거법 및 관할" />
        <P text="본 약관의 해석 및 분쟁에 관해서는 대한민국 법률을 따르며, 서비스 이용과 관련하여 소송이 제기될 경우 민사소송법상의 관할 법원을 따릅니다." />

        <H2 text="부칙" />
        <P text="본 이용 약관은 법령, 정책의 변경에 따라 내용이 추가, 삭제 및 수정될 수 있습니다." />
        <P text="변경 사항이 있을 경우 시행 7일 전부터 디스코드 봇 공지사항 또는 공식 지원 서버를 통해 공지할 것입니다." />
        <ul className={htags.ulTag}>
          <li>공고 일자: 2025년 12월 4일</li>
          <li>시행 일자: 2025년 12월 5일</li>
        </ul>
      </>
    ),
  },
  // 8. 개인정보 처리방침
  privacy: {
    id: "privacy",
    title: "개인정보 처리방침",
    desc: (
      <>
        <p>
          {COMMON.name}(이하 “서비스”) 봇을 운영하는 {COMMON.company}
          (이하 “운영자”)은 이용자의 개인정보를 소중하게 생각하며, 사용자의
          개인정보 보호를 위해 최선을 다하고 있습니다.
        </p>
        <P text="봇을 이용하는 경우, 본 개인정보 처리방침에 동의하는 것으로 간주합니다. 내용에 동의하지 않으신다면 봇 사용을 중단하셔야 합니다." />

        <H2 text="수집하는 개인정보의 항목" />
        <P text="운영자는 원활한 서비스 제공과 문제 해결을 위해 다음과 같은 최소한의 정보를 수집합니다." />
        <ul className={htags.ulTag}>
          <li>
            <strong>사용자 식별 정보</strong>: 디스코드 사용자 ID, 닉네임
          </li>
          <li>
            <strong>이용 환경 정보</strong>: 명령어가 사용된 서버(Guild)의 이름
            및 ID, 채널 이름 및 ID
          </li>
          <li>
            <strong>서비스 이용 기록</strong>: 사용한 명령어, 팝업창(Modal) 등을
            통해 입력된 데이터, 오류 발생 로그
          </li>
        </ul>

        <H2 text="수집 방법" />
        <P text="봇 이용 과정에서 자동으로 생성되어 수집" />

        <H2 text="개인정보의 수집 및 이용 목적" />
        <P text="수집된 정보는 다음의 목적 이외의 용도로는 사용되지 않으며, 목적이 변경될 경우 사전에 동의를 구합니다." />

        <ol className={htags.olTag}>
          <li>
            <strong>서비스 제공 및 기능 수행</strong>: 봇의 핵심 기능 제공 및
            사용자 식별
          </li>
          <li>
            <strong>오류 해결 및 기술 지원</strong>: 서비스 이용 중 발생하는
            오류 및 버그 추적, 사용자 문의 대응
          </li>
          <li>
            <strong>서비스 개선</strong>: 이용 통계 분석을 통한 선호 기능을
            파악하여 기존 기능을 개선, 또는 신규 기능 개발 자료로 활용
          </li>
        </ol>

        <H2 text="개인정보 보유 기간" />
        <P text="이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용 목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보는 아래의 사유로 명시한 기간 동안 보존합니다." />
        <ul className={htags.ulTag}>
          <li>
            <strong>보존 항목</strong>: 서비스 이용 기록 및 로그 데이터
          </li>
          <li>
            <strong>보존 기간</strong>: 수집일로부터 최대 1년
          </li>
          <li>
            <strong>보존 사유</strong>: 서비스 부정 이용 방지 및 기능 개선을
            위한 통계 데이터 확보
          </li>
          <li>
            <strong>서비스 종료 시</strong>: 봇 서비스 종료가 확정될 경우,
            서비스 종료와 함께 수집된 모든 정보는 즉시 파기됩니다.
          </li>
        </ul>
        <P text="단, 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 운영자는 해당 법령에서 정한 일정한 기간 동안 정보를 보관합니다." />

        <H2 text="정보의 파기절차 및 방법" />
        <P text="개인정보 파기 시점 도래 시 다음의 방법으로 파기합니다." />
        <ul className={htags.ulTag}>
          <li>
            <strong>절차</strong>: 보존 기간이 경과하거나 처리 목적이 달성된
            개인정보는 내부 방침에 따라 안전하게 파기됩니다.
          </li>
          <li>
            <strong>전자적 파일 형태</strong>: 복구 및 재생할 수 없는 기술적
            방법을 사용하여 영구 삭제합니다.
          </li>
        </ul>

        <H2 text="개인정보의 제3자 제공" />
        <P text="운영자는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다." />
        <ul className={htags.ulTag}>
          <li>이용자가 사전에 동의한 경우</li>
          <li>
            법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에
            따라 수사기관의 요구가 있는 경우
          </li>
        </ul>

        <H2 text="이용자의 권리와 행사 방법" />
        <P text="이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 삭제를 요청할 수 있습니다." />
        <ul className={htags.ulTag}>
          <li>
            <strong>권리 행사 방법</strong>: 운영자 이메일 또는 공식 지원 서버를
            통해 서면, 채팅 등으로 요청
          </li>
          <li>
            <strong>요청 가능 사항</strong>: 개인정보 열람, 정정, 삭제, 처리
            정지 요구
          </li>
        </ul>

        <H2 text="개인정보 안전성 확보 조치" />
        <P text="운영자는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다." />
        <ol className={htags.ulTag}>
          <li>
            <strong>관리적 조치</strong>: 개인정보에 접근할 수 있는 인원을
            운영자로 최소화하고 있습니다.
          </li>
          <li>
            <strong>기술적 조치</strong>:
          </li>
          <ul className={htags.ulTag}>
            <li>
              저장된 데이터는 하드웨어 레벨의 암호화 기술이 적용된 저장 장치에
              보관됩니다.
            </li>
            <li>외부 전송 시 암호화된 통신 프로토콜을 사용합니다.</li>
            <li>
              정기적인 소프트웨어 업데이트를 통해 해킹이나 바이러스로부터
              시스템을 보호합니다.
            </li>
          </ul>
        </ol>

        <H2 text="개인정보 보호 책임자 및 연락처" />
        <P text="서비스 이용 중 발생하는 모든 개인정보 보호 관련 민원은 아래의 창구로 문의해 주시기 바랍니다." />
        <ul className={htags.ulTag}>
          <li>책임자: {COMMON.company} (창설클랜 역할)</li>
          <li>이메일: {process.env.REACT_APP_CONTACT_EMAIL}</li>
          <li>
            <A
              href={process.env.REACT_APP_SUPPORT_SERVER}
              text="디스코드 지원 서버"
            />{" "}
            바로가기
          </li>
        </ul>

        <H2 text="개인정보 처리방침의 변경" />
        <P text="본 개인정보 처리방침은 법령, 정책 또는 보안 기술의 변경에 따라 내용이 추가, 삭제 및 수정될 수 있습니다. 변경 사항이 있을 경우 시행 7일 전부터 디스코드 봇 공지사항 또는 공식 지원 서버를 통해 공지할 것입니다." />
        <ul className={htags.ulTag}>
          <li>공고 일자: 2025년 12월 4일</li>
          <li>시행 일자: 2025년 12월 5일</li>
        </ul>
      </>
    ),
  },
  // 9. 법적 고지
  legal: {
    id: "legal",
    title: "저작권 및 법적 고지",
    desc: (
      <>
        <H3 text="서비스 운영자의 권리" />
        <p>
          {COMMON.name}(이하 서비스) 의 개발 및 운영과 관련된 독자적인 소스
          코드, 데이터베이스 구조, 웹사이트 디자인 등에 대한 저작권은 개발자{" "}
          {COMMON.company}에게 귀속됩니다.
        </p>
        <p>
          서비스 이용자는 운영자의 명시적인 서면 동의 없이 본 서비스의 코드를
          복제, 수정, 배포하거나 2차 저작물을 생성할 수 없습니다. (단, 오픈
          소스로 공개된 부분은 해당 라이선스를 따릅니다.)
        </p>
        <H3 text="제3자 콘텐츠 및 상표권" />
        <p>
          본 서비스 내에서 제공되는 게임 Warframe과 관련된 모든 데이터, 예술
          저작물, 로고, 아이콘, 텍스트, 고유명사 등의 지적재산권은{" "}
          <strong>Digital Extremes Ltd.</strong>에 있습니다.
        </p>
        <p>
          <strong>Warframe©</strong>은 Digital Extremes Ltd.의 등록 상표입니다.
          본 서비스에서 사용된 게임 관련 이미지는 정보 전달을 목적으로
          사용되었으며, 저작권자의 권리를 침해할 의도가 없습니다.
        </p>

        <H3 text="비공식 팬 프로젝트 고지" />
        <p>
          본 서비스는 Warframe의 팬(Fan)에 의해 만들어진 비공식(Unofficial)
          프로젝트입니다. <strong>{COMMON.name}</strong>은 Digital Extremes Ltd.
          와 제휴, 보증, 후원 또는 공식적인 승인 관계에 있지 않습니다. 본
          서비스가 제공하는 정보는 게임의 업데이트에 따라 실제 게임 내용과 다를
          수 있습니다.
        </p>
      </>
    ),
  },
  // 10. 연락 방법
  contact: {
    id: "contact",
    title: "도움이 필요하신가요?",
    foot: (
      <>
        {/* <H3 text="다음 상황에서 연락을 할 수 있습니다." /> */}
        <ul className={htags.ulTag}>
          <li>'자주 묻는 질문' 절차대로 진행해도 문제가 해결되지 않은 경우</li>
          <li>부정 사용자 신고</li>
          <li>버그 제보</li>
          <li>기타 봇 관련 문의/건의/제안사항</li>
        </ul>

        <H3 text="연락 방법" />
        <P text="아래 방법 중 하나를 선택하여 담당자에게 연락 바랍니다." />
        <ul className={htags.ulTag}>
          <li>
            <A
              href={process.env.REACT_APP_SUPPORT_SERVER}
              text="공식 지원 서버"
            />
            에 접수
            <br />
            <span className={tw.txt.dark}>
              (파란색 글씨를 클릭하면 지원 서버 초대장으로 이동합니다.)
            </span>
          </li>
          {/* <li>
            <strong className={htags.graveTag}>/문의하기</strong> 명령어를
            이용하여 문의 접수
          </li> */}
        </ul>
        <P text="스크린샷 등 이미지 파일 첨부가 필요한 경우, 공식 지원 서버에서 접수 해주시길 바랍니다." />
        <P text="피드백은 언제나 환영합니다." />
        <NOTE
          color="red"
          icon="alert"
          title="주의사항"
          text={
            <ul>
              <li>
                <strong>사용자 신고</strong>의 경우,{" "}
                <strong>구체적 사유가 있어야만 접수가 가능</strong>합니다.
              </li>
              <li>
                스크린샷 등 확실한 증거가 없을 경우 신고를 접수하여도 제재가
                이루어지지 않을 수 있습니다.
              </li>
            </ul>
          }
        />
      </>
    ),
  },
};
