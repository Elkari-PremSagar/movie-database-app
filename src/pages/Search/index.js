import {useEffect, useState} from 'react'
import MovieCard from '../../components/MovieCard'
import {searchMoviesURL} from '../../constants/api'
import '../Common.css'

const Search = props => {
  const {query} = props.match.params
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(searchMoviesURL(query, page))
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err))
  }, [query, page])

  return (
    <>
      <ul className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  )
}

export default Search
