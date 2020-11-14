import React, { Component } from 'react';
import Boards from '../Boards';
import boardData from '../../helpers/data/boardData';

class BoardContainer extends Component {
  state = {
    boards: [],
  }

  componentDidMount() {
    this.loadData();
  }

 loadData = () => {
   boardData.getBoards().then((resp) => {
     this.setState({
       boards: resp,
     });
   });
 }

 render() {
   const { boards } = this.state;
   const allBoards = () => {
     const boardz = boards.map((board) => <Boards key={ board.firebaseKey } board={board} />);
     return boardz;
   };
   return (
            <div className='BoardContainer'>
                { allBoards() }
            </div>
   );
 }
}

export default BoardContainer;
