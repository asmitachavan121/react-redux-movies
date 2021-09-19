import { IGenre } from "../../services/genres";
import { IMovie } from "../movies";
import { createStore } from 'redux';
import { moviesReducer } from "./reducers";
export interface IState {
    movies: IMovie[],
    filtered: IMovie[],
    selectedGenre: IGenre,
    pageSize: number

}

export const store = createStore(moviesReducer);

