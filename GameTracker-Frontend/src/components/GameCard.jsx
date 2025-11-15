import React, { useState } from 'react'
import ReviewsList from './ReviewsList'

export default function GameCard({ game, onDelete, onEdit }){
  const [showReviews, setShowReviews] = useState(false)

  return (
    <div className="card">
      <img src={game.coverUrl || 'https://via.placeholder.com/300x170?text=Cover'} alt="cover" style={{width:'100%',borderRadius:6}} />
      <h3>{game.title}</h3>
      <p className="small">{game.platform} • {game.hoursPlayed || 0} hrs • {game.completed ? 'Completado' : 'Jugando'}</p>
      <p className="small">Score: {game.score ?? '—'}</p>
      <div style={{display:'flex',gap:8,marginTop:8}}>
        <button className="button" onClick={()=>setShowReviews(v=>!v)}>{showReviews ? 'Ocultar reseñas' : 'Ver reseñas'}</button>
        <button className="button" onClick={onEdit}>Editar</button>
        <button className="button" onClick={()=>onDelete(game._id)}>Eliminar</button>
      </div>
      {showReviews && <ReviewsList gameId={game._id} />}
    </div>
  )
}
