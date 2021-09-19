import React from "react";
import { Component } from "react";
import { IColumn } from "./moviesTable";

interface TableHeaderProps {
  columns: IColumn[];
  sortColumn: {
    field: string;
    order: string;
  };
  onSortSelect: (sortColumn: { field: string; order: string }) => void;
}

class TableHeader extends React.Component<TableHeaderProps> {
  raiseSort = (field: string) => {
    console.log("sortfield", field);
    const newSortColumn = { ...this.props.sortColumn };
    if (field === newSortColumn.field) {
      newSortColumn.order =
        this.props.sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      newSortColumn.field = field;
      newSortColumn.order = "asc";
    }
    console.log("sortOrder", newSortColumn);
    this.props.onSortSelect(newSortColumn);
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column, index) => (
            <th key={index} onClick={() => this.raiseSort(column.path)}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
