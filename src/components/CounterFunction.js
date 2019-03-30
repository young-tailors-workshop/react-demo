import React, { useState, useEffect, useRef } from 'react'

const CounterFunction = () => {
  const [counter, setCounter] = useState(0)
  let interval = useRef()
  const inc = () => {
    setCounter(counter + 1)
  }

  const dec = () => {
    setCounter(counter - 1)
  }

  useEffect(() => {
    interval = setInterval(() => {
      inc()
    }, 1000)

    return () => clearInterval(interval)
  }, [counter])

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}

export default CounterFunction
