import Contract from './Contract'

import './App.css'

function App() {
  return <>
    <div className='color-bg' />
    <div className='wrapper'>
      <header className='header'>
        <a href="#" target='_blank' className='social-link'>
          X
        </a>
        <a href="#" target='_blank' className='social-link'>
          Telegram
        </a>
        <a href="#" target='_blank' className='social-link'>
          Dextools
        </a>
        <a href="#" target='_blank' className='social-link'>
          Dexscreener
        </a>
        <a href="#" target='_blank' className='social-link'>
          Raydium
        </a>
      </header>

      <div className='image-wrapper'>
        <img src="/bg.gif" alt="Mr. Punk" className='image' />
      </div>

      <Contract />
    </div>

  </>
}

export default App
