import createPersistedState from "use-persisted-state"
import { WEBSITES } from "./Websites"

const useHiddenWebsites = createPersistedState("hidden-websites")

const useToggleWebsite = () => {
  const [hiddenWebsites, setHiddenWebsites] = useHiddenWebsites(
    WEBSITES.map(x => x.name).join(",")
  )
  const hiddenSet = new Set(hiddenWebsites.split(","))
  const toggleWebsite = website => {
    const newSet = new Set(hiddenSet)
    if (hiddenSet.has(website)) {
      newSet.delete(website)
    } else {
      newSet.add(website)
    }
    setHiddenWebsites([...newSet].join(","))
  }
  const showAll = () => setHiddenWebsites("")
  const hideAll = websites => {
    setHiddenWebsites(websites.join(","))
  }
  return {
    hiddenSet,
    toggleWebsite,
    showAll,
    hideAll,
  }
}

export default useToggleWebsite
