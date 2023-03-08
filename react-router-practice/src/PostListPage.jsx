import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

export default function PostListPage() {
  const posts = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>포스트 리스트 🌡️</title>
        <meta name="description" content="post list ...." />
      </Helmet>
      <h2>포스트 리스트</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <Link to={`/post/${post.id}`}>
              {post.title.slice(0, 45).toLowerCase()}...
            </Link>
          </h3>
        </div>
      ))}
    </div>
  );
}

export async function loader({ request, params }) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error({ message: 'Sever Error', status: 500 });
  }

  // Promise<T>
  return response.json();
}
