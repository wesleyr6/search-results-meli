import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductDetail } from '../../actions/items';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Main from '../../components/Main';
import { IProductDetail } from '../../interfaces/product-detail';
import { convertPriceToCurrency, getNamefromCondition } from '../../utils';

interface IResult {
  data: IProductDetail;
}

function Details() {
  const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;

  const [loading, setLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<string[]>([]);
  const [productDetail, setProductDetail] = useState<IProductDetail | null>(
    null
  );

  const fetchProductDetail = async () => {
    if (productId) {
      try {
        const { data }: IResult = await getProductDetail(productId);
        setProductDetail(data);

        if (data?.item?.category?.name) {
          setCategory([data.item.category.name]);
        }

        setLoading(false);
      } catch {
        setProductDetail(null);
        setLoading(false);
      }
    } else {
      navigate('/404');
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [productId]);

  return (
    <div className="w-full">
      <Header />
      <Breadcrumb items={category} />

      <Main className="p-8">
        {loading && <Loader />}

        {!loading && (
          <div className="w-full">
            {productDetail ? (
              <div className="w-full">
                <div className="w-full flex flex-wrap sm:flex-nowrap">
                  <figure className="inline-flex w-full lg:min-w-2.5xl max-w-2.5xl max-h-2.5xl  rounded-xs mb-4 mr-4 sm:mb-0">
                    <img
                      src={productDetail.item.picture}
                      alt="Foto"
                      role="presentation"
                      className="w-full object-contain"
                    />
                  </figure>

                  <div className="w-full sm:w-auto flex flex-col">
                    <h2 className="inline-flex text-xs mb-4 text-gray-550 capitalize">
                      {`${getNamefromCondition(
                        productDetail.item.condition
                      )} - ${productDetail.item.sold_quantity} vendidos`}
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
                    {productDetail.item.description
                      ? productDetail.item.description
                      : 'El vendedor no ha añadido ninguna descripción del producto.'}
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
