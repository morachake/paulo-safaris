import { Inter} from 'next/font/google';
import '@/app/globals.css';

const  inter = Inter(
  {
    subsets: ['latin'],
    display: 'swap',
  }
);


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
