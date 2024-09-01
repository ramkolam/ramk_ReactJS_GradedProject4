import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            <footer>

                <div className="container-fluid">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                        <FontAwesomeIcon icon={faClapperboard} style={{ marginRight: '10px' }} />
                        <h1 style={{ marginTop: '0px' }}>movieFlix</h1>
                    </div>



                    <div className="row">

                        <div className="col-lg-4 col-md-4 col-sm-2">
                            <div style={{display:'inline-table'}}>
                            <h3>About</h3>
                            <p>
                                About movieFlix
                                Welcome to movieFlix, your go-to platform for all things cinema! 🎬🍿

                                Our Mission
                                At movieFlix, we’re passionate about movies—whether it’s the latest blockbusters, timeless classics, or hidden gems waiting to be discovered. Our mission is simple: to connect movie enthusiasts, provide valuable insights, and enhance your cinematic experience.
                            </p>
                            <h3>Contact</h3>
                            <ul>
                                <li>
                                    <i className="glyphicon glyphicon-home"></i> address
                                </li>
                                <li>
                                    <i className="glyphicon glyphicon-earphone"></i> 1234.567.890
                                </li>
                                <li>
                                    <i className="glyphicon glyphicon-envelope"></i> abcd@email.com
                                </li>
                                <li>
                                    <i className="glyphicon glyphicon-flag"></i> <a href="#">Fan page</a>
                                </li>
                                <li>
                                    <i className="glyphicon glyphicon-time"></i> 08:00-18:00 Monday to Friday
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-2">
                            <div style={{display:'inline-table'}}>
                            <h3>Legal Stuff</h3>
                            <ul>
                                <li>
                                    <a href="#" className="link">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="#" className="link">Privacy policy</a>
                                </li>
                                <li>
                                    <a href="#" className="link">Warranty commitment</a>
                                </li>
                                <li>
                                    <a href="#" className="link">Site map</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-2">
                            <div style={{display:'inline-table'}}>
                            <h3>What We Offer</h3>
                            <ul>
                                <li>
                                Movie Recommendations: Explore personalized movie recommendations based on your preferences. From heartwarming dramas to adrenaline-pumping action, we’ve got you covered.
                                </li>
                                <li>
                                Trailers and Reviews: Watch trailers, read reviews, and get a sneak peek into upcoming releases. Make informed choices before hitting the theater (or streaming from your couch).
                                </li>
                                <li>
                                Community Discussions: Join our vibrant community of film lovers. Discuss plot twists, share theories, and debate the best movie endings—it’s like a virtual movie night with friends!
                                </li>
                                <li>
                                Trivia and Quizzes: Test your movie knowledge with our fun quizzes and trivia. Who knows? You might discover fascinating facts about your favorite films.
                                </li>
                                
                            </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;