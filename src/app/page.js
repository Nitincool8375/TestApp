import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center items-center w-full py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800">Contact Us</h1>
      </div>  
      <div className="flex justify-center items-center w-full mb-10">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
