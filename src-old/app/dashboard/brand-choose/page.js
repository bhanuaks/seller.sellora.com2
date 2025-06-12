import React from 'react'
import BrandChoosePage from './brandChoosePage'
import { Suspense } from "react";
const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}> 
      <BrandChoosePage />
  </Suspense>
  )
}

export default page