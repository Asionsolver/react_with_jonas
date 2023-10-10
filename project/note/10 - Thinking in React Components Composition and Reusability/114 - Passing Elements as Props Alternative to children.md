```Javascript


export default function App() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <NavBar>
        <MovieSearchBox />
        <NumResult movies={movies} />
      </NavBar>

      <Main>
        <Box elements={<MovieList movies={movies}/>}/>



        <Box
         elements={
            <>
               <WatchedSummery watched={watched} />
               <WatchedMovieList watched={watched} />}
            </>
        />

      </Main>
    </>
  );
}




function Box({ elements }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && elements />}
    </div>
  );
}

```
