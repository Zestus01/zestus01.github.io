import {useState, Component} from 'react';
import ReactMarkdown from 'react-markdown';

export default class Textbox extends Component{
    constructor(props){
        super(props)
        this.state = {markdown: '', path: props.path}
        // console.log(this.state);
    }

    componentDidMount() {
        // let filePath = this.state.path;
        // console.log(filePath);
        const readme = require('./Blogs/week3.md');
        fetch(readme)
            .then((response) => response.text())
            .then((text) => {
                this.setState({ markdown: text })
            })
      }
    

    render(){
        // console.log(this.state.markdown);
        const { markdown } = this.state.markdown
        return (
                <section className='blogpost text-white'>
                    <ReactMarkdown children={this.state.markdown} />
                </section>
            )
    }
}