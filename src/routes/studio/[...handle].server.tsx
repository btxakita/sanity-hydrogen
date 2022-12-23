import { Suspense } from 'react';
import LoadingFallback from '~/components/global/LoadingFallback';
import SanityStudio from '~/components/studio/SanityStudio.client';
import styles from './style.studio.css'


export default function Studio() {
  return (
    <div className={styles.studio}>
      <Suspense fallback={<LoadingFallback/>}>
        <SanityStudio />
      </Suspense>
    </div>
  );
}
