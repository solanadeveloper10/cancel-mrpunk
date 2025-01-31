import Contract from './Contract'

import './App.css'

function App() {
  return <>
    <div className='color-bg' />
    <div className='wrapper'>
      <header className='header'>
        <a href="#" target='_blank' className='https://x.com/CancelMrPunk'>
          X
        </a>
        <a href="#" target='_blank' className='https://t.me/CancelMrPunk'>
          Telegram
        </a>
        <a href="#" target='_blank' className='https://www.dextools.io/app/en/solana/pair-explorer/5STy8JRiTeSvdSNjjqQBCUmDNsL8Y5ZZ4XxcyP1ppgjY?t=1738339718383'>
          Dextools
        </a>
        <a href="#" target='_blank' className='https://dexscreener.com/solana/igRHkYv54WYHgN4Y3HxJrWrJwV9BTbwntFwwStMq6od'>
          Dexscreener
        </a>
        <a href="#" target='_blank' className='http://raydium.io/swap/?inputMint=sol&outputMint=igRHkYv54WYHgN4Y3HxJrWrJwV9BTbwntFwwStMq6od'>
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
