import {useEffect, useState} from 'react'
import MovieCard from '../../components/MovieCard'
import {upcomingMoviesURL} from '../../constants/api'
import '../Common.css'

const Upcoming = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
  fetch(upcomingMoviesURL(page))
    .then(res => res.json())
    .then(data => setMovies(data.results || []))
}, [page])


  return (
    <>
      <ul className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>

      <div className="pagination">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => setPage(prev => prev - 1)}
        >
          Prev
        </button>

        <span className="page-number">{page}</span>

        <button type="button" onClick={() => setPage(prev => prev + 1)}>
          Next
        </button>
      </div>
    </>
  )
}

export default Upcoming
