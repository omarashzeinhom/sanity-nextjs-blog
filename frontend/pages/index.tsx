import Image from "next/image";
import { Header, SideNav } from "./components";
import Carousel from "react-grid-carousel";
import { backEndClient, urlFor } from "../sanityclient";
import React, { useEffect, useState } from "react";
import { ArticlesComp } from "./articles/index";
import { SSRProvider } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const GroqQuery = '*[_type == "articles"]';
    backEndClient.fetch(GroqQuery).then((data: any) => setArticles(data));
  }, []);

  return (
    <SSRProvider>
      <Header />

      <SideNav />

      <h2>Home</h2>

      <Carousel cols={2} rows={1} gap={10} loop={true}>
        {articles.map((article: any, index: any) => {
          const title: string = `${article?.title}`;
          const imgLink: string = `${urlFor(article?.articleImage)}`;
          const articleSlug: string = JSON.parse(
            JSON.stringify(`${article?.articleSlug}`)
          );

          console.log(articleSlug);

          return (
            <Carousel.Item key={index}>
              <Link as={`/articles/${articleSlug}`}href={`/articles/[slug]`} >
              
              <Image
                src={imgLink}
                alt={article?.title}
                width="150"
                height="150"
                loading="lazy"
                blurDataURL={imgLink}
                style={{
                  objectFit: "cover",
                  borderRadius: "28px",
                  boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem gray",
                }}
              />
              </Link>
        
              <h2>{title.slice(0, 15)}...</h2>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <ArticlesComp />
    </SSRProvider>
  );
}
