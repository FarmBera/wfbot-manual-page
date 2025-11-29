import NOTE from "../ui/NOTE";

export const TipTime = ({ sampleTime }) => {
  if (!sampleTime) sampleTime = "남은 시간";

  return (
    <NOTE
      color="indigo"
      icon="lightbulb"
      title="시간 확인 꿀팁"
      text={
        <>
          <strong>{sampleTime}</strong> 텍스트에 마우스를 가져다 놓으면 정확한
          종료 날짜 & 시간이 표시됩니다!
        </>
      }
    />
  );
};

export default TipTime;
