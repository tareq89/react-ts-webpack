import React, { useEffect, useState, useRef } from 'react'
import { render } from 'react-dom'
import { callApi } from '@packages/api'
import styles from '~/sass/App.scss'
import style2 from '~/sass/nested/div.scss'
import sum from '~/utils/sum'

function App(): JSX.Element {
  const [data, setdata] = useState(null)
  let loading = useRef(true)
  useEffect(() => {
    callApi().then((response) => {
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
        <div className={style2.Name}>You are from {data.name}</div>
        <div>Country code {data.country}</div>
        <div>ip {data.ip}</div>
        <div>
          {' '}
          1 + 2 ={'>'} {sum(1, 2)}
        </div>
      </div>
    )
  } else {
    content = <div>Something went wrong</div>
  }
  return content
}

const root = document.getElementById('App')
render(<App />, root)
