import create from 'zustand';

interface IProps {
  string: string;
  setString: (string: string) => void;
}

const useSearchString = create<IProps>((set) => ({
  string: '',
  setString: (string) => set(() => ({ string })),
}));

export default useSearchString;
