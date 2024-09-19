'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DarkMode() {
    let router = useRouter();
    let [cookieValue, setCookieValue] = useState();
    let [currentMode, setCurrentMode] = useState('🌙');

    useEffect(() => {
        let 쿠키값 = ('; ' + document.cookie)
            .split(`; mode=`)
            .pop()
            .split(`;`)[0];
        if (쿠키값 == '') {
            document.cookie = 'mode=light; max-age=' + 3600 * 24 * 400;
            setCookieValue(쿠키값);
        }
    }, []);
    return (
        <>
            <span
                onClick={() => {
                    if (cookieValue == 'light') {
                        document.cookie =
                            'mode=dark; max-age=' + 3600 * 24 * 400;
                        setCookieValue('dark');
                        setCurrentMode('☀️');
                        router.refresh();
                    } else {
                        document.cookie =
                            'mode=light; max-age=' + 3600 * 24 * 400;
                        setCookieValue('light');
                        setCurrentMode('🌙');
                        router.refresh();
                    }
                }}
            >
                {currentMode}
            </span>
        </>
    );
}
