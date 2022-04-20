import React from 'react'

const SatSunSpeakers = ({ speakSat, speakSun, handleSat, handleSun }) => (
  <div className="btn-toolbar margintopbottom5 chekbox-bigger">
    <div className="hide">
      <div className="form-check-inline">
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={handleSat}
            checked={speakSat}
          />
          Saturday Speakers
        </label>
      </div>
      <div className="form-check-inline">
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={handleSun}
            checked={speakSun}
          />
          Sunday Speakers
        </label>
      </div>
    </div>
  </div>
)

export default SatSunSpeakers