
import Link from 'next/link';
import { useRouter } from 'next/router';


const style= {
    color: '#0070f3',
    textDecoration: 'underline'
};


export const Activelink = ({ text, href }) => {

    const { asPath } = useRouter();



  return (
      <Link href={ href } >
        <a style={ asPath === href ? style : null }>{ text }</a>
      </Link>
  )
}
