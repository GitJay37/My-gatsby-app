import React from 'react';

export default (props) => {
    
    const cer = props.element;
    return (
        <div className="shadow p-8 bg-white mr-4 rounded flex-shrink-0" style={{width: "300px"}}>
            <h4 className="font-bold h-40 overflow-y-hidden">{cer.title}</h4>
            <div className="text-center">
                <span className="inline-block bg-blue-200 text-blue-700 p-2 mt-2 radius">Calificación: {cer.score}</span>
            </div>
        </div>
    );
}