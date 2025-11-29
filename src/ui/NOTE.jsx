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
    blue: {
      container: "bg-blue-50 border-blue-500",
      text: "text-blue-700",
    },
    cyan: {
      container: "bg-cyan-50 border-cyan-500",
      text: "text-cyan-700",
    },
    red: {
      container: "bg-red-50 border-red-500",
      text: "text-red-700",
    },
    green: {
      container: "bg-green-50 border-green-500",
      text: "text-green-700",
    },
    yellow: {
      container: "bg-yellow-50 border-yellow-500",
      text: "text-yellow-700",
    },
    indigo: {
      container: "bg-indigo-50 border-indigo-500",
      text: "text-indigo-700",
    },
  };

  const icons = {
    lightbulb: <Lightbulb />,
    trianglealert: <TriangleAlert />,
  };

  // 지정된 색상이 없으면 기본값(blue) 사용
  const currentStyle = styles[color] || styles.blue;

  return (
    <div className={`${currentStyle.container} border-l-4 p-4 mt-4 rounded-md`}>
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
