type Props = {
  completedTodosCount: number;
  todosType: 'all' | 'active' | 'completed';
  setTodosType: (todosType: 'all' | 'active' | 'completed') => void;
  clearCompletedTodo: () => void;
};

export const Footer: React.FC<Props> = ({
  completedTodosCount,
  todosType,
  setTodosType,
  clearCompletedTodo,
}) => (
  <>
    <span className="todo-count" data-cy="TodosCounter">
      {completedTodosCount} items left
    </span>

    {/* Active link should have the 'selected' class */}
    <nav className="filter" data-cy="Filter">
      <a
        href="#/"
        className={`filter__link ${todosType === 'all' ? 'selected' : ''}`}
        data-cy="FilterLinkAll"
        onClick={() => setTodosType('all')}
      >
        All
      </a>

      <a
        href="#/active"
        className={`filter__link ${todosType === 'active' ? 'selected' : ''}`}
        data-cy="FilterLinkActive"
        onClick={() => setTodosType('active')}
      >
        Active
      </a>

      <a
        href="#/completed"
        className={`filter__link ${todosType === 'completed' ? 'selected' : ''}`}
        data-cy="FilterLinkCompleted"
        onClick={() => setTodosType('completed')}
      >
        Completed
      </a>
    </nav>

    {/* this button should be disabled if there are no completed todos */}
    <button
      type="button"
      className="todoapp__clear-completed"
      data-cy="ClearCompletedButton"
      onClick={clearCompletedTodo}
    >
      Clear completed
    </button>
  </>
);
