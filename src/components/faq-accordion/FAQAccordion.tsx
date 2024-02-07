import Image from "next/image";
import styles from './FAQAccordion.module.css';

type AccordionItem = {
    header: string,
    body: string,
}
const accordionItems: AccordionItem[] = [
    {
        header: 'What is an FAQ?',
        body: 'An FAQ, or "Frequently Asked Questions," is a list of common questions and answers about a specific topic, product, or service, designed to help users find information quickly.'
    },
    {
        header: 'Where am I?',
        body: "To help you find a portfolio, could you specify what type of portfolio you are looking for? For example, are you looking for an artist's portfolio, a financial investment portfolio, a website developer's portfolio, or something else? Knowing the context will help me guide you more accurately.",
    },
    {
        header: 'How do I win?',
        body: `To provide a meaningful answer, I need a bit more context about what you're referring to by "win."`,
    }
];

export function FAQAccordion() {
    return <div className="container col-sm-12 col-md-6 rounded p-5" style={{background: 'white'}}>
        <div id="accordionExample">
            <div className="d-flex mb-2 align-items-center gap-4">
                <Image 
                    src="/faq-accordion/icon-star.svg"
                    alt="faq star icon"
                    width="40"
                    height="42"
                    className="lh-1 mb-2"
                />
                <h1 className={styles.title}>FAQs</h1>
            </div>
        </div>
        <div className="accordion">
            {accordionItems.map((item, index) => (
                <div className={`accordion-item ${styles['accordion-item']}`}>
                    <h2 className={`accordion-header`} id={`heading-${index}`}>
                        <button className={`accordion-button ${styles['accordion-item-header-button']}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}`} aria-expanded="true" aria-controls={`#collapse-${index}`}>
                            {item.header}
                        </button>
                    </h2>
                    <div id={`collapse-${index}`} className="accordion-collapse collapse show" aria-labelledby={`heading-${index}`} data-bs-parent="#accordionExample">
                        <div className={`accordion-body ${styles['accordion-item-body']}`} style={{fontWeight: 400}}>
                            {item.body}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}