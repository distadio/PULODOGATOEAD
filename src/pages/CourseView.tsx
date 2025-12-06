import { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  Menu, 
  X, 
  Play, 
  CheckCircle2, 
  Circle, 
  Clock, 
  BookOpen,
  ChevronDown,
  ChevronRight,
  Home,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  current?: boolean;
  type: "video" | "quiz" | "reading";
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

const courseData = {
  title: "Conhecendo Iluminação",
  description: "Aprenda os fundamentos da iluminação para fotografia e vídeo",
  instructor: "Pulo do Gato",
  totalLessons: 12,
  completedLessons: 3,
  modules: [
    {
      id: "mod-1",
      title: "Módulo 1: Introdução à Iluminação",
      lessons: [
        { id: "1-1", title: "Bem-vindo ao curso", duration: "5:30", completed: true, type: "video" as const },
        { id: "1-2", title: "O que é iluminação?", duration: "12:45", completed: true, type: "video" as const },
        { id: "1-3", title: "Tipos de luz: natural vs artificial", duration: "18:20", completed: true, type: "video" as const },
      ]
    },
    {
      id: "mod-2", 
      title: "Módulo 2: Equipamentos Básicos",
      lessons: [
        { id: "2-1", title: "Softboxes e difusores", duration: "15:00", completed: false, current: true, type: "video" as const },
        { id: "2-2", title: "Refletores e rebatedores", duration: "10:30", completed: false, type: "video" as const },
        { id: "2-3", title: "LEDs vs Flash", duration: "20:15", completed: false, type: "video" as const },
        { id: "2-4", title: "Quiz: Equipamentos", duration: "10 min", completed: false, type: "quiz" as const },
      ]
    },
    {
      id: "mod-3",
      title: "Módulo 3: Técnicas de Iluminação",
      lessons: [
        { id: "3-1", title: "Iluminação de 3 pontos", duration: "22:00", completed: false, type: "video" as const },
        { id: "3-2", title: "Iluminação Rembrandt", duration: "16:40", completed: false, type: "video" as const },
        { id: "3-3", title: "High key e Low key", duration: "14:25", completed: false, type: "video" as const },
      ]
    },
    {
      id: "mod-4",
      title: "Módulo 4: Projeto Final",
      lessons: [
        { id: "4-1", title: "Briefing do projeto", duration: "8:00", completed: false, type: "reading" as const },
        { id: "4-2", title: "Entrega e avaliação", duration: "5:00", completed: false, type: "video" as const },
      ]
    }
  ] as Module[]
};

const CourseView = () => {
  const { slug } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openModules, setOpenModules] = useState<string[]>(["mod-1", "mod-2"]);
  const [currentLesson, setCurrentLesson] = useState(courseData.modules[1].lessons[0]);

  const progress = Math.round((courseData.completedLessons / courseData.totalLessons) * 100);

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const getLessonIcon = (lesson: Lesson) => {
    if (lesson.completed) {
      return <CheckCircle2 className="h-4 w-4 text-primary" />;
    }
    if (lesson.current) {
      return <Play className="h-4 w-4 text-primary" />;
    }
    return <Circle className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 bg-card border-r border-border transition-all duration-300 flex flex-col",
          sidebarOpen ? "w-80" : "w-0 -translate-x-full md:w-16 md:translate-x-0"
        )}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          {sidebarOpen ? (
            <>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-golden flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-foreground truncate text-sm">
                    {courseData.title}
                  </h2>
                  <p className="text-xs text-muted-foreground">{courseData.instructor}</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSidebarOpen(false)}
                className="shrink-0"
              >
                <X className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSidebarOpen(true)}
              className="mx-auto"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Progress Section */}
        {sidebarOpen && (
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Seu progresso</span>
              <span className="text-sm font-medium text-primary">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {courseData.completedLessons} de {courseData.totalLessons} aulas concluídas
            </p>
          </div>
        )}

        {/* Modules List */}
        <div className="flex-1 overflow-y-auto">
          {sidebarOpen ? (
            <nav className="p-2">
              {courseData.modules.map((module) => (
                <Collapsible 
                  key={module.id}
                  open={openModules.includes(module.id)}
                  onOpenChange={() => toggleModule(module.id)}
                >
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left">
                      {openModules.includes(module.id) ? (
                        <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                      )}
                      <span className="text-sm font-medium text-foreground flex-1">
                        {module.title}
                      </span>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-6 space-y-1 pb-2">
                      {module.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => setCurrentLesson(lesson)}
                          className={cn(
                            "w-full flex items-center gap-3 p-2 rounded-lg text-left transition-colors",
                            lesson.id === currentLesson.id 
                              ? "bg-primary/10 border border-primary/20" 
                              : "hover:bg-muted/50"
                          )}
                        >
                          {getLessonIcon(lesson)}
                          <div className="flex-1 min-w-0">
                            <p className={cn(
                              "text-sm truncate",
                              lesson.completed ? "text-muted-foreground" : "text-foreground"
                            )}>
                              {lesson.title}
                            </p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {lesson.duration}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </nav>
          ) : (
            <div className="flex flex-col items-center gap-4 py-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Home className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <BookOpen className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Award className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Sidebar Footer */}
        {sidebarOpen && (
          <div className="p-4 border-t border-border">
            <Button variant="outline" className="w-full" asChild>
              <a href="/">
                <Home className="h-4 w-4 mr-2" />
                Voltar ao início
              </a>
            </Button>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main 
        className={cn(
          "flex-1 transition-all duration-300",
          sidebarOpen ? "ml-80" : "ml-0 md:ml-16"
        )}
      >
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
          <div className="flex items-center gap-4 p-4">
            {!sidebarOpen && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSidebarOpen(true)}
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-foreground">{currentLesson.title}</h1>
              <p className="text-sm text-muted-foreground">
                {courseData.modules.find(m => m.lessons.some(l => l.id === currentLesson.id))?.title}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Anterior
              </Button>
              <Button size="sm">
                Próxima aula
              </Button>
            </div>
          </div>
        </header>

        {/* Video Player Area */}
        <div className="p-4 lg:p-8">
          <div className="max-w-5xl mx-auto">
            {/* Video Container */}
            <div className="relative aspect-video bg-secondary rounded-xl overflow-hidden mb-6 shadow-medium">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full gradient-golden flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-105 transition-transform shadow-golden">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-muted-foreground">Clique para reproduzir</p>
                </div>
              </div>
              {/* Video Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                <div className="h-full w-1/3 gradient-golden" />
              </div>
            </div>

            {/* Lesson Info */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    {currentLesson.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {currentLesson.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {currentLesson.type === "video" ? "Vídeo" : currentLesson.type === "quiz" ? "Quiz" : "Leitura"}
                    </span>
                  </div>
                </div>
                <Button variant={currentLesson.completed ? "outline" : "default"}>
                  {currentLesson.completed ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Concluído
                    </>
                  ) : (
                    "Marcar como concluído"
                  )}
                </Button>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground">
                  Nesta aula você aprenderá sobre softboxes e difusores, equipamentos essenciais 
                  para criar uma iluminação suave e profissional. Vamos explorar os diferentes 
                  tipos, tamanhos e como escolher o melhor para cada situação.
                </p>
                <h3 className="text-foreground mt-6 mb-3">O que você vai aprender:</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>Diferença entre softbox e difusor</li>
                  <li>Tamanhos ideais para cada tipo de fotografia</li>
                  <li>Como montar e posicionar corretamente</li>
                  <li>Dicas práticas de uso no dia a dia</li>
                </ul>
              </div>
            </div>

            {/* Resources Section */}
            <div className="mt-6 bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Materiais de apoio</h3>
              <div className="grid gap-3">
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Guia de Softboxes - PDF</p>
                    <p className="text-xs text-muted-foreground">2.3 MB</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Lista de equipamentos recomendados</p>
                    <p className="text-xs text-muted-foreground">1.1 MB</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseView;
