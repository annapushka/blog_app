import { FC, lazy } from 'react';
import { AddComentFormProps } from './AddComentForm';

export const AddComentFormAsync = lazy<FC<AddComentFormProps>>(() => import('./AddComentForm'));
