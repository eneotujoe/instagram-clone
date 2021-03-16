import {ReactComponent as Home} from '../img/home.svg'
import {ReactComponent as Inbox} from '../img/inbox.svg'
import {ReactComponent as Explore} from '../img/explore.svg'
import { ReactComponent as Activity } from '../img/activity.svg'
import ProfileIcon from './ProfileIcon'
import '../styles/menu.scss'
import image from '../img/profile.png'

function Menu() {
    return (
        <div className='menu'>
            <Home className='icon' />
            <Inbox className='icon' />
            <Explore className='icon' />
            <Activity className='icon' />
            <ProfileIcon iconSize='small' image={image} />
            
        </div>
    )
}

export default Menu
