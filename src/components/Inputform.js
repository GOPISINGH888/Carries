import React from 'react';
import styled from 'styled-components';
const Form = styled.p`
p{
color:${props => props.theme.greyshades};
}
`;
const Inputform = () => (
<div className="columns">
    <Form>
        <div className="column is-two-fifths">
           
            <div className="box has-background-grey-lighter">
            <p>GET A QUOTE</p>
            <input class="input" type="text" placeholder="Text input" />
                <div className=""></div>
            </div>
        </div>
        <div className="column">
        </div>
    </Form>    
</div>
);
export default Inputform;
