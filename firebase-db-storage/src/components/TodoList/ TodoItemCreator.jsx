import { A11yHidden } from '@/components';
import { useId, useState } from 'react';
import { StyledCreatorContainer } from './styled';
import debounce from 'lodash.debounce';
import { PropTypes } from 'prop-types';

export default function TodoItemCreator({ addTodo }) {
  const id = useId();
  const [inputTodo, setInputTodo] = useState('할 일을 입력하세요.');

  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleAddTodo = () => {
    console.log('할 일 추가 기능 구현');
    addTodo(inputTodo);
    setInputTodo('');
  };

  return (
    <StyledCreatorContainer>
      <A11yHidden as="label" htmlFor={id}>
        할 일
      </A11yHidden>
      <input
        type="text"
        id={id}
        placeholder={inputTodo}
        // onChange={handleChange}
        onChange={debounce(handleChange, 400)}
      />
      <button type="button" onClick={handleAddTodo}>
        추가
      </button>
    </StyledCreatorContainer>
  );
}

TodoItemCreator.propTypes = {
  addTodo: PropTypes.func,
};
