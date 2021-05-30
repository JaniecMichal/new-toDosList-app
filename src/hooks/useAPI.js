import axios from 'axios';
import { useState } from 'react';

export const useAPI = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const endpointURL = 'https://gorest.co.in/public-api/todos';

  const sendRequest = (dataToSend, requestMethod, id = '') =>
    axios({
      method: requestMethod,
      url: `${endpointURL}/${id}`,
      data: dataToSend,

      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GOREST_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

  const sendGETRequest = (id = '') =>
    axios
      .get(`${endpointURL}/${id}`)
      .then(({ data }) => {
        setResponse(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError(err);
      });

  return { sendRequest, response, loading, setLoading, sendGETRequest, error };
};
