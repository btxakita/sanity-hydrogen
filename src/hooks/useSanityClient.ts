// import sanityClient from '@sanity/client';
// import { preloadFunction, suspendFunction} from '@shopify/hydrogen';
// import sanityConfig from '../../sanity.config';

// interface Props {
//   /** A string of the GROQ query. */
//   query: string;
//   /** An object of the variables for the GROQ query. */
//   params?: Record<string, unknown>;
//   /** preload options to pass to Hydrogen's hook */
//   preload?: Boolean;
// }

// const client = sanityClient(sanityConfig);

// export default function useSanityClient<T>({
//   query,
//   params = {},
// }: Props) {

//   return suspendFunction<T>(
//     [query, params],
//     async () => await client.fetch(query, params),
//   );
// }
