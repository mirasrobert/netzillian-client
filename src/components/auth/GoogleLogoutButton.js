import { useState, useEffect } from 'react'
import axios from 'axios'
import { GoogleLogout } from 'react-google-login'

const GoogleLogoutButton = () => {
  const [googleCliendId, setGoogleCliendId] = useState(null)
  useEffect(() => {
    const getGoogleClientId = async () => {
      const { data: clientId } = await axios.get(
        process.env.REACT_APP_API_URL + '/api/config/google'
      )

      setGoogleCliendId(clientId)
    }

    getGoogleClientId()
  }, [])

  const responseLogoutGoogleSuccess = () => {
    console.log('logout success')
  }

  return (
    <>
      {googleCliendId && (
        <GoogleLogout
          clientId={googleCliendId}
          buttonText='Sign out with Google'
          onLogoutSuccess={responseLogoutGoogleSuccess}
        />
      )}
    </>
  )
}

export default GoogleLogoutButton
