import { title } from "process"
import { useState } from "react";
import { backEndClient } from "../../sanityclient";


type ArticleProps = {
    title: string,
    description: string,
    imageLink: string,
    
}

const articleFields = `
_id,
'date': publishedAt,
articleImage,
articleBody,
articleAuthor,
'articleSlug': slug.current,
'author': author->{firstName, 'avatarLink': image.asset-> url},
categories,

`



export async function GetPostSlug(slug : string, preview: boolean){
    const [post, setPosts] = useState([]);




const groqQuery = `*[_type == "article" && slug.current == $slug] | order (_updatedAt asc)'{

    ${articleFields}
articleBody

}`





}



export default function Article(props: ArticleProps): Article {

    return (
        <>
        
        {title}
        
        </>
    )
}

// getStaticProps for props of article
export async function getStaticProps(context:any){
    return {
        props: {

        },// will be passed to the page component as props
    }
}


