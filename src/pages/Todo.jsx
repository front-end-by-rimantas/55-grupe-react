import { useState } from "react";
import { TodoForm } from "../components/todo/TodoForm";
import { TodoList } from "../components/todo/TodoList";
import { TodoStats } from "../components/todo/TodoStats";

export function Todo() {
    const [list, setList] = useState([]);

    return (
        <main>
            <div className="container">
                <div className="row flex-column-reverse flex-md-row">
                    <div className="col-12 col-md-8">
                        <TodoForm />
                        <TodoList />
                    </div>
                    <div className="col-12 col-md-4 mb-5">
                        <TodoStats data={list} />
                    </div>
                </div>
            </div>
        </main>
    );
}