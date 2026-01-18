import React, { useState } from 'react';
import './ConversionTools.css';
import { convertWeight, convertVolume, convertTemperature } from '../utils/converters';

function ConversionTools() {
  const [weightValue, setWeightValue] = useState(100);
  const [weightFrom, setWeightFrom] = useState('g');
  const [weightTo, setWeightTo] = useState('kg');
  
  const [volumeValue, setVolumeValue] = useState(250);
  const [volumeFrom, setVolumeFrom] = useState('ml');
  const [volumeTo, setVolumeTo] = useState('cup');
  
  const [tempValue, setTempValue] = useState(180);
  const [tempFrom, setTempFrom] = useState('C');
  const [tempTo, setTempTo] = useState('F');

  return (
    <div className="conversion-tools">
      <h3>🔧 Konvertor mera</h3>
      
      <div className="converters">
        <div className="converter-box">
          <h4>Težina</h4>
          <div className="converter-inputs">
            <input
              type="number"
              value={weightValue}
              onChange={(e) => setWeightValue(e.target.value)}
            />
            <select value={weightFrom} onChange={(e) => setWeightFrom(e.target.value)}>
              <option value="g">grami</option>
              <option value="kg">kilogrami</option>
              <option value="lb">funte</option>
              <option value="oz">unce</option>
            </select>
            <span>=</span>
            <input
              type="text"
              value={convertWeight(weightValue, weightFrom, weightTo)}
              readOnly
            />
            <select value={weightTo} onChange={(e) => setWeightTo(e.target.value)}>
              <option value="g">grami</option>
              <option value="kg">kilogrami</option>
              <option value="lb">funte</option>
              <option value="oz">unce</option>
            </select>
          </div>
        </div>

        <div className="converter-box">
          <h4>Zapremina</h4>
          <div className="converter-inputs">
            <input
              type="number"
              value={volumeValue}
              onChange={(e) => setVolumeValue(e.target.value)}
            />
            <select value={volumeFrom} onChange={(e) => setVolumeFrom(e.target.value)}>
              <option value="ml">mililitri</option>
              <option value="l">litri</option>
              <option value="cup">šolje</option>
              <option value="tbsp">kašike</option>
            </select>
            <span>=</span>
            <input
              type="text"
              value={convertVolume(volumeValue, volumeFrom, volumeTo)}
              readOnly
            />
            <select value={volumeTo} onChange={(e) => setVolumeTo(e.target.value)}>
              <option value="ml">mililitri</option>
              <option value="l">litri</option>
              <option value="cup">šolje</option>
              <option value="tbsp">kašike</option>
            </select>
          </div>
        </div>

        <div className="converter-box">
          <h4>Temperatura</h4>
          <div className="converter-inputs">
            <input
              type="number"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
            />
            <select value={tempFrom} onChange={(e) => setTempFrom(e.target.value)}>
              <option value="C">°C</option>
              <option value="F">°F</option>
            </select>
            <span>=</span>
            <input
              type="text"
              value={convertTemperature(tempValue, tempFrom, tempTo)}
              readOnly
            />
            <select value={tempTo} onChange={(e) => setTempTo(e.target.value)}>
              <option value="C">°C</option>
              <option value="F">°F</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversionTools;
