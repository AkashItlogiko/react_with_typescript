import React, { CSSProperties } from 'react';

type BtnStyleProps = {
  btnStyle: CSSProperties;
};

const ButtonStyle = (props: BtnStyleProps) => {
  return <div style={props.btnStyle}>Button Style</div>;
};

export default ButtonStyle;
