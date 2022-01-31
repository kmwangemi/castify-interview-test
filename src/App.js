import { useState, useEffect } from 'react';
import { fetchData } from './api';
import Loader from './components/loader/Loader';
import Card from './components/card/Card';

import './App.css';

const App = () => {

   const [albums, setAlbums] = useState([])

   useEffect(() => {
      const fetchAlbums = async () => {
         const fetchedData = await fetchData();
         setAlbums(fetchedData);
      }
      fetchAlbums()
   }, [])

   if (!albums) {
      return <Loader />;
   }

   return (
      <main>
         {
            albums.map(album => (
               <Card key={album.id} album={album} />
            ))
         }
      </main>
   );
};

export default App;
