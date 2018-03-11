import { flattenDeep } from 'lodash'

export const isGameOver = (state) => flattenDeep(state.board).filter(cell => !!cell) == 0
