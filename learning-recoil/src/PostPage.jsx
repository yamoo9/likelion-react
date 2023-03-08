import { useRecoilValue } from 'recoil';
import { /* postState, */ slowPostState } from './@store/postsState';

export default function PostPage() {
  // const posts = useRecoilValue(postState({ page: 3, limit: 5 }));
  // return (
  //   <div>
  //     <h2>포스트 리스트</h2>
  //     <ul>
  //       {posts.map((post) => (
  //         <li key={post.id}>{post.title}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  const post = useRecoilValue(slowPostState(9));

  return (
    <div>
      <h2>싱글 포스트</h2>
      <div>
        <span>{post.id}</span>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
