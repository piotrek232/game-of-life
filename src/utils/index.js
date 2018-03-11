import { cloneDeep } from 'lodash';

export const generateMatrix = (width, height, initial) => {
  const matrix = [];
  for (let i = 0; i < width; i++) {
    matrix[i] = [];
    for (let j = 0; j < height; j++) {
      matrix[i][j] = Math.random() > 0.8 ? initial : false;
    }
  }
  return matrix;
}

export const calculateNextBoard = (prevBoard, width, height) => {
  let board = cloneDeep(prevBoard);
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      board[i][j] = isAlive(prevBoard[i][j], getNeighbours(prevBoard, i, j));
    }
  }
  return board;
}

const isAlive = (cell, neighbours) => {
  let neighboursCount = 0;
  neighbours.forEach(cell => neighboursCount += cell ? 1 : 0);
  
  if (cell && (neighboursCount === 2 || neighboursCount === 3)) {
    return 1;
  }
  if (!cell && neighboursCount === 3){
    return 1;
  }
  return 0;  
}

const getNeighbours = (cellArea, row, col) => {
  return [
    cellArea[row - 1] && cellArea[row - 1][col - 1],
    cellArea[row - 1] && cellArea[row - 1][col],
    cellArea[row - 1] && cellArea[row - 1][col + 1],
    cellArea[row] && cellArea[row][col - 1],
    cellArea[row] && cellArea[row][col + 1],
    cellArea[row + 1] && cellArea[row + 1][col - 1],
    cellArea[row + 1] && cellArea[row + 1][col],
    cellArea[row + 1] && cellArea[row + 1][col + 1]
  ];
}
