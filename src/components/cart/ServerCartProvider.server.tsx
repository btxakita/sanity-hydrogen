import type {CountryCode} from '@shopify/hydrogen/storefront-api-types';
import {ReactNode} from 'react';
import LocalCartProvider from './LocalCartProvider.client';

type Props = {
  children: ReactNode;
  countryCode?: CountryCode;
  customerAccessToken?: string;
};

export default function ServerCartProvider({
  countryCode, 
  customerAccessToken,
  children
}: Props) {
  return (
    <LocalCartProvider 
      countryCode={countryCode as CountryCode}
      customerAccessToken={customerAccessToken}>
      {children}
    </LocalCartProvider>
  );
}
