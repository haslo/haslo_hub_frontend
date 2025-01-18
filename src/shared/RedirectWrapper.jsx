import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export const RedirectWrapper = ({children}) => {
  const location = useLocation();
  const currentHostname = window.location.hostname;
  const currentProtocol = window.location.protocol;

  const hasloRoutes = ['/plugins', '/tos', '/impressum', '/privacy', '/refunds'];
  const shouldBeOnHaslo = hasloRoutes.some(route => location.pathname.startsWith(route));

  useEffect(() => {
    if (currentHostname === 'cybergwen.com' && !shouldBeOnHaslo) {
      return;
    }
    if (currentHostname === 'haslo.ch' && shouldBeOnHaslo) {
      return;
    }

    const baseUrl = shouldBeOnHaslo
      ? `${currentProtocol}//haslo.ch`
      : `${currentProtocol}//cybergwen.com`;

    const redirectUrl = `${baseUrl}${location.pathname}${location.search}${location.hash}`;
    window.location.replace(redirectUrl);
  }, [currentHostname, location, shouldBeOnHaslo]);

  if ((currentHostname === 'cybergwen.com' && !shouldBeOnHaslo) ||
    (currentHostname === 'haslo.ch' && shouldBeOnHaslo)) {
    return children;
  }
  return null;
};
