import Image from 'next/image';
import styles from './Cooperation.module.scss';

function Cooperation(props) {
  return (
    <div className={styles.cooperation}>
      <div className={styles.cooperation__statement}>
        <h3 className={styles.cooperation__header}>Хотите начать сотрудничество?</h3>
        <div className={styles.cooperation__line}></div>
        <p className={styles.cooperation__paragraph}>Свяжитесь с интересующим вас отделом или оставьте заявку и мы перезвоним вам в ближайшее время</p>
        <button className={styles.cooperation__button}>Оставить заявку</button>
      </div>
      
      <div className={styles.cooperation__contacts}>
        <div  className={styles.cooperation__contacts__content}>
          <Image src='/icon-one.svg' width={44} height={44} alt='icon' className={styles.cooperation__contacts__image}/>
          <div className={styles.cooperation__contacts__texts}>
            <p className={styles.cooperation__contacts__name}>Инфо-центр</p>
            <p className={styles.cooperation__contacts__number}>+373 22 039 736</p>
            <p className={styles.cooperation__contacts__email}>port.info@gmail.com</p>
          </div>
        </div>
        <div  className={styles.cooperation__contacts__content}>
          <Image src='/icon-three.svg' width={44} height={44} alt='icon' className={styles.cooperation__contacts__image}/>
          <div className={styles.cooperation__contacts__texts}>
            <p className={styles.cooperation__contacts__name}>отдел рекламы</p>
            <p className={styles.cooperation__contacts__number}>+373 22 039 736</p>
            <p className={styles.cooperation__contacts__email}>port.advertising@gmail.com</p>
          </div>
        </div>
        <div  className={styles.cooperation__contacts__content}>
          <Image src='/icon-two.svg' width={44} height={44} alt='icon' className={styles.cooperation__contacts__image}/>
          <div className={styles.cooperation__contacts__texts}>
            <p className={styles.cooperation__contacts__name}>отдел аренды</p>
            <p className={styles.cooperation__contacts__number}>+373 22 039 736</p>
            <p className={styles.cooperation__contacts__email}>port.rent@gmail.com</p>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default Cooperation;