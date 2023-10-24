import { create } from 'zustand'

const useMenu = create((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  hideMenu: () => set((state) => ({ isOpen: false })),
}))

export default useMenu