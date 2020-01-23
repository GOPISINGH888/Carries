import React from 'react';
import styled from 'styled-components';

const Forms = styled.p`
  p {
    color: ${props => props.theme.greyshade} !important ;
  }
  .is-medium {
    margin-bottom: 10px;
  }
`;

const Inputform = () => (
  <div className="container">
    <Forms>
      <div className="columns is-gap is-8">
        <div className="column is-one-third">
          <div className="box width-full has-background-grey-lighter ">
            <p className="is-size-3 title">GET A QUOTE</p>
            <p className="width-full">
              <input
                className="input is-medium	"
                type="text"
                name="fullname"
                id="name"
                placeholder="Your Name"
              />
            </p>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input className="input" type="text" placeholder="Name" />
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email" />
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input className="input" type="text" placeholder="Name" />
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email" />
                  </p>
                </div>
              </div>
            </div>
            <p className="width-full">
              <input
                className="input is-medium	"
                type="text"
                name="address"
                id="address"
                placeholder="Destination"
              />
            </p>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Explain how we can help you"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="button is-secondary is-medium">Send</div>
          </div>
        </div>
        <div className="column">
          <p className="title">WE HAVE 25 YEARS EXPERIENCE IN THIS PASSION</p>
          <p>There are many variations of passages of Lorem Ips
          um available, but the majority have suffered alteration in some form,
           by injected humour, or randomised words which don't look even slightly believable.
           If you are going to use a passage of Lorem Ipsum</p>
        </div>
      </div>
    </Forms>
  </div>
);
export default Inputform;
