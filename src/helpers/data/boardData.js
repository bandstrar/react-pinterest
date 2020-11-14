import axios from 'axios';

const baseUrl = 'https://dinnterest.firebaseio.com';

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`).then((response) => {
    const boardResponse = response.data;
    resolve(Object.values(boardResponse));
  }).catch((error) => reject(error));
});

export default { getBoards };
