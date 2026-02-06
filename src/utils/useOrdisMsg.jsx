import {useState, useEffect} from 'react';
import {getOrdisMsg} from './getOrdisMsg';

export const useOrdisMsg = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // message decision at mount point
    const msg = getOrdisMsg();
    setMessage(msg);
  }, []);

  return message;
};