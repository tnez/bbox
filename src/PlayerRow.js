import React from 'react'
import './PlayerRow.css'
// children
import PlayerTile from './PlayerTile'

const PlayerRow = ({
  data,
}) => {
  return(
    <div className="PlayerRow">
      <h4 className="PlayerRow--label">{data.label}</h4>
      <div className="PlayerRow--tiles">
        {data.notes.map((active, idx) =>
          <PlayerTile key={idx} active={active} playing={idx === 7} />
         )}
      </div>
      <div className="PlayerRow--clear-btn">( x )</div>
    </div>
  )
}

export default PlayerRow
