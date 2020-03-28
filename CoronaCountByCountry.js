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