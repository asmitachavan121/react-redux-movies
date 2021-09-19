
export const loadMovies = (data?) => ({
    type: 'LOAD_MOVIES',
    data
});

export type changeGenreProps = {
    name: string
}
export const changeGenre = (data) => ({
    type: 'GENRE_CHANGE',
    data
});

export type changePageProps = {
    page: number,
    pageSize: number
}
export const changePage = (data: changePageProps) => ({
    type: 'PAGE_CHANGE',
    data
});

export const deleteMovie = (data) => ({
    type: 'MOVIE_DELETE',
    data
});

export const actions = {
     changeGenre,
     changePage,
     deleteMovie,
     loadMovies
};

export const actionsType = {
    changeGenre: 'GENRE_CHANGE',
    changePage: 'PAGE_CHANGE',
    deleteMovie: 'MOVIE_DELETE',
    loadMovies: 'LOAD_MOVIES'
}