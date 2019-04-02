import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { FormGroup, Label, Button } from 'reactstrap';

import "react-datepicker/dist/react-datepicker.css";

export default class PortDate extends React.Component {
    constructor(props) {
        super(props);

        const dateValue = props.initialDate ? moment(props.initialDate) : moment();
        const isHidden = props.initialDate ? false : true;
        this.state = {
            dateValue,
            isHidden
        };
        
    }

    render() {
        return(
            <FormGroup>
                <Label>{label}</Label>
                <div>

                </div>
            </FormGroup>
        );
    }
}