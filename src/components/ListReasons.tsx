import Reason from "./Reason";

import { FC } from "react";

const ListReasons: FC = () => {
  return (
    <div className="space-y-4">
      <Reason content="Experienced and Professional Team" />
      <Reason content="Comprehensive Services" />
      <Reason content="User-Friendly Interface" />
      <Reason content="Safe and Secure Data Storage" />
      <Reason content="Personalized Care" />
      <Reason content="Positive Reputation" />
      <Reason content="Convenient Access to Healthcare Services." />
    </div>
  );
};

export default ListReasons;
