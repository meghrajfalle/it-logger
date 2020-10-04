import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
    // to disable this warning  React Hook useEffect has a missing dependency: 'getTechs'. Either include it or remove the dependency array. If 'getTechs' changes too often, find the parent component that defines it and wrap that definition in useCallback  react-hooks/exhaustive-deps
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4 className='center'>Technicians List</h4>
        <ul className='collection'>
          {!loading && techs !== null && techs.length === 0 ? (
            <p className='center'> No techs to show...</p>
          ) : (
            !loading &&
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)
          )}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
