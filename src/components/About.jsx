import './About.css'

function About() {
    return (
        <section id='about' className='about-section'>
            <h3>My Skills are</h3>
            <div className="skill-container">
                <div className="skill-div">
                    JavaScript
                </div>
                <div className="skill-div">
                    React
                </div>
                <div className="skill-div">
                    Node JS
                </div>
                <div className="skill-div">
                    Express JS
                </div>
            </div>

        </section>
    );
}

export default About;