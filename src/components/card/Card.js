import './card.css';

const Card = ({ album }) => {

   const handleClick = () => {
      if (!album.description) {
         alert('No desription')
      }
      alert(album.description)
   }

   return (
      <div className='card__Wrapper' onClick={handleClick}>
         <img src={album.thumbnail} alt={album.title} loading='lazy' />
         <div className='title__Wrapper'>{album.title}</div>
      </div>
   );
};

export default Card;
