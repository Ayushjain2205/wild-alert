import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import fireIcon from '@iconify/icons-emojione/fire';

const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={fireIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarker
