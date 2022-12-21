import sanityClient from '@sanity/client';
import {HydrogenUseQueryOptions, useQuery, log} from '@shopify/hydrogen';
import sanityConfig from '../../sanity.config';

interface Props {
  /** A string of the GROQ query. */
  query: string;
  /** An object of the variables for the GROQ query. */
  params?: Record<string, unknown>;
  /** Query options to pass to Hydrogen's `useQuery` hook */
  hydrogenQueryOptions?: HydrogenUseQueryOptions;
}

const client = sanityClient(sanityConfig);

export default function useSanityQuery<T>({
  hydrogenQueryOptions,
  query,
  params = {},
}: Props) {
  return useQuery<T>(
    [query, params],
    async () => { 
      const resp =  await client.fetch(query, params);
      log.debug(resp);
      return resp;
    },
    hydrogenQueryOptions,
  );
}
