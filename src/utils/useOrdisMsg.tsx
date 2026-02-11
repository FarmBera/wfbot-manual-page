import React, {useState, useEffect} from 'react';
import {getOrdisMsg} from './getOrdisMsg';

export const useOrdisMsg = (): React.ReactNode => {
    const [message, setMessage] = useState<React.ReactNode>('');

    useEffect(() => {
        // message decision at mount point
        const msg = getOrdisMsg();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMessage(msg);
    }, []);

    return message;
};