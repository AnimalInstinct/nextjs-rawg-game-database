export function paginate(totalPages, current, maxSize) {
  const range = (from, to, step = 1) => {
    let i = from
    const range = []
    while (i <= to) {
      range.push(i)
      i += step
    }
    return range
  }

  let pagination = []

  range(1, totalPages).forEach((page) => {
    if (
      page == 1 ||
      (page <= current && page >= parseInt(current) - parseInt(maxSize)) ||
      page == current ||
      (page >= current && page <= parseInt(current) + parseInt(maxSize)) ||
      page == totalPages
    ) {
      pagination.push(page)
    }
  })
  return pagination
}
