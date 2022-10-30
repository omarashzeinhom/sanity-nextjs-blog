import Image from "next/image";
import { Header, SideNav } from "./components";
import Carousel from "react-grid-carousel";
import { backEndClient, urlFor } from "../sanityclient";
import React, { useEffect, useState } from "react";
import { Articles } from "./container";
import Stack from 'react-bootstrap/Stack';


export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const GroqQuery = '*[_type == "articles"]';

    backEndClient.fetch(GroqQuery).then((data: any) => setArticles(data));
  }, []);

  return (
    <div>
      <Header />
      <SideNav />
      <h2>Home</h2>
      <Carousel
        loop
        cols={3}
        rows={1}
        gap={4}
        mobileBreakpoint={750}
      >
        {articles.map((article: any, index: any) => {
          const title: string = `${article?.title}`;
          const imgLink: string = `${urlFor(article?.articleImage)}`;

          return (
            <Carousel.Item key={index}>
              <Image
                src={imgLink}
                alt={article?.title}
                width="150"
                height="150"
                loading="lazy"
                style={{
                  borderRadius: "28px",
                  boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem gray",
                }}
              />
              <h2>{title.slice(0, 15)}...</h2>
            </Carousel.Item>
          );
        })}
      </Carousel>
      
      <Articles />
   
    </div>
  );
}
