import React from "react";
import Placeholder from "../../assets/placeholder.jpeg"

function AboutmeCard() {
    return (
        <div className="aboutme-container">
            <h3> About Me</h3>
            <img src={Placeholder} alt="profile-photo" className="profile float-left"></img>
            <div>
                <div>
                    <p> Hello! I am a new Fullstack Developer. I have been interested in programming for about 3 years now. Currently I am enrolled in a Fullstack Bootcamp that will help me preapre for my future goals. Outside of my bootcaml I am a fulltime Business Administration and Management student at the University of California, Riverside. </p>
                    <p>
                        I am often recgonized for my motivated personality. I often welcome challenges and see them as a way to grow. I am very determined in learning new skills and networking! I love having conversations with people that work in successful industries as a way to gain insight and knowledge that I can use when joining a workforce.
                    </p>
                    <p>
                        I am interested in learning from any and everyone. I can be reached through this portfolio by email: <a href="mailto:turnerjeniah1120@gmail.com"> turnerjeniah1120@gmail.com</a>, Github: <a href="https://github.com/turnerjeniah8"></a>,and Linked in: <a href="https://www.linkedin.com/in/jeniah-t-b98470230"></a>
                    </p>
                </div>
                <div className="card-body contactLinks">
                    <a href="https://www.linkedin.com/in/jeniah-t-b98470230" className="card-link">LinkedIn</a>
                    <a href="https://github.com/turnerjeniah8" className="card-link">GitHub</a>
                </div>
            </div>
        </div>

    );
}
export default AboutmeCard;