
 import React from "react";
 import {moviesData} from "../src/moivesData";
 import MovieItem from "./Movieitem.js";


 
 class App extends React.Component {
   
  constructor() {
    super();

     this.state = {
      movies : moviesData,
      moviesWillWatch: []
    };
  }

   removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function(item) {
      return item.id !== movie.id;
    });
    console.log(updateMovies);
    
    this.setState ({
      movies: updateMovies
    });
  }

  addMovieToWillWatch = movie => {
    console.log(movie);
    // this.state.moviesWillWatch.push(movie)
    const  updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.push(movie);
    this.setState({
      moviesWillWatch:  updateMoviesWillWatch
    })
  };

  removeMovieFromWillWatch = movie => {
    const  updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item) {
      return item.id !== movie.id;
    });
    
    
    this.setState ({
      moviesWillWatch: updateMoviesWillWatch
    });
  };
  
  render() {
  console.log("render", this.state);
  
     return( 
     <div className="container">
     <div className="row">
     <div className="col-9 " >
       {this.state.movies.map(movie => {
     return (  
     <MovieItem
       key={movie.id}
       movie={movie}
       removeMovie={this.removeMovie}
       addMovieToWillWatch={this.addMovieToWillWatch}
       removeMovieFromWillWatch={this.removeMovieFromWillWatch}
     />
     
     );
  })}
      </div>

      <div className="col-3">
          
         <p> Will Watch: {this.state.moviesWillWatch.length}</p>

        </div>
      </div>
      </div>

  );
   }
 }

//  function App() {
//  return <div>{moviesData[0].title}</div>;
//  }
 
 export default App;