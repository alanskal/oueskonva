import './styles/page.scss'
import './styles/boutons.scss'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <div>

      <h1 className="d-flex text-center justify-content-center">
        OUESKONVA?
      </h1>
        <Navbar />
      <h4 className='align-items-center d-flex justify-content-center pt-5'>
        Onyvakan?
      </h4>
        <div className='boutons d-flex justify-content-center'>
          <div className='btn-aujd btn btn-warning'>
            <p className='align-items-center'>Aujourd'hui</p>
          </div>
          <div className='btn-aujd btn btn-warning mx-2'>
            <p>Cette semaine</p>
          </div>
          <div className='btn-aujd btn btn-warning'>
            <p className=''>Ce Week-End</p>
          </div>
        </div>
    </div>
  )
}
