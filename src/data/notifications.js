const notifications = [
    {
        id: 1,
        name: 'Mark Webber',
        profilePic: '/images/avatar-mark-webber.webp',
        action: 'reacted to your recent post',
        postTitle: 'My first tournament today!',
        timeAgo: '1m',
        isRead: false,
    },
    {
        id: 2,
        name: 'Angela Gray',
        profilePic: '/images/avatar-angela-gray.webp',
        action: 'followed you',
        timeAgo: '5m',
        isRead: false,
    },
    {
        id: 3,
        name: 'Jacob Thompson',
        profilePic: '/images/avatar-jacob-thompson.webp',
        action: 'has joined your group',
        club: 'Chess Club',
        timeAgo: '1 day',
        isRead: false,
    },
    {
        id: 4,
        name: 'Rizky Hasanuddin',
        profilePic: '/images/avatar-rizky-hasanuddin.webp',
        action: 'sent you a private message',
        msg: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        timeAgo: '5 days',
        isRead: true,
    },
    {
        id: 5,
        name: 'Kimberly Smith',
        profilePic: '/images/avatar-kimberly-smith.webp',
        action: 'commented on your picture',
        postPic: '/images/image-chess.webp',
        timeAgo: '1 week',
        isRead: true,
    },
    {
        id: 6,
        name: 'Nathan Peterson',
        profilePic: '/images/avatar-nathan-peterson.webp',
        action: 'reacted to your recent post',
        postTitle: '5 end-game strategies to increase your win rate',
        timeAgo: '2 weeks',
        isRead: true,
    },
    {
        id: 7,
        name: 'Anna Kim',
        profilePic: '/images/avatar-anna-kim.webp',
        action: 'left the group',
        club: 'Chess Club',
        timeAgo: '2 weeks',
        isRead: true,
    },
];

export default notifications;