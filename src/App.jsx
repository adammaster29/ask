
import { useState } from 'react'
import './App.css'

function App() {
  const [modal, setModal] = useState(false)
  const [modal_2, setModal_2] = useState(false)
  function si__modal() {
    setModal(!modal)
  }
  function no_modal() {
    setModal_2(!modal_2)
  }

  return (
    <>
      <h1 className='title'>QUIERES SER MI AMIGA</h1>
      <div className='btn'>
        <button onClick={si__modal} class="button"></button>
        <button onClick={no_modal} class="button button__2"></button>
      </div>
      {modal && (
        <div className="padre">
          <div class="card">
            <a class="card1" href="#">
              <p>Yo sabia que querias</p>
              <p class="small">jajajaja gracias por decirme si 💖💖TQM💖💖.</p>
              <div class="go-corner" href="#">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
          <button class="cta">
  <span onClick={()=>setModal(!modal)}>Salir</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
        </div>
      )

      }
      {/* ******modal 2 */}
      {modal_2 && (
        <div className="padre">
          <div class="card">
            <a class="card1" href="#">
              <p>Porque noooooooooo</p>
              <p class="small">jajajaja Respeto tu desicion 😢😢😢😢😢.</p>
              <div class="go-corner" href="#">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
          <button class="cta">
  <span onClick={()=>setModal_2(!modal_2)}>Salir</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
        </div>
      )

      }
    </>
  )
}

export default App
