import { CourseCard } from "./CourseCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FEATURED_COURSES = [
  {
    id: "1",
    title: "Fundamentos de Sonorização ao Vivo",
    description: "Aprenda os princípios básicos de mixagem, equalização e posicionamento de microfones para eventos ao vivo.",
    category: "Áudio",
    duration: "12 horas",
    students: 2450,
  },
  {
    id: "2",
    title: "Iluminação Profissional para Eventos",
    description: "Domine as técnicas de iluminação cênica, programação de consoles DMX e design de luz.",
    category: "Iluminação",
    duration: "10 horas",
    students: 1820,
  },
  {
    id: "3",
    title: "Sistemas de Line Array e PA",
    description: "Configuração, alinhamento e otimização de sistemas de som de médio e grande porte.",
    category: "Áudio",
    duration: "15 horas",
    students: 1650,
  },
  {
    id: "4",
    title: "Projeção e Mapeamento de Vídeo",
    description: "Técnicas de video mapping, configuração de projetores e sincronização audiovisual.",
    category: "Vídeo",
    duration: "14 horas",
    students: 980,
  },
  {
    id: "5",
    title: "Mixagem Digital com Consoles X32",
    description: "Operação avançada de consoles digitais Behringer X32 e suas aplicações práticas.",
    category: "Áudio",
    duration: "8 horas",
    students: 3100,
  },
  {
    id: "6",
    title: "Cabeamento e RF para Eventos",
    description: "Instalação de sistemas de cabeamento estruturado e sistemas wireless profissionais.",
    category: "Infraestrutura",
    duration: "10 horas",
    students: 1250,
  },
];

export const CoursesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold">Cursos em Destaque</h2>
            <p className="text-xl text-muted-foreground">
              Aprenda com os melhores profissionais da indústria
            </p>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link to="/courses">
              Ver Todos os Cursos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_COURSES.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};
