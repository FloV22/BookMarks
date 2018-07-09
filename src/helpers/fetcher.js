export default async(url) => {
  const fetched = await fetch(url);
  if (fetched.status < 200 || fetched.status >= 300) {
    alert('Impossible de récupérer les informations en provenance de ce lien');
    return {};
  }
  try {
    return await fetched.json();
  } catch (e) {
    return {};
  }
};
