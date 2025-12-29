import {useEffect, useState} from 'react'
import MovieCard from '../../components/MovieCard'
import {popularMoviesURL} from '../../constants/api'
import '../Common.css'

const Popular = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`${popularMoviesURL}1`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
  }, [])

  return (
    <ul className="movies-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}

export default Popular
