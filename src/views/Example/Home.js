import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/logo-react-svgrepo-com.svg";
import { connect } from "react-redux";
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }
  hanldeDeleteUser = (user) => {
    console.log(user);
    this.props.deleteuserRedux(user);
  };
  hanldeCreateUser = () => {
    this.props.addUserRredux();
  };
  render() {
    console.log(">>>>check prop: ", this.props.dataRedux);
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>Hello Trung Anh React</div>
        <div>
          <img
            src={logo}
            style={{ width: "200px", height: "200px", marginTop: "20px" }}
          />
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} &nbsp;{" "}
                  <span onClick={() => this.hanldeDeleteUser(item)}>X</span>
                </div>
              );
            })}
        </div>
        <button onClick={() => this.hanldeCreateUser()}>Add New</button>
      </>
    );
  }
}
// export default withRouter(Home);

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const maoDispatchToProps = (dispatch) => {
  return {
    deleteuserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRredux: () => dispatch({ type: "CREATE_USER" }),
  };
};

export default connect(mapStateToProps, maoDispatchToProps)(Color(Home));
