import styles from './Qoute.module.scss';

function Quote(props) {
  return (
    <div className={styles.quote}>
      <div  className={styles.quote__block}> 
        <div  className={styles.quote__lines}>
          <div className={styles.quote__line}></div>
          <div className={styles.quote__line}></div>
          <div className={styles.quote__line}></div>
        </div>

        <article className={styles.quote__article}>
          <p className={styles.quote__mainText}>Огромные стеклянные потолки и естественное освещение качественно отличают его от других МОЛЛОВ, придавая эффект пространства.</p>
          <div className={styles.quote__author}>
            <div className={styles.quote__author__line}/>
            <p className={styles.quote__author__text}> Андрей Васильев, архитектор</p>
          </div>
          
        </article>
      </div>
    </div>
  );
}

export default Quote;