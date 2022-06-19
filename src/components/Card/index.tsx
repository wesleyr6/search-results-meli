import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import IMG_ICON_SHIPMENT from '../../assets/images/icon-shipment.png';
import { convertPriceToCurrency } from '../../utils';

interface IProps {
  id: string;
  price: number;
  title: string;
  currency: string;
  picture: string;
  location?: string;
  freeShipping: boolean;
}

function Card({
  id,
  title,
  currency,
  picture,
  price,
  location,
  freeShipping,
}: IProps) {
  const imageW = 'w-full min-w-30 max-w-30 sm:min-w-45 sm:max-w-45';
  const imageH = 'h-full min-h-45 max-h-45 sm:min-h-45 sm:max-h-45';

  return (
    <>
      <Link
        to={`/items/${id}`}
        className={`${imageW} ${imageH} overflow-hidden ml-0 my-0 mr-4 inline-flex justify-center items-center content-center rounded-xs`}
      >
        <figure
          className={`${imageW} ${imageH} overflow-hidden justify-center items-center content-center inline-flex border-none outline-none`}
        >
          <LazyLoadImage
            alt={title}
            width="100%"
            height="100%"
            role="presentation"
            src={picture}
            className={`${imageW} ${imageH} object-contain inline-flex border-none outline-none bg-white`}
          />
        </figure>
      </Link>

      <div className="w-full inline-flex flex-col py-4 box-border">
        <div className="w-full grid grid-cols-4 gap-4 sm:gap-8 mb-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="w-full inline-flex items-center content-center">
              <span className="text-2xl leading-none inline-flex no-underline text-gray-750 whitespace-nowrap">
                ${convertPriceToCurrency(currency, price)}
              </span>

              {freeShipping && (
                <img
                  src={IMG_ICON_SHIPMENT}
                  alt="Envío grátis"
                  title="Envío grátis"
                  className="inline-flex ml-2 border-none outline-none"
                />
              )}
            </div>
          </div>

          <div>
            <span className="text-xs text-gray-450 h-full items-end content-end hidden sm:inline-flex no-underline">
              {location}
            </span>
          </div>

          <h2 className="col-span-4 sm:col-span-3 text-lg leading-6 capitalize text-gray-750 no-underline">
            {title}
          </h2>
        </div>
      </div>
    </>
  );
}

Card.defaultProps = {
  location: '',
};

export default Card;
