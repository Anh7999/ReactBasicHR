import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AdddComponent";
class MyComponent extends React.Component {
  state = {
    arrayJob: [
      { id: "aJob1", title: "Developer", salary: "500" },
      { id: "aJob2", title: "Tester", salary: "400" },
      { id: "aJo3", title: "QC", salary: "500" },
    ],
  };

  addNewJob = (job) => {
    // let currentJob = this.state.arrayJob;
    // currentJob.push(job);
    this.setState({
      arrayJob: [...this.state.arrayJob, job],
      //   arrayJob: currentJob,
    });
    console.log("check from patent: ", job);
  };

  deleteAJob = (job) => {
    let currentJobs = this.state.arrayJob;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrayJob: currentJobs,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">>> run did update: ",
      " prev state: ",
      prevState,
      "current state: ",
      this.state
    );
  }
  componentDidMount() {
    console.log(">>> run did mount");
  }
  render() {
    console.log(">>> call render: ", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrayJob={this.state.arrayJob}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
