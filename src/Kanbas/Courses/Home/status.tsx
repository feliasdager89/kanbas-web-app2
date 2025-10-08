import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiHome, BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="position-sticky top-0">
      <h2 className="h5 mb-3">Course Status</h2>

      <div className="d-flex gap-2">
        <button className="btn btn-secondary flex-fill">
          <MdDoNotDisturbAlt className="me-2" />
          Unpublish
        </button>
        <button className="btn btn-success flex-fill">
          <FaCheckCircle className="me-2" />
          Publish
        </button>
      </div>

      <div className="d-grid gap-2 mt-3">
        <button className="btn btn-secondary text-start">
          <BiImport className="me-2" />
          Import Existing Content
        </button>
        <button className="btn btn-secondary text-start">
          <LiaFileImportSolid className="me-2" />
          Import from Commons
        </button>
        {/* Add any remaining buttons here */}
        <button className="btn btn-secondary text-start">
          <BiHome className="me-2" />
          Choose Home Page
        </button>
        <button className="btn btn-secondary text-start">
          <FaCheckCircle className="me-2" />
          Set as Featured Course
        </button>
      </div>

      <hr className="my-4" />

      <h2 className="h5">Course Details</h2>
      <p className="text-secondary small mb-0">
        <b>Course ID:</b> 1234<br />
        <b>Created:</b> Aug 20, 2024<br />
        <b>Last Modified:</b> Sep 10, 2024<br />
        <b>Enrolled Students:</b> 120<br />
        <b>Course Language:</b> English<br />
      </p>
    </div>
  );
}