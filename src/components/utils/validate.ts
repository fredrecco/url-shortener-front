export const urlValidate = (url: string) => {
  const regex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(:\d+)?(\/[^\s]*)?$/;

  return regex.test(url);
};

export const startsWithHttp = (url: string) => {
  const regex = /^(https?:\/\/)/;

  if (regex.test(url)) {
    return url;
  }

  return "https://" + url;
}