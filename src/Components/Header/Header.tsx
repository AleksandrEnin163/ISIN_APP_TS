import {Link} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
  return (
    <div className={s.header}>
        <ul>
            <li><Link to='/'>Stocks</Link></li>
            <li><Link to='/watchlist'>WatchList</Link></li>
        </ul>
    </div>
  )
}

export default Header