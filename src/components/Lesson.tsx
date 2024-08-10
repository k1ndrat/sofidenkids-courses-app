import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { courses } from "../data/courses";

const menuIcon = "https://www.svgrepo.com/show/509382/menu.svg";

const Lesson = () => {
  const { currentCourse, setCurrentCourse, setIsMenuOpen } = useAppContext();

  useEffect(() => {
    setCurrentCourse(courses[0]);
  }, []);

  if (currentCourse)
    return (
      <div className="py-6 px-8  text-white bg-fuchsia-800 flex-grow">
        <div className="flex items-center gap-4 mb-6">
          <button
            className="block tablet:hidden h-6 flex-[24px] flex-shrink-0 flex-grow-0"
            onClick={() => setIsMenuOpen(true)}
          >
            <img className=" invert" src={menuIcon} alt="menu-icon" />
          </button>
          <h2 className="text-lg tablet:text-2xl font-semibold">
            {currentCourse.title}
          </h2>
        </div>
        <iframe
          className="w-full max-w-[1000px] aspect-video mb-6"
          src={currentCourse.videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        {currentCourse.description && (
          <div
            dangerouslySetInnerHTML={{ __html: currentCourse.description }}
          />
        )}
      </div>
    );
};

export default Lesson;
