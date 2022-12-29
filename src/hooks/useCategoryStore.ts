import create from 'zustand';
import { ECategory } from '../@types/CategoryEnum';

interface IProps {
  category: ECategory;
  changeCategory: (category: ECategory) => void;
}

const useCategoryStore = create<IProps>((set) => ({
  category: ECategory.all,
  changeCategory: (category: ECategory) => set(() => ({ category })),
}));

export default useCategoryStore;
