import React from 'react'
import { CssBaseline } from '@mui/material'
import { Button } from '@/components/base'
import { Layout } from '@/components/layout'

function App(): JSX.Element {
  return (
    <>
      {/* Normalize global styles. */}
      <CssBaseline />

      <Layout>
        <Button
          color={'primary'}
          variant={'contained'}
          className={'text-red-50'}
        >
          test
        </Button>
      </Layout>
    </>
  )
}

export default App
