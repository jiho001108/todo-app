import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
          index={index} // 스타일 위해 인덱스 추가
        />
      );
    },
    [todos, onRemove, onToggle],
  );

  return (
    <List
      className="TodoList"
      width={512} // TodoList 전체 너비
      height={513} // TodoList 전체 높이
      rowCount={todos.length} // TodoListItem 항목 개수
      rowHeight={57} // TodoListItem 항목 높이
      rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
      list={todos} // 배열
      style={{ outline: 'none' }} // List에 기본 적용되는 outline 스타일 제거
    />
  );
};

export default React.memo(TodoList);
