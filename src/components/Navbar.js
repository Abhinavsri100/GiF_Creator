/** @format */

import React, { useState } from "react";

export const Navbar = () => {
  const [formData, setFormData] = useState({
    search: "",
  });
  return (
    <div>
      <h1>News Express</h1>
      <input type="search" name="search" id="search" value={formData.search} />
    </div>
  );
};
