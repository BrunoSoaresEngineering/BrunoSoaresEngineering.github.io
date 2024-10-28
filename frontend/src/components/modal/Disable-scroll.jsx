import { useEffect } from 'react';

function DisableScroll() {
  useEffect(() => {
    document.body.classList.add('disable-scroll');

    return () => document.body.classList.remove('disable-scroll');
  }, []);

  return <></>;
}
export default DisableScroll;
