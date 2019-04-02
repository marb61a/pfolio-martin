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

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            dateValue: date
        });
    
        this.setFieldValueAndTouched(date, true);
    }

    toggleDate(date) {
        this.setState({
            isHidden: !this.state.isHidden
        });

        this.setFieldValueAndTouched(date, true);
    }

    render() {
        const { isHidden, dateValue } = this.state;

        return(
            <FormGroup>
                <Label>{label}</Label>
                <div className='input-group'>
                    { !isHidden &&
                        <DatePicker 
                            selected={dateValue}
                            onChange={handleChange}
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            maxDate={moment()}
                            dropdownMode="select"
                        />
                    }
                </div>
            </FormGroup>
        );
    }
}