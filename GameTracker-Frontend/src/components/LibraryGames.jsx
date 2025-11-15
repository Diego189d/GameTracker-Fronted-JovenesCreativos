import React, { useEffect, useState } from 'react'
import { fetchGames, deleteGame } from '../services/api'
import GameCard from './GameCard'
import { useNavigate } from 'react-router-dom'

export default function LibraryGames(){
  const [games, setGames] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    load()
  },[])

  const load = async ()=>{
    const data = await fetchGames()
    setGames(data || [])
  }

  const handleDelete = async (id) =>{
    await deleteGame(id)
    setGames(games.filter(g=>g._id !== id))
  }

  return (
    <div>
      <h2>Biblioteca</h2>
      <div className="grid">
        {games.map(g=> (
          <GameCard key={g._id} game={g} onDelete={handleDelete} onEdit={()=>navigate(`/edit/${g._id}`)} />
        ))}
      </div>
    </div>
  )
}
