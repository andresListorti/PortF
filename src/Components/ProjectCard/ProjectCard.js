import React from "react";
import '../ProjectCard/projectCard.css';

const ProjectCard = ({ img_src, projectName, projectLink }) => {
    return (
        <div className='projectCard-wrapper'>
            <div className='top'>
                <img src={img_src} alt={projectName} />
            </div>
            <div className='bottom'>
                <a 
                    className="project-link"
                    href={projectLink}
                    target='_blank'
                >
                    {projectName}
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;