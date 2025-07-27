import React, { useEffect, useState } from "react";
import { Eye, Globe } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProfileStats = () => {
    const [visits, setVisits] = useState("Loading...");

    useEffect(() => {
        fetch("https://api.countapi.xyz/hit/jothinathan-portfolio/visits")
            .then((response) => response.json())
            .then((data) => setVisits(data.value))
            .catch((error) => {
                console.error("Error fetching visits:", error);
                setVisits("Error");
            });
    }, []);

    return (
        <section id="profile-stats" className="py-12">
            <div className="container mx-auto grid md:grid-cols-2 gap-6">
                {/* GitHub Profile Views */}
                <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Eye className="text-primary" /> GitHub Profile Views
                        </CardTitle>
                        <CardDescription>
                            Total number of times people visited your GitHub profile
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        <img
                            src="https://komarev.com/ghpvc/?username=jothinathan&color=brightgreen"
                            alt="GitHub Profile Views"
                            className="rounded-md"
                        />
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                            Live Count
                        </Badge>
                    </CardContent>
                </Card>

                {/* Portfolio Visitors */}
                <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Globe className="text-primary" /> Portfolio Visitors
                        </CardTitle>
                        <CardDescription>
                            Total number of visitors to your portfolio website
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-blue-600">{visits}</span>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                            Live Count
                        </Badge>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default ProfileStats;
