import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Alert } from 'reactstrap';
import moment from 'moment';

import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

const validateInputs = (values) => {
    let errors ={};

    Object.entries(values)
        .forEach(([key, value]) => {
            if (!values[key] && key !== 'endDate') {
                errors[key] = `Field ${key} is required!`;
            }
        });
    
    const startDate = moment(values.startDate);
    const endDate = moment(values.endDate);
    
    if (startDate && endDate && endDate.isBefore(startDate)) {
        errors.endDate = 'End Date cannot be before start date!!!';
    }
    
    return errors;
};

const PortfolioCreateForm = ({initialValues, onSubmit, error}) => (
    <div>

    </div>
);