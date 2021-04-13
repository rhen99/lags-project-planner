import Project from '../Project/Project';
import './Projects.css'
function Projects() {
    return (
        <section className="Projects">
            <div className="container">
                <h1 className="Title">Projects</h1>
            </div>
            <ul className="List">
               <Project/>
               <Project/>
               <Project/>
               <Project/>
            </ul>
        </section>
    )
}

export default Projects
