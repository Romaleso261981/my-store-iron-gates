import { type FC, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type Props = {
  src: string;
  alt: string;
  className: string;
};

const ImageLoader: FC<Props> = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      {loaded && (
        <AiOutlineLoading3Quarters
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            margin: 'auto'
          }}
        />
      )}
      <img alt={alt || ''} className={className} onLoad={onLoad} src={src} />
    </>
  );
};

export default ImageLoader;
