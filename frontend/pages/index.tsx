import Image from "next/image";
import { Header, Nav } from "./components";
import Carousel from 'react-grid-carousel';
import { backEndClient, urlFor } from "../sanityclient";
import React, { useEffect, useState } from "react";
import { Articles } from "./container";


export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const GroqQuery = '*[_type == "articles"]';

    backEndClient.fetch(GroqQuery).then((data : any) => setArticles(data));
  }, []);

  return (
    <div >
      <Header />
      <Nav />
      <h2>Home</h2>
      <Carousel cols={2} rows={1} gap={15} loop>
     
      {articles.map((article: any, index: any) => {
        
        return (
      
       <Carousel.Item key={index}>
         <Image
              src={`${urlFor(article?.articleImage)}`}
              alt={article?.title}
              width="350"
              height="250"
              style={{borderRadius: "28px", boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem gray"}}
            />
       </Carousel.Item>
          
          
        );
      })}
  
    
    </Carousel>

    <Articles/>
    
    </div>
  );
}
