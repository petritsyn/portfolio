import React from 'react';
import s from './Skills.module.css';
import style from '../../common/styles/commonStyles.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${style.container} ${s.skillsContainer}`}>
                <h2 className={s.styleTitle}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
                    <Skill title={'JS'} description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'}/>
                    <Skill title={'React'} description={'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;