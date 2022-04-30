
import { heroes } from '../data/heroes'

export const getHeroBySearch = (keyword = "") => {
  return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(keyword.toLowerCase()))
}
