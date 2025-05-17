
import React from 'react';
import { Code } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

const skillsData = {
  technical: [
    "JAVA",
    "C programming",
    "MongoDB",
    "SQL",
    "Javascript",
    "Web Development"
  ],
  soft: [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Fast Learner",
    "Time Management",
    "Leadership"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-secondary/50 to-background">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Code className="text-primary" />
          <h2 className="section-title">Skills</h2>
        </div>

        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>


          <TabsContent value="technical" className="animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsData.technical.map((skill, index) => (
                <Card key={index} className="p-4 flex items-center justify-center text-center hover:bg-primary/5 transition-colors border-primary/20">
                  <span className="font-medium">{skill}</span>
                </Card>
              ))}
            </div>
          </TabsContent>
          
           
          <TabsContent value="soft" className="animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsData.soft.map((skill, index) => (
                <Card key={index} className="p-4 flex items-center justify-center text-center hover:bg-primary/5 transition-colors border-primary/20">
                  <span className="font-medium">{skill}</span>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          
          
          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M8 21s1-4 5-4 5 4 5 4" />
                <path d="M9 17c2-1 4-1 5 0" />
                <path d="M12 3c-1 1-1 2 0 3 1 1 3 1 3 1" />
                <path d="M9 12c-2-1-3-3-2-5" />
                <path d="M16 12c2-1 3-3 2-5" />
              </svg>
            </div>
            <span className="text-sm font-medium">Java</span>
          </div>

          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
          0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 
          1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.335-5.466-5.93 
          0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.48 11.48 0 013.003-.403c1.02.005 2.045.138 3.003.403 
          2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 
          0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286"/>
              </svg>
            </div>
            <span className="text-sm font-medium">Git & GitHub</span>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg">
            <a
            
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"
                alt="Docker Logo"
                className="w-10 h-10"
              />
            </a>
            <span className="text-sm font-medium">Docker</span>
          </div>


          
          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                fill="none"
                className="w-24 h-auto"
                aria-label="MERN Stack Logo"
              >
                {/* MongoDB Leaf */}
                
                {/* Express */}
                
                {/* React atom */}
                <circle cx="100" cy="65" r="12" stroke="#61DBFB" strokeWidth="3" fill="none" />
                <ellipse
                  cx="100"
                  cy="65"
                  rx="25"
                  ry="12"
                  stroke="#61DBFB"
                  strokeWidth="3"
                  fill="none"
                  transform="rotate(60 100 65)"
                />
                <ellipse
                  cx="100"
                  cy="65"
                  rx="25"
                  ry="12"
                  stroke="#61DBFB"
                  strokeWidth="3"
                  fill="none"
                  transform="rotate(-60 100 65)"
                />
                {/* Node.js circle */}
                <circle cx="35" cy="95" r="20" fill="#3C873A" />
                <text
                  x="35"
                  y="102"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                  textAnchor="middle"
                >
                  Node
                </text>
              </svg>
            </a>
            <span className="text-sm font-medium">MERN Stack</span>
          </div>



          
          

          
          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.5 4 3 9 3s9-1.5 9-3V5" />
                <path d="M3 12c0 1.5 4 3 9 3s9-1.5 9-3" />
              </svg>
            </div>
            <span className="text-sm font-medium">Database</span>
          </div>

          
          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                <line x1="2" y1="8" x2="22" y2="8" />
                <polyline points="9 15 12 12 9 9" />
                <polyline points="15 9 12 12 15 15" />
              </svg>
            </div>
            <span className="text-sm font-medium">Web Development</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
