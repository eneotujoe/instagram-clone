import '../styles/suggestions.scss'
import Profile from './Profile'

function Suggestions() {
    return (
        <div className='suggestions'>
            <div className='titleContainer'>
                <div className='title'>Suggestions For You</div>
                <a href='/'>See All</a>
            </div>
            <Profile
                caption='Followed by mapvault + 3 more'
                urlText='Follow'
                iconSize='medium'
                captioSize='small'
                storyBorder
            />
            <Profile
                caption='Follows you'
                urlText='Follow'
                iconSize='medium'
                captioSize='small'
                storyBorder
            />
            <Profile
                caption='Followed by mapvault + 7 more'
                urlText='Follow'
                iconSize='medium'
                captioSize='small'
            />
            <Profile
                caption='Followed by datalake + 4 more'
                urlText='Follow'
                iconSize='medium'
                captioSize='small'
                storyBorder
            />
            <Profile
                caption='Follows you'
                urlText='Follow'
                iconSize='medium'
                captioSize='small'
                storyBorder
            />
        </div>
    )
}

export default Suggestions
