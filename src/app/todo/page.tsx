"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ITodo, getTodos } from "./api"

export default function TodoList() {
    const [tarefas, setTarefas] = useState<ITodo[]>([])
    const [filtro, setFiltro] = useState(10)

    useEffect(() => {
        const fetchTodos = async () => {
            const listaTarefas = await getTodos()
            listaTarefas.splice(filtro)
            setTarefas(listaTarefas)
        }

        fetchTodos()
    }, [filtro])

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1>Todo List</h1>
            <Link href='/'>
                <span className="text-blue-500 hover:underline">Home</span>
            </Link>
            <hr />
            <ul>
                {
                    tarefas.map((tarefa) =>
                        (<li key={tarefa.id}>{tarefa.title}</li>))
                }
            </ul>
            <button onClick={() => setFiltro(20)}>Filtrar 20</button>
        </div>
    )
}