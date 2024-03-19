import { RingLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '150px auto',
  borderColor: 'blue',
};

const Loader = () => {
  return (

    <RingLoader
      color={'blue'}
      loading={true}
      cssOverride={override}
      size={150}
    />
  );
};

export default Loader;
