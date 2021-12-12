//search component on the homepage
import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Search = () => {
  const [movieName, setMovieName] = useState("");
  let path = '/search/' + movieName;

  return (
    <div style={{
      backgroundImage: `url(${process.env.PUBLIC_URL
        + "/search_bg.jpg"})`,
      height: "300px"
    }} >
      <div style={{paddingLeft:40, paddingRight:30, paddingTop:30, paddingBotton:30}}>
        <div style={{color : "white", paddingBottom:30}}>
          <h1 style={{fontFamily:"cursive"}}>Welcome.</h1>
          <h4 style={{fontFamily:"Helvetica"}}> Millions of movies to discover. Explore now.</h4>
        </div>
        <div className="row">
          <div className="d-flex">
            <input type="text" placeholder="Search for a movie..." value={movieName}
              onChange={event => setMovieName(event.target.value)}
              style={{ width: 1000, height: 50, fontSize: 20, flexGrow: 1, borderRadius:20, paddingLeft:15 }}
            />
            <div>
              <Link to={path}>
                <button style={{ height: 50, width:100, borderRadius:20, fontSize: 20, backgroundColor:"rgb(72, 209, 204)", color:"white", borderColor: "rgb(73, 209, 204)"}}>Search</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
