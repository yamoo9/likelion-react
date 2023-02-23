import classes from './Nav.module.scss';
import { A11yHidden } from '@/components';

interface Props {
  as?: 'h2' | 'h3';
  headline: string;
  list: { id: string; to: string; text: string }[];
  [key: string]: unknown;
}

export function Nav({ as, headline, list, ...restProps }: Props): JSX.Element {
  return (
    <nav {...restProps}>
      <A11yHidden as={as}>{headline}</A11yHidden>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <a href={item.to}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Nav.defaultProps = {
  list: [],
  as: 'h2',
};
