import { useRecoilValue } from 'recoil';
import { postsState } from './@store/postsState';

export default function PostsPage() {
  const posts = useRecoilValue(postsState);

  return (
    <div>
      <h2>포스트 리스트</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
