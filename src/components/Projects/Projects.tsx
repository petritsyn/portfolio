import React from 'react';
import s from './Projects.module.css';
import styleContainer from '../../common/styles/commonStyles.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.styleTitle}>My projects</h2>
                <div className={s.projects}>
                    <Project projectName={'Social Network'}/>
                    <Project projectName={'Todo List'}/>
                    <Project projectName={'Todo List'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;