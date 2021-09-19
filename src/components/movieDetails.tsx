import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './button';

const MovieDetails = ({match, history}) => {
    return (
        <React.Fragment>
            <h1>Movie id is {match.params.id}</h1>
            <button className="btn btn-primary" onClick={()=> history.push("/movies")}>Save</button>
        </React.Fragment>
    );
}
 
export default MovieDetails;