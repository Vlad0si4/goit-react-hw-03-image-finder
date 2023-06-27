import React from 'react';
import { Img, StyledGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images = [] }) => {
  return (
    <StyledGallery>
      {images.map(({ id, webformatURL, tags }) => (
        <li key={id}>
          <Img src={webformatURL} alt={tags} width="360" />
        </li>
      ))}
    </StyledGallery>
  );
};
