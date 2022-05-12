import React from "react";
import { Accordion as LibAccordion, AccordionElement } from "./index";

export default {
  title: "Components/Accordion",
  component: LibAccordion,
};

export const Accordion = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Structure</h3>
      <div className="row">
        <div className="col">
          <div className="subheader">Basic</div>
          <LibAccordion>
            <AccordionElement title="Item 1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                gravida posuere tellus, eu congue nunc.
              </p>
            </AccordionElement>
            <AccordionElement title="Item 2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                gravida posuere tellus, eu congue nunc.
              </p>
            </AccordionElement>
            <AccordionElement title="Item 3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                gravida posuere tellus, eu congue nunc.
              </p>
            </AccordionElement>
          </LibAccordion>
        </div>
        <div className="col">
          <div className="subheader">With Toggles</div>
          <LibAccordion toggles>
            <AccordionElement title="Item 1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                gravida posuere tellus, eu congue nunc.
              </p>
            </AccordionElement>
            <AccordionElement title="Item 2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                gravida posuere tellus, eu congue nunc.
              </p>
            </AccordionElement>
            <AccordionElement title="Item 3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                gravida posuere tellus, eu congue nunc.
              </p>
            </AccordionElement>
          </LibAccordion>
        </div>
      </div>
    </div>

    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Bordered</h3>
      <div className="row">
        <div className="col-6">
          <LibAccordion toggles bordered>
            <AccordionElement title="Item 1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                gravida posuere tellus, eu congue nunc.
              </p>
            </AccordionElement>
            <AccordionElement title="Item 2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                gravida posuere tellus, eu congue nunc.
              </p>
            </AccordionElement>
            <AccordionElement title="Item 3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                gravida posuere tellus, eu congue nunc.
              </p>
            </AccordionElement>
          </LibAccordion>
        </div>
      </div>
    </div>
  </>
);
