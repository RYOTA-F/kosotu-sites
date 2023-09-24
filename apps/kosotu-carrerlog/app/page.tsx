'use client'

import { Button } from 'ui/components/elements/Button'

export default function Index() {
  return (
    <>
      <h1 className="text-slate-500 mt-4">kosotu-carrer-log</h1>
      <Button onClick={() => alert('Carrer')}>test</Button>
    </>
  )
}
