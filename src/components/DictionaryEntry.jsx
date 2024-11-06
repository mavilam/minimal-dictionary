import React from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

function DictionaryEntry({key, phrase, meaning }) {
  return (
    <Table hideHeader aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>key</TableColumn>
        <TableColumn>value</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key={key}>
          <TableCell className="font-semibold">{phrase}</TableCell>
          <TableCell>{meaning}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default DictionaryEntry;
