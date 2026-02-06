import Cookies from 'js-cookie';

const MESSAGES = {
  INIT: ['만나서 반가워요. 오퍼레이터.'],
  RANDOM: ["오퍼레이터, 돌아오셨군요!", "오디스는 오퍼레이터를 볼 수 있어서 너무 기뻐요.", "돌아와줘서 고마워요. 오퍼레이터.", "돌아온 것을 환영해요, 오퍼레이터!"],
  RETURN: [<>오디스는 <del className='text-gray-300 dark:text-gray-600'>기다리는데 지쳤어</del> 오퍼레이터가 돌아올 때 까지 침착하게
    기다렸지요.</>, '너무 외로웠어요 오퍼레이터...']
};

export const getOrdisMsg = () => {
  const lastVisit = Cookies.get('timestamp');
  const now = new Date();
  let targetArray;

  if (!lastVisit) {
    // first visit
    targetArray = MESSAGES.INIT;
    Cookies.set('timestamp', now.toISOString(), {expires: 365});
  } else {
    const lastVisitDate = new Date(lastVisit);
    const diffDays = (now - lastVisitDate) / (1000 * 60 * 60 * 24);

    if (diffDays >= 7) targetArray = MESSAGES.RETURN; else targetArray = MESSAGES.RANDOM;

    Cookies.set('timestamp', now.toISOString(), {expires: 365});
  }

  const randomIndex = Math.floor(Math.random() * targetArray.length);
  return targetArray[randomIndex];
};