import { Dna, ProgressBar } from 'react-loader-spinner';

export const Spiner = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '30px',
        position: 'absolute',
        left: '45%',

        top: '48%',
      }}
    >
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
export const ButtonSpiner = () => {
  return (
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#F4442E"
      barColor="#51E5FF"
    />
  );
};
