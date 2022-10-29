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

        return (
          <React.Fragment key={index}>
            <h1>{article?.articleTitle}</h1>
            <div id="articleContent"></div>
            <h2>Description</h2>
            <Markdown>{result.slice(0, 250)}</Markdown>
            <p>{article?.author}</p>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
}
