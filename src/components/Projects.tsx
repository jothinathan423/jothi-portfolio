
import React, { useState } from 'react';
import { Folder } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const projectsData = [
  {
    id: 1,
    title: "Smart Traffic Management System",
    category: "IoT & Embedded Systems",
    tags: ["Traffic Control", "Vehicle Density", "Automation"],
    image: "/traffic.jpg",
    shortDescription: "Designed an automated traffic signal control system based on real-time vehicle density detection to reduce congestion and improve traffic flow.",

    fullDescription: `This project focused on developing a Smart Traffic Management System that uses vehicle density as a metric to dynamically control traffic signals without human intervention. Collaborated with team member Dharsani to design and implement the system.

Key features:
• Real-time vehicle density detection using sensors or image processing
• Dynamic signal timing to reduce traffic congestion
• Automatic priority for high-density lanes
• No manual control required – fully automated logic
• Scalable design for smart city implementation

The system aims to reduce waiting time at signals, optimize fuel usage, and create a more efficient traffic environment through intelligent automation.`,

    link: "#"
  }
,
  {
    id: 2,
    title: "JOE - kart Ecommerce website",
    category: "Web-Development",
    tags: ["user friendly", "PHP", "Responsive Design"],
    image: "/joekart1.png",
    shortDescription: "Developed JOE Kart, a full-featured e-commerce website offering a seamless online shopping experience.",

    fullDescription: `This project involved designing and building JOE Kart, an e-commerce platform with a user-friendly interface and robust backend functionality.

Key features:
• Product browsing with categories and search functionality
• Secure login/signup
• Shopping cart with add, update, and remove items features
• Responsive design for mobile and desktop devices
• Admin panel for product and order management

The project showcases modern web technologies and is aimed at providing a smooth and enjoyable online shopping experience for users.`,

    link: "https://github.com/jothinathan423/joe-e-kart"
  },
  {
    id: 3,
    title: "CGPA Calculator",
    category: "Web-Development",
    tags: ["user friendly", "Javascript", "Responsive Design"],
    image: "/cgpa 2.png",
    shortDescription: "Developed a user-friendly CGPA calculator using JavaScript for accurate and quick academic performance evaluation.",

    fullDescription: `This project involved creating a web-based CGPA calculator designed to simplify and speed up the process of calculating cumulative grade point averages.

Key features:
• Interactive and intuitive user interface for easy input of grades and credits
• Real-time calculation of semester-wise and overall CGPA
• Support for different grading scales and credit systems
• Responsive design for use on both desktop and mobile devices
• Clear display of results with options to reset and recalculate

The CGPA calculator helps students efficiently track their academic progress without manual calculations, improving accuracy and saving time.`,

    link: "https://jothinathan423.github.io/jothinathancgpa-calculator/"
  },
  {
    id: 4,
    title: "Online Blood Bank System",
    category: "Web-Development",
    tags: ["Responsive Design", "PHP", "database"],
    image: "/blood bank1.png",
    shortDescription: "Developed Jothi Blood Bank Management System to streamline blood donation, inventory, and request management.",

    fullDescription: `This project involved building a web-based management system to efficiently handle blood donations, donor details, inventory tracking, and emergency requests.

Key features:
• User-friendly interface for donors to register and view donation history
• Real-time blood inventory management with availability status
• Request and approval system for hospitals and patients
• Role-based access for admins, hospitals, and donors for secure data handling

The system improves the efficiency of blood bank operations, reduces manual errors, and ensures timely availability of blood for patients in need.`,
    link: "https://github.com/jothinathan423/blood-bank"
  },
  {
    id: 4,
    title: "Quiz - web application",
    category: "Web-Development",
    tags: ["Responsive Design", "PHP", "database"],
    image: "/qui.jpg",
    shortDescription: "Built an interactive Quiz Web App that evaluates users and generates certificates based on their performance.",
    fullDescription: `This project involved developing a web application where users can take quizzes, get scored based on their answers, and receive a personalized certificate upon successful completion.

Key features:
• Dynamic quiz questions with multiple-choice options
• Real-time score calculation based on correct answers
• Minimum passing mark criteria to qualify for certificates
• Auto-generated certificates with user name and score after quiz completion
• Responsive and user-friendly interface for smooth interaction
• Admin panel to add, update, and manage quiz questions

The Quiz Web App provides an engaging way for users to test their knowledge and receive instant recognition through certificates, enhancing learning motivation and participation.`,

    link: "https://github.com/jothinathan423/quizweb"
  },
  {
    id: 5,
    title: "Smart Patient Healthcare Monitoring System",
    category: "IOT",
    tags: ["MQTT", "Smart system", "mobile"],
    image: "/patient-1.png",
    shortDescription: "Developed a Smart Patient Health Care Monitoring System using IoT and MQTT for real-time health data tracking during pandemic situations.",

    fullDescription: `This project involved designing a smart health monitoring system that continuously tracks patients' vital signs and transmits data to healthcare providers using MQTT protocol.

Key features:
• Arduino-based system with sensors to measure pulse rate and body temperature
• Robot mechanism to approach patients and collect health data contactlessly
• Real-time data transmission to hospital servers using MQTT protocol
• LED display showing patient details and current health status
• Automated alerts for abnormal readings for quick medical response
• Designed for use in isolation wards and pandemic situations to minimize human contact

The system ensures continuous patient monitoring, enhances safety for healthcare workers, and improves response times in critical situations.`,

    link: "#"
  },
  {
    id: 6,
    title: "Face Recognition based Attendance System",
    category: "AI / ML",
    tags: ["opencv", "python", "attendance"],
    image: "/smart.png",
    shortDescription: "Developed a Face Recognition Based Attendance System using Python and OpenCV to automate and simplify attendance tracking.",

    fullDescription: `This project involved building an automated attendance system that uses facial recognition technology to identify individuals and mark their attendance without manual intervention.

Key features:
• Real-time face detection and recognition using OpenCV and Python
• Automated attendance marking by matching faces with pre-registered data
• Secure database to store and manage student/employee records
• Generates attendance reports with date and time stamps
• Reduces proxy attendance and human errors in attendance tracking
• User-friendly interface for administrators to manage data and view reports

The system enhances accuracy, saves time, and ensures a contactless attendance process, making it highly suitable for educational institutions and workplaces.`,

    link: "#"
  }
];

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary">{project.category}</Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">{project.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 mt-auto">
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tags.slice(0, 2).map((tag: string, idx: number) => (
            <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
          ))}
          {project.tags.length > 2 && (
            <Badge variant="outline" className="text-xs">+{project.tags.length - 2} more</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="w-full">View Details</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[725px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
              <DialogDescription>
                <Badge className="mt-2">{project.category}</Badge>
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <div className="mb-6 rounded-md overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="whitespace-pre-line">{project.fullDescription}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag: string, idx: number) => (
                    <Badge key={idx} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Folder className="text-primary" />
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
        
              key={index}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`animate-fade-in [animation-delay:${index * 100}ms]`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
