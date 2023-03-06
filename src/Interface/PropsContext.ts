import { Card } from './Card'

export interface PropsContext {
  inputName: string;
  setInputName: React.Dispatch<React.SetStateAction<string>>;
  getCardByID: () => void;
  dataCards: Card[];
  setInputSearch: React.Dispatch<React.SetStateAction<string>>;
  inputSearch: string;
}
