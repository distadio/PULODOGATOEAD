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
  Award,
  FileText,
  Users,
  Lightbulb,
  Settings,
  Monitor
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
  description?: string;
}

interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

const courseData = {
  title: "Conhecendo Iluminação",
  description: "Curso completo de Iluminação Cênica",
  instructor: "Pulo do Gato",
  totalLessons: 24,
  completedLessons: 0,
  modules: [
    {
      id: "mod-1",
      title: "Módulo 1: Iluminação Cênica e Tipos de Equipamentos",
      description: "Nesse módulo será apresentado o curso e um breve histórico da Iluminação Cênica, assim como os equipamentos utilizados e como foram evoluindo.",
      lessons: [
        { 
          id: "1-1", 
          title: "Bem-vindo ao curso e Introdução", 
          duration: "15:00", 
          completed: false, 
          current: true,
          type: "video" as const,
          description: "Apresentação do curso, do tutor Yuri e dos profissionais convidados que irão contribuir com seus pontos de vista."
        },
        { 
          id: "1-2", 
          title: "Breve histórico da Iluminação Cênica", 
          duration: "20:00", 
          completed: false, 
          type: "video" as const,
          description: "A evolução da iluminação cênica ao longo do tempo e como os equipamentos foram se desenvolvendo."
        },
        { 
          id: "1-3", 
          title: "Introdução ao Protocolo DMX512", 
          duration: "18:00", 
          completed: false, 
          type: "video" as const,
          description: "Protocolo amplamente utilizado no mundo da iluminação (estúdio, cinema, teatro, show)."
        },
        { 
          id: "1-4", 
          title: "Equipamentos Convencionais: Elipsoidais", 
          duration: "22:00", 
          completed: false, 
          type: "video" as const,
          description: "Elipsoidais e seus diferentes tipos de graus, assim como sua funcionalidade."
        },
        { 
          id: "1-5", 
          title: "Equipamentos Convencionais: PAR 64 e Source PAR", 
          duration: "18:00", 
          completed: false, 
          type: "video" as const,
          description: "Tipos de focos e suas características."
        },
        { 
          id: "1-6", 
          title: "Equipamentos Convencionais: Fresnel e PC", 
          duration: "16:00", 
          completed: false, 
          type: "video" as const,
          description: "Diferentes tipos de uso e diferenças entre si."
        },
        { 
          id: "1-7", 
          title: "Equipamentos Inteligentes: PAR LED", 
          duration: "20:00", 
          completed: false, 
          type: "video" as const,
          description: "Tipos de PAR LED, funções e vantagens."
        },
        { 
          id: "1-8", 
          title: "Equipamentos Inteligentes: Moving Lights", 
          duration: "25:00", 
          completed: false, 
          type: "video" as const,
          description: "Moving Light Spot, Wash e Beam. Suas funcionalidades e tipos de efeitos."
        },
        { 
          id: "1-9", 
          title: "Equipamentos Inteligentes: Strobo", 
          duration: "12:00", 
          completed: false, 
          type: "video" as const,
          description: "Luz estroboscópica, tipos de uso e efeitos."
        },
      ]
    },
    {
      id: "mod-2", 
      title: "Módulo 2: Tipos de Luzes e Iluminação Estática X Iluminação em Movimento",
      description: "Nesse módulo, abordamos os diferentes tipos de luzes e como criar uma luz mais fixa ou com mais movimento, contando com diferentes profissionais e suas experiências.",
      lessons: [
        { 
          id: "2-1", 
          title: "Como criar uma luz? Etapas e Processo", 
          duration: "25:00", 
          completed: false, 
          type: "video" as const,
          description: "Quais etapas para se chegar ao resultado final? Co-criação e escolha de equipamentos."
        },
        { 
          id: "2-2", 
          title: "Iluminação para Dança", 
          duration: "30:00", 
          completed: false, 
          type: "video" as const,
          description: "Como montar e criar uma luz para dança clássica e contemporânea, seus desafios e como superá-los."
        },
        { 
          id: "2-3", 
          title: "Iluminação para Teatro", 
          duration: "28:00", 
          completed: false, 
          type: "video" as const,
          description: "Palco Italiano, Rua, contemporâneo - criando luz para diferentes formatos teatrais."
        },
        { 
          id: "2-4", 
          title: "Iluminação para Shows", 
          duration: "32:00", 
          completed: false, 
          type: "video" as const,
          description: "Orquestra, Erudito, Jazz, Rock, Samba - abordando diferentes estilos musicais."
        },
        { 
          id: "2-5", 
          title: "Iluminação para TV", 
          duration: "26:00", 
          completed: false, 
          type: "video" as const,
          description: "Dramaturgia e Comédia - abordando a linguagem televisiva e suas diferenças."
        },
        { 
          id: "2-6", 
          title: "Grandes vs Pequenas Produções", 
          duration: "22:00", 
          completed: false, 
          type: "video" as const,
          description: "Desafios e soluções para diferentes escalas de produção."
        },
      ]
    },
    {
      id: "mod-3",
      title: "Módulo 3: Softwares de Iluminação e Criando Luz em 3D",
      description: "Com a chegada da tecnologia, muito mudou no mundo da iluminação cênica. Mostramos as possibilidades e funcionalidades usadas em estúdio, TV, teatros e salas de espetáculos.",
      lessons: [
        { 
          id: "3-1", 
          title: "Introdução aos Softwares de Iluminação", 
          duration: "20:00", 
          completed: false, 
          type: "video" as const,
          description: "Visão geral das tecnologias disponíveis nos últimos 12 anos."
        },
        { 
          id: "3-2", 
          title: "O Iluminador (Desenhista de Luz)", 
          duration: "25:00", 
          completed: false, 
          type: "video" as const,
          description: "Artista responsável pelo conceito, linguagem e 'fotografia' do show."
        },
        { 
          id: "3-3", 
          title: "O Programador de Luz", 
          duration: "28:00", 
          completed: false, 
          type: "video" as const,
          description: "Profissional especializado em consoles, responsável por criar efeitos, fade in, fade out."
        },
        { 
          id: "3-4", 
          title: "O Operador de Luz", 
          duration: "22:00", 
          completed: false, 
          type: "video" as const,
          description: "Profissional responsável por executar a obra, respeitando as deixas e soltando as CUES."
        },
        { 
          id: "3-5", 
          title: "O Técnico em Iluminação", 
          duration: "24:00", 
          completed: false, 
          type: "video" as const,
          description: "Montador, eletricista - sabe ligar, montar e afinar o refletor conforme mapa de luz."
        },
        { 
          id: "3-6", 
          title: "O Produtor Técnico", 
          duration: "18:00", 
          completed: false, 
          type: "video" as const,
          description: "Profissional que acompanha desde a criação até a execução do espetáculo."
        },
      ]
    },
    {
      id: "mod-4",
      title: "Módulo 4: Conteúdo Complementar",
      description: "Temas inerentes para aprofundamento do aluno, entendendo a dinâmica da profissão.",
      lessons: [
        { 
          id: "4-1", 
          title: "Mapas de Luz: Leitura e Criação", 
          duration: "30:00", 
          completed: false, 
          type: "video" as const,
          description: "Como ler e criar mapas de luz profissionais."
        },
        { 
          id: "4-2", 
          title: "Montagem e Endereçamento de Equipamentos", 
          duration: "25:00", 
          completed: false, 
          type: "video" as const,
          description: "Processo de montagem e configuração de equipamentos."
        },
        { 
          id: "4-3", 
          title: "Rider Técnico", 
          duration: "20:00", 
          completed: false, 
          type: "reading" as const,
          description: "Documentação técnica para produções."
        },
        { 
          id: "4-4", 
          title: "DMX 512 - Aprofundamento", 
          duration: "28:00", 
          completed: false, 
          type: "video" as const,
          description: "Estudo detalhado do protocolo DMX 512."
        },
        { 
          id: "4-5", 
          title: "Ética Profissional", 
          duration: "15:00", 
          completed: false, 
          type: "reading" as const,
          description: "Conduta e ética no mercado de iluminação."
        },
        { 
          id: "4-6", 
          title: "Atuação Profissional Autônoma", 
          duration: "22:00", 
          completed: false, 
          type: "video" as const,
          description: "Possibilidades de atuação profissional no mercado."
        },
        { 
          id: "4-7", 
          title: "Documentação: DRT, NR35 e mais", 
          duration: "18:00", 
          completed: false, 
          type: "reading" as const,
          description: "Documentação necessária para atuação profissional."
        },
      ]
    }
  ] as Module[]
};

const CourseView = () => {
  const { slug } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openModules, setOpenModules] = useState<string[]>(["mod-1"]);
  const [currentLesson, setCurrentLesson] = useState(courseData.modules[0].lessons[0]);

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
    if (lesson.current || lesson.id === currentLesson.id) {
      return <Play className="h-4 w-4 text-primary" />;
    }
    return <Circle className="h-4 w-4 text-muted-foreground" />;
  };

  const getModuleIcon = (moduleId: string) => {
    switch(moduleId) {
      case "mod-1": return <Lightbulb className="h-4 w-4" />;
      case "mod-2": return <Users className="h-4 w-4" />;
      case "mod-3": return <Monitor className="h-4 w-4" />;
      case "mod-4": return <FileText className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const currentModule = courseData.modules.find(m => m.lessons.some(l => l.id === currentLesson.id));

  const getNextLesson = () => {
    const allLessons = courseData.modules.flatMap(m => m.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
    return currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
  };

  const getPreviousLesson = () => {
    const allLessons = courseData.modules.flatMap(m => m.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
    return currentIndex > 0 ? allLessons[currentIndex - 1] : null;
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
                  <Lightbulb className="h-5 w-5 text-primary-foreground" />
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
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        {getModuleIcon(module.id)}
                        <span className="text-sm font-medium text-foreground truncate">
                          {module.title}
                        </span>
                      </div>
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
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {lesson.duration}
                              </span>
                              <span className="capitalize">
                                {lesson.type === "video" ? "Vídeo" : lesson.type === "quiz" ? "Quiz" : "Leitura"}
                              </span>
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
                {currentModule?.title}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                disabled={!getPreviousLesson()}
                onClick={() => {
                  const prev = getPreviousLesson();
                  if (prev) setCurrentLesson(prev);
                }}
              >
                Anterior
              </Button>
              <Button 
                size="sm"
                disabled={!getNextLesson()}
                onClick={() => {
                  const next = getNextLesson();
                  if (next) setCurrentLesson(next);
                }}
              >
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
                <div className="h-full w-0 gradient-golden" />
              </div>
            </div>

            {/* Lesson Info */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
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
                  {currentLesson.description}
                </p>
                
                {currentModule && (
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
                    <h3 className="text-foreground mt-0 mb-2 flex items-center gap-2">
                      {getModuleIcon(currentModule.id)}
                      Sobre este módulo
                    </h3>
                    <p className="text-muted-foreground text-sm mb-0">
                      {currentModule.description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Course Structure Overview */}
            <div className="mt-6 bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Cronograma do Curso</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {courseData.modules.map((module, index) => (
                  <div 
                    key={module.id} 
                    className={cn(
                      "p-4 rounded-lg border transition-colors cursor-pointer",
                      currentModule?.id === module.id 
                        ? "border-primary bg-primary/5" 
                        : "border-border hover:border-primary/50"
                    )}
                    onClick={() => {
                      setOpenModules(prev => 
                        prev.includes(module.id) ? prev : [...prev, module.id]
                      );
                      setCurrentLesson(module.lessons[0]);
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {getModuleIcon(module.id)}
                      </div>
                      <span className="font-medium text-foreground text-sm">
                        Módulo {index + 1}
                      </span>
                    </div>
                    <h4 className="text-sm text-foreground mb-1">
                      {module.title.replace(`Módulo ${index + 1}: `, '')}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {module.lessons.length} aulas
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources Section */}
            <div className="mt-6 bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Materiais de Apoio</h3>
              <div className="grid gap-3">
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Guia de Equipamentos de Iluminação - PDF</p>
                    <p className="text-xs text-muted-foreground">Elipsoidais, PAR, Fresnel, Moving Lights</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Manual DMX 512</p>
                    <p className="text-xs text-muted-foreground">Protocolo e endereçamento</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Modelo de Mapa de Luz</p>
                    <p className="text-xs text-muted-foreground">Template para criação de mapas</p>
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
