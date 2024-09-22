"use client";

import { client } from "../../../tina/__generated__/client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  const [retrieved, setRetrieved] = useState(false);

  const [posts, setPosts] = useState([]);

  const retrieveContent = async () => {
    let content: any = null;
    try {
      content = await client?.queries?.blogConnection();
      content = content.data.blogConnection?.edges?.map(
        (edge: any) => edge.node
      );
      content = content.sort((a: any, b: any) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
      if (content) setPosts(content);
      setRetrieved(true);
    } catch {
      console.log("Failed to fetch.");
    }
  };

  if (!retrieved) retrieveContent();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date;
  };

  return (
    <div id="blog" className="flex flex-col items-center justify-center w-full">
      <section
        id="posts"
        className="flex flex-col items-center text-center w-full max-w-screen-2xl p-12 md:p-20 gap-8 md:gap-12"
      >
        <p className="title">Blog</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link
              key={post.title}
              href={`/blog/${post._sys.relativePath.replace(".md", "")}`}
            >
              <div
                key={post.link}
                className="flex flex-col shadow-lg py-4 px-8 rounded-xl text-left gap-4 border border-primary transition-transform hover:scale-105 ease-in-out duration-300"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width="100"
                  height="100"
                  className="h-full w-full rounded-xl"
                />
                <div>
                  <p className="body font-bold text-primary">{post.title}</p>
                  <p className="body text-primary">
                    {formatDate(post.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
