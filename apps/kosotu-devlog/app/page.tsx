'use client'

import { Button } from 'ui/components/elements/Button'

export default function Index() {
  return (
    <>
      <h1 className="mt-10">kosotu-devlog</h1>
      <Button onClick={() => alert('Dev')}>button</Button>
    </>
  )
}
