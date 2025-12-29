import {useEffect, useState} from 'react'
import MovieCard from '../../components/MovieCard'
import {topRatedMoviesURL} from '../../constants/api'
import '../Common.css'

const TopRated = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchTopRatedMovies = () => {
      fetch(topRatedMoviesURL(page))
        .then(response => response.json())
        .then(data => {
          setMovies(data.results)
        })
    }

    fetchTopRatedMovies()
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

export default TopRated
