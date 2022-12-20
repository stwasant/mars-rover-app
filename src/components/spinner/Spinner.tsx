import React, { CSSProperties } from 'react';
import { GridLoader } from 'react-spinners';

interface props {
  cargando: boolean;
  color: string;
  size: number;
}

const Spinner = (param: props) => {
  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    marginTop: '15rem',
  };

  return (
    <>
      <GridLoader color={param.color} cssOverride={override} loading={param.cargando} size={param.size} />
    </>
  );
};

export default Spinner;
