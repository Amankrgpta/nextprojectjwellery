import { Lato, Playfair_Display } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';


const lato_init = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '700'],
  variable: '--lato-name'
});

const playfair_display_init = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-playfair-display'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className={`${lato_init.variable} ${playfair_display_init}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
