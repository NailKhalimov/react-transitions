import React from 'react';
import PropTypes from 'prop-types';

const UserTemplate = () => {
  return (
    <div>
      Template
    </div>
  );
};

UserTemplate.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  lastname: PropTypes.string,
  age: PropTypes.number,
  hob: PropTypes.arrayOf(PropTypes.number),
  spanish: PropTypes.bool,
  message: PropTypes.func,
  car: PropTypes.object
}
 
export default UserTemplate;