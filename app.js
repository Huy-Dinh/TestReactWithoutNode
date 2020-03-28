"use strict";

const e = React.createElement;

class CoronaCountByCountry extends React.Component {

  constructor(props) {
    super(props);
    this.country = this.props.country;
    this.state = {
      coronaCases: 0,
      some: ''
    }
    this.fetchNumberOfCases = this.fetchNumberOfCases.bind(this);
    this.intervalID = setInterval(this.fetchNumberOfCases, 500);
  }

  fetchNumberOfCases() {
    fetch('https://corona.lmao.ninja/countries/' + this.country)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({coronaCases: data.cases})
      });
  }

  render() {
    return React.createElement(
      'h1',
      {},
      this.country + ' has ' + this.state.coronaCases + ' case(s) of COVID-19'
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e('div', 
    null, 
    e(CoronaCountByCountry, {
      country:'Vietnam'
    }, null),
    e(CoronaCountByCountry, {
      country:'Germany'
    }, null),
    e(CoronaCountByCountry, {
      country:'Italy'
    }, null));
  }
}

const domContainer = document.querySelector('#app_container');
ReactDOM.render(e(App, {country: 'World'}, null), domContainer);