import { Cards } from "../Interface/Cards";
import { Card } from "../Interface/Card";

export interface PropsContext {
  inputName: string;
  setInputName: React.Dispatch<React.SetStateAction<string>>;
  getCardByID: () => void ;
  dataCards: Card[];
  setInputSearch: React.Dispatch<React.SetStateAction<string>>;
  inputSearch: string;
}