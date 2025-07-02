const monstersUrl = "https://www.dnd5eapi.co/api/monsters/";
  
export const fetchMonster = async (name: string) => {
    const formattedName = name.toLowerCase().replace(/\s+/g, '-'); // replace spaces with dashes
    const response = await fetch(`${monstersUrl}${formattedName}`);
  
    if (!response.ok) {
        console.log(`Status: ${response.status}`);
        throw new Error("Oops, that didn't work, sorry.");   
      }
    return response.json();
  };
  