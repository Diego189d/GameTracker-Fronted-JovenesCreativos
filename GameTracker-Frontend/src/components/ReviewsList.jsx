import React, { useEffect, useState } from 'react'
import { fetchReviews, createReview, deleteReview } from '../services/api'
import ReviewForm from './ReviewForm'

export default function ReviewsList({ gameId }){
  const [reviews, setReviews] = useState([])

  useEffect(()=>{ load() },[gameId])

  const load = async ()=>{
    const data = await fetchReviews(gameId)
    setReviews(data || [])
  }

  const handleAdd = async (payload) =>{
    await createReview({ ...payload, game: gameId })
    load()
  }

  const handleDelete = async (id) =>{
    await deleteReview(id)
    load()
  }

  return (
    <div style={{marginTop:12}}>
      <h4>Reseñas</h4>
      <ReviewForm onAdd={handleAdd} />
      <div>
        {reviews.map(r => (
          <div key={r._id} style={{borderTop:'1px solid #eee',paddingTop:6}}>
            <strong>{r.author}</strong> • <span className="small">{r.rating} / 5</span>
            <p>{r.text}</p>
            <button className="button" onClick={()=>handleDelete(r._id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  )
}
