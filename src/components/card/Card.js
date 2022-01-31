import './card.css';

const Card = ({ album }) => {

   return (
      <div className='card__Wrapper'>
         <div
            className='content__Wrapper'
         >
            <div className='content__container'>
               <img src={album.thumbnail} alt={album.title} loading='lazy' />
               <div className='date__Wrapper'>{album.title}</div>
            </div>
         </div>
      </div>
   );
};

export default Card;
