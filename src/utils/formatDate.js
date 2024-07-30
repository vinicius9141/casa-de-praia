// src/utils/formatDate.js
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDate = (date) => {
  return format(new Date(date), 'dd/MM/yyyy', { locale: ptBR });
};
