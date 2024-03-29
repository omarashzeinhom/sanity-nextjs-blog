const articles = {
  name: "articles",
  title: "Articles",
  type: "document",

  fields: [
    {
      name: "title",
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
    {
      title: "Author",
      name: "articleAuthor",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      title: "Article Slug",
      name: "articleSlug",
      type: "slug",
      initialValue: "title",
      options : {
        source: "title",
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0,200)
      }
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          name: "category",
          title: "Category",
          type: "string",
        },
      ],
    },
  ],

  
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "articleImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },


};

export default articles;
