import { create } from 'zustand'

type StoreState = {
    wishlist: string[],
    caughtCritters: string[],
    toggleWishList: (name: string) => void,
    toggleCaught: (name: string) => void
}

export const useTrackerStore = create<StoreState>()((set) => ({
    wishlist: [],
    caughtCritters: [],
    toggleWishList: (name: string) => {
        set((state) => {
            if (state.wishlist.includes(name)) {
                return { wishlist: state.wishlist.filter(v => v !== name) }
            } else {
                return { wishlist: [...state.wishlist, name] }
            }
        })
    },
    toggleCaught: (name: string) => {
        set((state) => {
            if (state.caughtCritters.includes(name)) {
                return { caughtCritters: state.caughtCritters.filter(v => v !== name) }
            } else {
                return { caughtCritters: [...state.caughtCritters, name] }
            }
        })
    }
}))