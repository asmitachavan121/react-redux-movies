interface IGenre {
  _id: number;
  name: string;
}
const genres: IGenre[] = [
  {
    _id: 0,
    name: "All Genre",
  },
  {
    _id: 1,
    name: "Action",
  },
  {
    _id: 2,
    name: "Thriller",
  },
  {
    _id: 3,
    name: "Comedy",
  },
];

export default genres;
export type { IGenre };
