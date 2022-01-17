import create from 'zustand';
import type { ICollection } from '../types/Collection';

interface IState {
    collections: ICollection[];
    setCollections: (k: ICollection[]) => void;
    deleteCollection: (index: string) => void;
    addCollection: (k: ICollection) => void;
}

export const useCollections = create<IState>(set => ({
    collections: [],
    deleteCollection: (index: string) => set(state => {
        const collections = [...state.collections];
        const itemToDelete = collections.findIndex(collection => collection.id === index);
        if (itemToDelete > -1) {
            collections.splice(itemToDelete, 1);
        }
        return {
            collections
        };
    }),
    setCollections: (newCollections: ICollection[]) => set(() => ({
        collections: newCollections
    })),
    addCollection: (newCollection: ICollection) => set(state => ({
        collections: [newCollection, ...state.collections]
    }))
}));