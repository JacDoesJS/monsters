const monstersUrl = "https://www.dnd5eapi.co/api/monsters/";

export const fetchMonster = async (name: string) => {
    const response = await fetch(`${monstersUrl}${name.toLowerCase()}`);
    if (!response.ok) {
      console.log(`Status: ${response.status}`);
      throw new Error("Oops, that didn't work, sorry.");   
    }
    return response.json();
  };