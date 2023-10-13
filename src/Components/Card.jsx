import Proptypes from 'prop-types'
function Card({imgUrl, title, price}) {
  return (
    <div className='py-2 text-center rounded shadow-lg'>
        <div className='overflow-hidden mb-2'>
            <img src={imgUrl}
                className='hover:scale-125 duration-1000 w-40 h-40 mx-auto py-2'
            />
    </div>
        <h1 className='text-2xl'>{title}</h1>
        <p className='text-md text-stone-400'>{price} INR/-</p>
  </div>
  )
}

Card.protoTypes = {
    imgUrl: Proptypes.string.required,
    title: Proptypes.string.required,
    price: Proptypes.string.required,
}

export default Card;
