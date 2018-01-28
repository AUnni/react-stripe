import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';




const muiTheme = getMuiTheme({
    palette: {
      textColor: cyan500,
    },
    appBar: {
      height: 50,
    },
  });

  export default muiTheme;
