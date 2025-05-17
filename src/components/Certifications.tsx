import React from 'react';
import { Award, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const certificationsData = [
  {
    id: 1,
    title: "MERN STACK DEVELOPER - INTERNSHIP",
    issuer: "Zealous Academy",
    issueDate: "01.07.2024",
    expiryDate: "19.07.2024",
    credentialId: "ZTCI106/2024",
    skills: ["MERN", "Responsive Design", "Project Architecture"],
    certificateUrl: "/mern.jpg"
  },
  {
    id: 2,
    title: "SOFTWARE TESTING",
    issuer: "NPTEL - Indian Institute of Technology",
    issueDate: "Jan 2024",
    expiryDate: "No Expiration",
    credentialId: "-",
    skills: ["Software Development Life Cycle", "Testing", "Architecture"],
    certificateUrl: "/software.jpg"
  },
  {
    id: 3,
    title: "System Design Engineer - Internship",
    issuer: "Zealous Academy",
    issueDate: "30.12.2024",
    expiryDate: "18.01.2025",
    credentialId: "ZTCI157/2024",
    skills: ["SDE", "Design Pattern", "Problem Skills"],
    certificateUrl: "/sde.jpg"
  },
  {
    id: 4,
    title: "Cloud Computing",
    issuer: "NPTEL - Indian Institute of Technology",
    issueDate: "July 2024",
    expiryDate: "No Expiration",
    credentialId: "-",
    skills: ["Cloud Computing", "Cloud Architecture", "Services"],
    certificateUrl: "/cloud.jpg"
  },
  {
    id: 5,
    title: "Foundation of Cloud IoT Edge ML",
    issuer: "NPTEL - Indian Institute of Technology",
    issueDate: "Feb 2025",
    expiryDate: "No Expiration",
    credentialId: "-",
    skills: ["IOT", "Edge", "Machine Learning"],
    certificateUrl: "/edge.jpg"
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Award className="text-primary" />
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <Card key={cert.id} className="overflow-hidden border-primary/10 hover:border-primary/30 transition-colors h-full flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.certificateUrl}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary/50" />
              </div>
              <CardHeader>
                <CardTitle>{cert.title}</CardTitle>
                <CardDescription className="flex justify-between items-center text-sm">
                  <span>{cert.issuer}</span>
                  <Badge variant="outline">{cert.issueDate}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <p className="text-foreground/70">Credential ID</p>
                    <p className="font-medium">{cert.credentialId}</p>
                  </div>
                  <div>
                    <p className="text-foreground/70">Expiry Date</p>
                    <p className="font-medium">{cert.expiryDate}</p>
                  </div>
                </div>
                <div>
                  <p className="text-foreground/70 text-sm mb-2">Skills</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="size-4 mr-2" /> View Certificate
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[725px]">
                    <DialogHeader>
                      <DialogTitle>{cert.title}</DialogTitle>
                      <DialogDescription>
                        <img src={cert.certificateUrl} alt={cert.title} className="w-full mt-4 rounded-md" />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
