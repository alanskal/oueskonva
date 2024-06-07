import '../styles/navbar.scss';
import Link from 'next/link';

export default function Navbar() {
  return(
    <div className=''>
      <span className="bar d-flex justify-content-between align-items-center">
        <h3>ÉVENEMENTS</h3>
        <h3>SHOPPING</h3>
        <h3>CULTURE</h3>
        <h3>SOIRÉES</h3>
        <h3>BONS PLANS</h3>
        <h3>OUESKONMANGE?</h3>
      </span>
    </div>
  )

}
