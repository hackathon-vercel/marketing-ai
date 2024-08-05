export const isMyDocument = <T>(input: any, example: Record<keyof T, string>): input is T => {
  const missingProperties = Object.keys(example)
    .filter((key) => input[key] === undefined)
    .map((key) => key as keyof T);

  return missingProperties.length === 0;
};
