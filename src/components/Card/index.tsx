import IMG_ICON_SHIPMENT from '../../assets/images/icon-shipment.png';

interface IProps {
  price: string;
  title: string;
  img: string;
  location?: string;
}

function Card({ title, img, price, location }: IProps) {
  return (
    <>
      <figure className="rounded-xs min-w-45 min-h-45 max-w-45 max-h-45 overflow-hidden justify-center items-center content-center ml-0 my-0 mr-4 inline-flex border-none outline-none">
        <img
          src={img}
          alt={title}
          role="presentation"
          className="object-fit w-full h-full inline-flex border-none outline-none bg-gray-150"
        />
      </figure>

      <div className="w-full inline-flex flex-col py-4 box-border">
        <div className="w-full grid grid-cols-4 gap-4 mb-8">
          <div className="col-span-4 sm:col-span-3 inline-flex items-center content-center">
            <span className="text-2xl leading-none inline-flex no-underline text-gray-750">
              ${price}
            </span>
            <img
              src={IMG_ICON_SHIPMENT}
              alt="Envío grátis"
              title="Envío grátis"
              className="inline-flex ml-2 border-none outline-none"
            />
          </div>

          <div>
            <span className="text-xs text-gray-450 h-full items-end content-end hidden sm:inline-flex no-underline">
              {location}
            </span>
          </div>
        </div>

        <h2 className="text-lg leading-6 capitalize text-gray-750 no-underline">
          {title}
        </h2>
      </div>
    </>
  );
}

Card.defaultProps = {
  location: '',
};

export default Card;
