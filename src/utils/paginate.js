import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

/* 
_(item) returns a lodash object. 
.slice(items, startIndex) slices an array starting from given index. 
.take(pageSize) takes only given number of items like here we have pageSize.
.value() convert the (processed lodash object) to an array. 
*/
