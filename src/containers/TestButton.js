// External dependencies
import { connect } from 'react-redux';
// Local dependencies
import Button from '../components/Button'

const _mapStateToProps = (state) => ({
  onClick() {
    console.log(state);
  }
});

const TestButton = connect(_mapStateToProps)(Button);

export default TestButton;