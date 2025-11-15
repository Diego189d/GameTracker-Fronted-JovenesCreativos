const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5001/api';

export async function fetchGames(){
  const res = await fetch(`${API_BASE}/games`);
  return res.json();
}

export async function fetchGame(id){
  const res = await fetch(`${API_BASE}/games/${id}`);
  return res.json();
}

export async function createGame(payload){
  const res = await fetch(`${API_BASE}/games`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function updateGame(id, payload){
  const res = await fetch(`${API_BASE}/games/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function deleteGame(id){
  const res = await fetch(`${API_BASE}/games/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}

export async function fetchReviews(gameId){
  const res = await fetch(`${API_BASE}/reviews/game/${gameId}`);
  return res.json();
}

export async function createReview(payload){
  const res = await fetch(`${API_BASE}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function updateReview(id, payload){
  const res = await fetch(`${API_BASE}/reviews/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function deleteReview(id){
  const res = await fetch(`${API_BASE}/reviews/${id}`, { method: 'DELETE' });
  return res.json();
}
