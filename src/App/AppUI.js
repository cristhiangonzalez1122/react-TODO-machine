import React from "react";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import TodoCreateButton from "../TodoCreateButton";
import TodosLoading from "../TodosLoading";
import TodosError from "../TodosError";
import EmptyTodos from "../EmptyTodos";
import { TodoContex } from "../context";
import Modal from "../Modal";
import TodoForm from "../TodoForm";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContex);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading />}
        {loading && <TodosLoading />}
        {loading && <TodosLoading />}
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            deleteTodo={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <TodoCreateButton setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export default AppUI;
