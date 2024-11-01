import ButtonFatec from "@/components/button-fatec"
import TrocaCores from "@/components/troca-cores"
import Link from "next/link"

export default function TodoList(){
    return (
        <>
            <h1>Todo List</h1>
            <Link href='/'>
                <span className="text-blue-500 hover:underline">Home</span>
            </Link>
            <ButtonFatec text="Clique aqui 1" />
            <ButtonFatec text="Clique aqui 2" />
            <ButtonFatec text="" />

            <TrocaCores />
        </>
    )
}