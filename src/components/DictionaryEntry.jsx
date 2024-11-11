import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip} from "@nextui-org/react"
import {DeleteIcon} from "./DeleteIcon"
import {EditIcon} from "./EditIcon"

function DictionaryEntry({key, entry, deleteEntry}) {
  return (
    <Table hideHeader aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>key</TableColumn>
        <TableColumn>value</TableColumn>
        <TableColumn>actions</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key={key}>
          <TableCell className="font-semibold">{entry.phrase}</TableCell>
          <TableCell>{entry.meaning}</TableCell>
          <TableCell>
            <div className="relative flex items-right gap-2">
              <Tooltip content="Edit Entry">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete Entry">
                <span 
                  className="text-lg text-danger cursor-pointer active:opacity-50"
                  onClick={() => deleteEntry(entry)}
                >
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default DictionaryEntry
