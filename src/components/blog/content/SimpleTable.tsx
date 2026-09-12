"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SimpleTableProps {
  headers: string[];
  rows: string[][];
  caption?: string;
  className?: string;
}

export function BlogSimpleTable({
  headers = [],
  rows = [],
  caption,
  className,
}: SimpleTableProps) {
  return (
    <div className="my-8 rounded border bg-background/50 overflow-hidden shadow-sm">
      <Table className={`${className}  my-0! p-4!`}>
        {caption && <TableCaption className="sr-only">{caption}</TableCaption>}
        <TableHeader className="p-8!">
          <TableRow>
            {(headers || []).map((header, index) => (
              <TableHead key={index} className="font-bold text-foreground">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="p-8!">
          {(rows || []).map((row, rowIndex) => (
            <TableRow key={rowIndex} className="p-8!">
              {(row || []).map((cell, cellIndex) => (
                <TableCell key={cellIndex} className="font-medium">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
