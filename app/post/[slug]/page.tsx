
interface Blog {
    title: string
    content: string
    slug: string
    date: string
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getBlogPost(params.slug)
    return (
      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    )
  }

export const getBlogPost = async (slug: string):Promise<Blog> => {
  const post = {
    slug: slug as string,
    title: `Blog Post ${slug}`,
    content: `<p>This is the content of the blog post with slug: ${slug}</p>`,
    date: new Date().toISOString().split('T')[0],
  };

  return post;
};