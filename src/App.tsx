import React from 'react'
import './App.css'
import { CssBaseline } from '@mui/material'
import { Button } from '@/components/base'

function App(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Button style={{ fontSize: '1rem' }}>test</Button>
    </>
  )
}

export default App
