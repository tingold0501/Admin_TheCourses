import React from "react";
export function DetailRole() {
    return (
        <div>
            <>
                {/* component */}
                {/* Created By Joker Banny */}
                <div className="flex h-screen items-center justify-center bg-white px-6 md:px-60">
                    <div className="space-y-6 border-l-2 border-dashed">
                        <div className="relative w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <div className="ml-6">
                                <h4 className="font-bold text-blue-500">Admin</h4>
                                <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
                                    Đây là Role quan trọng và mặc định của hệ thống của bạn, nó là role chỉ người có quyền hạn cao nhất trong hệ thống, vì vậy không thể xoá chúng.
                                    Nhưng nếu bạn vẫn có ý định xoá chúng ra khỏi hệ thống, vui lòng liên hệ với team dev.
                                </p>

                            </div>
                        </div>
                        <div className="relative w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <div className="ml-6">
                                <h4 className="font-bold text-blue-500">Teacher</h4>
                                <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
                                    Đây là Role quan trọng và mặc định của hệ thống của bạn, nó là role chỉ các giáo viên trong hệ thống, vì vậy không thể xoá chúng.
                                    Nhưng nếu bạn vẫn có ý định xoá chúng ra khỏi hệ thống, vui lòng liên hệ với team dev.
                                </p>
                            </div>
                        </div>
                        <div className="relative w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <div className="ml-6">
                                <h4 className="font-bold text-blue-500">Student</h4>
                                <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
                                    Đây là Role quan trọng và mặc định của hệ thống của bạn, nó là role chỉ các học viên trong hệ thống, vì vậy không thể xoá chúng.
                                    Nhưng nếu bạn vẫn có ý định xoá chúng ra khỏi hệ thống, vui lòng liên hệ với team dev.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </>

        </div >
    );
}
