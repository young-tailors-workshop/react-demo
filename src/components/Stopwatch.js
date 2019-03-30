import React, { useEffect, useRef, useReducer } from 'react'

const StopWatch = () => {
  const reducer = (state, newState) => {
    return {
      ...state,
      ...newState,
    }
    // switch (action.type) {
    //   case 'TOGGLE_RUNNING':
    //     return {
    //       ...state,
    //       running: !state.running,
    //     }
    //   case 'SET_LAPSE':
    //     return {
    //       ...state,
    //       lapse: action.lapse,
    //     }
    //   case 'RESET':
    //     return {
    //       ...state,
    //       running: false,
    //       lapse: 0,
    //     }
    //   default:
    //     return state
    // }
  }
  const [{ running, lapse }, dispatch] = useReducer(reducer, {
    running: false,
    lapse: 0,
  })

  let intervalRef = useRef()

  function toggleRunning() {
    if (!running) {
      const start = Date.now() - lapse
      intervalRef.current = setInterval(() => {
        dispatch({ lapse: Date.now() - start })
      }, 0)
    } else {
      clearInterval(intervalRef.current)
    }
    dispatch({ running: !running })
  }

  useEffect(() => {}, [running, lapse])

  function reset() {
    dispatch({ running: false, lapse: 0 })
    clearInterval(intervalRef.current)
  }

  return (
    <div>
      <h1>{lapse} ms</h1>
      <button onClick={toggleRunning}>{running ? `Pause` : `Start`}</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default StopWatch
