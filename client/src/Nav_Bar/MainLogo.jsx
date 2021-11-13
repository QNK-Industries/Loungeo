import React from 'react';

const logoStyles = {
  height: '100%',
  position: 'absolute',
  // top: '0',
  left: '0',
  color: '#f8f0fb',
  marginBottom: '5px',
};

const MainLogo = () => (
  <div style={logoStyles}>
    <img src="../../images/Loungeo.svg" alt="logo" />
  </div>
);

export default MainLogo;
