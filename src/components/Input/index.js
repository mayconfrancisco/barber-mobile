import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'native-base';

import {Container, TInput} from './styles';

function Input({style, icon, ...rest}, ref) {
  return (
    <Container style={style}>
      {icon && (
        <Icon
          type="MaterialIcons"
          name={icon}
          style={{fontSize: 20, color: 'rgba(255,255,255,0.6)'}}
        />
      )}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.string,
};

Input.defaultProps = {
  style: {},
  icon: null,
};

export default forwardRef(Input);
