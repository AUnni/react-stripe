import React from 'react';
import Paper from 'material-ui/Paper';
import Checkout from './Checkout';


const style = {
  height: 400,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};



 

  class ProductPaper extends React.Component{
    render() {
    return(
      
      
      <Paper style={style} zDepth={2}  name= {this.props.name}>
      
       
       <img 
        src = {this.props.name.productUrl}
        style = {this.props.name.productStyle}
        alt = {this.props.name.productName}
        /> 
      
      
        <br/>
        <div>
          Item no: {this.props.name.itemNo}
          <br/>
          Item name:{this.props.name.name}
          <br/>
          Item price: {this.props.name.amount}
          <br/> 
        </div> 

        <br/>
      
        <Checkout
        name={'Shop czar'}
        description={this.props.name.name}
        amount= {this.props.name.amount}
        />
     

       </Paper>
        
    
  )}};
  
  export default ProductPaper;