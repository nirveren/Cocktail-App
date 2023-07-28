import AllCocktails from "../containers/AllCocktails";
import CocktailDetails from "../components/CocktailDetails";
import CocktailList from "../components/CocktailList/CocktailList";
import HomePage from "../containers/HomePage";
import Random from "../containers/Random";
import Favorites from "../containers/Favorites/Favorites";

const routesConfig = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/cocktails/:id',
    element: <CocktailDetails />,
  },
  {
    path: '/favorites',
    element: <Favorites/>
  },
  {
    path: '/cocktails/:alcohol',
    element: <CocktailList />
  },
  {
    path: '/allcocktails',
    element: <AllCocktails/>
  },
  {
    path: '/random',
    element: <Random/>
  },
  
];

export default routesConfig;