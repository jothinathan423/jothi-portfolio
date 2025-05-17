
import React from 'react';
import { Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const participationData = [
  {
    title: "Paper presentation on National Level Technical Symposium - 2k23",
    date: "03.02.2023",
    description: "Participated as a student and presented a paper on 'Cloud Computing'.",
    location: "AVS Engineering College , Salem,Tamilnadu",
    category: "Paper Presentation",
    certificateUrl: "#"
  },
  {
    title: "Workshop on Full Stack Development",
    date: "24.02.2023",
    description: "Participated as a student and hands-on learn on the Full-Stack Development",
    location: "SONA Engineering College,Salem,Tamilnadu",
    category: "Workshop",
    certificateUrl: "#"
  },
  {
    title: "Paper Presentation on SelvamScilish-2k23",
    date: "23.06.2023",
    description: "Participated as a student and presented a paper on the topic 'Emerging Technologies'",
    location: "SELVAM College of Engineering,Namakkal,Tamilnadu",
    category: "Paper Presentation",
    certificateUrl: "#"
  },
  {
    title: "Paper Presentation on SpringFest - 2k23",
    date: "05.10.2023",
    description: "participated and presented paper on the topic 'Machine Learning'",
    location: "KSR Institute for Engineering and Technology",
    category: "Paper Presentation",
    certificateUrl: "#"
  }
];

const Participation = () => {
  return (
    <section id="participation" className="py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Users className="text-primary" />
          <h2 className="section-title">Participation</h2>
        </div>

        <div className="space-y-6">
          {participationData.map((event, index) => (
            <Card key={index} className="overflow-hidden border-primary/10 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
                <div>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="mt-1">{event.date}</CardDescription>
                </div>
                <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-none">
                  {event.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>{event.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {event.location}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(event.certificateUrl, '_blank')}
                >
                  View Certificate
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participation;
