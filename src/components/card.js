import Image from 'next/image'

export default function Card({ profilePic, person, msg, reference, referencePic, timeAgo, content }) {
    return (
        <div className="flex items-center bg-bluegray-100 rounded-lg gap-4 px-4 py-3 sm:px-5 sm:py-4">
            <Image
                src={profilePic}
                width={48}
                height={48}
                alt="Profile photo"
            />
            <div>
                <div className="space-x-2">
                    <p className="inline mb-0.5">
                        <a href="" className="font-bold text-blue-900 me-1 hover:text-navy">{person}</a>
                        {msg}
                        {reference ? <a href="" className="font-bold text-bluegray-500 ms-1 hover:text-navy">{reference}</a> : false}
                    </p>
                    <div className="inline-block align-middle bg-pink rounded-full w-[.5rem] h-[.5rem]"></div>
                </div>
                <span className="text-bluegray-400">{timeAgo} ago</span>
                {content}
            </div>
            {referencePic ? referencePic : false}
        </div>
    );
}