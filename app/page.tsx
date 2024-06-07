import './styles/page.scss'
import './styles/boutons.scss'
import './styles/cards.scss'
import miumiu from './assets/miumiu.png';
import Navbar from './components/navbar'
import Image from 'next/image'

const imageStyle = {
  borderRadius: '3px',
}

export default function Home() {
  return (
    <div>

      <h1 className="d-flex text-center justify-content-center">
        OUESKONVA?
      </h1>
        <Navbar />
      <h4 className='align-items-center d-flex justify-content-center pt-4'>
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
          <div className='content pt-2'>
              <div className="row container-fluid">
              <h3>En ce moment</h3>
                <div className="col-4">
                  <div className="card">
                    <Image
                    src={miumiu}
                    layout="fill"
                    alt="miumiustand"
                    style={imageStyle}
                    />
                  </div>
                </div>
              </div>
          </div>
    </div>
  )
}
