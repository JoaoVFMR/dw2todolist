"use client"
import { useEffect, useState } from "react"

export default function Cep(){
    const [cep, setCep] = useState('13330140')
    const [endereco, setEndereco] = useState()

    const fetchCep = async () => {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const endereco = await resposta.json()
        setEndereco(endereco)
    }

    useEffect(()=>{
        fetchCep()
    },[])

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1>Buscar CEP</h1>
            <input value={cep}
            onChange={(e) => setCep(e.target.value)} 
            type="text" placeholder="Digite seu CEP" />
            <button onClick={fetchCep}>Buscar meu CEP</button>
            <hr />
            <p>CEP: {cep}</p>
            <p>Cidade: {endereco?.localidade}</p>
            <p>Bairro: {endereco?.bairro}</p>
        </div>
    )
}