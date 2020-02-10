import React from 'react';
import styled from 'styled-components';

const Icnserv = styled.p`
  padding-left: 2rem;
  padding-right: 2rem;
  color: ${props => props.theme.greyshade};
  .smalltext {
    margin-bottom: 2rem;
  }
  .hexagon {
    position: relative;
    width: 60px;
    height: 34.64px;
    background-color: ${props => props.theme.greyshade};
    padding-right: 27px;
    margin-right: 7rem;
  }

  .hexagon:before,
  .hexagon:after {
    content: '';
    position: absolute;
    width: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }

  .hexagon:before {
    bottom: 100%;
    border-bottom: 17.32px solid ${props => props.theme.greyshade};
  }

  .hexagon:after {
    top: 100%;
    width: 0;
    border-top: 17.32px solid ${props => props.theme.greyshade};
  }
  h1 {
    color: ${props => props.theme.mainBrandColor}!important;
    font-size: 31px !important;
    padding-left: 14px;
  }
  .flx {
    display: flex;
    margin-top: 4rem;
    margin-bottom: 3rem;
    :hover {
      color: ${props => props.theme.darkAccent};
      .hexagon {
        background-color: ${props => props.theme.darkAccent};
      }
      .hexagon:before {
        border-bottom: 17.32px solid ${props => props.theme.darkAccent};
      }
      .hexagon:after {
        border-top: 17.32px solid ${props => props.theme.darkAccent};
      }
    }
  }
`;
const Propiconserv = props => (
  <div>
    <Icnserv>
      <div className="flx">
        <div className="icon">
          <div className="hexagon">
            <span className="has-text-centered">
              <h1>
                <i className={props.icon} />
              </h1>
            </span>
          </div>
        </div>
        <p className="largetext has-text-weight-bold is-size-5">
          {props.largetext}
        </p>
      </div>
      <p className="smalltext has-text-weight-light	is-size-7	">
        {props.smalltext}Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam.
      </p>
      <p className="readmore is-size-7	">{props.readmore}read more</p>
    </Icnserv>
  </div>
);
export default Propiconserv;
