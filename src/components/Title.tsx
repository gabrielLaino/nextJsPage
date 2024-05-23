import  Head  from 'next/head';
import { FC } from 'react';

type TitleType = {
  value: string;
}

const Title: FC<TitleType> = ({ value }) => {
  return (
    <>
     <h1>{value}</h1>
    </>
  );
}

export default Title;