import { Search as SearchIcon } from "lucide-react";

export default function SearchForm() {
  return (
    <div className="hidden sm:block">
      <form action="#" method="POST">
        <label className="input">
          <SearchIcon size={20} className="text-base-content/60" />
          <input type="search" className="grow" placeholder="Search" />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
      </form>
    </div>
  );
}
