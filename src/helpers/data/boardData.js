import axios from 'axios';

const baseUrl = 'https://dinnterest.firebaseio.com';

const getAllUserBoards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="userId"&equalTo="${uid}"`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const getSingleBoard = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards/${boardId}.json`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const createBoard = (data) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/boards.json`, data)
    .then((response) => {
      const update = { firebaseKey: response.data.name };
      axios.patch(`${baseUrl}/boards/${response.data.name}.json`, update)
        .then(() => {
          resolve(response);
        });
    }).catch((error) => reject(error));
});

const updateBoard = (data) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/boards/${data.firebaseKey}`, data)
    .then((response) => {
      resolve(response);
    }).catch((error) => reject(error));
});

const deleteBoard = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);

export default {
  getAllUserBoards, getSingleBoard, createBoard, updateBoard, deleteBoard,
};
