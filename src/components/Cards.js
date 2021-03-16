import '../styles/cards.scss'
import Stories from './Stories'
import Card from './Card'

function Cards() {
    const comments1 = [
        {
            user: "rahheem",
            text: "Woah dude, this is awesome! 🔥",
            id: 1,
        },
        {
            user: "therealavast",
            text: "Like!",
            id: 2,
        },
        {
            user: "mapvault",
            text: "Niceeeee!",
            id: 3,
        },
        
    ];

    const comments2 = [
        {
            user: "lodan",
            text: "Amazing content, keep it up!",
            id: 4,
        },
    ];
    const comments3 = [
        {
            user: "dadatlacak",
            text: "Love this!",
            id: 5,
        },
    ];
    const comments4 = [
        {
            user: "tegarela",
            text: "Lorem",
            id: 6,
        },
    ];
    const comments5 = [
        {
            user: "scissa",
            text: "ipsum yante",
            id: 7,
        },
    ];
    const comments6 = [
        {
            user: "amon",
            text: "excellent",
            id: 8,
        },
    ];
    const comments7 = [
        {
            user: "siemont",
            text: "lovely",
            id: 9,
        },
    ];
    const comments8 = [
        {
            user: "milla",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            id: 10,
        },
    ];
    const comments9 = [
        {
            user: "vera",
            text: "ipsum dolor sit amet",
            id: 11,
        },
    ];
    const comments10 = [
        {
            user: "tingi",
            text: "Lorem dolor sit amet.",
            id: 12,
        },
    ];
    const comments11 = [
        {
            user: "sotosh",
            text: "Lorem ipsum adipisicing",
            id: 13,
        },
    ];
    const comments12 = [
        {
            user: "samrel",
            text: "sit amet consectetur adipisicing .",
            id: 14,
        },
    ];
    const comments13 = [
        {
            user: "youvon",
            text: "dolor sit amet consectetur elit.",
            id: 15,
        },
    ];

    return (
        <div className='cards'>
            <Stories />
            <Card
                accountName='tegatril'
                storyBorder
                image='https://picsum.photos/800/900'
                comments={ comments1}
                likedByText='ateta'
                likedByNumber={89}
                hours={16}
            />
            <Card
                accountName='rossetta'
                storyBorder
                image='https://picsum.photos/800'
                comments={ comments2}
                likedByText='lacas'
                likedByNumber={12}
                hours={22}
            />
            <Card
                accountName='monnet'
                storyBorder
                image='https://picsum.photos/800/1000'
                comments={ comments3}
                likedByText='datatlacak'
                likedByNumber={67}
                hours={19}
            />
            <Card
                accountName='emil'
                storyBorder
                image='https://picsum.photos/800/1010'
                comments={ comments4}
                likedByText='claukel'
                likedByNumber={89}
                hours={20}
            />
            <Card
                accountName='monnet'
                storyBorder
                image='https://picsum.photos/800/1020'
                comments={ comments5}
                likedByText='arvin'
                likedByNumber={34}
                hours={15}
            />
            <Card
                accountName='emil'
                storyBorder
                image='https://picsum.photos/800/1040'
                comments={ comments6}
                likedByText='yedennis'
                likedByNumber={27}
                hours={13}
            />
            <Card
                accountName='danfurry'
                storyBorder
                image='https://picsum.photos/800/1050'
                comments={ comments7}
                likedByText='freemeander'
                likedByNumber={33}
                hours={17}
            />
            <Card
                accountName='evans'
                storyBorder
                image='https://picsum.photos/800/1060'
                comments={ comments8}
                likedByText='yolander'
                likedByNumber={82}
                hours={3}
            />
            <Card
                accountName='ammass'
                storyBorder
                image='https://picsum.photos/800/1070'
                comments={ comments9}
                likedByText='beulatela'
                likedByNumber={80}
                hours={14}
            />
            <Card
                accountName='jannet'
                storyBorder
                image='https://picsum.photos/800/1090'
                comments={ comments10}
                likedByText='ramona'
                likedByNumber={21}
                hours={4}
            />
            <Card
                accountName='checil'
                storyBorder
                image='https://picsum.photos/800/1010'
                comments={ comments11}
                likedByText='lilian'
                likedByNumber={22}
                hours={11}
            />
            <Card
                accountName='pearsser'
                storyBorder
                image='https://picsum.photos/800/1011'
                comments={ comments12}
                likedByText='trimmil'
                likedByNumber={73}
                hours={19}
            />
            <Card
                accountName='rossay'
                storyBorder
                image='https://picsum.photos/800/1012'
                comments={ comments13}
                likedByText='casmea'
                likedByNumber={50}
                hours={2}
            />
        </div>
    )
}

export default Cards
