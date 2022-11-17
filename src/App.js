
import Header from './components/Header';
import MainHome from './components/MainHome';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createContext, useState } from 'react';
import useAxios from "./api/useAxios"
import Pins from './components/Pins';


// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`https://api.unsplash.com/search/photos?page=1&query=office&client_id=p0O7Rb4W6t3X-hvK7ZvMpDtsSZcY1dfGct_1Oh2XeaI`);
  
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }
  return (
    <ImageContext.Provider value={value}>
      <Header />
      <MainHome>
      
      <Pins/>
      </MainHome>
    </ImageContext.Provider>
    
    
  );
}

export default App;
