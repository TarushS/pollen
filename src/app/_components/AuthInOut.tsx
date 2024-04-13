import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function CookieChecker() {
  const [sessionExists, setSessionExists] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const sessionCookie = Cookies.get('session');

    if (sessionCookie) {
      setSessionExists(true);
      setUsername(sessionCookie);
    }
  }, []);

  const signOut = () => {
    Cookies.remove('session');
    setSessionExists(false);
    setUsername('');
  };

  return {
    sessionExists,
    username,
    signOut
  };
}

export default CookieChecker;
