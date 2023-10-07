import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function FAQS() {
  const ans1= 
  " The GDSC JU community is open to both seasoned techies and beginners in the Tech world. Whether you are into development or CP, or even if you are into more non-coding related technical domains like graphic design and documentation, the commmunity is open to every Jadavpur University student with a passion for technology ";
  const ans3=
  "You can be involved in the community of one or more GDSC chapters, however you can be a core team member in only one GDSC chapter. ";
  const ans2 =
    "No, Code Club JU and GDSC, despite both being involved in encouraging coding habits among students, donot refer to the same entity.";

  return (
    <Accordion selectionMode="multiple">
      <AccordionItem key="1" aria-label="Q 1" title="Can those new to programming join GDSC-JU community?">
        {ans1}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Q 2" title="Is GDSC same as CodeClub JU?">
        {ans2}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Q 3" title="Can I be a part of more than one GDSC chapter?">
        {ans3}
      </AccordionItem>
    </Accordion>
  );
}
