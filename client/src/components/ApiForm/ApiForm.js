import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {logoutUser} from './../../actions/authActions';
import ModalResult from '../Modal/ModalResult'
import { Row, Input, Button, Modal } from 'react-materialize';

class ApiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '',
      keyword: ''
    }
    this.searchChange = this.searchChange.bind(this);
    this.handlePlaceSubmit = this.handlePlaceSubmit.bind(this);
  };

  searchChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handlePlaceSubmit = e => {
    console.log('One');
    e.preventDefault();
    this.props.searchPlace(this.state.place, this.state.keyword);
  };

  render() {
    return (
      <div>
        <Row>
            <form onSubmit={this.handlePlaceSubmit}>
              <Input s={6} label="Place" type='text' name='place' onChange={this.searchChange} value={this.state.place} />
              <Input s={6} label="Key Word" type='text' name='keyword' onChange={this.searchChange} value={this.state.keyword} />
              <Button type='submit' waves='light'>Submit</Button>
              <ModalResult />
            </form>
        </Row>

      </div>
    )
  }
}

ApiForm.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})


export default connect(mapStateToProps, {logoutUser})(ApiForm);