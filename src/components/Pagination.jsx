import Button from './Button';

function Pagination({ currentPage, totalPages, onPrevious, onNext }) {
  return (
    <div className="pagination">
      <Button
        variant="secondary"
        size="small"
        disabled={currentPage === 1}
        onClick={onPrevious}
      >
        Previous
      </Button>
      <span>Page {currentPage} of {totalPages}</span>
      <Button
        variant="secondary"
        size="small"
        disabled={currentPage === totalPages}
        onClick={onNext}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;