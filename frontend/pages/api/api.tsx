import {useState} from "react";
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

const getSingleArticles: any = (articles: any)=> {
  const articleSlugs = new Set();
  return articles.filter((article: any)=> {
    if (articleSlugs.has(article.slug)){
      if (articleSlugs.has(article.slug)){
        return false;
      }else{
        articleSlugs.add(article.slug)
        return true;
      }
    }
  })
}

export async function GetPostSlug(slug: string, preview: boolean) {
  const [post, setPosts] = useState([]);

  const groqQuery = `*[_type == "article" && slug.current == $slug] | order (_updatedAt asc)'{

    ${articleFields}
articleBody

}`;
}
