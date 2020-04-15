import React from 'react';

class Memegenerator extends React.Component {
    constructor(){
        super();
        this.state = {
            topText: "",
            bottomText: "",
            image: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        const rand = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randomMeme = this.state.allMemeImgs[rand].url;
        this.setState({
            image: randomMeme
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    <input value={this.state.topText} name="topText" placeholder="topText" onChange={this.handleChange}/>
                    <input value={this.state.bottomText} name="bottomText" placeholder="bottomText" onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.image} alt="x"/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default Memegenerator;