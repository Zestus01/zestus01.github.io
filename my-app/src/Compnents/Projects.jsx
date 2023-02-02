import {useState, useEffect} from 'react';
import Markdown from 'markdown-to-jsx';
import { projectArray } from '../Projects/projectArray';

export default function Projects(props){
    
    return (
        <div>
            {projectArray.map( (project) => (
                <div>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.repo} target="_blank">REPO: {project.repo} <br></br></a>
                    <a href={project.live} target="_blank">{project.live ? "Live version: " +  project.live : "Project is backend. No live version"}</a>
                </div>
            ))}
        </div>
    )
}