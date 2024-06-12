import { ReactNode } from 'react';

export type T_ReactChildren = Readonly<{
  children: React.ReactNode;
}>;

export type T_Modal = {
  show: () => void;
  hide: () => void;
} | null;

export type T_Each = {
  of: any[];
  render: (item: any, index: number) => ReactNode;
};

export type T_Alert = {
  id: string;
  isOpen: boolean;
  closeModal: () => void;
  message: string | number;
};
