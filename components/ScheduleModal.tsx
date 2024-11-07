import React from "react";
import { DayPicker } from "react-day-picker";
import EditSchedule from "./EnterButton/EnterButton";

interface ScheduleModalProps {
  room_name: string;
  setRoomName: (room: string) => void;
  selected: Date;
  setSelected: (date: Date) => void;
  time: number;
  setTime: (hour: number) => void;
  duration: number;
  setDuration: (duration: number) => void;
  teacher_name: string;
  setTeacherName: (name: string) => void;
  student_name: string;
  setStudentName: (name: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  content: { submit: string; edit: string };
  closeModal: () => void;
}

const timeOptions = Array.from({ length: 24 }, (_, i) => i); // 0~23시 배열

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  room_name,
  setRoomName,
  selected,
  setSelected,
  time,
  setTime,
  duration,
  setDuration,
  teacher_name,
  setTeacherName,
  student_name,
  setStudentName,
  handleSubmit,
  content,
  closeModal,
}) => {
  return (
    <dialog id="my_modal_3" className="modal bg-slate-400 bg-opacity-50" open>
      <div className="max-w-[54rem] rounded-[1rem] relative bg-white pt-[1.5rem] px-[1.5rem]">
        <form method="dialog">
          <button
            type="button"
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        {/* 모달창 안 내용 */}
        <div className="my-9 w-full flex">
          <div className="flex justify-center">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>

          <div className="mt-8 ml-24">
            <p className="text-lg font-semibold">When is your class?</p>
            <p className="mt-3">{selected.toLocaleDateString()}</p>
            <form className="pt-10 flex flex-col gap-2" onSubmit={handleSubmit}>
              {/* Title Field */}

              {/* Room Name */}
              <fieldset className="mb-5">
                <legend className="mb-3 text-lg font-semibold">
                  Room Name
                </legend>
                <input
                  type="text"
                  value={room_name}
                  onChange={(e) => setRoomName(e.target.value)}
                  placeholder="Enter room name"
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </fieldset>
              {/* Time Selection Buttons */}
              <fieldset className="mt-4">
                <legend>Start Time (Hour)</legend>
                <select
                  value={time}
                  onChange={(e) => setTime(Number(e.target.value))}
                  className="border p-2 rounded-md"
                >
                  {timeOptions.map((hour) => (
                    <option key={hour} value={hour}>
                      {hour}시
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* Duration Selection */}
              <fieldset className="mb-5">
                <legend className="mb-3 text-lg font-semibold">Duration</legend>
                <select
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  className="w-full border border-gray-300 p-2 rounded-md"
                >
                  <option value={1}>1 Hour</option>
                  <option value={2}>2 Hours</option>
                </select>
              </fieldset>

              {/* Teacher Name */}
              <fieldset className="mb-5">
                <legend className="mb-3 text-lg font-semibold">
                  Teacher Name
                </legend>
                <input
                  type="text"
                  value={teacher_name}
                  onChange={(e) => setTeacherName(e.target.value)}
                  placeholder="Enter teacher's name"
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </fieldset>

              {/* Student Name */}
              <fieldset className="mb-5">
                <legend className="mb-3 text-lg font-semibold">
                  Student Name
                </legend>
                <input
                  type="text"
                  value={student_name}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter student's name"
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </fieldset>

              <button className="relative mr-[7rem] mt-10" type="submit">
                <EditSchedule id="submit" content={content} />
              </button>
            </form>
          </div>
        </div>
        {/* 여기까지 모달창 안 내용 */}
      </div>
    </dialog>
  );
};
