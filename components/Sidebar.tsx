import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Sidebar() {
  return (
    <div className="p-2 md:p-10 py-10 overflow-y-auto border-b border-indigo-500/50">
      <div className="flex flex-col items-center justify-center mb-10">
        <DocumentMagnifyingGlassIcon className="h-16 md:w-16 text-indigo-600" />

        <h1 className="hidden md:inline text-center text-3xl mt-2">
          Web Scraper
        </h1>
        <h2 className="hidden md:inline text-center text-xs italic">
          Scraping the Unscrapable
        </h2>
      </div>

      <ul>
        {/* SidebarRow */}
        {/* SidebarRow */}
        {/* SidebarRow */}
        {/* SidebarRow */}
        {/* SidebarRow */}
      </ul>
    </div>
  )
}

export default Sidebar
