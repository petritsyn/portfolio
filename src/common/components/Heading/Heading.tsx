import React, {FC} from 'react';
import s from './Heading.module.css'

type Props = {
    text: string
}

export const Heading: FC<Props> = ({text}) => {
    return (
        <div className={s.heading}>
            <h2 className={s.text}>{text}</h2>
        </div>
    );
};