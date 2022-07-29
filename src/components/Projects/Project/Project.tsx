import React from 'react';
import s from './Project.module.css';import styles from '../../../common/styles/commonStyles.module.css'

type PropsType = {
    projectName: string
}

const Project = (props: PropsType) => {
    return (
        <div className={s.project}>
            <div>
                <div className={s.icon}></div>
                <button className={styles.button}>Show</button>
            </div>
            <div>
                <span className={s.projectName}>{props.projectName}</span>
                <span>Description</span>
            </div>
        </div>
    );
};

export default Project;