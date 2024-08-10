import { useAppContext } from "../context/AppContext";
import { courses } from "../data/courses";
import CourseListItem from "./CourseListItem";

const closeMenuIcon =
  "https://static-00.iconduck.com/assets.00/close-icon-2048x2047-k8f8qv8h.png";

const CourseMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();

  return (
    <div
      className={`z-10 bg-white py-6 px-6 h-screen top-0 w-full mobile:max-w-96 flex-shrink-0 fixed transition-all ${
        isMenuOpen ? "left-0" : "-left-full"
      } tablet:sticky`}
    >
      <div className="mb-8 px-2 flex justify-between gap-4">
        <h3 className="font-semibold text-2xl">Уроки</h3>
        <button
          className="block tablet:hidden h-6 flex-[24px] flex-shrink-0 flex-grow-0"
          onClick={() => setIsMenuOpen(false)}
        >
          <img className="" src={closeMenuIcon} alt="menu-icon" />
        </button>
      </div>
      <ul>
        {courses.map((course) => (
          <CourseListItem course={course} key={course.title} />
        ))}
      </ul>
    </div>
  );
};

export default CourseMenu;
