"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SkillItem } from "./skill-item"
import type { QuadrantKey } from "../types"
import { quadrantDescriptions } from "../data"

interface QuadrantCardProps {
  quadrant: QuadrantKey
  skills: string[]
  descriptions: Record<string, string>
  colors: string
  gradients: string
  label: string
  onDragStart: (quadrant: QuadrantKey, index: number, skill: string) => void
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void
  onDrop: (targetQuadrant: QuadrantKey) => void
  onRemove: (quadrant: QuadrantKey, index: number) => void
  onEdit: (quadrant: QuadrantKey, index: number, value: string) => void
}

export function QuadrantCard({
  quadrant,
  skills,
  descriptions,
  colors,
  gradients,
  label,
  onDragStart,
  onDragOver,
  onDrop,
  onRemove,
  onEdit,
}: QuadrantCardProps) {
  return (
    <Card
      className={`border-2 shadow-sm hover:shadow-md transition-shadow ${colors.split(" ")[0]}`}
      onDragOver={onDragOver}
      onDrop={() => onDrop(quadrant)}
    >
      <CardHeader className={`bg-gradient-to-r ${gradients} rounded-t-lg`}>
        <CardTitle className="text-xl">{label}</CardTitle>
        <CardDescription>{quadrantDescriptions[quadrant]}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-2 min-h-[120px]">
          {skills.map((skill, index) => (
            <SkillItem
              key={index}
              skill={skill}
              description={descriptions[skill]}
              onDragStart={() => onDragStart(quadrant, index, skill)}
              onRemove={() => onRemove(quadrant, index)}
              onEdit={(value) => onEdit(quadrant, index, value)}
            />
          ))}
          {skills.length === 0 && (
            <li className="text-center py-8 text-muted-foreground italic">Drag skills here or add new ones below</li>
          )}
        </ul>
      </CardContent>
    </Card>
  )
}
