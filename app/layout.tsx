import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'SAYYEED SMARTDATA',description:'Intelligent digital services'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}