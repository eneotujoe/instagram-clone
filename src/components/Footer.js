import '../styles/footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <ul className='links'>
                <li>About</li>
                <li>Help</li>
                <li>Press</li>
                <li>API</li>
                <li>Jobs</li>
                <li>Privacy</li>
                <li>Locations</li>
                <li>Top Account</li>
                <li>Hashtags</li>
                <li>Language</li>
            </ul>
            <div className='copyright'>&copy; {new Date().getFullYear()}  Instagram from Facebook</div>
            <div className='builtBy'>Built By <strong>Eneotu Joe</strong>
            </div>
        </div>
    )
}

export default Footer
