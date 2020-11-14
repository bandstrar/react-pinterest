import axios from 'axios';

const baseUrl = 'https://dinnterest.firebaseio.com';

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`).then((response) => {
    const pinResponse = response.data;
    resolve(Object.values(pinResponse));
  }).catch((error) => reject(error));
});

const getBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pin-boards.json?orderBy="boardId"&equalTo=${boardId}`).then((response) => {
    const boardPinResponse = response.data;
    resolve(Object.values(boardPinResponse));
  }).catch((error) => reject(error));
});

export default { getPins, getBoardPins };
