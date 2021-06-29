export default function splitContent(content: string) {
  const data: Record<string, string> = {};
  if (!content.includes("/section ")) {
    return {
      content,
    };
  }

  const sections = content
    .split("/section ")
    .map((s) => s.trim())
    .filter(Boolean);

  for (let section of sections) {
    const firstLineEnd = section.indexOf("\n");
    const firstLine = section.slice(0, firstLineEnd).trim();
    const rest = section.slice(firstLineEnd).trim();
    data[firstLine] = rest;
  }
  return data;
}
