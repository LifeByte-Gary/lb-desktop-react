import React from 'react'
import { CssBaseline } from '@mui/material'
import { Button } from '@/components/base'

function App(): JSX.Element {
  return (
    <>
      {/* Normalize global styles. */}
      <CssBaseline />

      <Button
        color={'secondary'}
        variant={'contained'}
      >
        test
      </Button>
    </>
  )
}

export default App
