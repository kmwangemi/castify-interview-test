import { useState, useEffect } from 'react';
import { fetchData } from './api';
import Loader from './components/loader/Loader';
import Message from './components/message/Message';
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

   // const onButtonClick = () => {
   //    if (ref.current) {
   //       ref.current.handleUpdate();
   //    }
   // };

   if (!albums) {
      return <Loader/>;
   }

   console.log({ albums });

   return (
      <div className='Wrapper'>
         <main>
            {
               albums.map(album => (
                  <Card key={album.id} album={album} />
               ))
            }
         </main>
      </div>
   );
};

export default App;
