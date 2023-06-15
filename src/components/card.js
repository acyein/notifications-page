import Image from 'next/image'
import notifications from '../data/notifications'

export default function Card() {
    return (
        <>
            {notifications.map(notification => (
                <div key={notification.id} className={`flex items-center rounded-lg gap-4 px-4 py-3 sm:px-5 sm:py-4 ${notification.isRead === false && 'bg-bluegray-100'}`}>
                    <Image
                        src={notification.profilePic}
                        width={48}
                        height={48}
                        alt="Profile photo"
                    />
                    <div>
                        <div className="space-x-2">
                            <p className="inline mb-0.5">
                                <a href="#" className="font-bold text-blue-900 me-1 hover:text-navy">{notification.name}</a>
                                {notification.action}
                                {notification.postTitle && <a href="#" className="font-bold text-bluegray-500 ms-1 hover:text-navy">{notification.postTitle}</a>}
                                {notification.club && <a href="#" className="font-bold text-navy ms-1">{notification.club}</a>}
                            </p>
                            {notification.isRead === false && <div className="inline-block align-middle bg-pink rounded-full w-[.5rem] h-[.5rem]"></div>}
                        </div>
                        <span className="text-bluegray-400">{notification.timeAgo} ago</span>
                        {notification.msg &&
                            <a href="#" className="block border border-bluegray-300 rounded-lg mt-5 px-4 py-3 transition hover:bg-bluegray-200">{notification.msg}</a> 
                        }
                    </div>
                    {notification.postPic && 
                        <a href="#" className="border-2 border-transparent rounded-lg ml-auto transition hover:border-bluegray-300">
                            <Image
                                src={notification.postPic}
                                width={48}
                                height={48}
                                alt="Photo"
                            />
                        </a>
                    }
                </div>
            ))}
        </>
    );
}