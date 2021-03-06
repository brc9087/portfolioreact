import React from "react";
// import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import workout from "../../images/workout.png";
import employee from "../../images/employeedirectory.png";
import burger from "../../images/burger.png";
import hole from "../../images/hole.png";
import nba from "../../images/nba.png";
import note from "../../images/note.png"
import symps from "../../images/onlysymps.jpg"

const styles = {
    back: {
        backgroundColor: "grey"
    },
    image: {
        width: "100%",
        height: "100%"

    }
}

const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div style={styles.back} className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>Portfolio</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">
                            </div>

                            <div className="col-md-3">
                                <a target="_blank" rel="noreferrer" href="https://stark-chamber-95181.herokuapp.com/">
                                    <img style={styles.image} src={symps}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">OnlySymps Project 3</p>
                                <p id="repo"><a target="_blank" rel="noreferrer" href="https://github.com/brc9087/medapp">OnlySymps Repo</a></p>
                            </div>
                            <div className="col-md-1"></div>


                            <div className="col-md-3">
                                <a target="_blank" rel="noreferrer" href="https://brc9087.github.io/myapp/ ">
                                    <img style={styles.image} src={employee}
                                        className="card-img-top" alt="img-two" />
                                </a>
                                <p className="card-text">EMPLOYEE DIRECTORY REACT</p>
                                <p id="repo"><a target="_blank" rel="noreferrer" href="https://github.com/brc9087/EmployeeReactDirectory"
                                >* Empoyee Directory React Repo </a></p>
                            </div>

                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a target="_blank" rel="noreferrer" href="https://immense-waters-93242.herokuapp.com/">
                                    <img style={styles.image} src={burger}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">EAT DA BURGER</p>
                                <p id="repo"><a target="_blank" rel="noreferrer" href="https://github.com/brc9087/Eat-Da-BurgerHW"
                                >* Eat Da Burger Repo</a></p>
                            </div>
                            <div className="col-md-1">


                            </div>
                            <div className="col-md-3">
                                <a target="_blank" rel="noreferrer" href="https://joemc9011.github.io/emorph/">
                                    <img style={styles.image} src={hole}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text"> HOLE IN THE WALL (project 1) </p>
                                <p id="repo"><a target="_blank" rel="noreferrer" href="https://github.com/brc9087/HoleInTheWall"
                                >* Hole In The Wall Repo</a></p>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <a target="_blank" rel="noreferrer" href="https://fast-dawn-07792.herokuapp.com/">
                                    <img style={styles.image} src={nba}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">MY TEAM (project 2)</p>
                                <p id="repo"><a target="_blank" rel="noreferrer" href="https://github.com/brc9087/MyTeam"
                                >* My Team Repo</a></p>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a target="_blank" rel="noreferrer" href="https://mighty-headland-17179.herokuapp.com/">
                                    <img style={styles.image} src={note}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">NOTETAKER APP</p>
                                <p id="repo"><a target="_blank" rel="noreferrer" href="https://github.com/brc9087/NoteTaker"
                                >* Notetaker App Repo</a></p>
                            </div>
                        </div>
                        <br></br>
                    </div>

                </div>






            </div>
        </div>
    )
}
export default portfolio