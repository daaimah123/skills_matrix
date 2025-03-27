"use client"
import { Button } from "../../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordion"

interface InstructionsProps {
  show: boolean
  onClose: () => void
}

export function Instructions({ show, onClose }: InstructionsProps) {
  if (!show) return null

  return (
    <Card className="mb-8 border-dashed border-2 bg-slate-50 dark:bg-slate-950/50">
      <CardHeader>
        <CardTitle className="text-2xl">🎯 What's This All About?</CardTitle>
        <CardDescription className="text-base">
          A powerful tool to help you gain clarity on your career path and professional development
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">Why Use a Skills Matrix?</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="individual">
              <AccordionTrigger className="text-base font-medium">🧑‍💻 For Individual Contributors</AccordionTrigger>
              <AccordionContent className="space-y-2 text-muted-foreground">
                <p>• Find your superpower combo where your talent meets your passion</p>
                <p>• Level up strategically by focusing on skills that matter</p>
                <p>• Nail performance reviews with actual data, not just vibes</p>
                <p>• Make career moves with confidence, not anxiety</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="managers">
              <AccordionTrigger className="text-base font-medium">👑 For Engineering Managers</AccordionTrigger>
              <AccordionContent className="space-y-2 text-muted-foreground">
                <p>• Discover your management style and preferences</p>
                <p>• Delegate effectively based on your strengths</p>
                <p>• Guide your reports with personalized advice</p>
                <p>• Decide if technical leadership or people management is right for you</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="career-changers">
              <AccordionTrigger className="text-base font-medium">🦋 For Career Changers</AccordionTrigger>
              <AccordionContent className="space-y-2 text-muted-foreground">
                <p>• Identify transferable skills from your current role</p>
                <p>• Target learning paths that align with your preferences</p>
                <p>• Interview with confidence despite an unconventional background</p>
                <p>• Avoid roles that would make you miserable</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="caregivers">
              <AccordionTrigger className="text-base font-medium">
                🏠 For Caregivers & Life Skills Champions
              </AccordionTrigger>
              <AccordionContent className="space-y-2 text-muted-foreground">
                <p>• Recognize how household management translates to professional skills</p>
                <p>• Translate everyday experiences into resume-worthy accomplishments</p>
                <p>• Own your caregiving superpowers like crisis management and multitasking</p>
                <p>• Bridge resume gaps with confidence</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">How to Use This Tool</h3>
          <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
            <li className="pl-2">
              <span className="font-medium text-foreground">Fill the quadrants</span> with your skills, being honest
              about what you're good at, not good at, enjoy, and don't enjoy
            </li>
            <li className="pl-2">
              <span className="font-medium text-foreground">Drag and drop skills</span> between quadrants as you gain
              new insights
            </li>
            <li className="pl-2">
              <span className="font-medium text-foreground">Look for patterns</span> in each quadrant:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Sweet Spot</span> (Good At +
                  Enjoy): Your career foundation
                </li>
                <li>
                  <span className="text-amber-600 dark:text-amber-400 font-medium">Growth Zone</span> (Not Good At +
                  Enjoy): Skills worth developing
                </li>
                <li>
                  <span className="text-sky-600 dark:text-sky-400 font-medium">Delegation Station</span> (Good At +
                  Don't Enjoy): Perfect for trading favors
                </li>
                <li>
                  <span className="text-rose-600 dark:text-rose-400 font-medium">Danger Zone</span> (Not Good At + Don't
                  Enjoy): Avoid these at all costs
                </li>
              </ul>
            </li>
            <li className="pl-2">
              <span className="font-medium text-foreground">Save your matrix</span> and revisit it periodically as your
              skills and preferences evolve
            </li>
          </ol>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-4">
        <Button onClick={onClose}>Get Started</Button>
      </CardFooter>
    </Card>
  )
}
