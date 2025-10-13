import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, editAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const { assignments }: any = useSelector((state: any) => state.assignmentsReducer);
  const assignment = assignments.find((a: any) => String(a._id) === String(aid));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState(assignment?.title ?? "");
  const [description, setDescription] = useState(assignment?.description ?? "");
  const [points, setPoints] = useState<number>(assignment?.points ?? 0);
  const [dueDate, setDueDate] = useState(assignment?.dueDate ?? "");
  const [availableFrom, setAvailableFrom] = useState(assignment?.availableFrom ?? "");
  const [availableUntil, setAvailableUntil] = useState(assignment?.availableUntil ?? "");

  useEffect(() => {
    // When route or assignments change, update local state
    setTitle(assignment?.title ?? "");
    setDescription(assignment?.description ?? "");
    setPoints(assignment?.points ?? 0);
    setDueDate(assignment?.dueDate ?? "");
    setAvailableFrom(assignment?.availableFrom ?? "");
    setAvailableUntil(assignment?.availableUntil ?? "");
  }, [assignment]);

  const onSave = () => {
    if (!title || title.trim() === "") {
      alert("Please enter a title for the assignment.");
      return;
    }

    const payload: any = {
      _id: assignment?._id ?? Date.now().toString(),
      title: title.trim(),
      description,
      points,
      dueDate,
      availableFrom,
      availableUntil,
      course: assignment?.course ?? cid,
    };

    if (assignment) {
      dispatch(editAssignment(payload));
    } else {
      dispatch(addAssignment(payload));
    }

    // navigate back to assignments list for the course
    if (cid) {
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    } else {
      navigate(-1);
    }
  };

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="form-label">Assignment Name</label>
      <input id="wd-name" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" />

      <br />

      <label htmlFor="wd-description" className="form-label">Description</label>
      <textarea id="wd-description" className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} />

      <br />

      <table className="table w-auto">
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points" className="col-form-label">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" value={points} onChange={(e)=>setPoints(Number(e.target.value))} className="form-control" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group" className="col-form-label">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" className="form-select" defaultValue="assignments">
                <option value="assignments">ASSIGNMENTS</option>
                <option value="group2">Display Text 2</option>
                <option value="group3">Display Text 3</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as" className="col-form-label">Display Grade As</label>
            </td>
            <td>
              <select id="wd-display-grade-as" className="form-select" defaultValue="percentage">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
                <option value="letter">Letter</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type" className="col-form-label">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" className="form-select" defaultValue="online">
                <option value="online">Online</option>
                <option value="in-person">In Person</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <span>Online Entry Options:</span>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-website-url" />
                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-student-annotations" />
                <label className="form-check-label" htmlFor="wd-student-annotations">Student Annotations</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-file-uploads" />
                <label className="form-check-label" htmlFor="wd-file-uploads">File Uploads</label>
              </div>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to" className="col-form-label">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" className="form-control" defaultValue="Everyone" />

              <br />

              <div className="mb-2">
                <label htmlFor="wd-due-date" className="form-label">Due</label>
                <input type="date" id="wd-due-date" className="form-control" value={dueDate} onChange={(e)=>setDueDate(e.target.value)} />
              </div>

              <div className="mb-2">
                <label htmlFor="wd-available-from" className="form-label">Available From</label>
                <input type="date" id="wd-available-from" className="form-control" value={availableFrom} onChange={(e)=>setAvailableFrom(e.target.value)} />
              </div>

              <div>
                <label htmlFor="wd-available-until" className="form-label">Until</label>
                <input type="date" id="wd-available-until" className="form-control" value={availableUntil} onChange={(e)=>setAvailableUntil(e.target.value)} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

  <button className="btn btn-secondary me-2" onClick={() => { if (cid) navigate(`/Kanbas/Courses/${cid}/Assignments`); else navigate(-1); }}>Cancel</button>
  <button className="btn btn-primary" onClick={onSave}>Save</button>
    </div>
  );
}