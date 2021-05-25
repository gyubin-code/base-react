import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const custermer=[{
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

function App() {
  return (
    <div>
  { customer.map(c=>{
    return(
      <Customer
        key={c.id}
        id={c.id}
        image={c.image}
        name={c.name}
        birthday={c.birthday}
        gender={c.gender}
        job={c.job}
        />
    );
  }  )
}
   </div>
  );
}

export default App;
