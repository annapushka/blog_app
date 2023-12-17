export function getQueryParams(params: OptionalRecord<string, string>) {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(([name, value]) => {
    if (value === undefined) {
      searchParams.delete(name);
    } else {
      searchParams.set(name, value);
    }
  });
  return `?${searchParams.toString()}`;
}

export function addQueryParams(params: OptionalRecord<string, string>) {
  window.history.pushState(null, '', getQueryParams(params));
}
