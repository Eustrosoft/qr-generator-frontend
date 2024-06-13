export const httpGet = async (url, params = {}) => {
  const searchParams = new URLSearchParams(params);
  const stringifiedParams = searchParams.toString();
  if (stringifiedParams.length > 0) {
    url = `${url}?${stringifiedParams}`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.text();
};
