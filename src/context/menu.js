import { create } from 'zustand'

const useMenu = create((set) => ({
  isOpen: true,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export default useMenu