"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Edit, Trash2, Check, X, Info } from "lucide-react"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "../../ui/tooltip"

interface SkillItemProps {
  skill: string
  description?: string
  onDragStart: () => void
  onRemove: () => void
  onEdit: (value: string) => void
}

export function SkillItem({ skill, description, onDragStart, onRemove, onEdit }: SkillItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(skill)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  const handleSave = () => {
    if (editValue.trim()) {
      onEdit(editValue)
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditValue(skill)
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave()
    } else if (e.key === "Escape") {
      handleCancel()
    }
  }

  if (isEditing) {
    return (
      <li className="flex justify-between items-center p-2 rounded-md hover:bg-muted group border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors">
        <div className="flex w-full gap-2">
          <Input
            ref={inputRef}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button variant="ghost" size="icon" onClick={handleSave} className="h-8 w-8">
            <Check className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleCancel} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </li>
    )
  }

  return (
    <li
      className="flex justify-between items-center p-2 rounded-md hover:bg-muted group border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors"
      draggable
      onDragStart={onDragStart}
    >
      <div className="flex items-center gap-2">
        <span className="cursor-move">{skill}</span>
        {description && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                  <Info className="h-4 w-4 text-muted-foreground" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>{description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)} className="h-8 w-8">
          <Edit className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onRemove} className="h-8 w-8">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </li>
  )
}
