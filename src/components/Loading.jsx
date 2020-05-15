import React from "react";
import { connect } from "react-redux";

const Loading = (props) => {
  return (
    <div className="center">
      <div className="lds-dual-ring center"></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataReducer: state.dataReducer,
});

export default connect(mapStateToProps, null)(Loading);
