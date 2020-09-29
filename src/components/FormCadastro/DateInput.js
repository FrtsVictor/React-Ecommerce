import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

export default function DateInput({ getDate }) {
  const [data, setData] = useState(Date);

  const dataConverter = (dataEdit) => {
    const dataIso = new Date(dataEdit).toISOString();
    return dataIso.slice(0, 17).concat('00Z');
  };

  getDate(dataConverter(data));

  return (

    <TextField
      id="date"
      variant="outlined"
      label="DataNascimento"
      type="date"
      value={data}
      onChange={(e) => {
        setData(e.target.value);
      }}
      InputLabelProps={{
        shrink: true,
      }}
    />

  );
}
