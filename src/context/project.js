import { create } from 'zustand'

const useProject = create((set) => ({
  index: -0,
  activeIndex: (item) => set(() => ({ index: item })),
  deactiveIndex: () => set(() => ({ index: -1 })),
}))

export default useProject