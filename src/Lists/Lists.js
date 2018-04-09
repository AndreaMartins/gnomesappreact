import React, {Component} from 'react';
import axios from 'axios';
import './Lists.css';

class Lists extends Component {

  state = {
    gnomes: [],
    input: ''
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').then(response => {
      this.setState({gnomes: response.data.Brastlewark});
      console.log(this.state.gnomes)
    });
  }

  gnomeSelectedHandler = (id) => {
    this.props.history.push('/' + id);
  }

  onChangeHandler(e) {
    this.setState({input: e.target.value})
  }

  render() {
    const gnomes = this.state.gnomes.filter(gnome => gnome.age == this.state.input || this.state.input === '').map(gnome => {
      return (<div key={gnome.id} className="containergnome" onClick={() => this.gnomeSelectedHandler(gnome.id)}>
        <div className="containergnome__item">
          <figure className="containergnome__shape">
            <img src={gnome.thumbnail} className="containergnome__img" alt=""/>

            <figcaption className="containergnome__caption">
              + details</figcaption>

          </figure>
        </div>
        <div>
          <p className="containergnome__font">{gnome.name}</p>
        </div>
      </div>)
    });

    return (<div>
      <nav className="navgnome">
        <div className="navgnome__container">
          <h1>
            Brastlewark!
          </h1>
          <div className="search">
            <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)} placeholder="  Search Gnome by age"/>
          </div>
        </div>
      </nav>
      <div className="listcontainer">
        {gnomes}
      </div>
    </div>);
  }

}

export default Lists;
