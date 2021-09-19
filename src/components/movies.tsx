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
  const [sortColumn, setSortColumn] = React.useState({
    field: "title",
    order: "asc",
  });

  const onPageChange = (page: number) => {
    // setCurrentPage(page);
    dispatch(actions.changePage({page, pageSize}));
  };

  const onGenreChange = (genre: IGenre) => {
    // console.log("app onGC", genre);
    dispatch(actions.changeGenre(genre));
    // setCurrentPage(0);
  };

  const onSortSelect = (sortColumn: { field: string; order: string }) => {
    
  };

  const onDeleteMovie = (id: number) => {
    dispatch(actions.deleteMovie({id}));
  };

  const reloadData = () => {
    dispatch(loadMovies())
    // setCurrentPage(0);
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
          currentPage={movieState.currentPage}
          onPageChange={onPageChange}
        />
        {/* <DummyComponent message={message} /> */}
      </div>
    </div>
  );
};

export default Movies;