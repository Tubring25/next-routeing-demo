'use client'

import { useState } from 'react'

export default function SharedComponent() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Shared Component</h2>
      <p>Count: {count}</p>
      <button 
        className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  )
}