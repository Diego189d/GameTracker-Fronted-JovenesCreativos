import React, { useEffect, useState } from 'react'
import { createGame, fetchGame, updateGame } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'

export default function GameForm(){
  const [form, setForm] = useState({ title:'', platform:'', coverUrl:'', description:'', hoursPlayed:0, completed:false, score:0 })
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(()=>{
    if(id){
      (async ()=>{
        const g = await fetchGame(id)
        setForm({ ...g })
      })()
    }
  },[id])

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(prev=>({ ...prev, [name]: type === 'checkbox' ? checked : (name==='hoursPlayed'||name==='score' ? Number(value) : value) }))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(id) await updateGame(id, form)
    else await createGame(form)
    navigate('/')
  }

  return (
    <div className="card">
      <h2>{id ? 'Editar juego' : 'Agregar juego'}</h2>
      <form onSubmit={handleSubmit}>
        <input className="input" name="title" value={form.title} onChange={handleChange} placeholder="Título" required />
        <input className="input" name="platform" value={form.platform} onChange={handleChange} placeholder="Plataforma" />
        <input className="input" name="coverUrl" value={form.coverUrl} onChange={handleChange} placeholder="URL de portada" />
        <textarea className="input" name="description" value={form.description} onChange={handleChange} placeholder="Descripción" />
        <input className="input" name="hoursPlayed" type="number" value={form.hoursPlayed} onChange={handleChange} placeholder="Horas jugadas" />
        <label><input type="checkbox" name="completed" checked={form.completed} onChange={handleChange} /> Completado</label>
        <input className="input" name="score" type="number" min="0" max="5" value={form.score} onChange={handleChange} placeholder="Score (0-5)" />
        <button className="button" type="submit">Guardar</button>
      </form>
    </div>
  )
}
