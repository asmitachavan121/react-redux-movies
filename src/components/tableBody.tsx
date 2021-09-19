import * as React from "react";
import { Component } from "react";
import { IMovie } from "./movies";
import { IColumn } from "./moviesTable";
import _ from "lodash";

interface TableBodyProps {
  items: IMovie[];
  columns: IColumn[];
  onDeleteItem: (id: number) => void;
}

interface TableBodyState {}

class TableBody extends React.Component<TableBodyProps, TableBodyState> {
  private renderCell(item, column) {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  }

  render() {
    return (
      <tbody>
        {this.props.items.map((item: IMovie, index: number) => {
          return (
            <tr key={index}>
              {/* <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.stock}</td>
              <td>{movie.rate}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => this.props.onDeleteMovie(movie.id)}
                >
                  Delete
                </button>
              </td> */}
              {this.props.columns.map((column, index) => (
                <td key={index}>{this.renderCell(item, column)}</td>
              ))}
              {/* {this.props.columns.map((column) => (
                <td>{_.get(item, column.path)}</td>
              ))} */}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
