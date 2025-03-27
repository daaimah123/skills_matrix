"use client"

import type React from "react"

import { useState } from "react"
import type { QuadrantKey, DraggedSkill, SkillsState } from "../types"

export function useDragDrop(skills: SkillsState, setSkills: React.Dispatch<React.SetStateAction<SkillsState>>) {
  const [draggedSkill, setDraggedSkill] = useState<DraggedSkill>(null)

  const handleDragStart = (quadrant: QuadrantKey, index: number, skill: string) => {
    setDraggedSkill({ quadrant, index, skill })
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (targetQuadrant: QuadrantKey) => {
    if (draggedSkill && draggedSkill.quadrant !== targetQuadrant) {
      // Remove from source quadrant
      const sourceSkills = [...skills[draggedSkill.quadrant]]
      sourceSkills.splice(draggedSkill.index, 1)

      // Add to target quadrant
      const targetSkills = [...skills[targetQuadrant], draggedSkill.skill]

      setSkills({
        ...skills,
        [draggedSkill.quadrant]: sourceSkills,
        [targetQuadrant]: targetSkills,
      })
    }
    setDraggedSkill(null)
  }

  return {
    draggedSkill,
    handleDragStart,
    handleDragOver,
    handleDrop,
  }
}
