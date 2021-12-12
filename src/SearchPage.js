import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import MovieIntro from './components/layout/MovieIntro'

function DropDown({ label, options, selectedValue, onValueChange }) {
  return <select defaultValue={selectedValue} style={{ width: 120, fontSize : 20 }} onChange={(event) => {
    onValueChange(event.target.value, label);
  }}>
    {
      options.map(value => <option value={value}>{value}</option>)
    }
  </select>;
}

const SearchPage = () => {
  let { keyword } = useParams();
  const [movieList, setMovieList] = useState([]);
  const [showStatus, setShowStatus] = useState('');

  const movieName = useRef(keyword || '');
  const ratingFilter = useRef('NA');
  const languageFilter = useRef('NA');

  useEffect(() => {
    setShowStatus('Upcomming movies')
    fetch(`http://localhost:4000/search/NA/NA/NA`)
    .then(response => response.json())
    .then(list => setMovieList(list))
  }, [])

  function search() {
    if (movieName.current === '') {
      window.history.replaceState(null, '', `/search`);
      setMovieList([])
    } else {
      window.history.replaceState(null, '', `/search/${movieName.current}`);
      setShowStatus('Search Result')
      fetch(`http://localhost:4000/search/${movieName.current}/${languageFilter.current}/${ratingFilter.current}`)
        .then(response => response.json())
        .then(list => setMovieList(list))
    }
  }

  const RATING = ['Rating', '>= 1.0', '>= 2.0', '>= 3.0', '>= 4.0', '>= 5.0'];
  const LANGUAGE = ['Language', 'English', 'German', 'Japanese', 'French', 'Spanish', 'Korean'];

  return (
    <div >
      <div className="d-flex" style={{ paddingBottom: 40 }}>
        <input type="text" placeholder='Enter movie name' defaultValue={movieName.current}
          onChange={event => movieName.current = event.target.value}
          style={{ height: 40, fontSize: 23, flexGrow: 1 }}
        />
        <DropDown label="Rating" selectedValue={ratingFilter.current} options={RATING} onValueChange={(newValue) => { ratingFilter.current = newValue }} />
        <DropDown label="Language" selectedValue={languageFilter.current} options={LANGUAGE} onValueChange={(newValue) => { languageFilter.current = newValue; }} />
        <div>
          <button style={{ height: 41, width: 100, fontSize: 20, backgroundColor: "rgb(72, 209, 204)", color: "white" }} onClick={search} >Search</button>
        </div>
      </div>

      {movieList && movieList.length > 0 ?
        <div>
          <ul>
            <h3 style={{ paddingBottom: 25 }}>{showStatus}</h3>
            {movieList.map(m => <MovieIntro movie={m} language={languageFilter.current} rating={ratingFilter.current} />)}
          </ul>
        </div>
        :
        <p>
          no result
        </p>}


    </div>
  );
}

export default SearchPage;
