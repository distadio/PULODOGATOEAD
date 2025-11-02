import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  students: number;
  imageUrl?: string;
}

export const CourseCard = ({
  id,
  title,
  description,
  category,
  duration,
  students,
  imageUrl,
}: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-medium transition-smooth overflow-hidden">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-smooth"
          />
        ) : (
          <div className="absolute inset-0 gradient-hero opacity-20 flex items-center justify-center">
            <PlayCircle className="h-16 w-16 text-primary" />
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge className="bg-accent text-accent-foreground shadow-soft">
            {category}
          </Badge>
        </div>
      </div>

      <CardHeader>
        <h3 className="text-xl font-bold group-hover:text-primary transition-smooth line-clamp-2">
          {title}
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground line-clamp-2">{description}</p>

        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="default" className="w-full" asChild>
          <Link to={`/courses/${id}`}>Ver Curso</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
