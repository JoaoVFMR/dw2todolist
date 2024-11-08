"use client"
import { useEffect, useState } from "react"
import { IUser, getUsers } from "./api"

export default function Users(){
    const [listaUsers,setListaUsers] = useState<IUser[]>([])
    const [userForm, setUserForm] = useState({name:'', email: '', passw: ''})
    
    const cadastrarUser = () => {
        const novoUser = {
            id: 100,
            name: userForm.name,
            email: userForm.email
        }
        const novaLista = [...listaUsers,novoUser]
        setListaUsers(novaLista)
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const lista = await getUsers()
            setListaUsers(lista)
        }

        fetchUsers()
    }, [])

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1>Lista de usuários</h1>
            {
                listaUsers.map((user)=>(
                    <div key={user.id}>{user.name} - {user.email}</div>
                ))
            }
            <hr />
            <input value={userForm.name}
            onChange={(e) => setUserForm({...userForm, name: e.target.value})}
            type="text" placeholder="Nome" />
            <input value={userForm.email}
            onChange={(e) => setUserForm({...userForm, email: e.target.value})}
            type="email" placeholder="E-mail" />
            <input value={userForm.passw}
            onChange={(e) => setUserForm({...userForm, passw: e.target.value})}
            type="password" placeholder="Senha" />
            <button type="button" 
            onClick={cadastrarUser}>
                Cadastrar
            </button>
        </div>
    )
}