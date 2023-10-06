import Slider from '../Slider-first/Slider';
import styles from './Galery.module.scss';

function Galery(props) {
  return (
    <div className={styles.galery}>
      <h2 className={styles.galery__header}>Галерея</h2>
      <div className={styles.galery__slider}>
        <Slider />
      </div>
      
    </div>
  );
}


export default Galery;