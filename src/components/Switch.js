import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function Switchcontrol(props) {
    const { isToggled, setIsToggled } = props;

  const handleSwitch = () => {
    setIsToggled(!isToggled)
  };

  return (
    <Switch
      checked={isToggled}
      onChange={handleSwitch}
      {...label}
    //   inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
