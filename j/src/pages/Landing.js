import React, { useEffect, useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { Link } from "react-router-dom";

import { axios } from "utils.js";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function Landing() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);

  return (
    <>
      <Navbar>
        <Link to="/login" className="navlink">
          Login
        </Link>
      </Navbar>

      <Slate
        editor={editor}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <Editable />
      </Slate>

      <Footer />
    </>
  );
}
