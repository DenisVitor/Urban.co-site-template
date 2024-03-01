import React from "react";
import { StyledItem, StyledList, StyledWhyPage } from "./why.style";
import { reasonsToBuy } from "@/app/data/reasons";
import { Reasons } from "@/interfaces/item";

export const WhySection = () => {
  return (
    <StyledWhyPage className="why-sec">
      <h2 className="why-title">
        Why <span>Urban.co</span>?
      </h2>
      <hr className="line-one" />
      <StyledList className="why-sec_list">
        {reasonsToBuy.map((reason: Reasons) => (
          <StyledItem key={reason.id} className="why-sec_item">
            {reason.icon}
            <h2>{reason.title}</h2>
            <p><i>{reason.description}</i></p>
          </StyledItem>
        ))}
      </StyledList>
      <hr className="line-one" />
    </StyledWhyPage>
  );
};
