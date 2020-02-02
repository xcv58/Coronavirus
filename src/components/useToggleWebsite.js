import React from "react"

const useToggleWebsite = () => {
  const [hiddenSet, setHiddenSet] = React.useState(new Set())
  const toggleWebsite = url => {
    const newSet = new Set(hiddenSet)
    if (hiddenSet.has(url)) {
      newSet.delete(url)
    } else {
      newSet.add(url)
    }
    setHiddenSet(newSet)
  }
  return [hiddenSet, toggleWebsite]
}

export default useToggleWebsite
