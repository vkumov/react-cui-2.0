import React from "react";
import { Dropdown } from "./index";

export default {
  title: "Dropdown",
  component: Dropdown,
};

const ThreeItems = () => (
  <>
    <Dropdown.Element>Item one</Dropdown.Element>
    <Dropdown.Element>Item two</Dropdown.Element>
    <Dropdown.Element selected>Item three</Dropdown.Element>
  </>
);

export const Primary = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Structure</h3>
      <Dropdown header="Dropdown">
        <Dropdown.Element>Item one</Dropdown.Element>
        <Dropdown.Element>Item two</Dropdown.Element>
        <Dropdown.Element selected>Item three</Dropdown.Element>
        <Dropdown.Divider />
        <Dropdown.Group>
          <Dropdown.GroupHeader header="Group" />
          <Dropdown.Element>Item one</Dropdown.Element>
          <Dropdown.Element>Item two</Dropdown.Element>
        </Dropdown.Group>
        <Dropdown.Element icon="social-facebook">Facebook</Dropdown.Element>
        <Dropdown.Element icon="social-twitter">Twitter</Dropdown.Element>
      </Dropdown>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Type</h3>
      <div className="row">
        <div className="col-3">
          <Dropdown type="button" header="Button">
            <ThreeItems />
          </Dropdown>
        </div>
        <div className="col-3">
          <Dropdown type="div" header="Div">
            <ThreeItems />
          </Dropdown>
        </div>
        <div className="col-3">
          <Dropdown type="link" header="Link">
            <ThreeItems />
          </Dropdown>
        </div>
        <div className="col-3">
          <Dropdown type="icon" header="Icon" className="icon-add-outline">
            <ThreeItems />
          </Dropdown>
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Alignment</h3>
      <div className="row">
        <div className="col-4">
          <Dropdown openTo="right" header="To the right">
            <ThreeItems />
          </Dropdown>
        </div>
        <div className="col-4">
          <Dropdown openTo="center" header="Centered">
            <ThreeItems />
          </Dropdown>
        </div>
        <div className="col-4">
          <Dropdown openTo="left" header="To the left">
            <ThreeItems />
          </Dropdown>
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Direction</h3>
      <div className="row">
        <div className="col-4">
          <Dropdown header="Down">
            <ThreeItems />
          </Dropdown>
        </div>
        <div className="col-4">
          <Dropdown up header="Up">
            <ThreeItems />
          </Dropdown>
        </div>
      </div>
    </div>
  </>
);
