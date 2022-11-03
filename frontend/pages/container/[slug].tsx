import { title } from "process";

type ArticleProps = {
  title: string;
  description: string;
  imageLink: string;
};






export default function Article(props: ArticleProps): Article {
  return <>{title}</>;
}

// getStaticProps for props of article
export async function getStaticProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
