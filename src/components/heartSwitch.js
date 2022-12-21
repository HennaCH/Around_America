import { useState } from 'react';
import { HeartSwitch } from '@anatoliygatt/heart-switch';

function HeartSwitchBtn() {
  const defaultChecked = localStorage.getItem('isChecked') === 'true';
  const [checked, setChecked] = useState(defaultChecked);
    
  return (
    // <HeartSwitch  id="heartMode" 
    //   size="lg"
    //   
    //   checked={checked}
    //   onChange={(e) => {
    //     if (e.target.checked) {
    //       document.body.style.backgroundColor="pink" 
    //       localStorage.removeItem('isChecked');
    //       return;
    //     }
    //     setChecked(e.target.checked);
    //     localStorage.setItem('isChecked', 'true');}}
    // />
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
          if(!event.target.checked){
            document.body.style.backgroundColor = 'pink';
            setChecked(event.target.checked);
          }
          else if (event.target.checked) {
            document.body.style.backgroundColor = 'DeepPink';
            setChecked(event.target.checked);
          }
        }}
      />
  );
}
export default HeartSwitchBtn;