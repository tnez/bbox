import React from 'react'
import './PlayerTile.css'

const classFromProps = ({
  active,
  playing,
}) => {
  if ( active && playing) { return "PlayerTile--active-and-playing" }
  if ( active ) { return "PlayerTile--active" }
  if ( playing ) { return "PlayerTile--playing" }
  return "PlayerTile"
}

const PlayerTile = (props) => {
  return <div className={classFromProps(props)} />
}

export default PlayerTile
