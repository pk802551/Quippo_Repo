import React, { useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FAQPage = () => {
const [activeKey, setActiveKey] = useState("0");

const toggleAccordion = (key) => {
setActiveKey(activeKey === key ? null : key);
};

const faqData = [
{
question: "What are the most popular brands available for 2nd hand cars in Ghaziabad?",
answer:
"Quippo has a wide inventory of all brands including Maruti Suzuki, Hyundai, Honda & more. Find the best second hand car in Ghaziabad of your choice on Quippo."
},
{
question: "What body types are available for 2nd hand cars in Ghaziabad?",
answer: "You can find hatchbacks, sedans, SUVs, and more in Ghaziabad."
},
{
question: "Can I buy used cars online at Quippo in Ghaziabad?",
answer: "Yes, you can conveniently buy used cars online through Quippo's platform."
},
{
question: "What to check before buying a second hand car in Ghaziabad?",
answer: "Check service history, ownership, insurance status, and vehicle condition."
},
{
question: "Where can I buy used cars in Ghaziabad?",
answer: "You can buy used cars from Quippo online or at certified dealerships."
},
{
question: "How can I check a second hand car in Ghaziabad?",
answer: "Schedule a test drive and inspection via the Quippo app or website."
},
{
question: "How many second hand cars are available in Ghaziabad?",
answer: "Hundreds of cars are listed on Quippo and are updated regularly."
}
];

return ( <Container className="py-5"> <h2 className="text-center mb-4">Frequently Asked Questions</h2> <Accordion activeKey={activeKey}>
{faqData.map((faq, index) => (
<Accordion.Item eventKey={index.toString()} key={index}>
<Accordion.Header onClick={() => toggleAccordion(index.toString())}>
{index + 1}. {faq.question}
</Accordion.Header>
<Accordion.Body>{faq.answer}\</Accordion.Body>
</Accordion.Item>
))} </Accordion> </Container>
);
};

export default FAQPage;  
