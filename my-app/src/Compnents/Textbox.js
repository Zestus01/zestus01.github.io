import {useState, useEffect} from 'react';
import Markdown from 'markdown-to-jsx';

export default function Textbox(props){;
    const [post, setPost] = useState('');
    const [weekNum, setWeekNum] = useState(1)
    let numArray = [];
    for(let i = 1; i < 18; i++){
        numArray.push(i);
    }
    useEffect(() => {
        import(`../Blogs/week${weekNum}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });
    function increaseWeek(props){
        if(weekNum !== numArray[(numArray.length - 1)]){
            setWeekNum(weekNum + 1);
        }
    }
    function decreaseWeek(props){
        if(weekNum !== numArray[0]){
            setWeekNum(weekNum - 1);
        }
    }

    return (
        <div className="container text-white">
            <div className='row d-flex justify-content-between'>
                <button className="col-2 button btn topnav accent align-items-start" onClick={() => decreaseWeek()}>Prev week</button>
                <button className="col-2 button btn topnav accent align-items-end" onClick={() => increaseWeek()}>Next week</button>
            </div>
            <Markdown>
                {post}
            </Markdown>
            <div className='row'>
                {numArray.map((num) => (
                    <p className={'col-1 ' + (weekNum === num ? 'fw-bold' : '')} onClick={() => setWeekNum(num)}>{num}</p>
                ))}
            </div>
        </div>
    );
    
}