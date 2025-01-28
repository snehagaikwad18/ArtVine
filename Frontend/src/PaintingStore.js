import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const paintingStore = (set) => ({
  paintings: [],
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
});

const usePaintingStore = create(
  devtools(
    persist(paintingStore, {
      name: "paintings",
    })
  )
);

export default usePaintingStore;
