import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Detail.css';

class Detail extends Component {

  state = {
    loadedGnome: null
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (!this.state.loadedGnome || (this.state.loadedGnome && this.state.loadedGnome.id !== + this.props.match.params.id)) {
        axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').then(response => {
          // console.log(this.props.match.params.id)
          const index = this.props.match.params.id
          console.log(response.data.Brastlewark)
          // console.log(response);
          this.setState({loadedGnome: response.data.Brastlewark[index]});
          // console.log (this.loadedGnome)
        });
      }
    }
  }

  render() {
    let gnome = <p style={{
        textAlign: 'center'
      }}>Please select a Post!</p>;
    // if (this.props.match.params.id) {
    //   gnome = <p style={{
    //       textAlign: 'center'
    //     }}>Loading...!</p>;
    // }
    if (this.state.loadedGnome) {
      gnome = (<div className="gencontainer">
        <div className="container">
          <div className="titlegnome">
            <div className="titlegnome__title">
              <h1>
                {this.state.loadedGnome.name}
              </h1>
            </div>
            <p>{this.state.loadedGnome.professions}</p>
            <p>{this.state.loadedGnome.age}
              years old</p>
          </div>
          <div className="containergnome">
            <figure className="containergnomel__shape">
              <img src={this.state.loadedGnome.thumbnail} className="containergnomel__img" alt=""/>
            </figure>
          </div>
          <div className="infognome">
            <ul>
              <li>{this.state.loadedGnome.hair_color}
                hair color
              </li>
              <li>{this.state.loadedGnome.weight}
                kg. - {this.state.loadedGnome.height}
                cm.</li>
              <li>Friends: {this.state.loadedGnome.friends}</li>
            </ul>
          </div>
        </div>
        <div className="goback">
          <Link to="/">
            <button className="btn-inline">
              <span>
                Go Back!</span>
            </button>
          </Link>

        </div>
      </div>);
    }
    return gnome;
  }

}

export default Detail;
