import React from 'react';
import repos from '../data/repos';
import Repo from './repo';

export default () => (
    <div className="max-w-4xl mx-auto">
        <header className="text-center">
            <h1 className="text-3xl font-bold">My open source site</h1>
            <p> Colaboración y contribución de código abierto</p>
        </header>

        <ul className="repos-list">
            {
                repos.map((repo)=>{
                return <Repo repo={repo} key={repo.id}/>
                })
            }
        </ul>
    </div>
);