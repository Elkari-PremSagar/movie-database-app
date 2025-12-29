import {useEffect, useState} from 'react'
import MovieCard from '../../components/MovieCard'
import {upcomingMoviesURL} from '../../constants/api'
import '../Common.css'

const Upcoming = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchUpcomingMovies = () => {
      fetch(upcomingMoviesURL(page))
        .then(response => response.json())
        .then(data => {
          setMovies(data.results)
        })
    }

    fetchUpcomingMovies()
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
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        <span>{page}</span>

        <button type="button" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </>
  )
}

export default Upcoming
