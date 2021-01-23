import React from 'react'
import axios from 'axios'
import Movie from './Movie'

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  render() {
    const { isLoading, movies } = this.state
    // const mapToComponent = (data) => {
    //   return data.map((movie) => {
    //     return <h4 key={movie.id}>{movie.title}</h4>
    //   })
    // }
    // return (
    //   <div>
    //     <span>{isLoading ? 'Loading...' : 'We are ready'}</span>
    //     {mapToComponent(movies)}
    //   </div>
    // )
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                key={movie.id}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    )
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
    )
    this.setState({ isLoading: false, movies })
  }

  componentDidMount() {
    this.getMovies()
  }
}

export default App
