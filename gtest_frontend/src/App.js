//import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import Form from './Components/Form.js';
import Table from './Components/Table.js';
import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    }
  };


 componentDidMount() {
      axios
        .get("http://localhost:8000/api/dojos/")
        .then((res) => {this.setState({data: res.data, isLoaded: true})})
        .catch((err) => console.log(err))
        
  }



  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      console.log(this.state);
      return (
        <Router>
          <Switch>
            <Route path="/new">
              <Form />
            </Route>
            <Route path="/dojos">
              <Table data={data} />
            </Route>
          </Switch>
        </Router>
      );
    }  
  }
}


export default App;
