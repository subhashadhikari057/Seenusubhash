'use client';

import { usePathname } from 'next/navigation';
import Preloader from './Preloader';

const PreloaderGate = () => {
    const pathname = usePathname();

    if (pathname !== '/') return null;

    return <Preloader />;
};

export default PreloaderGate;
