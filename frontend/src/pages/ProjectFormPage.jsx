import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FloatingActions from "../components/FloatingActions/FloatingActions";
import ProjectForm from "../components/ProjectForm/ProjectForm";

function ProjectFormPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#00171F] pt-20">
        <ProjectForm />
      </main>

      <Footer />

      <FloatingActions />
    </>
  );
}

export default ProjectFormPage;