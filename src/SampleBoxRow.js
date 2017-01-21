import React from 'react'
import './SampleBoxRow.css'
import SampleBox from './SampleBox'
import data from './SampleBoxData'

const SampleBoxRow = ({
  sampleBoxData,
}) => {
  return (
    <div className="SampleBoxRow">
      {sampleBoxData.map((props, idx) =>
         <SampleBox {...props} key={idx} />
       )}
    </div>
  )
}

SampleBoxRow.defaultProps = {
  sampleBoxData: data,
}

export default SampleBoxRow
