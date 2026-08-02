import {
  createContext,
  useEffect,
  useState,
} from "react";

export const FavoritesContext =
  createContext();

export function FavoritesProvider({
  children,
}) {
  const [favorites, setFavorites] =
    useState(() => {
      const savedFavorites =
        localStorage.getItem(
          "exploreNepalFavorites"
        );

      return savedFavorites
        ? JSON.parse(savedFavorites)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "exploreNepalFavorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (
    destination
  ) => {
    setFavorites((currentFavorites) => {
      const alreadySaved =
        currentFavorites.some(
          (item) =>
            item.id ===
            destination.id
        );

      if (alreadySaved) {
        return currentFavorites.filter(
          (item) =>
            item.id !==
            destination.id
        );
      }

      return [
        ...currentFavorites,
        destination,
      ];
    });
  };

  const isFavorite = (
    destinationId
  ) => {
    return favorites.some(
      (item) =>
        item.id === destinationId
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}