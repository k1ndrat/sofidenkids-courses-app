import { createContext, useContext, useState } from "react";
import { Course } from "../types/Course";

type AppContext = {
  currentCourse: Course;
  setCurrentCourse: (value: Course) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
};

const AppContext = createContext<AppContext>(null!);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentCourse, setCurrentCourse] = useState<Course>(null!);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const value = {
    currentCourse,
    setCurrentCourse,
    isMenuOpen,
    setIsMenuOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
