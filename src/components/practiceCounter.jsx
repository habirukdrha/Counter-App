import React, { Component } from "react";

class PracticeComponent extends Component {
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200",
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };
  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.styles} className="badge bg-primary m-2">
          {this.formatCounter()}
        </span>
        <button style={{ fontSize: 20 }} className="btn btn-danger btn-sm">
          Increment
        </button>
      </React.Fragment>
    );
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default PracticeComponent;

// state = {
//   count: 10,
//   tags: ["tag1", "tag2", "tag3"],
// };

// styles = {
//   fontSize: 17,
//   fontWeight: "bold",
// };

// render() {
//   return (
//     <React.Fragment>
// <span style={this.styles} className={this.getBadgeClasses()}>
//   {" "}
//   {this.formatCount()}{" "}
// </span>
// <button style={{ fontSize: 20 }} className="btn btn-secondary btn-sm">
//   Increment
// </button>
//       <ul>
//         {this.state.tags.map((tag) => (
//           <li key={tag}> {tag} </li>
//         ))}
//       </ul>
//     </React.Fragment>
//   );
// }

// getBadgeClasses() {
//   let classes = "badge m-2 bg-";
//   classes += this.state.count === 0 ? "warning" : "primary";
//   return classes;
// }

// formatCount() {
//   const { count } = this.state;
//   return count === 0 ? "Zero" : count;
// }
// }
