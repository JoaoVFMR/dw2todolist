"use client"
import { useState } from "react"

interface ButtonFatecProps {
    text: string
}

export default function ButtonFatec({ text }: ButtonFatecProps) {
    if (text === "")
        return <p>Botão desativado</p>

    const [contador, setContador] = useState(0)

    return (
        <button className="border-2 border-solid m-3"
            onClick={() => setContador(contador + 1)}>
            {text} - Cliques {contador}
        </button>
    )
}