import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const backEndClient = sanityClient({
    projectId: 'ah7l5l12',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: process.env.NEXT_PUBLIC_SANITY_KEY, // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
    ignoreBrowserTokenWarning: true,

});

const builder = imageUrlBuilder(backEndClient);

export const urlFor = (source: SanityImageSource) => builder?.image(source);
