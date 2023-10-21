import { create } from 'zustand'

const useMenu = create((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export default useMenu