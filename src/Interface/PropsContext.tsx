import { Cards } from "../Interface/Cards";
import { Card } from "../Interface/Card";

export interface PropsContext {
  inputName: string;
  setInputName: React.Dispatch<React.SetStateAction<string>>;
  getCardByID: () => void ;
  cards: Cards[];
  cardById: Card

}