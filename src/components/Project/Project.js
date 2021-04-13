import "./Project.css"
function Project() {
    return (
        <li className="Project">
            <a className="Link" href="!#">
                <div className="container ProjectContents">
                    <h4 className="Name">Project Name</h4><span className="Percentage">0%</span>
                </div>
            </a>
            <div className="Progress"></div>
        </li>
    )
}

export default Project
