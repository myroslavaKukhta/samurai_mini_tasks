import React from 'react';

type ButtonNewType = {
    children: React.ReactNode;
    name: string
    callBack:()=>void
}
export const ButtonNew = (props:ButtonNewType) => {
    const onClickHandler=()=>{
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>
            {props.name}
        </button>
    );
};
