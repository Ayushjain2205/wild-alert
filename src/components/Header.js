import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import fireIcon from '@iconify/icons-emojione/fire';

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={fireIcon} /> WildAlerts</h1>
        </header>
    )
}

export default Header
