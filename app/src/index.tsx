import React, { useEffect, useState, useRef,  } from 'react'
import { render } from 'react-dom'
import { callApi } from '@packages/api'
import * as styles from '../sass/index.sass'
// import '../sass/index.sass'
// import '../sass/index.css'

function App(): JSX.Element {
  const [data, setdata] = useState(null)
  let loading = useRef(true)
  useEffect(() => {
    console.log(styles)
    // console.log(styleCss)
    callApi()
      .then(response => {
        loading.current = false
        setdata(response)
      })
  }, [])

  let content
  if (loading.current) {
    content = <div>Loading ...</div>
  } else if (data) {
    content = (
      <div className={styles.AppBody}>
        <div>You are from {data.name}</div>
        <div>Country code {data.country}</div>
        <div>ip {data.ip}</div>
      </div>
    )
  } else {
    content = <div>Something went wrong</div>
  }
  return content
}

const root = document.getElementById('App')
render(<App />, root)
