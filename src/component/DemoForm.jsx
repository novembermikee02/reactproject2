// import React, { useState } from 'react'

// export default class DemoForm extends Component {
//     constructor(props) {
//         super(props);
//         // create a ref to store the DOM element
//         this.nameEl = React.createRef();
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }
    
//       handleSubmit(e) {
//         e.preventDefault();
//         alert(this.nameEl.current.value);
//       }

//     render() {
//         return (

//             <div>
//                 <button onClick={this.IncrementItem}>Click to increment by 1</button>
//                 <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
//                 <button onClick={this.ToggleClick}>
//                 { this.state.show ? 'Hide number' : 'Show number' }
//                 </button>
//                 { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
//           </div>

//         )
//     }
// }

// const DemoFOrm = () => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       clicks: 0,
    //       show: true
    //     };
    //   }
//     const IncrementItem = (event) => {
//         event.setState({ clicks: event.state.clicks + 1 });
//       }
//       const DecreaseItem = event => {
//         event.setState({ clicks: event.state.clicks - 1 });
//       }
//       const ToggleClick = event => {
//         event.setState({ show: !event.state.show });
//       }
//     return (
//         <div>
//           <button onClick={IncrementItem}>Click to increment by 1</button>
//           <button onClick={event.DecreaseItem}>Click to decrease by 1</button>
//           {/* <button onClick={event.ToggleClick}>
//             { event.state.show ? 'Hide number' : 'Show number' }
//           </button>
//           { event.state.show ? <h2>{ this.state.clicks }</h2> : '' } */}
//         </div>
//       );
// }

// class DemoForm extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         clicks: 0,
//         show: true
//       };
//     }
  
//     IncrementItem = () => {
//       this.setState({ clicks: this.state.clicks + 1 });
//     }
//     DecreaseItem = () => {
//       this.setState({ clicks: this.state.clicks - 1 });
//     }
//     ToggleClick = () => {
//       this.setState({ show: !this.state.show });
//     }
  
//     render() {
//       return (
//         <div>
        //   <button onClick={this.IncrementItem}>Click to increment by 1</button>
        //   <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
//           <button onClick={this.ToggleClick}>
//             { this.state.show ? 'Hide number' : 'Show number' }
//           </button>
//           { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
//         </div>
//       );
//     }
//   }

//   export default DemoForm;

  
  
  
import React, { useState } from 'react'

const DemoFOrm = () => {

    // Accept the initial value of the state useState
    // return current value of the state proparty
    // array distructing Es6 Feature
    // Declare a new state variable, which we'll call "count"
    // setUserNum passing a function instead of a value
    const [clicks, setUserNum] = useState(0);

    // const handleChange = (event) => {
    //     console.log("Change in User Name ", userName)
    //     setUserNum(event.target.value);
    // }
    // const handleOk = () => {
        // console.log("User Name ", userName)
        
    // }
    // IncrementItem is Arrow Function
    const IncrementItem = () => {
        console.log(clicks )
        // setUserName(event.target.value);
        setUserNum(clicks + 1);
    }
    const DecreaseItem = () => {
        console.log(clicks )
        setUserNum(clicks - 1);
    }
    return (
        <div>
            {/* <input type="text" value="{clicks}" onChange={handleChange} /> */}
            {/* <button onClick={handleOk}>Submit</button> */}
            <button onClick={IncrementItem}>Click to increment by 1</button>
             <button onClick={DecreaseItem}>Click to decrease by 1</button>
             {/* <input type="text" value="{clicks}" onChange={handleChange} /> */}
             {/* <input type="text" value="{clicks}" /> */}
            <h1>{clicks}</h1>
        </div>
    )
}

export default DemoFOrm;