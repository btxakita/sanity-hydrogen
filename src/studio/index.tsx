import React from 'react';
import { Studio } from 'sanity'
import sanityConfig from './sanity.config';

export default function SanityStudio() {
  return (
      <Studio config={sanityConfig} scheme={'dark'} />
  );
}
