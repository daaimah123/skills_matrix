"use client"

import { useState } from "react"
import { QuadrantKey, SkillsState } from "../types"
import { initialSkills, initialSkillDescriptions, customDescriptions } from "../data"

export function useSkills() {
  const [skills, setSkills] = useState<SkillsState>(initialSkills)
  const [allSkillDescriptions, setAllSkillDescriptions] = useState({
    ...initialSkillDescriptions,
    ...customDescriptions,
  })

  const addSkill = (quadrant: QuadrantKey, skill: string, description?: string) => {
    if (skill.trim()) {
      setSkills({
        ...skills,
        [quadrant]: [...skills[quadrant], skill.trim()],
      })

      // Add the custom description if provided
      if (description) {
        setAllSkillDescriptions((prev) => ({
          ...prev,
          [skill.trim()]: description,
        }))
      }
    }
  }

  const removeSkill = (quadrant: QuadrantKey, index: number) => {
    const updatedSkills = [...skills[quadrant]]
    updatedSkills.splice(index, 1)
    setSkills({
      ...skills,
      [quadrant]: updatedSkills,
    })
  }

  const editSkill = (quadrant: QuadrantKey, index: number, newValue: string) => {
    if (newValue.trim()) {
      const updatedSkills = [...skills[quadrant]]
      const oldSkill = updatedSkills[index]
      updatedSkills[index] = newValue.trim()
      
      setSkills({
        ...skills,
        [quadrant]: updatedSkills,
      })
      
      // Update the description key if it exists
      if (allSkillDescriptions[oldSkill]) {
        const newDescriptions = { ...allSkillDescriptions }
        newDescriptions[newValue.trim()] = newDescriptions[oldSkill]
        delete newDescriptions[oldSkill]
        setAllSkillDescriptions(newDescriptions)
      }
    }
  }

  const updateSkills = (updatedSkills: SkillsState) => {
    setSkills(updatedSkills)
  }

  const saveMatrix = () => {
    // Create a data structure that includes both skills and their descriptions
    const exportData = {
      skills,
      descriptions: allSkillDescriptions,
    }

    const dataStr = JSON.stringify(exportData, null, 2)
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)
    const exportFileDefaultName = "skills-matrix.json"

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
  }

  return {
    skills,
    allSkillDescriptions,
    addSkill,
    removeSkill,
    editSkill,
    updateSkills,
    saveMatrix,
  }
}
