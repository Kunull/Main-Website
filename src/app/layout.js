import localFont from 'next/font/local'
import './globals.css'

const myFont = localFont({ src: '../../public/assets/fonts/VCR OSD Mono/VCROSDMono.woff2' })

export const metadata = {
  manifest: '/manifest.json',
  title: 'Create Next App',
  description: 'Cyber security researcher and engineer',
}

export const viewport = {
  themeColor: "#000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <div className="sticky">
          <div className="effectGlitch"></div>
          <div className="effectNoise"></div>
          <div className="scanLine"></div>
          <div className="gradient"></div>
          <div className="noise"></div>
          <div className="backgroundLines"></div>
          <div className="backgroundEffect"></div>
        </div>

        {children}
 
    
  {/*   
        <div className='content-wrapper-front'>
          {children}
        </div>
   
        <div className='content-wrapper-back'>
          {children}
        </div>
  */}

      </body>
    </html>
  )
}
