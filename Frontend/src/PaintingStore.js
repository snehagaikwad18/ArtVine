import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const paintingStore = (set) => ({
  // art start
  paintings: [],

  setPainting: (painting) => {
    set((state) => ({
      paintings: painting,
    }));
  },
  
  addPainting: (painting) => {
    set((state) => ({
      paintings: [painting, ...state.paintings],
    }));
  },

  removePainting: (paintingId) => {
    console.log("painting id is ::", paintingId);
    set((state) => ({
      paintings: state.paintings.filter((item) => item._id !== paintingId),
    }));
    // console.log("updated painting is ::", paintings);
  },

  updatePainting: (paintingId, updatedData) => {
    set((state) => ({
      paintings: state.paintings.map((painting) =>
        painting._id === paintingId ? { ...painting, ...updatedData } : painting
      ),
    }));
  },
  // art end

  // personal details start
  personalDetails: [],

  addPersonalDetails: (details) => {
    set((state) => ({
      personalDetails: [details, ...state.personalDetails],
    }));
  },

  removePersonalDetails: (id) => {
    set((state) => ({
      personalDetails: state.personalDetails.filter((item) => item._id !== id),
    }));
  },

  updatePersonalDetails: (id, updatedData) => {
    set((state) => ({
      personalDetails: state.personalDetails.map((details) =>
        details._id === id ? { ...details, ...updatedData } : details
      ),
    }));
  },

  // personal details end
});

const usePaintingStore = create(
  devtools(
    persist(paintingStore, {
      name: "paintings",
    })
  )
);

export default usePaintingStore;
