import React from 'react'
import './SampleBox.css'

const decorateWithActive = (classStr, active) =>
  active ? `${classStr}-active` : classStr

const SampleBox = ({
  active,
  clickHandler,
  keylabel,
  label,
}) => {
  return (
    <div
      className={decorateWithActive("SampleBox", active)}
      onClick={clickHandler}
    >
      <div
        className={decorateWithActive("SampleBox--keylabel", active)}
      >
        {keylabel}
      </div>
      <div
        className={decorateWithActive("SampleBox--label", active)}
      >
        {label}
      </div>
    </div>
  )
}

export default SampleBox
