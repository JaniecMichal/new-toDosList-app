import React from 'react';
import { Box, Input } from '@theme-ui/components';
import { ReactComponent as SearchIcon } from 'assets/images/search.svg';
import { useSetRecoilState } from 'recoil';
import { queryState } from 'recoilElements/atoms';
import { useQueryParameters } from 'hooks/useQueryParameters';
import { useReplaceQueryParameter } from 'hooks/useReplaceQueryParameters';
import searchQueryParamsName from 'assets/helpers/searchQueryParamsName';

const Searching = () => {
  const setSearchingQuery = useSetRecoilState(queryState);
  const query = useQueryParameters();
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamsName,
      value: target.value.trim() !== '' ? target.value : undefined,
    });
    setSearchingQuery(() => {
      return target.value.trim() !== '' ? target.value : undefined;
    });
  };
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Input
        sx={{
          width: '100%',
          maxWidth: '500px',
          padding: '12px 29px',
          bg: 'white',
          border: 'none',
          borderRadius: '60px',
        }}
        value={query || ''}
        onChange={onInputChange}
        placeholder="Search..."
      />
      <Box sx={{ position: 'absolute', top: '12px', right: '12px' }}>
        <SearchIcon />
      </Box>
    </Box>
  );
};

export default Searching;
