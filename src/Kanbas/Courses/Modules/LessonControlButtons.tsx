import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

interface LessonControlButtonsProps {
  className?: string;
}

export default function LessonControlButtons({
  className,
}: LessonControlButtonsProps) {
  return (
    <div className={`float-end ${className || ""}`.trim()}>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}

