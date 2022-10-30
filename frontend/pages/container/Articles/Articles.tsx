import React, { useEffect, useState } from "react";
import { backEndClient, urlFor } from "../../../sanityclient";
import Image from "next/image";
import Markdown from "markdown-to-jsx";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [filterArticles, setFilterArticles] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const ArticleCategories = [
    "All",
    "PHP",
    "JavaScript",
    "TypeScript",
    "CSS3",
    "SASS & SCSS",
    "GO",
    "C#",
  ];

  useEffect(() => {
    const GroqQuery = '*[_type == "articles"]';

    backEndClient.fetch(GroqQuery).then((data) => {
      setArticles(data);
      setFilterArticles(data);
    });
  }, []);

  const handleFilteringArticles = (item: string) => {
    setActiveFilter(item);
    if (item === "All") {
      setFilterArticles(articles);
    } else {
      setFilterArticles(
        articles.filter((article) => article?.categories?.includes(item))
      );
    }
  };

  return (
    <div>
      {ArticleCategories.map((item, index) => (
        <div
          key={index}
          onClick={() => handleFilteringArticles(item)}
          className={`btn app__work-filter-item app_flex p-text ${
            activeFilter === item ? "item-active" : "  "
          }`}
        >
          {item}
        </div>
      ))}

      {filterArticles.map((article: any, index: any) => {
        const result = `${article?.articleBody}`;
        //console.log(JSON.parse(JSON.stringify(article?.articleAuthor)));

        return (
          <React.Fragment key={index}>
            <h1>{article?.title}</h1>
            <Image
              src={`${urlFor(article?.articleImage)}`}
              loading="lazy"
              alt={article?.title}
              width="250"
              height="250"
              style={{
                borderRadius: "28px",
                boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem gray",
              }}
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
