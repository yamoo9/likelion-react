import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

export default function PostDetailPage() {
  const post = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>{post.title} 포스트 상세 정보 😄</title>
        <meta name="description" content={post.body} />
      </Helmet>
      <h2>{post.id} 포스트 상세 페이지</h2>
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

// GET (READ)
export async function loader({ request, params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  if (!response.ok) {
    throw new Error({ message: 'Sever Error', status: 500 });
  }

  // Promise<T>
  return response.json();
}

// POST (CREATE), PUT (UPDATE), DELETE
export async function action({ request }) {
  // create, update, delete
}
