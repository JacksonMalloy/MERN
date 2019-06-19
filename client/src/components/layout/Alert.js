import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//11. destructuring alerts
const Alert = ({ alerts }) =>
  //12. making sure it's not null
  alerts !== null &&
  //13. making sure there's something in it
  alerts.length > 0 &&
  //14. if there is something, we're going to map through them and output a div with the message and styling based on the alert Type.
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

//map redux state to a prop in this component so we have access to it
//9. Now this component is getting the state. we're mapping state to props
const mapStateToProps = state => ({
  //10. getting the alert state, passing it into prop of 'alerts'
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
