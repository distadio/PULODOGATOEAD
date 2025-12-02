import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-primary/10 border-b border-primary/20 py-2 text-center">
        <p className="text-sm font-medium text-primary animate-pulse">
          🚧 Site em construção e desenvolvimento 🚧
        </p>
      </div>
      
      <main className="container mx-auto px-4 lg:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
              <p>
                A Pulo do Gato EAD está comprometida em proteger a privacidade dos seus usuários. 
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e 
                protegemos suas informações pessoais quando você acessa e utiliza nossa plataforma 
                de cursos profissionalizantes gratuitos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Informações que Coletamos</h2>
              <p>Podemos coletar as seguintes informações:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nome completo e informações de contato (e-mail, telefone)</li>
                <li>Dados de acesso e navegação na plataforma</li>
                <li>Informações sobre seu progresso nos cursos</li>
                <li>Dados de cookies e tecnologias similares</li>
                <li>Informações fornecidas voluntariamente em formulários</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Como Utilizamos suas Informações</h2>
              <p>Utilizamos suas informações para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer acesso aos cursos e conteúdos educacionais</li>
                <li>Emitir certificados de conclusão</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
                <li>Enviar comunicações relacionadas aos cursos</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Realizar análises estatísticas e pesquisas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartilhamento de Informações</h2>
              <p>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros 
                para fins comerciais. Podemos compartilhar informações apenas:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Com nossos parceiros e patrocinadores, de forma agregada e anônima</li>
                <li>Quando exigido por lei ou ordem judicial</li>
                <li>Com prestadores de serviços que auxiliam na operação da plataforma</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Segurança dos Dados</h2>
              <p>
                Implementamos medidas técnicas e organizacionais adequadas para proteger suas 
                informações pessoais contra acesso não autorizado, alteração, divulgação ou 
                destruição. No entanto, nenhum método de transmissão pela internet é 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies</h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua experiência na 
                plataforma, analisar o tráfego e personalizar conteúdo. Você pode configurar 
                seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Seus Direitos</h2>
              <p>Você tem o direito de:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir dados incorretos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar seu consentimento a qualquer momento</li>
                <li>Portabilidade de dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Retenção de Dados</h2>
              <p>
                Mantemos suas informações pessoais pelo tempo necessário para cumprir os 
                propósitos descritos nesta política, exceto quando um período de retenção 
                mais longo for exigido ou permitido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Menores de Idade</h2>
              <p>
                Nossa plataforma é destinada a maiores de 18 anos. Se você é menor de idade, 
                solicite autorização de seus responsáveis legais antes de fornecer qualquer 
                informação pessoal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos 
                que você revise esta página regularmente para se manter informado sobre como 
                protegemos suas informações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contato</h2>
              <p>
                Para questões sobre esta Política de Privacidade ou sobre o tratamento de 
                seus dados pessoais, entre em contato conosco através dos canais disponíveis 
                em nossa página de contato.
              </p>
            </section>

            <section className="mt-8 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;