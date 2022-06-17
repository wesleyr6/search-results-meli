import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../actions/items';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Main from '../../components/Main';
import { convertPriceToCurrency } from '../../utils';

interface IAuthor {
  name: string;
  lastname: string;
}

interface IPrices {
  currency: string;
  amount: number;
  decimals: number;
}
interface IProduct {
  id: string;
  title: string;
  price: IPrices;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}
interface IProductDetail {
  author: IAuthor;
  item: IProduct;
}

function Details() {
  const params = useParams();
  const { id: productId } = params;

  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState<IProductDetail | null>(
    null
  );

  const fetchProductDetail = async () => {
    if (productId) {
      try {
        const { data } = await getProductDetail(productId);
        setProductDetail(data);
        setLoading(false);
      } catch {
        setProductDetail(null);
        setLoading(false);
      }
    } else {
      setProductDetail(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [productId]);

  return (
    <div className="w-full">
      <Header />
      <Breadcrumb />

      <Main className="p-8">
        {loading && <Loader />}

        {!loading && (
          <div className="w-full">
            {productDetail ? (
              <div className="w-full">
                <div className="w-full flex flex-wrap sm:flex-nowrap">
                  <figure className="w-full inline-flex max-w-2.5xl max-h-2.5xl  rounded-xs mb-4 mr-4 sm:mb-0">
                    <img
                      src={productDetail.item.picture}
                      alt="Foto"
                      role="presentation"
                      className="w-full object-contain"
                    />
                  </figure>

                  <div className="w-full sm:w-auto flex flex-col">
                    <h2 className="inline-flex text-xs mb-4 text-gray-550 capitalize">
                      {`${productDetail.item.condition} - ${productDetail.item.sold_quantity} vendidos`}
                    </h2>

                    <h1 className="inline-flex text-2xl text-gray-750 leading-tight">
                      {productDetail.item.title}
                    </h1>

                    <span className="inline-flex my-8 text-4.5xl text-gray-750 whitespace-nowrap">
                      $
                      {convertPriceToCurrency(
                        productDetail.item.price.currency,
                        productDetail.item.price.amount
                      )}
                    </span>

                    <Button
                      type="button"
                      className="w-full"
                      onChange={() => {}}
                    >
                      Comprar
                    </Button>
                  </div>
                </div>

                <div className="w-full flex flex-col mt-8">
                  <h2 className="inline-flex text-2.5xl text-gray-750 mb-8">
                    Descripción del producto
                  </h2>

                  <p className="inline-flex m-0 p-0 text-base text-gray-450">
                    {productDetail.item.description}
                  </p>
                </div>
              </div>
            ) : (
              <p>Producto no encontrado...</p>
            )}
          </div>
        )}
      </Main>
    </div>
  );
}

export default Details;
