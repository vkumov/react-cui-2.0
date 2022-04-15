import React from "react";
import { Accordion, AccordionElement } from "./index";

export default {
  title: "Accordion",
  component: Accordion,
};

export const Primary = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Structure</h3>
      <div className="row">
        <div className="col">
          <div className="subheader">Basic</div>
          <Accordion>
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
          </Accordion>
        </div>
        <div className="col">
          <div className="subheader">With Toggles</div>
          <Accordion toggles>
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
          </Accordion>
        </div>
      </div>
    </div>

    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Bordered</h3>
      <div className="row">
        <div className="col-6">
          <Accordion toggles bordered>
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
          </Accordion>
        </div>
      </div>
    </div>
  </>
);
