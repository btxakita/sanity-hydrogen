import { Suspense } from 'react';
import LoadingFallback from '~/components/global/LoadingFallback';
import SanityStudio from '~/components/studio/SanityStudio.client';
import './index.css'


export default function Studio() {
  return (
    <Suspense fallback={<LoadingFallback/>}>
      <SanityStudio />
    </Suspense>
  );
}
