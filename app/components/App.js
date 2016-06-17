import React from 'react';
import Header from './Header';
import {Card} from 'material-ui/Card';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="row">
          <Header/>
        </div>
        <div className="row content">
          <Card>
            {this.props.children}
          </Card>
        </div>
        <div className="row">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
