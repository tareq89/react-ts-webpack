import React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import * as Sentry from '@sentry/browser'

if (
  process.env.NODE_ENV === 'production' &&
  process.env.REACT_APP_SENTRY_RELEASE
) {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    release: process.env.REACT_APP_SENTRY_RELEASE
  })
}

const root = document.getElementById('root')
render(<App />, root)
