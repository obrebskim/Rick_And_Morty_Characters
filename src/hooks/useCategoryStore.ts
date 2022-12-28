import create from 'zustand';
import { ECategory } from '../@types/CategoryEnum';

interface ICategoryState {
  category: ECategory;
  changeCategory: (category: ECategory) => void;
}

const useCategoryStore = create<ICategoryState>((set) => ({
  category: ECategory.all,
  changeCategory: (category: ECategory) => set(() => ({ category })),
}));

export default useCategoryStore;
