import React, { useEffect, useState } from "react";
import { backEndClient, urlFor } from "../../../sanityclient";
import Image from "next/image";
import Markdown from "markdown-to-jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

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
    <Container fluid>
      <Row className="text-center">
        <Col size="5">
          <ButtonGroup>
            {ArticleCategories.map((item, index) => (
              <Button
                key={index}
                onClick={() => handleFilteringArticles(item)}
                className={`btn btn-success ${
                  activeFilter === item ? "active" : "  "
                }`}
              >
                {item}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>

      <Row>
        {filterArticles.map((article: any, index: any) => {
          const result = `${article?.articleBody}`;
          //console.log(JSON.parse(JSON.stringify(article?.articleAuthor)));
          const title = `${article?.title}`;
          return (
            <Col key={index}>
              <h1>{title.slice(0, 15)}</h1>
              <Image
                src={`${urlFor(article?.articleImage)}`}
                loading="lazy"
                alt={title.slice(0, 5)}
                width="250"
                height="250"
                style={{
                  borderRadius: "28px",
                  boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem gray",
                }}
              />
              <Markdown>{result.slice(0, 75)}</Markdown>
              <p></p>
              <hr />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
