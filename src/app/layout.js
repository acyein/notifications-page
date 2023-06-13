import './globals.css'

export const metadata = {
    title: 'Notifications Page',
    description: 'A solution to the Notifications page challenge on Frontend Mentor',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
