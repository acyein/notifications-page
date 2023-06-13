import Image from 'next/image'
import Card from '../components/card';
import Footer from '../components/footer';

export default function Home() {
    return (
        <div className="flex flex-col font-primary bg-white sm:bg-bluegray-100 min-h-screen sm:px-4 sm:pt-4">
            <div className="flex sm:items-center flex-grow">
                <main className="bg-white text-bluegray-500 max-w-3xl w-full mx-auto px-4 py-5 sm:px-6 sm:rounded-xl sm:shadow-lg">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex justify-start items-center gap-3">
                            <p className="h4 font-bold text-blue-900">Notifications</p>
                            <span className="bg-navy font-bold text-white text-sm rounded px-3 py-0.5">3</span>
                        </div>
                        <a href="" className="hover:text-navy">Mark all as read</a>
                    </div>

                    {/* Cards */}
                    <div className="space-y-2">
                        <Card
                            isPacked={true}
                            profilePic={'/images/avatar-mark-webber.webp'}
                            person={'Mark Webber'}
                            msg={'reacted to your recent post'}
                            reference={'My first tournament today!'}
                            timeAgo={'1m'}
                        />
                        <Card
                            profilePic={'/images/avatar-angela-gray.webp'}
                            person={'Angela Gray'}
                            msg={'followed you'}
                            timeAgo={'5m'}
                        />
                        <Card
                            profilePic={'/images/avatar-jacob-thompson.webp'}
                            person={'Jacob Thompson'}
                            msg={'has joined your group'}
                            reference={'Chess Club'}
                            timeAgo={'1 day'}
                        />
                        <Card
                            profilePic={'/images/avatar-rizky-hasanuddin.webp'}
                            person={'Rizky Hasanuddin'}
                            msg={'sent you a private message'}
                            timeAgo={'5 days'}
                            content={
                                <div className="border border-bluegray-300 rounded-lg mt-5 px-4 py-3 transition hover:bg-bluegray-200">
                                    <a href=""> Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</a>
                                </div>
                            }
                        />
                        <Card
                            profilePic={'/images/avatar-kimberly-smith.webp'}
                            person={'Kimberly Smith'}
                            msg={'commented on your picture'}
                            referencePic={
                                <Image
                                    className="ml-auto"
                                    src={'/images/image-chess.webp'}
                                    width={48}
                                    height={48}
                                    alt="Reference photo"
                                />
                            }
                            timeAgo={'1 week'}
                        />
                        <Card
                            profilePic={'/images/avatar-nathan-peterson.webp'}
                            person={'Nathan Peterson'}
                            msg={'reacted to your recent post'}
                            reference={'5 end-game strategies to increase your win rate'}
                            timeAgo={'2 weeks'}
                        />
                        <Card
                            profilePic={'/images/avatar-anna-kim.webp'}
                            person={'Anna Kim'}
                            msg={'left the group'}
                            reference={'Chess Club'}
                            timeAgo={'2 weeks'}
                        />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
