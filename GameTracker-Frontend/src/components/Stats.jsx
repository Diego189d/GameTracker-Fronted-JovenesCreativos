import React, { useEffect, useState } from 'react'
import { fetchGames } from '../services/api'

export default function Stats(){
  const [games, setGames] = useState([])
  useEffect(()=>{ (async ()=>{ setGames(await fetchGames()) })() },[])

  const total = games.length
  const completed = games.filter(g=>g.completed).length
  const hours = games.reduce((s,g)=>s + (g.hoursPlayed || 0), 0)
  const avgScore = (games.reduce((s,g)=>s + (g.score || 0),0) / (games.length || 1)).toFixed(2)

  return (
    <div>
      <h2>Estadísticas personales</h2>
      <div className="grid" style={{maxWidth:600}}>
        <div className="card">Total de juegos: <strong>{total}</strong></div>
        <div className="card">Completados: <strong>{completed}</strong></div>
        <div className="card">Horas totales: <strong>{hours}</strong></div>
        <div className="card">Puntaje promedio: <strong>{avgScore}</strong></div>
      </div>
    </div>
  )
}
