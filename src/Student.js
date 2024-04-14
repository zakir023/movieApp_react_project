// Student meri child class hai jabki app meri parent claass hai 
// App ke andar hum props ko pass karte hain
// aur Student(child) ke andar hum props ko call kar lete by this 


// import React from "react"
// class Student extends React.Component {

//       render() {
//             console.log(this.props);
//             const { stuname, marks } = this.props;
//             return (
//                   <>
//                         {/* <h1>Hello, {this.props.name}</h1>
//                <p>You have scored {this.props.marks} %</p> */}

//                         <h1>Hello, {stuname}</h1>
//                         <p>You have scored {marks} %</p>

//                         <hr />
//                   </>
//             )
//       }


// }

function Student(props) {
      const { stuname, marks } = props;
      return (
            <>
                  <h1>Hello, {props.stuname}</h1>
                  <p>You have scored {marks} %</p>

                  <hr />
            </>
      )
}
export default Student;