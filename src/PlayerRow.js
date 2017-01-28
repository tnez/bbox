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
        {data.notes.map((bit, idx) =>
          <PlayerTile key={idx} active={bit === 1} playing={false} />
         )}
      </div>
      <div className="PlayerRow--clear-btn">( x )</div>
    </div>
  )
}

export default PlayerRow
