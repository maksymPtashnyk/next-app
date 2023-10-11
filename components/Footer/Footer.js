import Image from 'next/image';
import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logoMenu}>
        <Image src='/logo-footer.svg' width={215} height={28} alt='main-logo' className={styles.footer__logo} />
        <div className={styles.footer__social}>
          <Image src='/instagram.svg' width={34} height={34} alt='main-logo' className={styles.footer__logo__social} />
          <Image src='/facebook.svg' width={34} height={34} alt='main-logo' className={styles.footer__logo__social} />
          <Image src='/tik_tok.svg' width={34} height={34} alt='main-logo' className={styles.footer__logo__social} />
        </div>
      </div>
      <div className={styles.footer__sections}>
        <div className={styles.footer__sections__column}>
          <p className={styles.footer__sections__link}>Магазины</p>
          <p className={styles.footer__sections__link}>Рестораны</p>
          <p className={styles.footer__sections__link}>Услуги</p>
          <p className={styles.footer__sections__link}>Развлечения</p>
          <p className={styles.footer__sections__link}>Новости и скидки</p>
        </div>
        <div className={styles.footer__sections__column}>
          <p className={styles.footer__sections__link}>О нас</p>
          <p className={styles.footer__sections__link}>Вакансии</p>
          <p className={styles.footer__sections__link}>Арендаторам</p>
          <p className={styles.footer__sections__link}>Контакты</p>
        </div>
        
      </div>
      <div className={styles.footer__contacts}>
        <div className={styles.footer__contacts__block}>
          <Image src='/map-tag.png' width={14} height={14} alt='navigation icon'/>
          <p className={styles.footer__contacts__text}>г. Кишинев, ул. Михаила Садовяну 42/6</p>
        </div>
        <div className={styles.footer__contacts__block}>
          <Image src='/clock.png' width={14} height={14} alt='clock icon'/>
          <p className={styles.footer__contacts__text}>10:00-22:00</p>
        </div>
        <div className={styles.footer__contacts__block}>
          <Image src='/phone.png' width={14} height={14} alt='phone icon'/>
          <p className={styles.footer__contacts__text}>+373 78 88 99 66</p>
        </div>
        <div className={styles.footer__contacts__block}>
          <Image src='/email.png' width={14} height={14} alt='email icon'/>
          <p className={styles.footer__contacts__text}>info@portmall.md</p>
        </div>
        <div className={styles.footer__contacts__navigator}>
          <div className={styles.footer__contacts__navigator__block}>
            <Image src='/logo-cart.png' width={29} height={24} alt='logo'/>
            <p className={styles.footer__contacts__navigator__text}>Карта Молла</p>
          </div>
        </div>
      </div>
      <div className={styles.footer__discribe}>
        <p className={styles.footer__header}>
        Подпишитесь на рассылку
        </p>
        <form className={styles.footer__form}>
          <input type='email' placeholder='Ваш email' required className={styles.footer__form__input}/>
          <button type='submit'  className={styles.footer__form__button}>
            <Image src='/button-arrow.svg' width={12} height={12} alt='submit button' className={styles.footer__form__image}></Image>
          </button>
        </form>
      </div>
      <div className={styles.footer__asigne}></div>
    </footer>
  );
};

export default Footer;