import '../styles/cards.scss'
import Stories from './Stories'
import Card from './Card'

function Cards() {
    const commentsOne = [
        {
            user: "raffagrassetti",
            text: "Woah dude, this is awesome! 🔥",
            id: 1,
        },
        {
            user: "therealadamsavage",
            text: "Like!",
            id: 2,
        },
        {
            user: "mapvault",
            text: "Niceeeee!",
            id: 3,
        },
    ];

    const commentsTwo = [
        {
            user: "mapvault",
            text: "Amazing content, keep it up!",
            id: 4,
        },
    ];

    const commentsThree = [
        {
            user: "dadatlacak",
            text: "Love this!",
            id: 5,
        },
    ];

    return (
        <div className='cards'>
            <Stories />
            <Card
                accountName='rafagrassetti'
                storyBorder
                image='https://picsum.photos/800/900'
                comments={ commentsOne}
                likedByText='datatlacak'
                likedByNumber={89}
                hours={16}
            />
            <Card
                accountName='rossetta'
                storyBorder
                image='https://picsum.photos/800'
                comments={ commentsTwo}
                likedByText='datatlacak'
                likedByNumber={112}
                hours={22}
            />
            <Card
                accountName='monnet'
                storyBorder
                image='https://picsum.photos/800/1000'
                comments={ commentsThree}
                likedByText='datatlacak'
                likedByNumber={57}
                hours={10}
            />
        </div>
    )
}

export default Cards
