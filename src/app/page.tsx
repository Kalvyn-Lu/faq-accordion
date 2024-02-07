import { FAQAccordion } from "@/components/faq-accordion/FAQAccordion";

export default function Home() {
  return (
    <main role="main"style={{height:'100vh'}}>
      <div className="jumbotron"></div>
      <div className="position-fixed w-100 h-100 top-0 d-flex align-items-center justify-content-center">
        <FAQAccordion/>
      </div>
    </main>
  );
}