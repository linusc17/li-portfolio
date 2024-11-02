import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ResumeModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export default function ResumeModal({
  showModal,
  setShowModal,
}: ResumeModalProps) {
  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Vincent Linus A. Caayupan
          </DialogTitle>
          <DialogDescription>Front-end Web Developer</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p className="text-sm text-muted-foreground">
              Passionate Information Technology graduate specializing in
              front-end web development, with hands-on experience in creating
              responsive web applications using Tailwind CSS, Bootstrap, and
              modern JavaScript frameworks like React and Next.js. Eager to
              leverage my skills in HTML, CSS, and UI/UX design to contribute to
              a dynamic development team.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-1">Frameworks</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Tailwind CSS</li>
                  <li>Bootstrap CSS</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Express.js</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-1">Languages</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>HTML</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-medium mb-1">Other Technologies</h4>
              <p className="text-sm text-muted-foreground">
                Node.js, Supabase, Git, Figma, Canva, WordPress
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium">Freelancing Web Developer</h4>
                <p className="text-sm text-muted-foreground">
                  March 2024 - Present
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>
                    Created responsive, user-friendly websites using HTML,
                    Tailwind CSS, and Bootstrap.
                  </li>
                  <li>
                    Focused on delivering tailored, client-specific solutions to
                    meet unique project goals.
                  </li>
                  <li>Built websites with simple, minimalistic designs.</li>
                  <li>
                    Ensured clear communication throughout the project, from
                    planning to completion.
                  </li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium">
                  Web Developer Intern (Team Leader)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Unified Internship Program Incorporated, March 2024 - July
                  2024
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>
                    Developed and implemented a streamlined process for booking
                    and reservation of trips for a travel agency website using
                    WordPress and WPTravelEngine.
                  </li>
                  <li>
                    Learned how to use Tailwind CSS proficiently for the tasks
                    given.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-medium">
                Polytechnic University of the Philippines
              </h4>
              <p className="text-sm text-muted-foreground">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-sm text-muted-foreground pb-2">
                Consistent Dean&apos;s/President&apos;s Lister
              </p>
              <h4 className="font-medium">FEU Alabang</h4>
              <p className="text-sm text-muted-foreground">
                Science, Technology, Engineering and Mathematics Specialization
                in IT
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h3 className="text-lg font-semibold mb-2">Projects</h3>
            <div className="bg-muted/50 p-4 rounded-lg">
              <ul className=" list-inside text-sm text-foreground">
                <li>
                  Facilities System (Maintenance Requests, Equipment
                  Reservation, Room Reservation)
                </li>
                <li>Travel Agency Website</li>
                <li>Aircraft Information Website with QR Code Functionality</li>
                <li>Driving LMS System with Decision Support</li>
              </ul>
            </div>
          </section>
        </div>
        <DialogTrigger asChild>
          <Button className="mt-4">Close</Button>
        </DialogTrigger>
      </DialogContent>
    </Dialog>
  );
}
