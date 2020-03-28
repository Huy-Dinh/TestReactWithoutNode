"use strict";

const e = React.createElement;

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