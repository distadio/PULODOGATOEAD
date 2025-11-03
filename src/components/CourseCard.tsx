import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  students: number;
  imageUrl?: string;
  badges?: string[];
}

export const CourseCard = ({
  id,
  title,
  description,
  category,
  duration,
  students,
  imageUrl,
  badges = [],
}: CourseCardProps) => {
  const isAvailable = !badges.includes("EM BREVE");

  return (
    <Card className="overflow-hidden hover:shadow-medium transition-smooth border-border hover:border-primary/50 group">
      <div className="relative aspect-video overflow-hidden bg-muted">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
            <span className="text-4xl font-bold text-primary/30">{category}</span>
          </div>
        )}
        {badges.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-1 justify-end">
            {badges.map((badge, index) => (
              <Badge 
                key={index}
                variant={badge === "GRATUITO" ? "default" : "secondary"}
                className={badge === "GRATUITO" ? "bg-primary text-primary-foreground" : ""}
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <CardContent className="p-5 space-y-4">
        <div className="space-y-2">
          <Badge variant="outline" className="mb-2">{category}</Badge>
          <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-smooth">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          {students > 0 && (
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{students.toLocaleString()}+</span>
            </div>
          )}
        </div>

        <Button 
          variant={isAvailable ? "golden" : "secondary"} 
          className="w-full" 
          asChild
          disabled={!isAvailable}
        >
          <Link to={isAvailable ? `/cursos/${id}` : "#"}>
            {isAvailable ? "Ver Curso" : "Em Breve"}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
