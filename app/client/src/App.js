import React from 'react';
import logo from "./Star_Wars_logo.png"
import './index.css';
import './w3.css';

class Header extends React.Component{
  render(){
    return(
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
      </div>
    )
  }
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:null,
      placeholder:"Enter Name of Character...",
      error: null,
      isLoaded: false,
      items:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  reset(){
    this.setState({
      value:'',
      error: null,
      isLoaded: true,
      items: []
    })
  }

  componentDidMount() {
    if(this.state.value===''||this.state.value===null)
      _get(this, null)
    else
      _get(this, "search?name="+this.state.value)
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="load">Loading...</div>;
    } else {
      return (
        <div>
        <Header/>
        <div className="bgimg">
            <center><form className="w3-container" onSubmit={this.handleSubmit}>
              <input className="w3-input w3-animate-input" type="text" value={this.state.value} onChange={this.handleChange} placeholder={this.state.placeholder}/>
              <div></div>
              <input className="w3-btn" type="submit" value="Submit" onClick={()=>this.componentDidMount() }/>
              <input className="w3-btn" type="submit" value="Reset" onClick={()=>this.reset()}/>
            </form>
            <div></div>
            <textarea value={JSON.stringify(items.map(item=>{return item}), null, '\t')} readOnly="true"/></center>
        </div>
       </div>
      );
    }
  }
}

function _get(app, query)
{fetch("http://localhost:7000/"+query)
.then((res) => res.json())
  .then(
    (results) => {app.setState({isLoaded: true, items:results})},
    (error) => {app.setState({isLoaded: true, error}); }
  )
}