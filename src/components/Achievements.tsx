import React from 'react';
import { Award, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';


const achievementsData = [
  {
    title: "First Place - Student Project Contest Spcon-25",
    description: "Developed an traffic management system that manages the traffic lights based on the traffic density using image processing.",
    tags: ["MERN", "Python", "Management"],
    image: "/traffic.jpg",
    fullDescription: "Developed an intelligent Traffic Management System that autonomously controls traffic lights based on real- time vehicle density detection, eliminating the need for manual intervention.This project was collaboratively built with my teammate Dharsani.",
    Concept: "A smart system that dynamically adjusts traffic signal timing using sensors or camera-based input to reduce congestion, improve traffic flow, and increase road efficiency.",
    Goal: "To optimize urban traffic control by using real-time data, reduce waiting times at signals, minimize fuel consumption, and enhance road safety without human involvement.",
  
  },
  {
    title: "First Place - National Level Hackathon - PARADOX-2K25",
    description: "Developed an online platform that connects handmade artists with buyers interested in unique, handcrafted products",
    tags: ["MERN", "Responsive Design", "Accessibility"],
    image: "/photo-collage.png (1).png",
    Concept: "Online marketplace for handmade, local, and traditional artisan products.",
  Goal: "Empower local artisans, provide them a digital platform to sell unique products, promote cultural crafts.",

  },
  {
    title: "First Place - Code Debugging Event - ASTA-2K25",
    description: "Identified and fixed logical bugs in the Java files of the prosthetic hand project, improving code accuracy and performance",
    tags: ["Java", "Optimal", "Performance"],
    image: "/photo-collage.png (2).png",
    fullDescription: `I secured 1st Prize in the Code Debugging competition, where participants were challenged to identify and fix bugs in complex code snippets within a limited time. The contest tested logical thinking, problem-solving under pressure, and a deep understanding of programming concepts.

I successfully debugged issues related to:

Logical errors

Syntax mistakes

Runtime exceptions

Optimization flaws

This achievement reflects my keen eye for detail, analytical skills, and strong debugging capabilities in programming languageJava.`
  },
  {
    title: "Scholarship of 2 Lakhs - Reliance Foundation",
    description: "Awarded scholarship based on exceptional performance in an aptitude, reasoning, and verbal skills examination first 3000 rank all over India.",
    tags: ["Aptitude", "Reasoning", "Verbal Skills", "Scholarship"],
    image: "/relaince.jpg",
    fullDescription: `Program Name: Reliance Foundation Scholarship for Undergraduate Students

Organized by: Reliance Foundation

Objective: To support meritorious students across India with financial assistance and skill-building opportunities for academic and career growth.

Key Highlights of Selection:
Selected among top 3000 students nationwide.

Recognized for academic excellence, problem-solving skills, and potential for future impact.

Provided with a scholarship amount covering tuition fees and educational expenses.

Access to mentorship programs, webinars, and learning resources by industry experts.`
  }
  // {
  //   title: "First Place - College Hackathon 2023",
  //   description: "Developed an IoT-based smart irrigation system that reduced water usage by 40% while maintaining optimal plant health.",
  //   tags: ["IoT", "Embedded Systems", "Sustainability"],
  //   image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
  //   fullDescription: `This project was developed during a 48-hour hackathon focused on sustainable solutions for agriculture.
    
  //   Key aspects of the project:
  //   • Arduino-based sensor network for monitoring soil moisture levels
  //   • Machine learning algorithm for predicting optimal watering schedules
  //   • Mobile application for remote monitoring and control
  //   • Solar-powered system for off-grid operation
    
  //   The project was recognized for its innovative approach to water conservation and practical implementation for small-scale farmers in drought-prone regions. Our team of four engineering students successfully demonstrated a working prototype that outperformed traditional irrigation methods in controlled tests.`
  // },
// ,
//   {
//     title: "Innovation Award - University Research Showcase",
//     description: "Developed a novel method for recycling composite materials from decommissioned wind turbine blades.",
//     tags: ["Material Science", "Recycling", "Renewable Energy"]
//   }
];

const AchievementCard = ({ achievement }: { achievement: any }) => {
  return (
    <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-colors h-full flex flex-col group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary/50" />
      </div>
      <CardHeader>
        <CardTitle>{achievement.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base mb-4">{achievement.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-4">
          {achievement.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="w-full">
              <Eye className="size-4 mr-2" /> View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[725px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{achievement.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-1 mt-2">
                  {achievement.tags.map((tag: string) => (
                    <Badge key={tag} className="bg-primary/10 text-primary">{tag}</Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <div className="mb-6 rounded-md overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="whitespace-pre-line">{achievement.fullDescription}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Award className="text-primary" />
          <h2 className="section-title">Achievements</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className={`animate-fade-in [animation-delay:${index * 100}ms]`}
            >
              <AchievementCard achievement={achievement} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;