import { Lightbulb, TriangleAlert } from "lucide-react";
import React from "react";

/**
 * 강조 문구를 표시하는 Note 컴포넌트
 * @param {string} color - 테마 색상 ('blue', 'red', 'green', 'yellow')
 * @param {string} title - 제목 텍스트 (기본값: 'Note')
 * @param {ReactNode} children - 내용
 */
const NOTE = ({ color = "blue", icon, title = "Note", text }) => {
  // Tailwind CSS가 클래스를 감지할 수 있도록 전체 문자열로 정의합니다.
  const styles = {
    red: {
      container: "bg-red-50 dark:bg-orange-950 border-red-500",
      text: "text-red-700 dark:text-red-200",
    },
    yellow: {
      container: "bg-yellow-50 dark:bg-yellow-900 border-yellow-500",
      text: "text-yellow-700 dark:text-yellow-200",
    },
    green: {
      container: "bg-green-50 dark:bg-green-900 border-green-500",
      text: "text-green-700 dark:text-green-200",
    },
    blue: {
      container: "bg-blue-50 dark:bg-blue-900 border-blue-500",
      text: "text-blue-700 dark:text-blue-200",
    },
    cyan: {
      container: "bg-cyan-50 dark:bg-cyan-900 border-cyan-500",
      text: "text-cyan-700 dark:text-cyan-200",
    },
    indigo: {
      container: "bg-indigo-50 dark:bg-indigo-900 border-indigo-500",
      text: "text-indigo-700 dark:text-indigo-200",
    },
  };

  const icons = {
    lightbulb: <Lightbulb />,
    trianglealert: <TriangleAlert />,
  };

  // 지정된 색상이 없으면 기본값(blue) 사용
  const currentStyle = styles[color] || styles.blue;

  return (
    <div
      className={`${currentStyle.container} border-l-4 p-4 mt-4 rounded-md transition-colors duration-1000`}
    >
      <p className={`text-md ${currentStyle.text}`}>
        <span>{icons[icon]}</span>
        {title && <strong>{title}</strong>}
        <br />
        <br />
        {text}
      </p>
    </div>
  );
};

export default NOTE;
