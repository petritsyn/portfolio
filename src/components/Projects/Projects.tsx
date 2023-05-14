import React from 'react';
import s from 'components/Projects/Projects.module.scss';
import styleContainer from 'common/styles/commonStyles.module.scss'
import Project from "./Project/Project";
import {Title} from "common/components/Title/Title";
import {Heading} from "common/components/Heading/Heading";
import socialImage from '../../assets/img/social.jpg'
import todoImage from '../../assets/img/todolist.jpg'

const Projects = () => {

    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title text={'Portfolio'}/>
                <Heading text={'Some of my most recent projects'}/>
                <div className={s.projects}>
                    <Project projectName={'Social Network'} style={{backgroundImage: `url(${socialImage})`}}/>
                    <Project projectName={'Todo List'} style={{backgroundImage: `url(${todoImage})`}}/>
                    <Project projectName={'Todo List'} style={{backgroundImage: `url(${todoImage})`}}/>
                    <Project projectName={'Todo List'} style={{backgroundImage: `url(${todoImage})`}}/>
                    <Project projectName={'Todo List'} style={{backgroundImage: `url(${todoImage})`}}/>
                    <Project projectName={'Todo List'} style={{backgroundImage: `url(${todoImage})`}}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;