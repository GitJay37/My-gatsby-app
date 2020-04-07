import React from 'react';
import images from '../images/tabs.svg';
export default () => (
    <header className="bg-blue-300">
        <div className="container mx-auto p-12 max-w-4xl flex justify-center items-center">
            <div className="flex-1">
                <h1 className="font-bold text-blue-700 text-6xl"> Hola I'm Jason </h1>
                <p className="text-xl font-light"> Soy ingeniero informatico en aprendizaje constante</p>
            </div>
            <img src={images} alt="Hombre manipulando pestañas web" style={{height: "200px"}}></img>
        </div>
    </header>
)