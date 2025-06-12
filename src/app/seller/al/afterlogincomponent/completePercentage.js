import React from 'react'

const CompletePercentage = ({sellor}) => {
  return (
    <>
    <span style={{ width: `${sellor && sellor.complete_step? 10*sellor.complete_step:0}%` }} />
    <output id="progress-output-1">{sellor && sellor.complete_step? 10*sellor.complete_step:0}%</output>
    </>
  )
}

export default CompletePercentage