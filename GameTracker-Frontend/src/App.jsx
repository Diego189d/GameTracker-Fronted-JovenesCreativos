import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import LibraryGames from './components/LibraryGames'
import GameForm from './components/GameForm'
import Stats from './components/Stats'

export default function App(){
  return (
    <div className="app">
      <header className="header">
        <h1>GameTracker</h1>
        <nav>
          <Link to="/">Biblioteca</Link>
          <Link to="/new">Agregar juego</Link>
          <Link to="/stats">Estadísticas</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LibraryGames />} />
          <Route path="/new" element={<GameForm />} />
          <Route path="/edit/:id" element={<GameForm />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>
    </div>
  )
}
