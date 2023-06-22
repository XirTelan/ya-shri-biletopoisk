import { FunctionComponent } from "react"

const Film: FunctionComponent<Props> = (id) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className="flex width-full">
          <Image
            src={'https://i.postimg.cc/FF8sXZgc/3.webp'}
            alt={''}
            width={400}
            height={500}
            style={{ objectFit: 'cover' }}
          ></Image>
          <div className={styles.description}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.field}>
              Жанр:<span>Фэнтези</span>
            </div>
            <div className={styles.field}>
              Год выпуска:<span>Фэнтези</span>
            </div>
            <div className={styles.field}>
              Рейтинг:<span>Фэнтези</span>
            </div>
            <div className={styles.field}>
              Режиссер:<span>Фэнтези</span>
            </div>
            <div>
              <div className={styles.field}>Описание</div>
              <div>
                ;kjsad lfksdalkjfhsakdjf ksd gskdjlg lsjkhksjdh fksjhdf kjshdkj
                shdgkjh sdkgjhsdkjhfk;hsadk;ghkfjghs k daf hkasjfhaklsjfh a
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
};
export default Film;

interface Props {
    
}

