import React, { useEffect, useRef, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import MovieIntro from './MovieIntro';

const URI_PREFIX = process.env.NODE_ENV === 'development' ?
    'http://localhost:4000':
    'https://web-app-final.herokuapp.com';

function DropDown({ label, options, selectedValue, onValueChange }) {
    return <select defaultValue={selectedValue} style={{ width: 120, fontSize : 20 }} onChange={(event) => {
        onValueChange(event.target.value, label);
    }}>
        {
            options.map((value,idx) => <option value={value} key={idx}>{value}</option>)
        }
    </select>;
}

const SearchPage = () => {
    let { keyword } = useParams();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const [movieList, setMovieList] = useState([]);
    const [showStatus, setShowStatus] = useState('');

    const movieName = useRef(query.get('keyword') || '');
    const ratingFilter = useRef(query.get('rating') || 'NA');
    const languageFilter = useRef(query.get('language') || 'NA');

    useEffect(search, []);

    function search() {
        if (movieName.current === '') {
            window.history.replaceState(null, '', `/search`);
            setShowStatus('Upcoming movies')
            fetch(`${URI_PREFIX}/search/NA/NA/NA`)
                .then(response => response.json())
                .then(list => setMovieList(list))
        } else {
            let searchParams = new URLSearchParams();
            if (movieName.current && movieName.current !== 'NA') {
                searchParams.set('keyword', movieName.current);
            }
            if (ratingFilter.current && ratingFilter.current !== 'NA' && ratingFilter.current !== 'Rating') {
                searchParams.set('rating', ratingFilter.current);
            }
            if (languageFilter.current && languageFilter.current !== 'NA' && languageFilter.current !== 'Language') {
                searchParams.set('language', languageFilter.current);
            }

            const queryString = searchParams.toString();


            window.history.replaceState(null, '', `/search${queryString ? '?' + queryString : ''}`);
            setShowStatus('Search Result')
            fetch(`${URI_PREFIX}/search/${movieName.current}/${languageFilter.current}/${ratingFilter.current}`)
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
                        {movieList.map((m,idx) => <MovieIntro movie={m} language={languageFilter.current} rating={ratingFilter.current} key={idx} />)}
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