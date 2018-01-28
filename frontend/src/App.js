import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import Checkout from './Checkout';
import './App.css';
import AppBar from 'material-ui/AppBar';
import muiTheme from './muiTheme'
import ProductPaper from './ProductPaper'

const Couch = {
  itemNo: '001',
  name : 'Couch',
  productUrl:'/Images.jpg/Couch.jpg',
  productStyle:{width:'90%', height:'60%'},
  productName: 'Image of a Couch',
  amount: 45000 
}


const Chair = {
itemNo: '322',
name: 'Chair',
productUrl: '/Images.jpg/Chair.jpg',
productStyle:{width:'90%', height:'60%'},
productName: 'Image of a Chair',
amount: 10000 
}


const Dinestyle = {
  itemNo: '487',
name: 'Dinning Table',
productUrl: '/Images.jpg/Dine-style.jpg',
productStyle:{width:'90%', height:'60%'},
productName: 'Image of a Dinning Table',
amount: 55000 
}

const Dressingtable = {
itemNo: '022',
name: 'Dressing Table',
productUrl: '/Images.jpg/dressing-table.jpg',
productStyle:{width:'90%', height:'60%'},
productName: 'Image of a dressing table',
amount: 35000 
}




class App extends Component {
  render() {
    return (
      
      <div className="App">

        <MuiThemeProvider muiTheme={muiTheme}>  
        <AppBar title="Shop Czar" />

          <div className="App-intro">
          <div className="item1">
          <ProductPaper name = {Couch}/>
          </div>
          <div className="item2">
          <ProductPaper name = {Chair}/>
          </div>
          <div className="item3">
          <ProductPaper name = {Dinestyle} />
          </div>
          <div className="item4">
          <ProductPaper name = {Dressingtable}/>
          </div>
          </div>
        
                

        </MuiThemeProvider>
        
      </div>
    );
  }
}

export default App;
