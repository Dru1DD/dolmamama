import { HTMLProps } from 'react';

type ImageProps = HTMLProps<HTMLImageElement>;

const Image = ({ ...props }: ImageProps) => {
  return <img {...props} />;
};

export default Image;
