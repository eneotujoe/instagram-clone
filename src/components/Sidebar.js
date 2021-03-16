import '../styles/sidebar.scss'
import Sticky from 'react-sticky-el'
import Profile from './Profile'
import Suggestions from './Suggestions'
import Footer from './Footer'
import image from '../img/profile.png'


function Sidebar() {
    return (
        <Sticky topOffset={-80}>
            <div className='sidebar'>
                <Profile
                    username='john_doe'
                    caption='John Doe'
                    urlText='Switch'
                    iconSize='large'
                    image={image}
                />
                <Suggestions />
                <Footer />
            </div>
        </Sticky>
    )
}

export default Sidebar
