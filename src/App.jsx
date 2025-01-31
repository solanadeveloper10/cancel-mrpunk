import Contract from './Contract'

import './App.css'

function App() {
  return <>
    <div className='color-bg' />
    <div className='wrapper'>
      <header className='header'>
        <a href="https://x.com/CancelMrPunk" target='_blank' className='social-link'>
          X
        </a>
        <a href="https://t.me/CancelMrPunk" target='_blank' className='social-link'>
          Telegram
        </a>
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/5STy8JRiTeSvdSNjjqQBCUmDNsL8Y5ZZ4XxcyP1ppgjY?t=1738339718383" target='_blank' className='social-link'>
          Dextools
        </a>
        <a href="https://dexscreener.com/solana/igRHkYv54WYHgN4Y3HxJrWrJwV9BTbwntFwwStMq6od" target='_blank' className='social-link'>
          Dexscreener
        </a>
        <a href="http://raydium.io/swap/?inputMint=sol&outputMint=igRHkYv54WYHgN4Y3HxJrWrJwV9BTbwntFwwStMq6od" target='_blank' className='social-link'>
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
