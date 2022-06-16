import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Main from '../../components/Main';

function Details() {
  return (
    <div className="w-full">
      <Header />
      <Breadcrumb />

      <Main className="p-8">
        <div className="w-full flex flex-wrap sm:flex-nowrap">
          <figure className="w-full inline-flex max-w-2.5xl object-contain rounded-xs mb-4 sm:mb-0">
            <img src="..." alt="Foto" role="presentation" className="w-full" />
          </figure>

          <div className="w-full sm:w-auto flex flex-col">
            <h2 className="inline-flex text-xs mb-4 text-gray-550">
              Nuevo - 234 vendidos
            </h2>

            <h1 className="inline-flex text-2xl text-gray-750 leading-tight">
              Deco Reverse Sombrero Oxford
            </h1>

            <span className="inline-flex my-8 text-4.5xl text-gray-750">
              $1.980
            </span>

            <Button type="button" className="w-full" onChange={() => {}}>
              Comprar
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col mt-8">
          <h2 className="inline-flex text-2.5xl text-gray-750 mb-8">
            Descripción del producto
          </h2>

          <p className="inline-flex m-0 p-0 text-base text-gray-450">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            blanditiis atque? Perferendis labore, maiores natus architecto atque
            iure aperiam necessitatibus sed. Dolores pariatur ab qui culpa
            aspernatur officia doloremque. Deserunt!
          </p>
        </div>
      </Main>
    </div>
  );
}

export default Details;
