import os from "os";
import fs from "fs";

const handleReplacement = ({ emps }) => {
  const filePath = "/Employee_Management_System/src/utils/employees.jsx";
  const content = fs.readFileSync(filePath, "utf-8");

  const oldVarRegex = /const\s+employees\s*=\s*\[[\s\S]*?\];/;
  const newData = emps;
  const newVarString =
    `const newData = ${JSON.stringify(newData, null, 2)};` + os.EOL;

  const updatedContent = content.replace(oldVarRegex, newVarString);
  fs.writeFileSync(filePath, updatedContent, "utf-8");
  console.log("replaced successfully");
};

export default handleReplacement;
