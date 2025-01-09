import { useEffect } from 'react';

function RedirectLinkedIn() {
  useEffect(() => {
    // This is the key line: set the browser location to LinkedIn
    window.location.replace('https://www.linkedin.com/in/avivarma/');
  }, []);

  return null; // nothing to render
}

export default RedirectLinkedIn;
