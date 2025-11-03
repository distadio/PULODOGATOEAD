import { Button } from "@/components/ui/button";
import { CourseCard } from "./CourseCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FEATURED_COURSES = [
  {
    id: "conhecendo-iluminacao",
    title: "Conhecendo a Iluminação",
    description: "Visão geral sobre iluminação para vídeo, show e teatro. Aprenda com softwares profissionais usados em eventos como Olimpíadas e Rock in Rio.",
    category: "Iluminação",
    duration: "Flexível",
    students: 10500,
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
    badges: ["CURSO PILOTO", "GRATUITO"],
  },
  {
    id: "sonorizacao-eventos",
    title: "Sonorização para Eventos",
    description: "Fundamentos de áudio ao vivo, mixagem e equalização para diferentes tipos de eventos.",
    category: "Sonorização",
    duration: "Em breve",
    students: 0,
    imageUrl: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625",
    badges: ["EM BREVE"],
  },
  {
    id: "multimidia-projecao",
    title: "Multimídia e Projeção",
    description: "Técnicas de projeção mapeada, VJing e multimídia para eventos corporativos e shows.",
    category: "Multimídia",
    duration: "Em breve",
    students: 0,
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    badges: ["EM BREVE"],
  },
  {
    id: "producao-eventos",
    title: "Produção de Eventos",
    description: "Gestão completa de eventos: planejamento, logística e execução de eventos técnicos.",
    category: "Eventos",
    duration: "Em breve",
    students: 0,
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    badges: ["EM BREVE"],
  },
];

export const CoursesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Cursos em <span className="text-primary">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Aprenda com profissionais que atuam nos maiores eventos do Brasil e do mundo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {FEATURED_COURSES.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/cursos">
              Ver Todos os Cursos
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
