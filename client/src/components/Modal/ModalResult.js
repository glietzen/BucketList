import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {logoutUser} from './../../actions/authActions';
import { Row, Input } from 'react-materialize';

class ModalResult extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.result);
    }
    
    render() {
        return (
            <div>
                {console.log(this.props.result)}
                {this.props.result ? this.props.result.map(result => (
                    <Row key={result.id}>
                        <Input name='group1' type='checkbox' value='yellow' label={result.name} defaultValue='checked' />
                    </Row>
                )):
                <p>Click Submit for Bucketlist Ideas</p>
                }
            </div>
        )
    }
}

ModalResult.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    auth: state.auth
  })
  
  
  export default connect(mapStateToProps, {logoutUser})(ModalResult);