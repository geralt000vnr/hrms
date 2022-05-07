import React from "react";

function EmployeeList() {
  return (
    <div className="mt-10 lg:-mt-80 ml-5 lg:ml-16 mr-5 lg:mr-96 min-h-screen min-w-max lg:min-w-0 bg-gray-200 dark:bg-gray-800 w-auto rounded-lg">
      <div className="bg-white dark:bg-gray-900 dark:text-white px-10 py-5 rounded-t-lg text-3xl font-semibold text-gray-900 flex align-center justify-between">
        Employees
        <span className="text-base flex items-center">
          Sort
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
      <div className=" bg-gray-200 dark:bg-gray-800 dark:text-white px-10 py-5">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-md w-full">
          <div className=" flex items-center justify-between pb-6">
            <div className="flex bg-gray-50 dark:bg-zinc-800 items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="bg-gray-50 dark:bg-zinc-800 outline-none ml-1 block "
                type="text"
                name=""
                id=""
                placeholder="search..."
              />
            </div>
            <div className="lg:ml-40 ml-10 space-x-8">
              <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                Refresh
              </button>
            </div>
          </div>
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-neutral-800 dark:text-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-neutral-800 dark:text-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Degination
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-neutral-800 dark:text-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Department
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-neutral-800 dark:text-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Working on Projects
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-neutral-800 dark:text-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Available Today?
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-neutral-800 dark:text-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
                              Susu
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm">
                        <p className="text-gray-900 dark:text-gray-400 whitespace-wrap max-w-[150px]">
                          Project Manager, React Native Developer
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm">
                        <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
                          Development
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm">
                        <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
                          Salon
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm min-w-[145px]">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative dark:text-white">
                            Available
                          </span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-900 text-sm ">
                        <button className="bg-blue-500 rounded-md px-3 py-2 text-white whitespace-no-wrap">
                          Start Chat
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
                              Manohar Singh
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm">
                        <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
                          Flutter Developer
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm">
                        <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
                          Development
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm">
                        <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
                          Sandesh
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative dark:text-white">
                            Late Coming..
                          </span>
                        </span>
                      </td>
                      <td
                        className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm"
                        min-w-fit
                      >
                        <button className="bg-blue-500 rounded-md px-3 py-2 text-white whitespace-no-wrap">
                          Start Chat
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
                              Kamal Vaswani
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm">
                        <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
                          SEO Executive
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm">
                        <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
                          Digital Marketing
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm">
                        <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
                          I4AccmoshMedia
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-red-300 opacity-50 rounded-full"
                          ></span>
                          <span className="relative dark:text-white">
                            Leave
                          </span>
                        </span>
                      </td>
                      <td
                        className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700 text-sm"
                        min-w-fit
                      >
                        <button className="bg-blue-500 rounded-md px-3 py-2 text-white whitespace-no-wrap">
                          Start Chat
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 bg-white dark:bg-neutral-900 text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
                              Sachin Jain
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 bg-white dark:bg-neutral-900 text-sm">
                        <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
                          SEO Intern
                        </p>
                      </td>
                      <td className="px-5 py-5 bg-white dark:bg-neutral-900 text-sm">
                        <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
                          Digital Marketing
                        </p>
                      </td>
                      <td className="px-5 py-5 bg-white dark:bg-neutral-900 text-sm">
                        <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
                          ICore
                        </p>
                      </td>
                      <td className="px-5 py-5 bg-white dark:bg-neutral-900 text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative dark:text-white">
                            Taking Break
                          </span>
                        </span>
                      </td>
                      <td className="px-5 py-5 bg-white dark:bg-neutral-900 text-sm min-w-[130px]">
                        <button className="bg-blue-500 rounded-md px-3 py-2 text-white whitespace-no-wrap">
                          Start Chat
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-white dark:bg-neutral-900 border-t flex flex-col xs:flex-row items-center xs:justify-between">
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                      Prev
                    </button>
                    &nbsp; &nbsp;
                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
