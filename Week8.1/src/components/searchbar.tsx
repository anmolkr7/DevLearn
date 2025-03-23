export const Searchbar = () => {
    return (
        <div className="flex items-center justify-center w-full mt-4">
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-[40rem] bg-white dark:bg-gray-800">
                {/* Search Input */}
                <input 
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 text-gray-900 dark:text-white bg-transparent outline-none"
                />
                
                {/* Search Button */}
                <button className="bg-gray-100 dark:bg-gray-700 px-4 py-2 border-l border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <svg 
                        className="w-5 h-5 text-gray-600 dark:text-white" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 20 20"
                    >
                        <path 
                            stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </button>
            </div>

            {/* Mic Icon */}
            <button className="ml-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
                <svg 
                    className="w-5 h-5 text-gray-600 dark:text-white" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M12 3v9m-4-4v4a4 4 0 1 0 8 0V8a4 4 0 1 0-8 0zM8 21h8m-4-4v4"
                    />
                </svg>
            </button>
        </div>
    );
};
