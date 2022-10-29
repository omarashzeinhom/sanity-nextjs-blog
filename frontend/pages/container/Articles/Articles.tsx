import React, { useEffect, useState } from "react";
import { backEndClient, urlFor } from "../../../sanityclients";
import Image from "next/image";
import Markdown from "markdown-to-jsx";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const GroqQuery = '*[_type == "articles"]';

    backEndClient.fetch(GroqQuery).then((data) => setArticles(data));
  }, []);

  return (
    <div>
      {articles.map((article: any, index: any) => {
        const result = `${article?.articleBody}`;
        console.log(JSON.parse(JSON.stringify(article?.articleAuthor)));

        return (
          <React.Fragment key={index}>
            <h1>{article?.title}</h1>
            <Image
              src={`${urlFor(article?.articleImage)}`}
              alt=""
              width="250"
              height="250"
            />
            <h2>Description</h2>
            <Markdown>{result.slice(0, 250)}</Markdown>
            <p></p>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
}
