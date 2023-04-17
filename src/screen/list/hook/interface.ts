import { Categories } from "../../../data/model/Categories";

export interface UseListNewsResult {
  isLoading: boolean,
  categorias: Categories[],
}
