const articles = {
  name: "articles",
  title: "Articles",
  type: "document",

  fields: [
    {
      name: "articleTitle",
      title: "Article Title",
      type: "string",
    },
    {
      name: "articleImage",
      title: "Article Image",
      type: "image",
      options: {
        hotspot: "true",
      },
    },
    {
      name: "articleBody",
      title: "Article Body",
      description: "Add your Article Body here in Markdown",
      type: "markdown",
    },
  ],
};

export default articles;
