import React, { Component } from 'react'

export class Lifecycle3 extends Component {
  constructor(props){
    super(props)
    this.state={
        name:"Aditi"
    }
    console.log('Lifecycle3 constructor')
  }
  static getDerivedStateFromProps(props,state){
    console.log('Lifecycle3 getDerivedStateFromProps')
    return null
  }
  componentDidMount(){
    console.log('Lifecycle3 componentDidMount')
  }
  shouldComponentUpdate(){    //Updating phase
    console.log('Lifecycle3 shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('Lifecycle3 getSnapshotBeforeUpdate')
    return null
}
  componentDidUpdate(){
    console.log('Lifecycle3 componentDidUpdate')
  }
  render() {
    console.log('Lifecycle3 render')
    return (
      <div>
        Lifecycle3
      </div>
   
    )
  }
}

export default Lifecycle3
