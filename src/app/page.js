'use client';
import { useState, useEffect } from 'react';
import Card from '../components/card';
import Footer from '../components/footer';
import notifications from '../data/notifications';

export default function Home() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        function totalNotifications(notifications) {
            setNumber(0);
            notifications.map(notification => {
                // if isRead is false, plus 1 to total
                notification.isRead === false && setNumber(number => number + 1);
            });
        }
        totalNotifications(notifications);
    }, []);

    function handleClick() {
        notifications.map(notification => {
            // if isRead is false, minus 1 from total & set isRead to true
            notification.isRead === false && ((setNumber(number => number - 1), (notification.isRead = true)))
        })
    }

    return (
        <div className="flex flex-col font-primary bg-white sm:bg-bluegray-100 min-h-screen sm:px-4 sm:pt-4">
            <div className="flex sm:items-center flex-grow">
                <main className="bg-white text-bluegray-500 max-w-3xl w-full mx-auto px-4 py-5 sm:px-6 sm:rounded-xl sm:shadow-lg">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex justify-start items-center gap-3">
                            <h1 className="text-xl md:text-2xl font-bold text-blue-900">Notifications</h1>
                            <span className="bg-navy font-bold text-white text-sm rounded px-3 py-0.5">{number}</span>
                        </div>
                        <button className="hover:text-navy" onClick={handleClick}>Mark all as read</button>
                    </div>

                    {/* Cards */}
                    <div className="space-y-2">
                        <Card />
                    </div>
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
