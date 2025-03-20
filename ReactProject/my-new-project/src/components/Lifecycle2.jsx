import React, { Component } from 'react'
import Lifecycle3 from './Lifecycle3'

export class Lifecycle2 extends Component {
  constructor(props){
    super(props)
    this.state={
        name:"Aditi"
    }
    console.log('Lifecycle2 constructor')
  }
  static getDerivedStateFromProps(props,state){
    console.log('Lifecycle2 getDerivedStateFromProps')
    return null
  }
  componentDidMount(){
    console.log('Lifecycle2 componentDidMount')
  }
  shouldComponentUpdate(){    //Updating phase
    console.log('Lifecycle2 shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('Lifecycle2 getSnapshotBeforeUpdate')
    return null
}
  componentDidUpdate(){
    console.log('Lifecycle2 componentDidUpdate')
  }
  changeState =()=>{
    this.setState({
        name:"Hello"
    })
  }

  render() {
    console.log('Lifecycle2 render')
    return (
      <div>
        Lifecycle2

        <button className='m-4 p-4 border' onClick={this.changeState}>Change State</button>
        <Lifecycle3/>

      </div>
    )
  }
}

export default Lifecycle2
