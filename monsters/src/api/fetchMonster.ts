const monstersUrl = "https://www.dnd5eapi.co/api/monsters/";

export const fetchMonster = async (name: string) => {
  const response = await fetch(`${monstersUrl}${name.toLowerCase()}`);
  if (!response.ok) {
    throw new Error(`"Oops, that didn't work: Status: ${response.status}`);
  }
  return response.json();
};
