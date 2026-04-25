type SearchBarProps = {
  placeholder?: string;
};

export default function SearchBar({
  placeholder = "Search drug, calculator, protocol...",
}: SearchBarProps) {
  return (
    <div className="-mt-5 px-5">
      <div className="nh-search flex items-center gap-3 px-4 py-4">
        <span aria-hidden="true" className="shrink-0 text-[#667a99]">
          <svg
            width="27"
            height="27"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </span>

        <input
          type="text"
          readOnly
          placeholder={placeholder}
          className="w-full border-0 bg-transparent text-[14px] font-medium text-[#5f7391] outline-none md:text-[15px]"
        />
      </div>
    </div>
  );
}