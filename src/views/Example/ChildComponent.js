import React from "react";
import "./Demo.scss";
class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };

  hanldeShowHile = (status) => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };

  handleOnclickDelete = (job) => {
    console.log(">>handelsdlete: ", job);
    this.props.deleteAJob(job);
  };
  render() {
    let { arrayJob } = this.props;
    let { showJob } = this.state;
    let check = showJob === true ? "showJob=true" : "showJob=false";
    return (
      <>
        {showJob === false ? (
          <div>
            <button className="btn-show" onClick={() => this.hanldeShowHile()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrayJob.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <></>
                    <span onClick={() => this.handleOnclickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.hanldeShowHile()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
// const ChildComponent = (props) => {
//   let { name, age, address, arrayJob } = props;
//   return (
//     <>
//       <div className="job-lists">
//         {arrayJob.map((item, index) => {
//           if (item.salary >= 500) {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary} $
//               </div>
//             );
//           }
//         })}
//       </div>
//       <div>
//         Child component name: {name} - {age} - {address}
//       </div>
//     </>
//   );
// };
export default ChildComponent;
