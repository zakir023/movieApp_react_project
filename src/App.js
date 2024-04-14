import React from "react"
// import HeadingOne from "./HeadingOne.js";
// import HeadingTwo from "./HeadingTwo.js";
import MovieList from "./MovieList.js";
// import Student from "./Student.js";
import Navbar from "./Navbar.js"
// import Navbar1 from "./Navbar1.js";
import { movies } from "./MovieData";

class App extends React.Component {
  constructor() {
    super();
    //Creating the state object 
    this.state = {
      movies: movies,
      cartCount: 0
    }
    // this.addStars=this.addStars.bind(this);
  }

  handleIncStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    if (movies[mid].stars >= 5) {
      return;
    }
    movies[mid].stars += 0.5;
    this.setState({
      // pahla movies state wala movies hai dusrana movies jo maine ne change kiya hai oh hain  
      // movies:movies
      movies
    })
  }

  handleDecStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie)
    if (movies[mid].stars <= 0) {
      return;
    }
    movies[mid].stars -= 0.5
    this.setState({
      movies: movies
    })

  }
  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie)

    movies[mid].fav = !movies[mid].fav


    this.setState({
      movies: movies
    })

  }


  handleToggleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie)

    movies[mid].isInCart = !movies[mid].isInCart;
    console.log(movies[mid].isInCart)

    if (movies[mid].isInCart) {
      cartCount = cartCount + 1;
    }
    else {
      cartCount -= 1;
    }

    console.log(cartCount);

    this.setState({
      movies: movies,
      cartCount
    })

  }

  render() {
    //movies aur cartCount ka destructuring kar diyaa
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList movies={movies}
          addStars={this.handleIncStar}
          decStars={this.handleDecStar}
          toggleFav={this.handleToggleFav}
          toggleCart={this.handleToggleCart}
        />


      </>

    )
  }

}

// return (
//   <>
//     {/* <Student stuname="Alexa" marks={80} />
//     <Student stuname="Siri" marks={70} />
//     <Student stuname="Google" marks={60} />
//     <Student /> */}

//      <Navbar1 />

//     <MovieList />

//      {/* <HeadingOne />
//      <HeadingTwo /> */}

//   </>

// )


// Student.defaultProps={
//     stuname:"Student",
//     marks:"N.A."
// }


export default App;