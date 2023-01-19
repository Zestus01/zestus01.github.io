import {useState, useEffect} from 'react';
import Markdown from 'markdown-to-jsx';

export default function Projects(props){
    const [allText, setAllText] = useState([]);
    let fileNames = ['mindReader.md', 
                    'weatherApp.md',
                    'ticTacToe.md',
                    'reactResturant.md',
                    'toDoList.md',
                    'evercraft.md',
                    'SQLHeros.md', 
                    'backendBistro.md',
                    'djangoDjams.md']
    let projectText = [];
    useEffect(() => {
        for(let i = 0; i < fileNames.length; i++){
            import(`../Projects/TextWriteUps/${fileNames[i]}`)
            .then(res => {
                fetch(res.default)
                .then(res => res.text())
                            .then(res => projectText.push(res))
                            .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
        }
        setAllText(projectText);
    }, []);
    // for(let i = 0; i < 9; i++){
    //     markdownText.push(
    //         <Markdown>
    //             {projectText[i]}
    //         </Markdown>
    //     )
    // }
    console.log(allText);
    return (
        <div>
            {allText.map( (text, index) => (
                <div>
                    <h2>hi + {index}</h2>
                    <Markdown>
                        {text}
                    </Markdown>
                    <p>{text}</p>
                </div>
            ))}
        </div>
    )
}