function MovieCard(props){

            // console.log(this.props);
            //Destructing the state object in render function

            const { movies, addStars, decStars, toggleFav, toggleCart } = props;
            const { title, plot, poster, price, rating, stars, fav, isInCart } = props.movies;

            return (
                  <div className="main">

                        {/**Movie Card */}
                        <div className="movie-card">

                              {/**Left section of Movie Card */}
                              <div className="left">
                                    <img alt="poster" src={poster} />
                              </div>

                              {/**Right section Movie Card */}
                              <div className="right">

                                    {/**Title, plot, price of the movie */}
                                    <div className="title">{title}</div>
                                    <div className="plot">{plot}</div>
                                    <div className="price">Rs. {price}</div>

                                    {/**Footer starts here with ratings, stars and buttons */}
                                    <div className="footer">
                                          <div className="rating">{rating}</div>

                                          {/**Star image with increase and decrease buttons and star count */}
                                          <div className="star-dis">
                                                <img className="str-btn"
                                                      alt="Decrease"
                                                      src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                                                      onClick={() => { decStars(movies) }} />
                                                <img className="stars"
                                                      alt="stars"
                                                      src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                                                />
                                                <img className="str-btn"
                                                      alt="increase"
                                                      src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                                                      onClick={() => { addStars(movies) }} />
                                                <span className="starCount">{stars}</span>
                                          </div>

                                          {/**Favourite and add to cart buttons */}

                                          {/* {fav? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button> : 
                                          <button className="favourite-btn" onClick={this.handleFav}>Favourite</button> } */}

                                          <button className={fav ? "unfavourite-btn" : "favourite-btn"}
                                                onClick={() => { toggleFav(movies) }}>{fav ? "unfavourite-btn" : "favourite-btn"}</button>



                                          <button className={isInCart ? "unfavourite-btn" : "cart-btn"}
                                                onClick={() => { toggleCart(movies) }}> {isInCart ? "Remove from Cart" : "Add to cart"}</button>



                                    </div>
                              </div>

                        </div>
                  </div>
            )
      
}

export default MovieCard;