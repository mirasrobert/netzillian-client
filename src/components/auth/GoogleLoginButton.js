import { useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login'

import { loginWithGoogle } from '../../actions/auth'

const GoogleLoginButton = ({ googleClientdId }) => {
  const dispatach = useDispatch()

  const responseGoogleSuccess = (response) => {
    const { email, googleId, imageUrl: avatar, name } = response.profileObj

    dispatach(
      loginWithGoogle({
        email,
        googleId,
        avatar,
        name,
      })
    )
  }

  const responseGoogleFailure = (response) => {
    console.log(response)
  }

  return (
    <>
      {
        <GoogleLogin
          client_id={googleClientdId}
          buttonText='Sign in with Google'
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={false}
          className='google-btn'
        />
      }
    </>
  )
}

export default GoogleLoginButton
