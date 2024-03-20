import { Radio } from '@alfalab/core-components/radio';
import { Typography } from '@alfalab/core-components/typography';
import { useId } from 'react';
import { appSt } from './style.css';

type Props = {
  imgSrc: string;
  title: string;
  value: string;
  checked: boolean;
  setChecked: (v: string) => void;
};

export const BoxItem = ({ checked, imgSrc, setChecked, title, value }: Props) => {
  const id = useId();

  return (
    <label htmlFor={id} className={appSt.box({ selected: checked })}>
      <img style={{ borderBottomLeftRadius: '.75rem' }} src={imgSrc} width={48} height={48} />
      <Typography.Text tag="p" view="primary-small" weight="bold" defaultMargins={false}>
        {title}
      </Typography.Text>
      <Radio
        circleClassName={appSt.circle({ selected: checked })}
        className={appSt.checkContainer}
        id={id}
        checked={checked}
        name="boxes"
        onChange={() => setChecked(value)}
      />
    </label>
  );
};
