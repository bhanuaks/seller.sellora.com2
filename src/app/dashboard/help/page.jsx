import React, { lazy, Suspense } from 'react'
// import HelpPage from './HelpPage'

const HelpPage = lazy(() => import('./HelpPage'));
function page() {
  return (
    <Suspense fallback={<>Loading..</>}> 
      <HelpPage />
    </Suspense>
  )
}

export default page