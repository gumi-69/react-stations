// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */


export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")
  const fetchRandomDogImage = async () => {
    try{
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogUrl(data.message);
    } catch (error) {
      console.error("Error", error);
    }
  }

  return (
    <header className='dogImg'>
      <h1>Dogアプリ</h1>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} />
      <button onClick={fetchRandomDogImage}>画像を変更</button>
    </header>
  )
}
