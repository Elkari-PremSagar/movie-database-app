import {useEffect, useState} from 'react'
import {
  IMAGE_BASE_URL,
  movieDetailsURL,
  movieCastURL,
} from '../../constants/api'
import './index.css'

const MovieDetails = props => {
  const {id} = props.match.params
  const [movie, setMovie] = useState({})
  const [cast, setCast] = useState([])

  useEffect(() => {
    fetch(movieDetailsURL(id))
      .then(res => res.json())
      .then(data => setMovie(data))

    fetch(movieCastURL(id))
      .then(res => res.json())
      .then(data => setCast(data.cast))
  }, [id])

  return (
    <div className="movie-details-container">
      <div className="movie-info">
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="movie-info-img"
        />
        <div className="movie-meta">
          <h2>{movie.title}</h2>
          <p>
            <strong>Rating:</strong> {movie.vote_average}
          </p>
          <p>
            <strong>Duration:</strong> {movie.runtime} min
          </p>
          <p>
            <strong>Genre:</strong>{' '}
            {movie.genres && movie.genres.length > 0
              ? movie.genres.map(g => g.name).join(', ')
              : 'N/A'}
          </p>

          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
        </div>
      </div>

      <h3 className="cast-title">Cast</h3>
      <ul className="cast-grid">
        {cast.map(actor => (
          <li key={actor.cast_id} className="cast-card">
            <img
              src={`${IMAGE_BASE_URL}${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieDetails
