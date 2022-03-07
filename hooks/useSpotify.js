import { useSession } from 'next-auth/react'
import { signIn, useEffect } from 'react'
import spotifyApi from '../lib/spotify'

function useSpotify() {
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      // If refresh access token attempt fails, redirect the user to login
      if (session.error === 'RefreshAccessTokenError') {
        signIn()
      }

      spotifyApi.setAccessToken(session.user.accessToken)
    }
  }, [session])
  return spotifyApi
}

export default useSpotify
