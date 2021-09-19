import React from "react";
import { FunctionComponent } from "react";
import { IGenre } from "../services/genres";

interface ListGroupProps {
  genres: IGenre[];
  activeGenre: IGenre;
  onGenreChange: (activeGenre: IGenre) => void;
  textProperty: string;
  valueProperty: string;
}

const ListGroup: FunctionComponent<ListGroupProps> = (props) => {
  console.log(props.genres);
  return (
    <ul className="list-group">
      {props.genres.map((genre, index) => {
        return (
          <li
            className={
              props.activeGenre.name === genre.name
                ? "list-group-item active"
                : "list-group-item"
            }
            key={genre._id}
            onClick={() => props.onGenreChange(genre)}
          >
            {genre.name}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
