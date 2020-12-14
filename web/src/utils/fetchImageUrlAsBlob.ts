const fetchImageUrlAsBlob = async (url: string): Promise<File> => {
  const data = await fetch(url);
  const blob = await data.blob();
  return blob as File;
};

export default fetchImageUrlAsBlob;
