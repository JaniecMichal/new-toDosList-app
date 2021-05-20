import { useState, useEffect } from 'react';

export const useApiData = () => {
  const [appState, setAppState] = useState({
    state: '',
  });

  useEffect(() => {
    setAppState({
      state: 'loading',
    });
    const fetchData = async () => {
      try {
        const response = await fetch(`https://gorest.co.in/public-api/todos`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const tasksData = await response.json();
        setAppState({
          tasks: tasksData.data,
          state: 'sucess',
        });
      } catch (error) {
        setAppState({
          state: 'error',
        });
        console.error('Something bad happened!', error);
      }
    };
    setTimeout(fetchData, 500);
  }, []);

  return appState;
};
