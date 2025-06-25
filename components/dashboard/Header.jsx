import { Bell, History, Plus, Search, Settings, Users } from "lucide-react";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <div className="bg-gray-100 h-12 flex items-center justify-between px-8">
      <div className="flex gap-3">
        {/* Recent Activities */}
        <button>
          <History className="w-6 h-6" />
        </button>
        {/* Search */}
        <SearchInput />
      </div>
      <div className="flex">
        {/* Plus */}
        <div className="pr-2 border-r border-gray-300">
          <button className="p-1 rounded-lg bg-blue-600">
            <Plus className="text-slate-50 w-4 h-4" />
          </button>
        </div>
        <div className="flex border-r border-gray-300 space-x-2">
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <Users className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <Bell className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <Settings className="text-slate-900 w-4 h-4" />
          </button>
        </div>
        {/*  */}
        {/*  */}
      </div>
    </div>
  );
}

export default Header;
