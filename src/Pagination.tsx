import React, { useState } from 'react';

interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
    setIsDropdownOpen(false);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {currentPage !== 1 && (
        <button onClick={goToPrevPage}>
          {'<'}
        </button>
      )}
      
      <span>Page</span>
      
      {/* <div> */}
        <button onClick={toggleDropdown}>
          {currentPage} {isDropdownOpen ? '∧' : '∨'}
        </button>
        
        {isDropdownOpen && (
          <div>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button 
                key={page} 
                onClick={() => handlePageChange(page)}
              >
                {page === currentPage ? `✓${page}` : page}
              </button>
            ))}
          </div>
        )}
      {/* </div> */}
      
      <span>of {totalPages}</span>
      
      {currentPage !== totalPages && (
        <button onClick={goToNextPage}>
          {'>'}
        </button>
      )}
    </div>
  );
};

export default Pagination;

// // Example usage:
// const PaginationExample: React.FC = () => {
//   const handlePageChange = (page: number) => {
//     console.log(`Page changed to ${page}`);
//     // Handle page change logic here
//   };

//   return <Pagination totalPages={5} onPageChange={handlePageChange} />;
// };