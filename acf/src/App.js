import './App.css';
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';

function App() {
useEffect(() => {
  fetchWpPostJSON()
})

const [state, setState] = useState()
const [isLoading, setIsLoading] = useState(true)

// https://xn--webbutvecklare-glimkra-65b.se/wp-json/acf/v3/minimum



async function fetchWpPostJSON() {
  const response = await fetch('https://xn--webbutvecklare-glimkra-65b.se/wp-json/wp/v2/posts');
  const wpPost = await response.json();
  // console.log(wpPost[0].content.rendered)
  setState(wpPost[0].content.rendered)
  setIsLoading(false)
}

console.log(isLoading)
console.log(state)
  return (
    <div className="App">
      {
        isLoading ? <p>laddar</p> : parse(state)
      }
    </div>
  );
}

export default App;
