import React from "react";
import '../Portfolio/portfolio.css';
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects_data } from "../../assets/data/projects_data";

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <h2 className='portfolio-title'>Portfolio</h2>
            <div className='portfolio-container'>
                {projects_data.map((item, index) => {
                    return (
                        <ProjectCard
                            img_src={item.img_src}
                            projectName={item.projectName}
                            projectLink={item.projectLink}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Portfolio;