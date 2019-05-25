import React from 'react';
import './App.css';

const people = [
  {
    img: 11,
    name: 'atinc',
    job: 'developer'
  },
  {
    img: 21,
    name: 'mustafa',
    job: 'designer'
  },
  {
    img: 71,
    name: 'fatih',
    job: 'tester'
  }
]

const App = () => (<PersonelList />)

const PersonelList = () => {
  return(
    <section>
      {people.map((person)=> 
        <Personel person={person}/>
      )}
    </section>
  )
}

const Personel = (props) => {
  const {img, name, job} = props.person
  const {children} = props
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (
    <div className={'person'}>
      <img src={url} />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  )
}

export default App;
