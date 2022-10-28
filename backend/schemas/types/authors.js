const authors = {
   name: "authors",
   title: "Authors",
   type: "document",
   
   fields: [
   {
      name: "firstName",
      title: "First Name",
      type: "string"
   },
   {
      name: "lastName",
      title: "Last Name",
      type: "string",
   },
   {
      name: "avatarLink",
      title: "AvatarUrl",
      type: "image",
      options: {
         hotspot: true,
      },
   },
   
   
   ],

};

export default authors;