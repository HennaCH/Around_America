import { useState } from 'react';
import { HeartSwitch } from '@anatoliygatt/heart-switch';

function HeartSwitchBtn() {
 const [checked, setChecked] = useState(false);
  
  return (
    <HeartSwitch
      size="lg"
      inactiveTrackFillColor="#cffafe"
      inactiveTrackStrokeColor="#22d3ee"
      activeTrackFillColor="#06b6d4"
      activeTrackStrokeColor="#0891b2"
      inactiveThumbColor="#ecfeff"
      activeThumbColor="#ecfeff"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    />
  );
}
export default HeartSwitchBtn;