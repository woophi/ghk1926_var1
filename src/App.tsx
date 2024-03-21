import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { List } from '@alfalab/core-components/list';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import { BoxItem } from './BoxItem';
import headerImg from './assets/header.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import { appSt } from './style.css';

const boxes: { imgSrc: string; title: string; value: string }[] = [
  {
    imgSrc: img1,
    title: '+0.5% на вклад до 1 млн руб',
    value: 'v1',
  },
  {
    imgSrc: img2,
    title: 'Дополнительная категория кэшбека на выбор',
    value: 'v2',
  },
  {
    imgSrc: img3,
    title: 'Кэшбек "на все" 2% вместо 1%',
    value: 'v3',
  },
  {
    imgSrc: img4,
    title: 'Начисление повышенного % на остаток накопительного счета',
    value: 'v4',
  },
  {
    imgSrc: img5,
    title: '+3% кэшбека в категории "Продукты"',
    value: 'v5',
  },
];

export const App = () => {
  const [checkedBox, setChecked] = useState('');
  return (
    <>
      <div className={appSt.imgContainer}>
        <img className={appSt.img} src={headerImg} alt="картинка заголовок" />
      </div>
      <div className={appSt.container}>
        <Typography.Text tag="p" view="primary-medium" weight="bold" defaultMargins={false}>
          Чтобы получить дополнительные привилегии в кэшбеке, необходимо выполнить 3 простых шага:
        </Typography.Text>

        <List tag="ol">
          <List.Item>
            <Typography.Text tag="p" view="primary-medium" weight="bold" defaultMargins={false}>
              Выберите одну категорию из списка для получения дополнительных привилегий
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text tag="p" view="primary-medium" weight="bold" defaultMargins={false}>
              Откройте брокерский счет по ссылке
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text tag="p" view="primary-medium" weight="bold" defaultMargins={false}>
              Совершите покупку любой акции или облигации
            </Typography.Text>
          </List.Item>
        </List>
        <Typography.Text tag="p" view="primary-medium" weight="bold" defaultMargins={false}>
          После этих действий, выбранная вами категория добавится в список категорий кэшбека на следующий месяц.
        </Typography.Text>
      </div>

      <div className={appSt.container}>
        {boxes.map(box => (
          <BoxItem
            key={box.value}
            imgSrc={box.imgSrc}
            title={box.title}
            value={box.value}
            setChecked={setChecked}
            checked={box.value === checkedBox}
          />
        ))}
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block={true} view="primary" href="alfabank://longread?endpoint=v1/adviser/longreads/11391">
          Открыть брокерский счет
        </ButtonMobile>
      </div>
    </>
  );
};
