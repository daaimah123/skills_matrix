// Define the skill type with description
export type Skill = {
    name: string
    description: string
  }
  
  // Define the quadrant key type
  export type QuadrantKey = "goodAt" | "notGoodAt" | "enjoy" | "notEnjoy"
  
  // Define the category type for skill categories
  export type SkillCategory =
    | "all"
    | "technical"
    | "management"
    | "soft"
    | "nonprofit"
    | "domain"
    | "caregiving"
    | "adulting"
  
  // Define the type for the skills list with descriptions
  export type SkillsListWithDescriptions = {
    [category: string]: Skill[]
  }
  
  // Define the type for the skills list
  export type SkillsList = {
    [category: string]: string[]
  }
  
  // Define the type for the skills state
  export type SkillsState = Record<QuadrantKey, string[]>
  
  // Define the type for the dragged skill
  export type DraggedSkill = {
    quadrant: QuadrantKey
    index: number
    skill: string
  } | null
  
  // Define the type for the editing skill
  export type EditingSkill = {
    quadrant: QuadrantKey | null
    index: number | null
    value: string
  }
  