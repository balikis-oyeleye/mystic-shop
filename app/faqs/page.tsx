"use client";

import { faqs } from "@/constants/faqs";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const Faqs = () => {
  return (
    <main className="faqs">
      <h1>Frequently Asked Questions</h1>
      <Accordion>
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} header={faq.question}>
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default Faqs;
