import React, {useState, useEffect} from 'react';
import {getOrdisMsg} from './getOrdisMsg';

export const useOrdisMsg = (): React.ReactNode => {
    const [message, setMessage] = useState<React.ReactNode>('');

    useEffect(() => {
        // message decision at mount point
        const msg = getOrdisMsg();
        setMessage(msg);
    }, []);

    return message;
};