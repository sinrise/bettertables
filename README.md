# Better Tables
This adds the ability to have a fixed headers and mobile responsive HTML tables. This is intended to be used with Bootstrap but the JS isn't specific to Bootstrap so it's safe to use without Bootstrap.

This is a work in progress. For now, it's just regular JS (jQuery). I intend to improve this code by implementing it in a TypeScript module.

## Fixed Header Tables
The fixed header method simply adds a scroll event to the table's container that changes the Y position of the <thead> element. A container with a specified height is required for the fixed header to work, as the entire table will scroll inside the container.

## Mobile Responsive Tables
The mobile responsive method takes the text inside the `<th>` (table/column header) elements, inserts them into `<b>` tags, and appends them to the corresponding `<td>` (table data/cell) elements.

## Known Issues
1. Colspans are not supported and may have unusual effects if used.
