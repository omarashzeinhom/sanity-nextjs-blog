import { backEndClient } from "../../sanityclient";

const articleFields = `
_id,
'date': publishedAt,
articleImage,
articleBody,
articleAuthor,
'articleSlug': slug.current,
'author': author->{firstName, 'avatarLink': image.asset-> url},
categories,

`;

export const getSingleArticles: any = (articles: any) => {
  const articleSlugs = new Set();
  return articles.filter((article: any) => {
    if (articleSlugs.has(article.slug)) {
      if (articleSlugs.has(article.slug)) {
        return false;
      } else {
        articleSlugs.add(article.slug);
        return true;
      }
    }
  });
};

export async function GetPostSlug(slug: string) {
  const groqQuery = `*[_type == "article" && slug.current == $slug] | order (_updatedAt asc)'{
    ${articleFields}
articleBody
}`;




const altGroqQuery = `*[_type == "article" && slug.current != $slug] | order (_updatedAt asc)'{
  ${articleFields}
articleBody
}[0..2]`;

  const [article, setArticles] = await Promise.all([
    backEndClient.fetch(groqQuery, { slug }).then((response) => response?.[0]),
    backEndClient.fetch(altGroqQuery, {slug}),
  ]);
  return {article, setArticles: getSingleArticles(setArticles)}
}


export async function FetchArticlesSlug () {

const groqQuerySlug = `*[_type == "article"]{'slug: slug.current'} `;

const backEndQuery = await backEndClient.fetch(
groqQuerySlug
)

return backEndQuery;

} 