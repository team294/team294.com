import { client } from "../../../../tina/__generated__/client";
import Link from "next/link";

export default async function Post({ params }: any) {
  const slug = params.slug + ".md";
  let post: any = await client?.queries?.blog({ relativePath: slug });
  post = post.data.blog;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date;
  };

  return (
    <section
      id="post"
      className="flex flex-col text-left w-full max-w-screen-2xl p-12 md:p-20 gap-8 md:gap-12 overflow-hidden"
    >
      <div>
        <p className="title">{post.title}</p>
        <p className="body">{formatDate(post.date).toLocaleDateString()}</p>
      </div>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto max-h-80 object-contain object-left rounded-xl"
        />
      )}
      <p className="body">{post.body}</p>
      <Link href="/blog">
        <p className="body transition-transform hover:scale-110 ease-in-out duration-300 origin-left">
          ← Back to Posts
        </p>
      </Link>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await client?.queries?.blogConnection();
  const paths =
    posts?.data?.blogConnection?.edges?.map((edge) => ({
      slug: edge?.node?._sys.relativePath.replace(".md", ""),
    })) ?? [];

  return paths;
}
