import { useHistory, useLocation } from 'react-router';

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  return ({ key, value }) => {
    if (value === '' || value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    history.replace(`${location.pathname}?${searchParams.toString()}`);
  };
};
