import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import LoginBtn from './LoginBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LogoutBtn from './LogoutBtn';
import { cookies } from 'next/headers';
import DarkMode from './DarkMode';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
    let session = await getServerSession(authOptions);

    let res = cookies().get('mode');
    console.log(res.value);
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${res != undefined && res.value == 'dark' ? 'dark-mode' : ''}`}
            >
                {' '}
                <div className="navbar">
                    <Link href="/" className="logo">
                        Appleforum
                    </Link>
                    <Link href="/list">List</Link>
                    {session ? (
                        <>
                            <span
                                style={{ marginRight: 10, fontWeight: 'bold' }}
                            >
                                {session.user.name}
                            </span>
                            <LogoutBtn></LogoutBtn>
                        </>
                    ) : (
                        <LoginBtn></LoginBtn>
                    )}
                    <DarkMode></DarkMode>
                </div>
                {children}
            </body>
        </html>
    );
}
