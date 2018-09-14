import React, { Component } from 'react';
import styles from './Projects.css';
import CSSModules from 'react-css-modules';
import ProjectTile from './ProjectTile/ProjectTile';

class Projects extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div styleName="about" className="container">
                <div styleName="curve">
                    <span className="container">
                        <h1>
                            Projects
                        </h1>
                    </span>
                    <span className="container">
                        <p>
                            A collection of my personal projects
                        </p>
                    </span>
                </div>
                <ProjectTile to="/projects/skout" imageHeight="400px" imageName="projects/moodify.png" tag="Project" title="Skout" shortDesc="LinkedIn for Athletes" />
                <ProjectTile to="/projects/ryse" reverse="true"  imageHeight="400px" imageName="projects/ryse.png" tag="Hackathon" title="Ryse" shortDesc="Networking application for ex-criminals." />
                <ProjectTile to="/projects/canadian-tire" top="25px" imageHeight="400px" imageName="projects/ctc.png" tag="Internship" title="Canadian Tire" shortDesc="First Internship"/>
                <ProjectTile to="/projects/blitz" reverse="true" imageHeight="400px" imageName="projects/blitz.png" tag="Project" title="Blitz" shortDesc="Sports Notification Innovation"/>
                <ProjectTile to="/projects/munkee" imageHeight="400px" imageName="projects/munkee.png" tag="Project" title="Munkee" shortDesc="Just for fun"/>
                <ProjectTile to="/projects/vcuts" reverse="true" imageHeight="400px" imageName="projects/ryse.png" tag="Freelance" title="VCuts" shortDesc="Barber Website"/>
                <ProjectTile to="/projects/moodify" imageHeight="400px" imageName="projects/moodify.png" tag="Hackathon" title="Moodify" shortDesc="Combining machine learning and job searching"/>
                <ProjectTile to="/projects/prog" reverse="true" imageHeight="400px" imageName="projects/prog.png" tag="Project" title="PROG" shortDesc="Product Management Tool"/>
            </div>
        )
    }
};



export default CSSModules(Projects, styles);