"use client";

import { useState, useEffect } from "react";
import { Checkbox } from "../ui/checkbox";

type CheckboxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

export default function CheckboxInput({
  name,
  label,
  defaultChecked = false,
}: CheckboxInputProps) {
  const [checked, setChecked] = useState(defaultChecked);

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={name}
        name={name}
        checked={checked}
        onCheckedChange={(value) => setChecked(!!value)}
      />
      <label
        htmlFor={name}
        className="text-sm leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}
