import { Suspense } from "react";
import Posts from "../page";

async function loadPost({id}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

export default async function PostPage({params}){
const {id} = params;
const post = await loadPost({id})

return (
    <>
    <div>
    <h1>{post.id}. {post.title}</h1>
    <p>{post.body}</p>
</div>
<hr />
<h3>Otras publicaciones:</h3>
<Suspense fallback={<div><h3>Cargando listado de publicaciones...</h3></div>}>
    <Posts/>
</Suspense>

    </>
)
}