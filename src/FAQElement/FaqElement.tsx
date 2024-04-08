import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./../components/ui/accordion";

export const FaqElement = () => {
  return (
    <>
      <div className="w-full gap-4 p-6">
        <div className="flex flex-row-2 gap-6">
          <img src="assets/images/icon-star.svg"></img>
          <h1 className="text-3xl items-center font-work-sans">FAQs</h1>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full justify-between pt-6"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is Frontend Mentor, and how will it help me?
            </AccordionTrigger>
            <AccordionContent>
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS, and JavaScript. It's suitable for all levels and ideal
              for portfolio building.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is Frontend Mentor free?</AccordionTrigger>
            <AccordionContent>
              Yes, Frontend Mentor offers both free and premium coding
              challenges, with the free option providing access to a range of
              projects suitable for all skill levels.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I use Frontend Mentor projects in my portfolio?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can use projects completed on Frontend Mentor in your
              portfolio. It's an excellent way to showcase your skills to
              potential employers!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              How can I get help if I'm stuck on a Frontend Mentor challenge?
            </AccordionTrigger>
            <AccordionContent>
              The best place to get help is inside Frontend Mentor's Discord
              community. There's a help channel where you can ask questions and
              seek support from other community members
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <p></p>
      </div>
    </>
  );
};
