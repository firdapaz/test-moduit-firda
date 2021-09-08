import React from 'react';
import { styText } from './style';

const Text = props => {
  const { children, isBold = false, icon } = props;
  return icon ? (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: 6, height: 6, background: 'blue', borderRadius: 20, marginRight: 4 }} />
      <span className={styText(isBold)}>{children}</span>
    </div>
  ) : (
    <span className={styText(isBold)}>{children}</span>
  );
};

export default Text;
