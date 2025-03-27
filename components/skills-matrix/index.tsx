"use client"

import { useState } from "react"
import { Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QuadrantCard } from "./components/quadrant-card"
import { AddSkillForm } from "./components/add-skill-form"
import { Instructions } from "./components/instructions"
import { useSkills } from "./hooks/use-skills"
import { useDragDrop } from "./hooks/use-drag-drop"
import { quadrantLabels, quadrantColors, quadrantGradients } from "./data"
import type { QuadrantKey } from "./types"

export function SkillsMatrix() {
  const [showInstructions, setShowInstructions] = useState(false)
  const { skills, allSkillDescriptions, addSkill, removeSkill, editSkill, saveMatrix } = useSkills()

  const { draggedSkill, handleDragStart, handleDragOver, handleDrop } = useDragDrop(skills, editSkill)

  return (
    <TooltipProvider>
      <div className="container mx-auto py-8 max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills Matrix
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Map your skills, preferences, and career path with clarity and confidence
          </p>
          <div className="mt-4 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowInstructions(!showInstructions)}
              className="flex items-center gap-2"
            >
              {showInstructions ? "Hide Instructions" : "How to Use This Tool"}
            </Button>
          </div>
        </div>

        <Instructions show={showInstructions} onClose={() => setShowInstructions(false)} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {(Object.keys(quadrantLabels) as QuadrantKey[]).map((quadrant) => (
            <QuadrantCard
              key={quadrant}
              quadrant={quadrant}
              skills={skills[quadrant]}
              descriptions={allSkillDescriptions}
              colors={quadrantColors[quadrant]}
              gradients={quadrantGradients[quadrant]}
              label={quadrantLabels[quadrant]}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onRemove={removeSkill}
              onEdit={editSkill}
            />
          ))}
        </div>

        <AddSkillForm skills={skills} onAddSkill={addSkill} descriptions={allSkillDescriptions} />

        <div className="flex justify-center">
          <Button
            onClick={saveMatrix}
            className="flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Matrix
          </Button>
        </div>
      </div>
    </TooltipProvider>
  )
}
