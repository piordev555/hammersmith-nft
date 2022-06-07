import create, { State } from "zustand";

interface Attribute {
  key: string;
  value: string;
}

interface CreateNFTStore extends State {
  name: string;
  image: string;
  description: string;
  year: number;
  attributes: Attribute[];
  changeName: (name: string) => void;
  changeImage: (image: string) => void;
  changeDescription: (description: string) => void;
  changeYear: (year: number) => void;
  changeAttributes: (attributes: Attribute[]) => void;
}

const useCreateNFTStore = create<CreateNFTStore>((set, _get) => ({
  name: "",
  image: "",
  description: "",
  year: new Date().getFullYear(),
  attributes: [],
  changeName: (name) => {
    set({ name: name });
  },
  changeImage: (image) => {
    set({ image: image });
  },
  changeDescription: (description) => {
    set({ description: description });
  },
  changeYear: (year) => {
    set({ year: year });
  },
  changeAttributes: (attributes) => {
    set({ attributes: attributes });
  },
}));

export default useCreateNFTStore;
