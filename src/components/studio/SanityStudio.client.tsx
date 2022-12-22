import { Studio } from 'sanity'
import sanityConfig from '~/studio/sanity.config';

export default function SanityStudio() {
  return (
      <Studio config={sanityConfig} scheme={'dark'} />
  );
}
