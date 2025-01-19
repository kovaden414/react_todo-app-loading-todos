import { Todo } from '../types/Todo';

type Props = {
  todos: Todo[];
  handleToggleAllButton: () => void;
  handleSubmitButton: (event: React.FormEvent) => void;
  title: string;
  setTitle: (title: string) => void;
};

export const Header: React.FC<Props> = ({
  todos,
  handleToggleAllButton,
  handleSubmitButton,
  title,
  setTitle,
}) => (
  <>
    {/* this button should have `active` class only if all todos are completed */}
    <button
      type="button"
      className={`todoapp__toggle-all ${todos.find(todo => !todo.completed) ? '' : 'active'}`}
      data-cy="ToggleAllButton"
      onClick={handleToggleAllButton}
    />

    {/* Add a todo on form submit */}
    <form onSubmit={handleSubmitButton}>
      <input
        data-cy="NewTodoField"
        type="text"
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={event => {
          setTitle(event.target.value);
        }}
      />
    </form>
  </>
);
