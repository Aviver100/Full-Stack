import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';

let navigate = useNavigate();
export default class AlertPopup extends React.Component {

    submit = () => {
        confirmAlert({
            title: 'Leaving would result in data loss',
            message: 'Are you sure to do this?',
            buttons: [
                {
                    label: 'I understand - continue navigating to home.',
                    onClick: () => navigate('/')
                },
                {
                    label: 'No, go back - stay on the settings page.',
                    onClick: () => navigate('/settings')
                }
            ]
        });
    };

    render() {
        return (
            <div className='container'>
                <button onClick={this.submit}>Confirm dialog</button>
            </div>
        );
    }
}