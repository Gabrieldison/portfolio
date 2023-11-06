// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for post1 documents
 */
interface Post1DocumentData {
  /**
   * content field in *post1*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post1.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * image field in *post1*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post1.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * titulo field in *post1*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post1.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titulo: prismic.RichTextField;
}

/**
 * post1 document from Prismic
 *
 * - **API ID**: `post1`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type Post1Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<Post1DocumentData>, "post1", Lang>;

export type AllDocumentTypes = Post1Document;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type { Post1Document, Post1DocumentData, AllDocumentTypes };
  }
}
