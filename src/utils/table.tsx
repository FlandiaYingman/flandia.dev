import React from "react";

export function toTable(
  columns: string[],
  rows: Record<string, string | number>[],
  caption?: string,
) {
  return (
    <table>
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr>
          {columns.map((column) => (
            // Replace the underscore at string start with an empty string
            <th key={column}>{column.replace(/^_/, "")}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {columns.map((column) => {
              if (column.startsWith("_")) {
                return <th key={column}>{format(row[column])}</th>;
              }
              return <td key={column}>{format(row[column])}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function format(value: string | number) {
  if (typeof value === "number") {
    return value.toFixed(2);
  }
  return value;
}
