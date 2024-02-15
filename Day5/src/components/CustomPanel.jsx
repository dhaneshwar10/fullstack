// import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Panel } from 'rsuite';
const CustomPanel = ({ imageUrl, header, description }) => (
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: '30%', padding: '10px', marginBottom: '20px' }}>
    <img src={imageUrl} alt={header} style={{ width: '100%' }} />
    <Panel header={header}>
      <p>
        <small>{description}</small>
      </p>
    </Panel>
  </Panel>
);

// PropTypes validation
CustomPanel.propTypes = {
  imageUrl: PropTypes.string.isRequired, // imageUrl is required and should be a string
  header: PropTypes.string.isRequired, // header is required and should be a string
  description: PropTypes.string.isRequired, // description is required and should be a string
};

export default CustomPanel;
