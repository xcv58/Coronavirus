import createPersistedState from "use-persisted-state"
import useWebsites from "./useWebsites"

const useHiddenWebsites = createPersistedState("hidden-websites")

const useToggleWebsite = () => {
  const allWebsites = useWebsites()
  const [hiddenWebsites, setHiddenWebsites] = useHiddenWebsites(() => {
    return allWebsites
      .slice(3)
      .map(x => x.name)
      .join(",")
  })
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
