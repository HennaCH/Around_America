import { useState } from 'react';
import { HeartSwitch } from '@anatoliygatt/heart-switch';
import App from '../App';

function HeartSwitchBtn() {
  const defaultChecked = document.body.style.backgroundColor = 'pink' && localStorage.getItem('isChecked') === 'true';
  const [checked, setChecked] = useState(defaultChecked);
    
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
          if(!event.target.checked && window.confirm('Do you want to go to light theme ?')){
          document.body.style.background = 'pink';
            setChecked(event.target.checked);
          }
          else if (event.target.checked && window.confirm('Do you want to go to dark theme ?')) {
            document.body.style.background = 'paleVioletRed';
            setChecked(event.target.checked);
          }
        }}
      />
  );
}
export default HeartSwitchBtn;