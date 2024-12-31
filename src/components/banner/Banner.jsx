import './banner.scss';
import FaisceauxLumineux from '../../assets/images/site/faisceaux.png'

const Banner = () => {
    return (
      <div className='presentation'>
        <div className="presentation__background">
          <img
            className="presentation__background__img"
            src={FaisceauxLumineux}
            alt="faisceaux lumineux"
          />
        </div>
        <div className="presentation__content">
          <h2 className="presentation__content__title">
            Trouver un cadeau n&apos;a jamais été aussi facile !
          </h2>
        </div>
      </div>
    );
  };
  
  export default Banner;
  