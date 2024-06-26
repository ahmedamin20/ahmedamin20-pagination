# usePaginationHook

A custom React hook for handling pagination logic in your applications.

## Installation

To install the hook, you can use npm or yarn:

```bash
npm install @ahmedamin20/pagination
# or
yarn add @ahmedamin20/pagination
```

## Usage
To use the usePaginationHook, you can import it into your component and use it as shown below:

```javascript
import React from 'react';
import usePaginationHook from '@ahmedamin20/pagination';

const PaginationComponent = ({ totalCount, items }) => {
  const { pagesCount, hasMore, page, setPage } = usePaginationHook({
    count: totalCount, //count of data already came from reponse
    dataLength: items.length,
    limit: 5 // Optional, defaults to 5 if not provided
  });

  const handlePageChange = (newPage) => {
    setPage(newPage);
    // Fetch new data based on newPage
  };

  return (
    <div>
      <div>
        {items.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      {hasMore && (
        <div>
          {pagesCount.map(pageNumber => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={page === pageNumber}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaginationComponent;

```

## License
This project is licensed under the MIT License - see the LICENSE file for details.
