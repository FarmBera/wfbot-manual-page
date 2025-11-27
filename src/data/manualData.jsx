import React from "react";
// 아이콘 라이브러리 (lucide-react가 설치되어 있어야 합니다)
import { Info, Zap, Settings, HelpCircle, FileText } from "lucide-react";
// 위에서 만든 상수 파일 import
import { APP_NAME, APP_VERSION, COMPANY_NAME } from "../constants";

export const docSections = [
  // 1. introduction
  {
    id: "intro",
    title: "1. 소개",
    icon: <Info size={18} />,
    content: (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {APP_NAME} 가이드에 오신 것을 환영합니다
        </h1>
        <p className="text-gray-600 leading-relaxed">
          이 문서는 <strong>{APP_NAME}</strong>의 설치부터 고급 기능 활용까지
          모든 내용을 담고 있습니다. 왼쪽의 목차를 통해 원하는 정보로 빠르게
          이동할 수 있습니다.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="text-sm text-blue-700">
            <strong>참고:</strong> 이 문서는 최신 버전({APP_VERSION})을 기준으로
            작성되었습니다.
          </p>
        </div>
      </div>
    ),
  },
  // top features
  {
    id: "features",
    title: "2. 주요 기능 소개",
    icon: <Zap size={18} />,
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          핵심 기능 살펴보기
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg mb-2 text-indigo-600">
              실시간 워프레임 컨텐츠 알림
            </h4>
            <p className="text-sm text-gray-500">
              실시간으로 새 워프레임 컨텐츠가 올라온다면 알려드립니다.
              <br />
              (현재 알림 설정은 별도의 관리자 권한이 필요합니다. 봇 개발자에게
              문의해주세요.)
            </p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg mb-2 text-indigo-600">
              마켓 검색 기능
            </h4>
            <p className="text-sm text-gray-500">
              워프레임 마켓에 직접 접속 하지 않고, 디스코드에서 간단하게 시세를
              검색할 수 있습니다.
            </p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg mb-2 text-indigo-600">
              파티 모집 시스템
            </h4>
            <p className="text-sm text-gray-500">간단한 명령어로 파티 모집을 편리하게 할 수 있습니다.</p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg mb-2 text-indigo-600">
              아이템 거래 시스템
            </h4>
            <p className="text-sm text-gray-500">
              간단한 명령어로 편리하게 길드원 분들과 아이템 거래를 할 수 있어요.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  // main manual
  {
    id: "manual",
    title: "3. 시작하기",
    icon: <Settings size={18} />,
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">설치 방법</h2>
        <p className="text-gray-600">
          시스템 요구 사항을 확인한 후 아래 절차를 따라주세요.
        </p>

        <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm my-4">
          npm install superapp-core
          <br />
          npm start
        </div>

        <h3 className="text-xl font-medium text-gray-800 mt-6">초기 설정</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>앱을 실행하고 설정 마법사를 따릅니다.</li>
          <li>라이선스 키를 입력하여 제품을 활성화합니다.</li>
          <li>사용자 프로필을 생성합니다.</li>
        </ul>
      </div>
    ),
  },
  // trouble shooting
  {
    id: "troubleshooting",
    title: "4. 문제 해결",
    icon: <HelpCircle size={18} />,
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          자주 묻는 질문 (FAQ)
        </h2>

        <div className="space-y-4">
          <div className="border-b pb-4">
            <h4 className="font-medium text-gray-900 mb-2">
              Q. 로그인이 되지 않습니다.
            </h4>
            <p className="text-gray-600">
              A. 네트워크 연결을 확인하시고, 비밀번호 재설정 이메일을
              요청해보세요.
            </p>
          </div>
          <div className="border-b pb-4">
            <h4 className="font-medium text-gray-900 mb-2">
              Q. 데이터 백업은 어떻게 하나요?
            </h4>
            <p className="text-gray-600">
              A. 설정 &gt; 데이터 관리 &gt; 백업 내보내기 메뉴를 이용하세요.
            </p>
          </div>
          <div className="pb-4">
            <h4 className="font-medium text-gray-900 mb-2">
              Q. 환불 정책이 궁금합니다.
            </h4>
            <p className="text-gray-600">
              A. 구매 후 14일 이내라면 조건 없이 전액 환불이 가능합니다.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  // legal / EULA
  {
    id: "legal",
    title: "5. 법적 고지",
    icon: <FileText size={18} />,
    content: (
      <div className="space-y-4 text-sm text-gray-500">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          이용 약관 및 개인정보 처리방침
        </h2>
        <p>
          본 소프트웨어의 저작권은 {COMPANY_NAME}에 있습니다. 무단 복제 및
          배포는 법적으로 금지되어 있습니다. 사용자는 본 소프트웨어를
          설치함으로써 최종 사용자 라이선스 계약(EULA)에 동의하는 것으로
          간주됩니다.
        </p>
        <p>
          개인정보 처리방침에 따라 수집된 데이터는 서비스 개선 목적으로만
          사용되며 제3자에게 제공되지 않습니다.
        </p>
      </div>
    ),
  },
];
