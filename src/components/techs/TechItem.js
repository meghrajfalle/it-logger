import React from 'react';
import PropTypes from 'prop-types';
import { deleteTech } from '../../actions/techActions';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  const onDelete = e => {
    deleteTech(id);
    M.toast({
      html: `Technician - ${firstName} ${lastName} Deleted`
    });
  };

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'> delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};

export default connect(null, { deleteTech })(TechItem);
