"use client"

import { useState } from "react"
import { List, Info } from "lucide-react"
import { Button } from "../../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog"
import { Input } from "../../ui/input"
import { ScrollArea } from "../../ui/scroll-area"
import { Badge } from "../../ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "../../ui/tooltip"
import type { QuadrantKey, SkillCategory } from "../types"
import { skillsList, skillsListWithDescriptions, quadrantLabels } from "../data"

interface SkillsBrowserProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  activeQuadrant: QuadrantKey
  onSelectSkill: (skill: string) => void
}

export function SkillsBrowser({ open, onOpenChange, activeQuadrant, onSelectSkill }: SkillsBrowserProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("all")

  const allSkills = Object.values(skillsList).flat()

  const filteredSkills =
    selectedCategory === "all"
      ? allSkills.filter((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      : skillsList[selectedCategory].filter((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex-shrink-0">
          <List className="h-4 w-4 mr-2" />
          Browse Skills
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Browse Skills</DialogTitle>
          <DialogDescription>
            Select from a variety of skills to add to your {quadrantLabels[activeQuadrant].toLowerCase()} quadrant.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="flex flex-col gap-4">
            <Input
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-2"
            />
            <div className="flex flex-wrap gap-2 mb-4">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
              >
                All
              </Button>
              <Button
                variant={selectedCategory === "technical" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("technical")}
              >
                Technical
              </Button>
              <Button
                variant={selectedCategory === "management" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("management")}
              >
                Management
              </Button>
              <Button
                variant={selectedCategory === "soft" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("soft")}
              >
                Soft Skills
              </Button>
              <Button
                variant={selectedCategory === "domain" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("domain")}
              >
                Domain Knowledge
              </Button>
              <Button
                variant={selectedCategory === "nonprofit" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("nonprofit")}
              >
                Nonprofit
              </Button>
              <Button
                variant={selectedCategory === "caregiving" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("caregiving")}
              >
                Caregiving
              </Button>
              <Button
                variant={selectedCategory === "adulting" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("adulting")}
              >
                Life Skills
              </Button>
            </div>
            <ScrollArea className="h-[300px] rounded-md border p-4">
              <div className="flex flex-wrap gap-2">
                <TooltipProvider>
                  {filteredSkills.map((skill) => {
                    const categoryKey =
                      selectedCategory === "all"
                        ? Object.entries(skillsList).find(([_, skills]) => skills.includes(skill))?.[0]
                        : selectedCategory

                    const description = categoryKey
                      ? skillsListWithDescriptions[categoryKey]?.find((s) => s.name === skill)?.description
                      : undefined

                    return (
                      <div key={skill} className="flex items-center">
                        <Badge
                          variant="outline"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                          onClick={() => onSelectSkill(skill)}
                        >
                          {skill}
                        </Badge>
                        {description && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-5 w-5 p-0 ml-1">
                                <Info className="h-4 w-4 text-muted-foreground" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>{description}</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    )
                  })}
                </TooltipProvider>
              </div>
              {filteredSkills.length === 0 && (
                <p className="text-center text-muted-foreground py-4">No skills found matching your search.</p>
              )}
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
