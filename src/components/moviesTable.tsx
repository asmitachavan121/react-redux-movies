import React from "react";
import { FunctionComponent } from "react";
import { Link } from 'react-router-dom';
import { IMovie } from "./movies";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

interface MoviesTableProps {
  movies: IMovie[];
  onDeleteMovie: (index: number) => void;
  onSortSelect: (sortColumn: { field: string; order: string }) => void;
  sortColumn: {
    field: string;
    order: string;
  };
}

interface IColumn {
  path: string;
  label?: string;
  content?: object;
}

interface MoviesTableProps {}

interface MoviesTableState {}

class MoviesTable extends React.Component<MoviesTableProps, MoviesTableState> {
  private columns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    },
    {
      path: "genre.name",
      label: "Genre",
    },
    {
      path: "stock",
      label: "Stock",
    },
    {
      path: "rate",
      label: "Rate",
    },
    {
      path: "button",
      content: (movie) => (
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDeleteMovie(movie.id)}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={this.props.sortColumn}
          onSortSelect={this.props.onSortSelect}
        />
        <TableBody
          items={this.props.movies}
          columns={this.columns}
          onDeleteItem={this.props.onDeleteMovie}
        />
      </table>
    );
  }
}

export default MoviesTable;
export type { IColumn };
