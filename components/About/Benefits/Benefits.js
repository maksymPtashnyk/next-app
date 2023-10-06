import Slider from '../Slider-second/Slider';
import styles from './Benefits.module.scss';

function Benefits(props) {
  return (
    <div className={styles.benefits}>
      <h2 className={styles.benefits__header}>Наши преимущества</h2>
      <div className={styles.benefits__slider}>
        <Slider />
      </div>
      
    </div>
  );
}


export default Benefits;