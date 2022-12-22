import {CartProvider as ShopifyCartProvider} from '@shopify/hydrogen';
import type {CountryCode} from '@shopify/hydrogen/storefront-api-types';
import {ReactNode, useCallback} from 'react';
import CartUIProvider, {useCartUI} from './CartUIProvider.client';

/**
 * A client component that creates a cart object and provides callbacks that can be accessed by any descendent component using the `useCart` hook and related hooks
 */

type Props = {
  children: ReactNode;
  countryCode?: CountryCode;
  customerAccessToken?: string;
  numCartLines?: number;
};

export default function CartProvider({
  children,
  countryCode,
  customerAccessToken,
  numCartLines,
}: Props) {
  return (
    <CartUIProvider>
      <Provider countryCode={countryCode} customerAccessToken={customerAccessToken} numCartLines={numCartLines}>
        {children}
      </Provider>
    </CartUIProvider>
  );
}

function Provider({
  children, 
  countryCode, 
  customerAccessToken, 
  numCartLines
}: Props) {
  const {openCart} = useCartUI();

  const open = useCallback(() => {
    openCart();
  }, [openCart]);

  return (
    <ShopifyCartProvider
      countryCode={countryCode}
      customerAccessToken={customerAccessToken}
      numCartLines={numCartLines}
      onLineAdd={open}
      onCreate={open}
    >
      {children}
    </ShopifyCartProvider>
  );
}
