import React from "react";

const Posts = async () => {
  const fetchPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await fetchPosts.json();
  return (
    <section>
      <h2>Posts</h2>
      <div
        style={{
          display: "flex",
          maxWidth: "100vw",
          flexWrap: "wrap",
          alignItems: "baseline",
          justifyContent: "space-around",
        }}
      >
        {posts.map((post) => (
          <article
            key={post.id}
            style={{
              flexBasis: "40%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#202020",
              margin: "1rem",
              padding: "1rem",
              color: "#fff",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "skyblue",
              }}
            >
              <h3>{post.title}</h3>
              <p>{post.id}</p>
            </div>
            <div style={{ padding: "6px" }}>{post.body}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Posts;
