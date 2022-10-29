import { useEffect, useState } from "react";
import { backEndClient, urlFor } from "../../../sanityclients";
import Image from "next/image";


export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const GroqQuery = '*[_type == "articles"]';

    backEndClient.fetch(GroqQuery).then((data) => setArticles(data));
  }, []);

  return (
    <div>
      test
      {articles.map((article: any, index: any) => {
        
        return (
            <div key={index}>
            <h1>{article?.articleTitle}</h1>
  
            <p> {article?.articleBody}</p>
          </div>
        )
      })}
    </div>
  );
}
