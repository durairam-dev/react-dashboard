export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black opacity-50 lg:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-950 shadow-md transform ${
          sidebarOpen ? "translate-x-0 lg:hidden" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-14 text-gray-300 bg-gray-950">
          <h1 className="text-lg font-semibold">Sidebar</h1>
        </div>
        <nav className="px-4 py-6">
          <ul>
            <li className="mb-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Settings
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Profile
              </a>
            </li>
            {/* Add more links here */}
          </ul>
        </nav>
      </div>
    </>
  );
}
