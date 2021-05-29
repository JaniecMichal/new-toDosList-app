import axios from 'axios';
import { useState } from 'react';

export const useAPI = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const endpointURL = 'https://gorest.co.in/public-api/todos';

  const sendRequest = (dataToSend, requestMethod) =>
    axios({
      method: requestMethod,
      url: endpointURL,
      data: dataToSend,

      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GOREST_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })
      .then(({ data }) => {
        setResponse(data.code);
        setLoading(false);
      })
      .catch((err) => {
        console.err(err);
        setLoading(false);
      });

  return { sendRequest, response, loading, setLoading };
};
