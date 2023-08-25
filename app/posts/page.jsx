import PostCard from "@/components/PostCard";
import "./posts.css";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

const Posts = async () => {
  const posts = await loadPosts();
  return (
    <section className="grid">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </section>
  );
};

export default Posts;
