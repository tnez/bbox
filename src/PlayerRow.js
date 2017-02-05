import React from 'react'
import './PlayerRow.css'
// children
import PlayerTile from './PlayerTile'

const PlayerRow = ({
  clearHandler,
  data,
  t,
}) => {
  return(
    <div className="PlayerRow">
      <h4 className="PlayerRow--label">{data.label}</h4>
      <div className="PlayerRow--tiles">
        {data.notes.map((active, idx) =>
          <PlayerTile key={idx} active={active} playing={t === idx} />
         )}
      </div>
      <div className="PlayerRow--clear-btn" onClick={clearHandler}>( x )</div>
    </div>
  )
}

export default PlayerRow
