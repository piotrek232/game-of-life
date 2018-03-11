import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Board from './components/Board';
import Header from './components/Header';
import { prefillBoard, toggleCell, createNextGen } from './actions';
import { isGameOver } from './reducers/selectors';

const Wrapper = styled.div`
  margin: 2rem auto;
  padding: 0 0 6px 0;
  width: 532px;
  background: ${({ theme }) => (theme.darks.secondary || '#273f4f')};
  color: ${({ theme }) => (theme.darks.color || '#a5aad1')};
`;

class Dashboard extends Component {
  state = {
    width: 20,
    height: 20,
    gameSpeed: 250,
    intervalId: null
  }

  componentDidMount() {
    const { width, height } = this.state;
    const { prefillBoard } = this.props;

    prefillBoard(width, height, true);
    this.handleStart();
  }

  createNextGeneration = () => {
    const { createNextGen, board } = this.props;
    const { width, height } = this.state;

    createNextGen(board, width, height);
  }

  componentWillUnmount() {
    this.handleStop();
  }

  handleStart = () => {
    const { gameSpeed } = this.state;

    const intervalId = setInterval(this.createNextGeneration, gameSpeed);
    this.setState({ intervalId });
  }

  handleStop = () => {
    const { intervalId } = this.state;

    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  handleClear = () => {
    const { width, height } = this.state;
    const { prefillBoard } = this.props;

    this.handleStop();
    prefillBoard(width, height, false);
  }

  handleCellClick = (row, col) => {
    const { toggleCell, board } = this.props;    
    
    toggleCell(board, row, col);
  };


  render() {
    const { board, isGameOver } = this.props;

    if (isGameOver) {
      this.handleStop();
    }

    return (
      <Wrapper>
        <Header 
          handlePlayClick={this.handleStart} 
          handleStopClick={this.handleStop}
          handleClearClick={this.handleClear}
        />
        <Board 
          board={board} 
          handleCellClick={this.handleCellClick} 
        />
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  board: state.board,
  isGameOver: isGameOver(state)
});

export default connect (mapStateToProps, { prefillBoard, toggleCell, createNextGen })(
  Dashboard
);
