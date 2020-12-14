// export const formatString = (str: string) => {
//   if (str) return str.replace(/[&\/\\#,+()$~%.'":*?<>{}\[\]^|]/g, '');
//   return str;
// };

export const isJsonString = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const formatCharacters = (str: string, max: number) => {
  if (str) return str.slice(0, max) + (str.length > max ? '...' : '');
  return str;
};
