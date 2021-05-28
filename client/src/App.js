import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody'; 
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell'; 
import {withStyles} from '@material-ui/core/styles';
import { render } from '@testing-library/react';


const styles=theme=>({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customer=[{
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name':'이규빈',
  'birthday':'980428',
  'gender':'여자',
  'job':'대학생'

},{
  'id':2,
  'image':'https://placeimg.com/64/64/any',
  'name':'오경택',
  'birthday':'961212',
  'gender':'남자',
  'job':'대학원생'

}]

class App extends Component {
  render(){
  const {classes}=this.props;
  return (  
    <div>
      <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead >
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          { customer.map(c=><Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
          )}
        </TableBody>

        </Table>
        </Paper>
        </div>
    
    

   </div>
  );
}
}

export default withStyles (styles) (App); 