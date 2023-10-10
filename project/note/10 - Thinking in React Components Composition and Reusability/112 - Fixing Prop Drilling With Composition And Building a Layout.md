```Javascript
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <NavBar>
        <MovieSearchBox />
        <NumResult movies={movies} />
      </NavBar>

      <Main>
        <ListBox>
          <MovieList movies={movies}/>
        </ListBox>
        <WatchedBox />
      </Main>
    </>
  );
}

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Main({ children }) {
  return (
    <main className="main">
      {children}
    </main>
  );
}

function ListBox({ children }) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>

      {isOpen1 && children />}
    </div>
  );
}

function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
```
