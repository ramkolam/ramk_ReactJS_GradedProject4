import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../header.css';

const Header = (props) => {
    const {menuClickHandler, searchMoviesHandler} = props;
    
    return (
        <>
            <nav id="header" className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="#" onClick={()=>{menuClickHandler('movie_in_theaters');}}>Movies in theaters</a>
                            </li>
                            <li>
                                <a href="#" onClick={()=>{menuClickHandler('coming_soon')}}>Coming soon</a>
                            </li>
                            <li>
                                <a href="#" onClick={()=>{menuClickHandler('top_rated_indian')}}>Top rated Indian</a>
                            </li>
                            <li>
                                <a href="#" onClick={()=>{menuClickHandler('top_rated_movies')}}>Top rated Movies</a>
                            </li>
                            <li>
                                <a href="#" onClick={()=>{menuClickHandler('favourites')}}>Favourites</a>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-right">      
                            
                            <div className="input-group" >
                                <input id="search-box" 
                                    type="text" 
                                    name="keyword" 
                                    placeholder="search..." 
                                    className="form-control" 
                                    onKeyUp={(e)=>{
                                            searchMoviesHandler(e.target.value);
                                        }}/>
                                <span className="input-group-btn">
                                    <button className="btn btn-default" onClick={(e)=>e.preventDefault()}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;