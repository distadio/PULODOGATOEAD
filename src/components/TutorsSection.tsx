import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import foundersImg from "@/assets/founders.jpg";

const FEATURED_TUTORS = [
  {
    name: "Roberto Di Stadio (Beto)",
    role: "Diretor e Especialista em Sonorização",
    specialty: "Sonorização e Edição de Som",
    image: foundersImg,
    isFounder: true,
  },
  {
    name: "Yuri Valério",
    role: "Diretor e Professor de Iluminação",
    specialty: "Iluminação Cênica e Técnica",
    image: foundersImg,
    isFounder: true,
  },
];

export const TutorsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Nossos <span className="text-primary">Tutores</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Aprenda com profissionais que atuam nos maiores eventos do Brasil e do mundo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {FEATURED_TUTORS.map((tutor, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-medium transition-smooth border-border hover:border-primary/50 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={tutor.image} 
                  alt={tutor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                {tutor.isFounder && (
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    Fundador
                  </Badge>
                )}
              </div>
              <CardContent className="p-6 space-y-2">
                <h3 className="font-bold text-xl">{tutor.name}</h3>
                <p className="text-sm text-primary font-medium">{tutor.role}</p>
                <p className="text-sm text-muted-foreground">{tutor.specialty}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/tutores">
              Conhecer Todos os Tutores
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
