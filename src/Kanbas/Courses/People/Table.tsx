import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; 
import * as db from "../../Database";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() { 
    const { cid } = useParams();
    const {users, enrollments} = db
  return (
    <div id = "wd-people-table">
        <table className="table">
            <thead> 
                <tr>
                    <th>Name</th>
                    <th>Login ID</th>
                    <th>Section</th>
                    <th>Role</th>
                    <th>Last Activity</th>
                    <th>Total Activity</th>
                </tr>
            </thead>            
            <tbody>
                {users
                .filter((user)=>
                    enrollments.some((enrollment)=>
                        enrollment.course === cid && enrollment.user === user._id
                    )
                )
                .map((user)=>(<tr>
                    <td className="wd-full-name text-nowrap">
                    <FaUserCircle className="ms-2 mb-1 fs-4 text-secondary"/>
                    <span className="wd-first-name">{user.firstName}</span>
                    <span className="wd-last-name">{user.lastName}</span>
                    </td>
                    <td className="wd-login-id">012345667</td>
                    <td className="wd-settion">{user.role}</td>
                    <td className="wd-last-activity">2023-09-01</td>
                    <td className="wd-total-activity">5</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
