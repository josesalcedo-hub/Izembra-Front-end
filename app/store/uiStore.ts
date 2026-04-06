import { create } from "zustand";
import { PropertyCard } from "../models/Property/Domain/Property.interfaces";
interface UIState {
  data: PropertyCard[];
  property: PropertyCard;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  getData: () => Promise<PropertyCard>;
  getProperty: (id: number) => Promise<void>;
}

export const useUiStore = create<UIState>((set) => ({
  isMenuOpen: false,

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),

  closeMenu: () => set({ isMenuOpen: false }),

  data: [],
  property: {} as PropertyCard,

  getData: async () => {
    try {
      const response = await (
        await fetch("http://localhost:3001/api/foundData", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          cache: "no-store",
        })
      ).json();
      if (!response) {
        throw new Error("Error al obtener los datos");
      }
      set((state) => ({
        ...state,
        data: response.data,
      }));
    } catch (error: any) {
      return error.message;
    }
  },

  getProperty: async (id) => {
    try {
      const res = await (
        await fetch(`http://localhost:3001/api/foundData/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        })
      ).json();

      if (!res) {
        throw new Error("Error al cargar el proyecto");
      }

      set((state) => ({
        ...state,
        property: res.data ? res.data : res,
      }));
    } catch (error: any) {
      return error.message;
    }
  },
}));
