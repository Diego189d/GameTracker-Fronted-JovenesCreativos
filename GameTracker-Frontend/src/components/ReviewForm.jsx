import React, { useState } from 'react'

export default function ReviewForm({ onAdd }){
  const [form, setForm] = useState({ author:'', rating:5, text:'' })
  const submit = async (e) =>{
    e.preventDefault()
    if(!onAdd) return
    await onAdd(form)
    setForm({ author:'', rating:5, text:'' })
  }
  return (
    <form onSubmit={submit} style={{marginBottom:8}}>
      <input className="input" name="author" value={form.author} onChange={e=>setForm(s=>({...s,author:e.target.value}))} placeholder="Autor" />
      <input className="input" name="rating" type="number" min="0" max="5" value={form.rating} onChange={e=>setForm(s=>({...s,rating: Number(e.target.value)}))} />
      <textarea className="input" name="text" value={form.text} onChange={e=>setForm(s=>({...s,text:e.target.value}))} placeholder="Texto de reseña" />
      <button className="button" type="submit">Agregar reseña</button>
    </form>
  )
}
