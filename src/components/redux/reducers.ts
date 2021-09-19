import { actions, actionsType } from "./actions";
import { IState } from "./state";
import moviesData from '../../services/movies';
import genresList from "../../services/genres";
import { IMovie } from "../movies";
import _ from "lodash";

const paginate = (items: IMovie[], currentPage: number, pageSize: number = 5) => {
    return items.slice(currentPage * pageSize, pageSize * (currentPage + 1));
  };
  
export const moviesReducer = (state, action) => {

    if(action.type == actionsType.changeGenre) {
        const newMovies = action.data._id === 0 ? moviesData: moviesData.filter((movie) => movie.genre.name === action.data.name);
        return {
            movies: paginate(newMovies, 0),
            filtered: newMovies,
            selectedGenre: action.data
        }
    } else if(action.type === actionsType.deleteMovie) {
        const newMovies = state.movies.filter((movie) => movie.id !== action.data.id)
        const newFiltered = state.filtered.filter((movie) => movie.id !== action.data.id)
        return {
            movies: newMovies,
            filtered: newFiltered,
            selectedGenre: state.selectedGenre
        }
    } else if(action.type === actionsType.changePage) {
        const newMovies = paginate(state.filtered, action.data.page, action.data.pageSize);
        return {
           ...state,
           movies: newMovies
        }
    }
    return {
        movies: paginate(moviesData, 0),
        filtered: moviesData,
        selectedGenre: genresList[0],
    }

}