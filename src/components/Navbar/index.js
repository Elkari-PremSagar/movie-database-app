import {Link, withRouter} from 'react-router-dom'
import {useState} from 'react'
import './index.css'

const Navbar = props => {
  const [search, setSearch] = useState('')

  const onSearch = () => {
    if (search !== '') {
      props.history.push(`/search/${search}`)
    }
  }

  return (
    <nav className="navbar">
      <h1 className="logo">movieDB</h1>

      <ul className="nav-links">
        <li>
          <Link to="/">Popular</Link>
        </li>
        <li>
          <Link to="/top-rated">Top Rated</Link>
        </li>
        <li>
          <Link to="/upcoming">Upcoming</Link>
        </li>
      </ul>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
