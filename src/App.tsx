import { useState } from "react";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";
import SearchBox from "./components/SearchBox";

export default function App() {
  const [userId, setUserId] = useState(1);

  const todos = [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn TypeScript", completed: false },
    { id: 3, title: "Build AI Code Review Agent", completed: true },
  ];

  return (
    <div>
      <h1>Portfolio Agent - React Review Sample</h1>

      <section>
        <h2>User Profile</h2>

        <button onClick={() => setUserId(userId + 1)}>
          Next User
        </button>

        <UserProfile userId={userId} />
      </section>

      <section>
        <h2>Todo List</h2>
        <TodoList todos={todos} />
      </section>

      <section>
        <h2>Search</h2>

        <SearchBox
          onSearch={(query: string) => {
            console.log("Searching:", query);
          }}
        />
      </section>
    </div>
  );
}