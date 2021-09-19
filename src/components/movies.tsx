import { indexOf } from "lodash";
import React, { Dispatch, SetStateAction } from "react";
import Pagination from "./pagination";
import _ from "lodash";
import DummyComponent from "./dummyComponent";
import ListGroup from "./listGroup";
import MoviesTable from "./moviesTable";
import moviesData from "../services/movies";
import genreList, { IGenre } from "../services/genres";
import { IState, store } from './redux/state';
import { actions, loadMovies } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

export interface IMovie {
  id: number;
  title: string;
  genre: IGenre;
  stock: string;
  rate: number;
}
interface MoviesProps {
  
}

const Movies: React.FC<MoviesProps> = (props) => {

  const movieState = useSelector((store: IState) => store);

  const dispatch = useDispatch();

  const paginate = (items: IMovie[], currentPage: number, pageSize: number) => {
    return items.slice(currentPage * pageSize, pageSize * (currentPage + 1));
  };

  moviesData.forEach((movie, index) => (movie.id = index));

  const pageSize = 5;
  // const [filtered, setFiltered] = React.useState(movieState.filtered);
  // const [movies, setMovies] = React.useState(paginate(moviesData, 0, pageSize));
  // const [activeGenre, setActiveGenre] = React.useState(genreList[0]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [sortColumn, setSortColumn] = React.useState({
    field: "title",
    order: "asc",
  });

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    // const updatedMovies = paginate(movieState.filtered, page, pageSize);
    // setMovies(updatedMovies);
    dispatch(actions.changePage({page, pageSize}));
    // setMessage(`on ${page + 1} page`);
  };

  const onGenreChange = (genre: IGenre) => {
    console.log("app onGC", genre);

    // const newMovies =
    //   genre.name !== genreList[0].name
    //     ? moviesData.filter((movie) => movie.genre.name === genre.name)
    //     : moviesData;
    // setFiltered(newMovies);
    dispatch(actions.changeGenre(genre));
    // const updatedMovies = paginate(newMovies, 0, pageSize);
    // setMovies(updatedMovies);
    // setActiveGenre(genre);
    setCurrentPage(0);
  };

  const onSortSelect = (sortColumn: { field: string; order: string }) => {
    
  };

  const onDeleteMovie = (id: number) => {
    // setMovies(movies.filter((movie) => movie.id !== id));
    // setFiltered(filtered.filter((movie) => movie.id !== id));
    dispatch(actions.deleteMovie({id}));
  };

  const reloadData = () => {
    dispatch(loadMovies())
    // setMovies(moviesData);
    // setActiveGenre(genreList[0]);
    setCurrentPage(0);
  };


  return (
    <div className="row">
      <div className="col-2">
        {(
          <ListGroup
            genres={genreList}
            textProperty="name"
            valueProperty="_id"
            activeGenre={movieState.selectedGenre}
            onGenreChange={onGenreChange}
          />
        )}
      </div>
      <div className="col">
        {!movieState.movies.length ? (
          <div>
            <p>No data present</p>
            <a href="#" className="link-primary" onClick={reloadData}>
              click here to reload data
            </a>
          </div>
        ) : (
          ""
        )}
        <p>Showing {movieState.filtered.length} movies in the database</p>
        <MoviesTable
          movies={movieState.movies}
          onDeleteMovie={onDeleteMovie}
          sortColumn={sortColumn}
          onSortSelect={onSortSelect}
        />
        <Pagination
          totalItems={movieState.filtered.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
        {/* <DummyComponent message={message} /> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  movies: state.movies,
  filtered: state.filtered,
  selectedGenre: state.selectedGenre
});

// const mapDispatchToProps = (dispatch) => {
//   loadMovies: () => dispatch(loadMovies())
// }

export default Movies;