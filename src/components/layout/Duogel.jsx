import duogel from '../../assets/images/duogel.svg';
import Products from "./Prodcuts";
import Taps from './Taps';

const Duogel = () => {
    return (
        <section className="duogel text-center">
            <div className="duogel-container">
                <figure>
                    <img src={duogel} className='w-25' alt="Duogel" />
                </figure>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam non dicta doloremque a molestias consequatur amet incidunt nemo voluptas harum necessitatibus sint, numquam blanditiis illum hic inventore odit? Deleniti.</p>
                <div className="products">
                    <h3 className="text-start mb-4">Duogel Product Showcase</h3>
                    <Taps />
                    <Products />
                </div>
            </div>
        </section>
    );
}

export default Duogel;
