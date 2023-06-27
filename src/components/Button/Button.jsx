import React from 'react';
import { StyledBtn } from './Button.styled';

export const Button = ({ onButtonLoadMore }) => {
  return (
    <StyledBtn onClick={onButtonLoadMore} type="button">
      Load more
    </StyledBtn>
  );
};
