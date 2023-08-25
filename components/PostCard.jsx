"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PostCard({ post }) {
  const router = useRouter();
  return (
    <article className="bg-gray-950 p-10">
      <div>
        <Link href={`/posts/${post.id}`}>
          <h3 className="text-xl font-bold mb-4">
            {post.id}. {post.title.toUpperCase()}
          </h3>
        </Link>
      </div>
      <div>
        <p className="text-slate-300"> {post.body}</p>
      </div>
      <div>
        <button
          style={{ margin: "6px 0" }}
          onClick={() => router.push(`/posts/${post.id}`)}
        >
          Post
        </button>
      </div>
    </article>
  );
}
