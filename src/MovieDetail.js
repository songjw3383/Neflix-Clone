import React from 'react'
import './MovieDetail.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import CloseIcon from '@mui/icons-material/Close';

function MovieDetail({backdrop_path,title,overview,name,release_date,first_air_date,vote_average,setMovieVisibility}) {
    // console.log({setMovieVisibility})
    const randomPercentage = ()=>{
        return Math.floor(Math.random()*100);
    }

    return (
        <div className="content">
                <div className="content__info">
                    <h1 className="title">{title ? title : name}</h1>
                        <div className="content__info__secondLine">
                            <h4 className="release_date">{release_date ? release_date : first_air_date}</h4>
                            <h4 className="vote_average"><ThumbsUpDownIcon />{vote_average}</h4>
                            <h4 className="random_percent">{randomPercentage()}% for you</h4>
                        </div>
                    <h5>{overview}</h5>
                        <div className="content__info__buttons">
                            <button><PlayArrowIcon />Play</button>
                            <button>+ My LIST</button>
                        </div>
                </div>
                
                <div className="content__img">
                    <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt=""/>
                    <span onClick={()=>setMovieVisibility(false)} className="close"><CloseIcon fontSize="large"/></span>
                </div>
                
            </div>
    )
}

export default MovieDetail
