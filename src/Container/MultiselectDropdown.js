import React from "react";
import { Container } from 'react-bootstrap'
import { colourOptions } from "./data";
import Multiselect from 'multiselect-react-dropdown'

function MultiselectDropdown(props) {
    return (
        <React.Fragment>
            <Container className="content">
                <div className="row">
                    <div className="col-sm-12">
                        <Multiselect
                            isObject={false}
                            options={colourOptions}
                            showCheckbox
                            placeholder="Select Primary Role"
                            showArrow
                            style={{
                                chips: {
                                    background: 'grey'
                                },
                                multiselectContainer: {
                                    color: 'blue',
                                },
                                searchBox: {
                                    'width': 'auto',
                                    background: '#2d3657',
                                    boxShadow: '10px 10px 42px 0px rgba(0, 0, 0, 0.4)',
                                    border: '3px solid #18324d',
                                    borderRadius: '15px',
                                },
                            }}
                        />
                    </div>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default MultiselectDropdown