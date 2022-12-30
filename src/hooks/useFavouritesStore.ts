import create, { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import { PersistOptions } from 'zustand/middleware/persist';

interface IState {
  favourites: number[];
  toggleFavourites: (id: number) => void;
}

type TPersist = (
  config: StateCreator<IState>,
  options: PersistOptions<IState>,
) => StateCreator<IState>;

const useFavouritesStore = create<IState>(
  (persist as TPersist)(
    (set) => ({
      favourites: [],
      toggleFavourites: (id: number) =>
        set((state) => {
          const containId: boolean = state.favourites.includes(id);
          if (containId) return { favourites: state.favourites.filter((f) => f !== id) };
          else return { favourites: [...state.favourites, id] };
        }),
    }),
    { name: 'fav-ram' },
  ),
);

export default useFavouritesStore;
