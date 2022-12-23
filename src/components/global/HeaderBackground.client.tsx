import { useEffect, useState } from 'react';
import { Link } from '@shopify/hydrogen';
import clsx from 'clsx';
import LogoIcon from '../icons/Logo';
import { useOneEffect } from '~/hooks/useOneEffect';

export default function HeaderBackground() {
  const [scrolledDown, setScrolledDown] = useState(false);

  const handleScroll = () => {
    setScrolledDown(window.scrollY > 100);
    console.log(`ScrollY: ${window.scrollY}`);
  }

  useOneEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', handleScroll, { passive: true });
      // Trigger handler on mount to account for reloads
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Background */}
      <div
        className={clsx([
          'absolute inset-0 bg-white bg-opacity-90 backdrop-blur-lg backdrop-filter duration-500',
          scrolledDown ? 'opacity-100' : 'opacity-0',
        ])}
      />

      {/* Logo */}
      <Link to="/">
        <div
          className={clsx(
            'absolute bottom-0 top-0 left-1/2 flex w-[120px] -translate-x-1/2 items-center',
            'lg:w-[140px]',
          )}
        >
          <LogoIcon
            className="h-auto w-full"
            classNameType={clsx([
              'duration-500',
              scrolledDown
                ? 'fill-[#F20000] translate-y-1'
                : 'fill-offBlack translate-y-0',
            ])}
          />
        </div>
      </Link>
    </div>
  );
}
