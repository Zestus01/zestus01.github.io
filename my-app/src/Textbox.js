import {useState, useRef, useEffect, Component} from 'react';
import ReactMarkdown from 'react-markdown';
// import marked from '../node_modules/marked';

export default class Textbox extends Component{
    constructor(props){
        super(props)
        this.state = {markdown: ''}
    }

    componentWillMount() {
        const readmePath = require('./Blogs/week1.md');
        fetch(readmePath)
            .then((response) => response.text())
            .then((text) => {
                this.setState({ markdown: text })
            })
      }
    
    // componentDidMount(){
    //     const readmePath = require('./Blogs/week1.md');

    //     fetch(readmePath)
    //         .then(response => {
    //             return response.text()
    //         })
    //         .then(text => {
    //             this.setState({
    //                 markdown: marked(text)
    //             })
    //         })
    // }

    render(){
        const { markdown } = this.state
        return (
                <section className='blogpost'>
                    <ReactMarkdown children={this.state.markdown} />
                </section>
            )
    }
}