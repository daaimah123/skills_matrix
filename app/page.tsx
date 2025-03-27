"use client"

import { useState, useRef, useEffect } from "react"
import { PlusCircle, Save, Trash2, Edit, Check, X, List, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Define the skill type with description
type Skill = {
  name: string
  description: string
}

export default function SkillsMatrix() {
  // Comprehensive list of skills by category with descriptions
  const skillsListWithDescriptions = {
    technical: [
      {
        name: "JavaScript/TypeScript",
        description: "Programming languages for web development, with TypeScript adding static typing to JavaScript.",
      },
      {
        name: "Python",
        description: "Versatile programming language known for readability and extensive libraries.",
      },
      {
        name: "React",
        description: "JavaScript library for building user interfaces, particularly single-page applications.",
      },
      {
        name: "Node.js",
        description: "JavaScript runtime built on Chrome's V8 engine for server-side programming.",
      },
      {
        name: "SQL",
        description: "Standard language for managing and querying relational databases.",
      },
      {
        name: "AWS",
        description: "Amazon Web Services - cloud computing platform offering various services.",
      },
      {
        name: "Docker",
        description: "Platform for developing, shipping, and running applications in containers.",
      },
      {
        name: "CI/CD",
        description:
          "Continuous Integration and Continuous Deployment - automating build, test, and deployment processes.",
      },
      {
        name: "System Design",
        description:
          "Process of defining architecture, components, and interfaces for a system to satisfy requirements.",
      },
      {
        name: "Debugging",
        description: "Process of finding and resolving defects in software that prevent correct operation.",
      },
    ],
    management: [
      {
        name: "Team Leadership",
        description: "Ability to guide, motivate, and direct a group toward common goals.",
      },
      {
        name: "Agile Methodologies",
        description:
          "Approach to project management emphasizing flexibility, customer collaboration, and rapid delivery.",
      },
      {
        name: "1:1 Meetings",
        description: "Regular one-on-one meetings with team members to provide feedback, guidance, and support.",
      },
      {
        name: "Performance Reviews",
        description: "Formal assessment of an employee's work performance over a specific period.",
      },
      {
        name: "Conflict Resolution",
        description: "Process of addressing disagreements constructively to reach a mutually acceptable solution.",
      },
      {
        name: "Delegating effectively",
        description: "Assigning responsibilities to team members based on their strengths and development needs.",
      },
      {
        name: "Empowering team members",
        description: "Giving team members authority and resources to make decisions and take ownership.",
      },
      {
        name: "Autonomy-based leadership",
        description: "Leadership style that grants team members freedom to determine how to accomplish their work.",
      },
      {
        name: "Trust-based management",
        description: "Management approach founded on mutual trust rather than control and surveillance.",
      },
      {
        name: "Weekly check-in systems",
        description: "Regular, lightweight meetings to align on progress, priorities, and remove obstacles.",
      },
      {
        name: "Servant leadership",
        description: "Leadership philosophy where the leader's primary goal is to serve and support their team.",
      },
      {
        name: "Coaching over directing",
        description: "Approach that focuses on developing skills through guidance rather than giving direct orders.",
      },
      {
        name: "Results-oriented management",
        description: "Management style focused on outcomes rather than processes or time spent.",
      },
      {
        name: "Adaptive leadership",
        description: "Ability to adapt leadership style to changing circumstances and team needs.",
      },
    ],
    soft: [
      {
        name: "Communication",
        description: "Ability to convey information clearly and effectively in various formats and contexts.",
      },
      {
        name: "Active Listening",
        description: "Fully concentrating on, understanding, and responding thoughtfully to what someone is saying.",
      },
      {
        name: "Empathy",
        description: "Ability to understand and share the feelings of another person.",
      },
      {
        name: "Adaptability",
        description: "Ability to adjust to new conditions or changing requirements quickly and effectively.",
      },
      {
        name: "Problem Solving",
        description: "Process of finding solutions to difficult or complex issues.",
      },
      {
        name: "Time Management",
        description: "Practice of planning and controlling time spent on specific activities to increase efficiency.",
      },
      {
        name: "Mentoring",
        description: "Guiding less experienced individuals to develop their skills and career.",
      },
      {
        name: "Feedback Giving",
        description: "Providing constructive information to help others improve their performance.",
      },
      {
        name: "Resilience",
        description: "Ability to recover quickly from difficulties or adapt well to change and stress.",
      },
      {
        name: "Work-Life Balance",
        description: "Maintaining equilibrium between professional responsibilities and personal life.",
      },
    ],
    nonprofit: [
      {
        name: "Adaptability in changing environments",
        description:
          "Ability to quickly adjust to shifting priorities, limited resources, and evolving needs in nonprofit settings.",
      },
      {
        name: "Resource optimization",
        description: "Making the most of limited resources to achieve maximum impact for the mission.",
      },
      {
        name: "Working with limited budgets",
        description: "Ability to accomplish goals despite financial constraints common in nonprofit organizations.",
      },
      {
        name: "Mission-driven focus",
        description: "Maintaining alignment with organizational purpose rather than profit motives.",
      },
      {
        name: "Stakeholder engagement",
        description:
          "Building relationships with diverse groups including donors, volunteers, beneficiaries, and community members.",
      },
      {
        name: "Volunteer coordination",
        description: "Recruiting, training, and managing volunteers to support organizational goals.",
      },
      {
        name: "Grant writing",
        description:
          "Developing compelling proposals to secure funding from foundations and other grant-making entities.",
      },
      {
        name: "Flexibility in role definition",
        description: "Adapting job responsibilities as needed in organizations with less rigid structures.",
      },
      {
        name: "Wearing multiple hats",
        description: "Taking on various roles and responsibilities beyond formal job description as needed.",
      },
      {
        name: "Grassroots organizing",
        description: "Building community support and engagement from the ground up.",
      },
      {
        name: "Crisis management",
        description: "Responding effectively to unexpected challenges with limited resources.",
      },
      {
        name: "Impact measurement",
        description: "Evaluating and communicating the effectiveness of programs in achieving mission objectives.",
      },
    ],
    domain: [
      {
        name: "Fintech",
        description: "Knowledge of financial technology systems, regulations, and industry practices.",
      },
      {
        name: "Healthcare",
        description: "Understanding of healthcare systems, regulations, and patient care processes.",
      },
      {
        name: "E-commerce",
        description: "Knowledge of online retail operations, payment processing, and customer experience.",
      },
      {
        name: "Education",
        description: "Understanding of learning methodologies, educational systems, and student needs.",
      },
      {
        name: "Gaming",
        description: "Knowledge of game development, player engagement, and gaming platforms.",
      },
      {
        name: "Social Media",
        description: "Understanding of social platforms, content strategy, and community engagement.",
      },
      {
        name: "Enterprise Software",
        description: "Knowledge of business applications, workflows, and organizational needs.",
      },
      {
        name: "Cybersecurity",
        description: "Understanding of security threats, protection mechanisms, and compliance requirements.",
      },
      {
        name: "Data Privacy",
        description: "Knowledge of privacy regulations, data protection practices, and compliance.",
      },
      {
        name: "User Research",
        description: "Methods for understanding user needs, behaviors, and preferences.",
      },
      {
        name: "UX Design",
        description: "Creating intuitive, efficient, and enjoyable user experiences.",
      },
      {
        name: "Analytics",
        description: "Using data to measure performance, identify trends, and inform decisions.",
      },
    ],
    caregiving: [
      {
        name: "Crisis management",
        description:
          "Ability to stay calm and make decisions under pressure during emergencies or high-stress situations.",
      },
      {
        name: "Patience and empathy",
        description:
          "Capacity to understand others' needs and respond with compassion, even in challenging circumstances.",
      },
      {
        name: "Multitasking",
        description: "Managing multiple priorities simultaneously while maintaining attention to detail and quality.",
      },
      {
        name: "Needs assessment",
        description:
          "Identifying and prioritizing others' requirements, often when they can't articulate them clearly.",
      },
      {
        name: "Emotional intelligence",
        description: "Recognizing, understanding, and managing emotions in yourself and others effectively.",
      },
      {
        name: "Conflict resolution",
        description: "De-escalating tense situations and finding solutions that address underlying needs.",
      },
      {
        name: "Resourcefulness",
        description: "Finding creative solutions with limited resources or in unexpected situations.",
      },
      {
        name: "Advocacy",
        description: "Speaking up for others' needs and navigating complex systems on their behalf.",
      },
      {
        name: "Time management",
        description: "Efficiently organizing competing priorities and making the most of limited time.",
      },
      {
        name: "Adaptability",
        description: "Quickly adjusting to changing circumstances and requirements without losing effectiveness.",
      },
    ],
    adulting: [
      {
        name: "Financial management",
        description: "Budgeting, planning, and making strategic decisions about resource allocation.",
      },
      {
        name: "Negotiation",
        description: "Advocating for your needs while finding mutually beneficial solutions with others.",
      },
      {
        name: "Project planning",
        description: "Breaking down complex tasks (like moving or renovations) into manageable steps with timelines.",
      },
      {
        name: "Vendor management",
        description: "Selecting, coordinating, and evaluating service providers for quality and value.",
      },
      {
        name: "Research skills",
        description: "Finding, evaluating, and applying information to make informed decisions.",
      },
      {
        name: "Preventive maintenance",
        description: "Identifying potential issues before they become problems and taking proactive steps.",
      },
      {
        name: "Documentation",
        description: "Keeping organized records of important information, transactions, and communications.",
      },
      {
        name: "Boundary setting",
        description: "Establishing and maintaining healthy limits in relationships and commitments.",
      },
      {
        name: "Continuous learning",
        description: "Acquiring new skills and knowledge as needed to address changing circumstances.",
      },
      {
        name: "Community building",
        description: "Creating and nurturing networks of mutual support and shared resources.",
      },
    ],
  }

  // Convert the skills with descriptions to a format compatible with the existing code
  const skillsList = Object.fromEntries(
    Object.entries(skillsListWithDescriptions).map(([category, skills]) => [
      category,
      skills.map((skill) => skill.name),
    ]),
  )

  // Create a lookup map for skill descriptions
  const skillDescriptions = Object.values(skillsListWithDescriptions)
    .flat()
    .reduce((acc, skill) => {
      acc[skill.name] = skill.description
      return acc
    }, {})

  const [skills, setSkills] = useState({
    goodAt: [
      "Debugging complex issues",
      "Mentoring junior developers",
      "System architecture design",
      "Adapting to changing priorities",
    ],
    notGoodAt: ["Public speaking", "Work-life balance", "Frontend design", "Rigid process enforcement"],
    enjoy: [
      "Solving technical challenges",
      "Code reviews",
      "Team collaboration",
      "Flexible 'roll with the punches' work environments",
      "Giving people autonomy to grow",
      "Weekly check-ins with team members",
      "The dynamic nature of nonprofit work",
    ],
    notEnjoy: [
      "Administrative paperwork",
      "Meetings without clear agendas",
      "Legacy code maintenance",
      "Micromanaging team members",
      "Highly structured environments with no flexibility",
    ],
  })

  // Add custom descriptions for the initial skills that aren't in the skills list
  const customDescriptions = {
    "Debugging complex issues": "Ability to identify and resolve intricate technical problems in code or systems.",
    "Mentoring junior developers":
      "Guiding and supporting less experienced developers to grow their skills and confidence.",
    "System architecture design":
      "Creating high-level structure and organization of software systems to meet requirements.",
    "Adapting to changing priorities":
      "Ability to shift focus and adjust work based on evolving business or project needs.",
    "Public speaking": "Presenting information clearly and confidently to groups of various sizes.",
    "Work-life balance": "Maintaining a healthy equilibrium between professional responsibilities and personal life.",
    "Frontend design": "Creating user interfaces that are both visually appealing and functional.",
    "Rigid process enforcement": "Strictly adhering to established procedures without flexibility for context.",
    "Solving technical challenges": "Finding effective solutions to complex technical problems.",
    "Code reviews": "Examining code written by others to improve quality and share knowledge.",
    "Team collaboration": "Working effectively with others to achieve shared goals.",
    "Flexible 'roll with the punches' work environments":
      "Thriving in settings where plans frequently change and adaptability is essential.",
    "Giving people autonomy to grow":
      "Allowing team members freedom to make decisions and learn from their experiences.",
    "Weekly check-ins with team members": "Regular, structured conversations to provide support and remove obstacles.",
    "The dynamic nature of nonprofit work":
      "Engaging with the varied and evolving challenges common in mission-driven organizations.",
    "Administrative paperwork": "Completing forms, reports, and documentation required for organizational processes.",
    "Meetings without clear agendas": "Participating in discussions that lack defined objectives or structure.",
    "Legacy code maintenance":
      "Working with and improving older codebases that may lack documentation or use outdated technologies.",
    "Micromanaging team members": "Closely controlling and monitoring the work of others rather than empowering them.",
    "Highly structured environments with no flexibility":
      "Working in settings with rigid processes that don't adapt to changing needs.",
  }

  // Merge the skill descriptions
  const [allSkillDescriptions, setAllSkillDescriptions] = useState({ ...skillDescriptions, ...customDescriptions })

  const [newSkill, setNewSkill] = useState("")
  const [newSkillDescription, setNewSkillDescription] = useState("")
  const [activeQuadrant, setActiveQuadrant] = useState("goodAt")
  const [editingSkill, setEditingSkill] = useState({ quadrant: null, index: null, value: "" })
  const [draggedSkill, setDraggedSkill] = useState(null)
  const [skillsDialogOpen, setSkillsDialogOpen] = useState(false)
  const [addCustomSkillOpen, setAddCustomSkillOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const inputRef = useRef(null)
  const descriptionInputRef = useRef(null)

  useEffect(() => {
    if (editingSkill.quadrant !== null && inputRef.current) {
      inputRef.current.focus()
    }
  }, [editingSkill])

  useEffect(() => {
    if (addCustomSkillOpen && descriptionInputRef.current) {
      descriptionInputRef.current.focus()
    }
  }, [addCustomSkillOpen])

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills({
        ...skills,
        [activeQuadrant]: [...skills[activeQuadrant], newSkill.trim()],
      })

      // Add the custom description if provided
      if (newSkillDescription.trim()) {
        setAllSkillDescriptions((prev) => ({
          ...prev,
          [newSkill.trim()]: newSkillDescription.trim(),
        }))
      }

      setNewSkill("")
      setNewSkillDescription("")
      setAddCustomSkillOpen(false)
    }
  }

  const removeSkill = (quadrant, index) => {
    const updatedSkills = [...skills[quadrant]]
    updatedSkills.splice(index, 1)
    setSkills({
      ...skills,
      [quadrant]: updatedSkills,
    })
  }

  const startEditing = (quadrant, index, value) => {
    setEditingSkill({ quadrant, index, value })
  }

  const saveEdit = () => {
    if (editingSkill.value.trim()) {
      const updatedSkills = [...skills[editingSkill.quadrant]]
      updatedSkills[editingSkill.index] = editingSkill.value
      setSkills({
        ...skills,
        [editingSkill.quadrant]: updatedSkills,
      })
    }
    cancelEdit()
  }

  const cancelEdit = () => {
    setEditingSkill({ quadrant: null, index: null, value: "" })
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (editingSkill.quadrant !== null) {
        saveEdit()
      } else if (!addCustomSkillOpen) {
        addSkill()
      }
    } else if (e.key === "Escape") {
      if (editingSkill.quadrant !== null) {
        cancelEdit()
      } else if (addCustomSkillOpen) {
        setAddCustomSkillOpen(false)
        setNewSkillDescription("")
      }
    }
  }

  const handleDragStart = (quadrant, index, skill) => {
    setDraggedSkill({ quadrant, index, skill })
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (targetQuadrant) => {
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

  const addSkillFromList = (skill) => {
    setSkills({
      ...skills,
      [activeQuadrant]: [...skills[activeQuadrant], skill],
    })
  }

  const quadrantLabels = {
    goodAt: "What I'm Good At",
    notGoodAt: "What I'm Not Yet Good At",
    enjoy: "What I Enjoy Doing",
    notEnjoy: "What I Don't Enjoy Doing",
  }

  const quadrantDescriptions = {
    goodAt: "Skills and abilities you've mastered or perform well",
    notGoodAt: "Areas where you need improvement or more experience",
    enjoy: "Tasks and responsibilities that energize you",
    notEnjoy: "Activities that drain your energy or motivation",
  }

  const quadrantColors = {
    goodAt: "border-green-200 bg-green-50 dark:bg-green-950/20",
    notGoodAt: "border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20",
    enjoy: "border-blue-200 bg-blue-50 dark:bg-blue-950/20",
    notEnjoy: "border-red-200 bg-red-50 dark:bg-red-950/20",
  }

  const allSkills = Object.values(skillsList).flat()

  const filteredSkills =
    selectedCategory === "all"
      ? allSkills.filter((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      : skillsList[selectedCategory].filter((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <TooltipProvider>
      <div className="container mx-auto py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Skills Matrix Exercise</h1>
          <p className="text-muted-foreground">
            Identify your strengths, growth areas, preferences, and dislikes to guide your career decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {Object.keys(quadrantLabels).map((quadrant) => (
            <Card
              key={quadrant}
              className={`border shadow-sm ${quadrantColors[quadrant].split(" ")[0]}`}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(quadrant)}
            >
              <CardHeader className={quadrantColors[quadrant]}>
                <CardTitle>{quadrantLabels[quadrant]}</CardTitle>
                <CardDescription>{quadrantDescriptions[quadrant]}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 min-h-[100px]">
                  {skills[quadrant].map((skill, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center p-2 rounded-md hover:bg-muted group"
                      draggable
                      onDragStart={() => handleDragStart(quadrant, index, skill)}
                    >
                      {editingSkill.quadrant === quadrant && editingSkill.index === index ? (
                        <div className="flex w-full gap-2">
                          <Input
                            ref={inputRef}
                            value={editingSkill.value}
                            onChange={(e) => setEditingSkill({ ...editingSkill, value: e.target.value })}
                            onKeyDown={handleKeyDown}
                            className="flex-1"
                          />
                          <Button variant="ghost" size="icon" onClick={saveEdit} className="h-8 w-8">
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={cancelEdit} className="h-8 w-8">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center gap-2">
                            <span className="cursor-move">{skill}</span>
                            {allSkillDescriptions[skill] && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                                    <Info className="h-4 w-4 text-muted-foreground" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent className="max-w-xs">
                                  <p>{allSkillDescriptions[skill]}</p>
                                </TooltipContent>
                              </Tooltip>
                            )}
                          </div>
                          <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => startEditing(quadrant, index, skill)}
                              className="h-8 w-8"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeSkill(quadrant, index)}
                              className="h-8 w-8"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Add New Skills</CardTitle>
            <CardDescription>Select a quadrant and add your skills</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeQuadrant} onValueChange={setActiveQuadrant}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
                <TabsTrigger value="goodAt">Good At</TabsTrigger>
                <TabsTrigger value="notGoodAt">Not Yet Good At</TabsTrigger>
                <TabsTrigger value="enjoy">Enjoy</TabsTrigger>
                <TabsTrigger value="notEnjoy">Don't Enjoy</TabsTrigger>
              </TabsList>

              {Object.keys(quadrantLabels).map((quadrant) => (
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
                          <Button onClick={addSkill} className="flex-shrink-0">
                            <PlusCircle className="h-4 w-4 mr-2" />
                            Add
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-shrink-0"
                            onClick={() => setAddCustomSkillOpen(true)}
                          >
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
                                  addSkill()
                                }
                              }}
                              className="flex-1"
                            />
                            <Button
                              onClick={addSkill}
                              disabled={!newSkill.trim() || !newSkillDescription.trim()}
                              className="flex-shrink-0"
                            >
                              <PlusCircle className="h-4 w-4 mr-2" />
                              Add
                            </Button>
                          </div>
                        </div>
                      )}

                      <Dialog open={skillsDialogOpen} onOpenChange={setSkillsDialogOpen}>
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
                              Select from a variety of skills to add to your{" "}
                              {quadrantLabels[activeQuadrant].toLowerCase()} quadrant.
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
                                  {filteredSkills.map((skill) => {
                                    const description = skillsListWithDescriptions[
                                      selectedCategory === "all"
                                        ? Object.entries(skillsList).find(([_, skills]) => skills.includes(skill))?.[0]
                                        : selectedCategory
                                    ]?.find((s) => s.name === skill)?.description

                                    return (
                                      <div key={skill} className="flex items-center">
                                        <Badge
                                          variant="outline"
                                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                                          onClick={() => {
                                            addSkillFromList(skill)
                                            setSkillsDialogOpen(false)
                                          }}
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
                                </div>
                                {filteredSkills.length === 0 && (
                                  <p className="text-center text-muted-foreground py-4">
                                    No skills found matching your search.
                                  </p>
                                )}
                              </ScrollArea>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button onClick={saveMatrix} className="flex items-center">
            <Save className="h-4 w-4 mr-2" />
            Save Matrix
          </Button>
        </div>
      </div>
    </TooltipProvider>
  )
}
