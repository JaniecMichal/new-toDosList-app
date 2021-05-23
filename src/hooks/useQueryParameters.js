import { useLocation } from 'react-router';
import searchQueryParamsName from 'assets/helpers/searchQueryParamsName';

export const useQueryParameters = () => {
  const location = useLocation();

  return new URLSearchParams(location.search).get(searchQueryParamsName);
};
