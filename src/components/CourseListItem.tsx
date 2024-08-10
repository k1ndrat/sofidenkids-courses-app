import { useAppContext } from "../context/AppContext";
import { Course } from "../types/Course";

const CourseListItem = ({ course }: { course: Course }) => {
  const { currentCourse, setCurrentCourse, setIsMenuOpen } = useAppContext();
  return (
    <li
      className={`flex justify-between items-center gap-4 py-2 px-2 border-t border-black cursor-pointer transition-all ${
        course?.title === currentCourse?.title
          ? "bg-fuchsia-800 text-white "
          : ""
      }`}
      onClick={() => {
        setCurrentCourse(course);
        setIsMenuOpen(false);
      }}
    >
      <p
        className="overflow-hidden line-clamp-2 text-ellipsis"
        title={course.title}
      >
        {course.title}
      </p>
      <input
        type="checkbox"
        name="isDone"
        onClick={(e) => e.stopPropagation()}
      />
    </li>
  );
};

export default CourseListItem;
