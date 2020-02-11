import React from 'react';

const Upperfooter = () => (
  <div className="container section">
    <div className="columns is-variable is-1">
      <div className="column is-7">
        <p className="is-size-4 has-text-weight-semibold has-text-white">
          Weekly Newsletter
        </p>
        <p className="has-text-white is-size-7">
          There are many vaiations of passages of lorem ipsum available.
        </p>
      </div>
      <div className="column is-3">
        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="text"
              placeholder="Medium input"
            />
          </div>
        </div>
      </div>
      <div className="column ">
        <div className="button is-new is-medium">SUBSCRIBE</div>
      </div>
    </div>
  </div>
);
export default Upperfooter;
