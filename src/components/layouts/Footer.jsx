import { Link } from 'react-router-dom'
import useStyles from '../../styles'

const Footer = () => {
  const classes = useStyles()

  return (
    <div id='footer'>
      <div id='footerWrapper'>
        <ul className={`${classes.dflex} ${classes.listStyleNone}`}>
          <li className={classes.paddingX}>
            <Link to='/home'>Home</Link>
          </li>
          <li className={classes.paddingX}>
            <Link to='/about'>About Us</Link>
          </li>
          <li className={classes.paddingX}>
            <Link to='/pricing'>Pricing</Link>
          </li>
          <li className={classes.paddingX}>
            <Link to='/terms'>Terms Of Service</Link>
          </li>
          <li className={classes.paddingX}>
            <Link to='/register'>Try For Free</Link>
          </li>
        </ul>
        <p>
          Copyright &copy; {process.env.REACT_APP_NAME} | DETA{' '}
          {new Date().getFullYear()}.
        </p>
      </div>
    </div>
  )
}

export default Footer
