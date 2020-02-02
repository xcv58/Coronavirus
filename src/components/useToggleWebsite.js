import React from "react"

const useToggleWebsite = () => {
  const [hiddenSet, setHiddenSet] = React.useState(new Set())
  const toggleWebsite = website => {
    const newSet = new Set(hiddenSet)
    if (hiddenSet.has(website)) {
      newSet.delete(website)
    } else {
      newSet.add(website)
    }
    setHiddenSet(newSet)
  }
  const showAll = () => setHiddenSet(new Set())
  const hideAll = websites => {
    setHiddenSet(new Set(websites))
  }
  return {
    hiddenSet,
    toggleWebsite,
    showAll,
    hideAll,
  }
}

export default useToggleWebsite
