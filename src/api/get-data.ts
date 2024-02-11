export const getData = async () => {
  const url =
    "https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
