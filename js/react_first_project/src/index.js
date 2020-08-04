import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26
//     }
//     //version-1
//     // this.nextYear = this.nextYear.bind(this);
//     //version-2
//     this.nextYear = () => {
//       this.setState(state => ({
//         years: ++state.years
//       }))
//     }
//   }
//   //version-1
//   nextYear() {
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   }

//   //version-3
//   // nextYear = () => {
//   //   this.setState(state => ({
//   //     years: ++state.years
//   //   }))
//   // }

//   render() {
//     const {name, surname, link} = this.props; 
//     const {years} = this.state;

//     return (
//       <> 
//         <button onClick={this.nextYear}>++</button>
//         <h1>My name is {name}, surname — {surname}, years = {years}</h1>
//         <a href={link}>My profile</a>
//       </>
//       //or <React.Fragment></React.Fragment> instead <></>
//     )
//   }
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name="Ervin" surname="Khamoido" link="google.com"/>
//       <WhoAmI name="Katya" surname="Khamoido" link="google.com"/>
//       <WhoAmI name="Yan" surname="Khamoido" link="google.com"/>
//     </>
//   )
// }

ReactDOM.render(<App/>, document.getElementById('root'));