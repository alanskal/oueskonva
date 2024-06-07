import '../styles/navbar.scss';
import Link from 'next/link';

export default function Navbar() {
  return(
    <div className=''>
      <span className="bar d-flex justify-content-between align-items-center">
        <Link href="/evenements" className='events'>
          <h3>ÉVENEMENTS</h3>
        </Link>
        <Link href="/shopping" className='events'>
          <h3>SHOPPING</h3>
        </Link>
        <Link href="/culture" className='events'>
          <h3>CULTURE</h3>
        </Link>
        <Link href="/soirées" className='events'>
          <h3>SOIRÉES</h3>
        </Link>
        <Link href="/bons-plans" className='events'>
          <h3>BONS PLANS</h3>
        </Link>
        <Link href="/oueskonmange" className='events'>
          <h3>OUESKONMANGE</h3>
        </Link>
-
      </span>
    </div>
  )

}
