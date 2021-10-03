import { Icon } from '@iconify/react';
import bxPhoneCall from '@iconify/icons-bx/bx-phone-call';

const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h4>Contact Info</h4>
            <ul>
    <li>ID: <strong>{ info.id }</strong></li>
    <li>TITLE: <strong>{ info.title }</strong></li>
    <li><Icon icon={bxPhoneCall} /> 7401232088</li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
