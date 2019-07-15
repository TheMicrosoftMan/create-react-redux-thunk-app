import React from "react";
import { connect } from "react-redux";
import { say } from "../../_actions/say.actions";
import Button from "../../components/Button";

class Main extends React.Component {
  render() {
    return (
      <div className="app">
        {this.props.sayWord}
        <Button name={"Say Hello"} onClick={() => this.props.say("HELLO")} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  say: say
};

function mapStateToProps(state) {
  const { say } = state;
  return say;
}

const connectedMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export { connectedMain as Main };
