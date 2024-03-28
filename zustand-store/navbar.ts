import create from "zustand";

// Define the state interface
type NavbarProps = {
  selectedNavElement: string;
  setSelectedNavElement: (selectedNavElement: string) => void;
};

// Create the store instance
const useNavbarStore = create<NavbarProps>((set) => ({
  selectedNavElement: "",
  setSelectedNavElement: (selectedNavElement: string) =>
    set({ selectedNavElement }),
}));

export default useNavbarStore;
