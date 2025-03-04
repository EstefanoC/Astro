import { useState } from 'react'

export default function ExampleReact() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full">
      <p className="prose !text-amber-50">Ahora hay {count} cuentas</p>

      <button
        className="border w-fit border-amber-400 cursor-pointer bg-amber-50 px-4 py-2 hover:scale-105 transition-all"
        onClick={() => setCount(count + 1)}
      >
        Sumar
      </button>

      <button
        className="border w-fit border-amber-400 cursor-pointer bg-amber-50 px-4 py-2 hover:scale-105 transition-all"
        onClick={() => setCount(count - 1)}
      >
        Restar
      </button>
    </div>
  )
}
