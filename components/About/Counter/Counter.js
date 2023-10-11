import Image from "next/image";
import styles from "./Counter.module.scss";
import classNames from "classnames";

const Counter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.counter}>
        <div className={styles.counter__block}>
          <Image src="/Frame.svg" width={20} height={20} alt="icon" />
          <div>
            <p className={styles.counter__number}>32 000 м2</p>
            <p className={styles.counter__description}>
              коммерческая <br /> площадь
            </p>
          </div>
        </div>
        <div className={styles.counter__lineHorisontal} />
        <div className={styles.counter__lineVertical} />
        <div
          className={classNames(
            styles.counter__block,
            styles.counter__block__right
          )}
        >
          <Image src="/Frame-1.svg" width={20} height={20} alt="icon" />
          <div>
            <p className={styles.counter__number}>4</p>
            <p className={styles.counter__description}>
              современных <br />
              зала
            </p>
          </div>
        </div>
        <div className={styles.counter__block}>
          <Image src="/Frame-2.svg" width={20} height={20} alt="icon" />
          <div>
            <p className={styles.counter__number}>25 000 м2</p>
            <p className={styles.counter__description}>
              детская
              <br /> площадка
            </p>
          </div>
        </div>
        <div
          className={classNames(
            styles.counter__block,
            styles.counter__block__right
          )}
        >
          <Image src="/Frame-3.svg" width={20} height={20} alt="icon" />
          <div>
            <p className={styles.counter__number}>1000</p>
            <p className={styles.counter__description}>
              парковочных <br />
              мест
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
