import './card.css';

const Card = ({ album }) => {

   return (
      <div className='card__Wrapper'>
         <img src={album.thumbnail} alt={album.title} loading='lazy' />
         <div className='title__Wrapper'>{album.title}</div>
      </div>
   );
};

export default Card;
