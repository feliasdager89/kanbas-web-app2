import Modules from "../Modules";
import CourseStatus from "./status";
import "../course-styles.css"; // ← make sure this file exists (see below)

export default function Home() {
  return (
    <div id="wd-home" className="d-flex">
      <div className="flex-fill">  
          <Modules />
      </div>
        <div className="d-none d-xl-block">
          <CourseStatus />
        </div>
      </div>
  );
}