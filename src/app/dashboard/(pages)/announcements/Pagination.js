export default function PaginationComponent({ pagination, onPageChange }) {
  const { page, totalPages } = pagination;

  const getPages = () => {
    const pages = [];
    const delta = 2; // how many pages around current

    // Always show first page
    pages.push(1);

    // Show left ellipsis if needed
    if (page - delta > 2) {
      pages.push("...");
    }

    // Show middle pages around current
    for (let i = Math.max(2, page - delta); i <= Math.min(totalPages - 1, page + delta); i++) {
      pages.push(i);
    }

    // Show right ellipsis if needed
    if (page + delta < totalPages - 1) {
      pages.push("...");
    }

    // Always show last page if more than 1
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPages();

  return (
    <div className="pagination2">
      {/* Prev */}
      <a href="#"   className={page === 1 ? "disabled" : ""}  onClick={(e) => onPageChange(e, page - 1)}>
       &laquo;
      </a>

      {/* Page Numbers */}
      {pages.map((p, index) =>
        p === "..." ? (
          <span key={index} className="ellipsis">
            ...
          </span>
        ) : (
          <a href="#"
            key={p}
            className={p === page ? "active" : ""}
            onClick={(e) => onPageChange(e, p)}
          >
            {p}
          </a>
        )
      )}

      {/* Next */}
      <a   onClick={(e) => onPageChange(e, page + 1)}
        className={page === totalPages ? "disabled" : ""} 
        >
        &raquo;
      </a>
    </div>
  );
}
