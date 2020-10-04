import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addTech } from '../../actions/techActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please First Name and Last Name' });
    } else {
      const newTech = {
        firstName,
        lastName
      };

      addTech(newTech);

      M.toast({
        html: `Technician ${firstName} ${lastName} was added successfully`
      });
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>Add New Technicians</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              Enter FirstName
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Enter LastName
            </label>
          </div>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            onClick={onSubmit}
            className='modal-close waves-effect blue waves-light waves-blue btn'
          >
            <i className='material-icons right'>add</i>
            Add
          </a>
        </div>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired
};

export default connect(null, { addTech })(AddTechModal);
