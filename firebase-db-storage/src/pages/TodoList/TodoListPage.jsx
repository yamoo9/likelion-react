import classes from './TodoListPage.module.scss';
import { useDocumentTitle } from '@/hooks';

export default function TodoListPage() {
  useDocumentTitle('할 일 목록 → Likelion 4th');

  return (
    <div className={classes.TodoListPage}>
      <h2 className={classes.headline}>할 일 목록 구현</h2>
    </div>
  );
}
