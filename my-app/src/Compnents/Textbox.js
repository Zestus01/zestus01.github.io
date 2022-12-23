import {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import Markdown from 'markdown-to-jsx';



export default function Textbox(props){;
    const [post, setPost] = useState('');
    const [weekNum, setWeekNum] = useState(1)

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
        if(weekNum != 11){
            setWeekNum(weekNum + 1);
        }
    }
    function decreaseWeek(props){
        if(weekNum != 1){
            setWeekNum(weekNum - 1);
        }
    }

    return (
        <div className="container text-white">
            <button className="button btn topnav accent" onClick={() => decreaseWeek()}>Prev week</button>
            <button className="button btn topnav accent" onClick={() => increaseWeek()}>Next week</button>
            <Markdown>
                {post}
            </Markdown>
        </div>
    );
    
}