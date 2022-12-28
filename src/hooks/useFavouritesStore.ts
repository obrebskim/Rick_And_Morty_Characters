import create from 'zustand';

interface IFavouriteState {
  favourites: number[];
  toggleFavourites: (id: number) => void;
}

const useFavouriteStore = create<IFavouriteState>((set) => ({
  favourites: [],
  toggleFavourites: (id: number) =>
    set((state) => {
      const containId: boolean = state.favourites.includes(id);
      if (containId) return { favourites: state.favourites.filter((f) => f !== id) };
      else return { favourites: [...state.favourites, id] };
    }),
}));

export default useFavouriteStore;
