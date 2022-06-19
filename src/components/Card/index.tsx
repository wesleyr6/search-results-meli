import { Link } from 'react-router-dom';
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
  return (
    <>
      <Link
        to={`/items/${id}`}
        className="rounded-xs min-w-45 min-h-45 max-w-45 max-h-45 overflow-hidden ml-0 my-0 mr-4 inline-flex"
      >
        <figure className="min-w-45 min-h-45 max-w-45 max-h-45 overflow-hidden justify-center items-center content-center inline-flex border-none outline-none">
          <img
            src={picture}
            alt={title}
            role="presentation"
            className="object-contain w-full h-full inline-flex border-none outline-none bg-white"
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
