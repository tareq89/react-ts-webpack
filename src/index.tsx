import React from 'react'
import { render } from 'react-dom'

function App(): JSX.Element {
  return (
    <div>
      Hello world!! this is my moina pakhi
    </div>
  )
}

const root = document.getElementById('app-root')
render(<App />, root)
