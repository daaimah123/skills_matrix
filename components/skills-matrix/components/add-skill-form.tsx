"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { PlusCircle, X } from "lucide-react"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs"
import { SkillsBrowser } from "./skill-browser"
import type { QuadrantKey, SkillsState } from "../types"
import { quadrantLabels, quadrantDescriptions } from "../data"

interface AddSkillFormProps {
  skills: SkillsState
  descriptions: Record<string, string>
  onAddSkill: (quadrant: QuadrantKey, skill: string, description?: string) => void
}

export function AddSkillForm({ skills, descriptions, onAddSkill }: AddSkillFormProps) {
  const [activeQuadrant, setActiveQuadrant] = useState<QuadrantKey>("goodAt")
  const [newSkill, setNewSkill] = useState("")
  const [newSkillDescription, setNewSkillDescription] = useState("")
  const [addCustomSkillOpen, setAddCustomSkillOpen] = useState(false)
  const [skillsDialogOpen, setSkillsDialogOpen] = useState(false)

  const descriptionInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (addCustomSkillOpen && descriptionInputRef.current) {
      descriptionInputRef.current.focus()
    }
  }, [addCustomSkillOpen])

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      onAddSkill(activeQuadrant, newSkill.trim(), newSkillDescription.trim() || undefined)
      setNewSkill("")
      setNewSkillDescription("")
      setAddCustomSkillOpen(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddSkill()
    } else if (e.key === "Escape" && addCustomSkillOpen) {
      setAddCustomSkillOpen(false)
      setNewSkillDescription("")
    }
  }

  const handleAddFromList = (skill: string) => {
    onAddSkill(activeQuadrant, skill)
    setSkillsDialogOpen(false)
  }

  return (
    <Card className="mb-6 border-2 border-slate-200 dark:border-slate-800">
      <CardHeader>
        <CardTitle>Add New Skills</CardTitle>
        <CardDescription>Select a quadrant and add your skills</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeQuadrant} onValueChange={(value: string) => setActiveQuadrant(value as QuadrantKey)}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
            <TabsTrigger
              value="goodAt"
              className="data-[state=active]:bg-emerald-100 dark:data-[state=active]:bg-emerald-900/30"
            >
              ✨ Good At
            </TabsTrigger>
            <TabsTrigger
              value="notGoodAt"
              className="data-[state=active]:bg-amber-100 dark:data-[state=active]:bg-amber-900/30"
            >
              🌱 Not Yet Good At
            </TabsTrigger>
            <TabsTrigger
              value="enjoy"
              className="data-[state=active]:bg-sky-100 dark:data-[state=active]:bg-sky-900/30"
            >
              🎯 Enjoy
            </TabsTrigger>
            <TabsTrigger
              value="notEnjoy"
              className="data-[state=active]:bg-rose-100 dark:data-[state=active]:bg-rose-900/30"
            >
              ⛔ Don't Enjoy
            </TabsTrigger>
          </TabsList>

          {(Object.keys(quadrantLabels) as QuadrantKey[]).map((quadrant) => (
            <TabsContent key={quadrant} value={quadrant} className="mt-0">
              <div className="space-y-2">
                <h3 className="font-medium">{quadrantLabels[quadrant]}</h3>
                <p className="text-sm text-muted-foreground mb-4">{quadrantDescriptions[quadrant]}</p>
                <div className="flex gap-2">
                  {!addCustomSkillOpen ? (
                    <>
                      <Input
                        placeholder="Enter a skill or trait..."
                        value={activeQuadrant === quadrant ? newSkill : ""}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1"
                      />
                      <Button onClick={handleAddSkill} className="flex-shrink-0">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                      <Button variant="outline" className="flex-shrink-0" onClick={() => setAddCustomSkillOpen(true)}>
                        Add with Description
                      </Button>
                    </>
                  ) : (
                    <div className="flex flex-col w-full gap-2">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Enter a skill or trait..."
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          className="flex-1"
                        />
                        <Button variant="ghost" size="icon" onClick={() => setAddCustomSkillOpen(false)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Input
                          ref={descriptionInputRef}
                          placeholder="Enter a description for this skill..."
                          value={newSkillDescription}
                          onChange={(e) => setNewSkillDescription(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && newSkill.trim() && newSkillDescription.trim()) {
                              handleAddSkill()
                            }
                          }}
                          className="flex-1"
                        />
                        <Button
                          onClick={handleAddSkill}
                          disabled={!newSkill.trim() || !newSkillDescription.trim()}
                          className="flex-shrink-0"
                        >
                          <PlusCircle className="h-4 w-4 mr-2" />
                          Add
                        </Button>
                      </div>
                    </div>
                  )}

                  <SkillsBrowser
                    open={skillsDialogOpen}
                    onOpenChange={setSkillsDialogOpen}
                    activeQuadrant={activeQuadrant}
                    onSelectSkill={handleAddFromList}
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
