import { Card } from "../Interface/Cards";

export interface PropsContext {
  inputName: string;
  setInputName: React.Dispatch<React.SetStateAction<string>>;
  getCardByID: (id: string) => Promise<void>;
  cards: Card[];
}