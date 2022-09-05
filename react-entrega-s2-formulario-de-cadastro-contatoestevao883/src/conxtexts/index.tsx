import AuthProvider from './AuthContext';
import React, { ReactNode } from 'react';

export interface IProviderProps{
  children: ReactNode
}

const Provider = ({ children }: IProviderProps) => (
    <AuthProvider>{children}</AuthProvider>
  
);

export default Provider;