import Link from "next/link";
import Button from '../components/Button/Button';

export const metadata = {
  title: '404 | Kunal Walavalkar',
  openGraph: {
    title: '404 | Kunal Walavalkar',
  },
}

const NotFound = () => {
  return (
    <main>
      <p className='four-o-four'>
        <span className="">4</span>
        <Button 
              button="" 
              buttonClassName="zero clickable pages" 
              buttonHref="/" 
              ariaLabel="Go to my Projects page"
        />
        <span className="">4</span>
      </p>
    </main>
  );
}

export default NotFound;
