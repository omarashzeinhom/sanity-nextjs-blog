import { useRouter } from "next/router";
import { FetchArticlesSlug, getSingleArticles } from "../api/api";

export default function Article(article: any) {
  const nextRouter = useRouter();
  console.log(FetchArticlesSlug);
  console.log(getSingleArticles);

  return (
    <>
      <h1>Article</h1>
    </>
  );
}

// getStaticProps for props of article
export async function getStaticProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export async function getStaticPaths(article: any) {
  return {
    // string variant
    paths: [
      `/articles/${article?.articleTitle}`,
      // Object variant :
      { params: { slug: `${article?.articleSlug}` } },
    ],

    fallback: true,
  };
}
