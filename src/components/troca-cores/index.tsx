"use client"
import { useState } from "react"

export default function TrocaCores(){
    const [color, setColor] = useState("red")
    return (
        <div style={{backgroundColor: color}}>
            <button onClick={() => setColor("red")}>Vermelho</button>
            <button onClick={() => setColor("blue")}>Azul</button>
            <button onClick={() => setColor("green")}>Verde</button>
        </div>
    )
}