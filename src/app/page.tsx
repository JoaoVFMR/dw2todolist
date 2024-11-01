import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-amber-600">Olá mundo!</h1>

      <Link href='/todo'>
        <span className="text-blue-500 hover:underline">Todo list</span>
      </Link>
      
    </div>
  )
}