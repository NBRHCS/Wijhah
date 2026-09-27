import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from './themes/theme-provider';
export const metadata:Metadata={title:'وجهة | اكتشف مسارك المهني',description:'رحلتك من الفضول إلى مسار مهني يناسبك. Discover your direction.',icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl" data-theme="theme-2" suppressHydrationWarning><body><ThemeProvider>{children}</ThemeProvider></body></html>}
