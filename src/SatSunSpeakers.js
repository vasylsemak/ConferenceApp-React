import React from 'react'

const SatSunSpeakers = ({
  speakersSat, speakersSun, handleChangeSat, handleChangeSun
}) => (
  <div className="btn-toolbar margintopbottom5 chekbox-bigger">
    <div className="hide">
      <div className="form-check-inline">
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={handleChangeSat}
            checked={speakersSat}
          />
          Saturday Speakers
        </label>
      </div>
      <div className="form-check-inline">
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={handleChangeSun}
            checked={speakersSun}
          />
          Sunday Speakers
        </label>
      </div>
    </div>
  </div>
)

export default SatSunSpeakers
