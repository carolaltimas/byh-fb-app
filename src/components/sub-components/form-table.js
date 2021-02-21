import React, { useState, useContext, Fragment} from 'react';
import Tabletop from "tabletop";
import "./styles.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

let placehold = [
    {
      "id": "66666",
      "fields": [
        {
          "title": "Age of the Caller",
          "value": "26",
          "id": 57428050,
          "type": "string"
        },
        {
          "title": "time offset",
          "value": 420,
          "id": 123456789,
          "type": "number"
        },
        {
          "title": "Client Location - Province ",
          "id": 152041769,
          "type": "string"
        },
        {
          "title": "If other, please specify.",
          "id": 238537915,
          "type": "string"
        },
        {
          "title": "Referral #:",
          "value": "66666",
          "id": 449303681,
          "type": "string"
        },
        {
          "title": "Primary Referral Type: (*will be asked for school district further on)",
          "value": "Home/family problems",
          "id": 496416008,
          "type": "string"
        },
        {
          "title": "Referral Type & Name: Self/School/Other Organization",
          "id": 537383970,
          "type": "string"
        },
        {
          "title": "How did they learn about the BYH?",
          "id": 757950175,
          "type": "string"
        },
        {
          "title": "scritp offset",
          "value": "America/Denver",
          "id": 1234567895,
          "type": "string"
        },
        {
          "title": "Contact Date",
          "value": "2020-12-08T13:00:00.000Z",
          "id": 1313658934,
          "type": "date"
        },
        {
          "title": "Contact Time",
          "value": "06:00",
          "id": 1532216742,
          "type": "time"
        },
        {
          "title": "Location - Neighbourhood",
          "id": 1553411245,
          "type": "string"
        },
        {
          "title": "First Name of the Caller",
          "id": 1610778761,
          "type": "string"
        },
        {
          "title": "Referral per:",
          "value": "Contact Form",
          "id": 1677961388,
          "type": "string"
        },
        {
          "title": "Country of Origin ",
          "id": 1717973430,
          "type": "string"
        },
        {
          "title": "Name of School District/School (if school related)",
          "id": 1762050626,
          "type": "string"
        }
      ]
    },
    {
      "id": "777",
      "fields": [
        {
          "title": "Age of the Caller",
          "value": "35",
          "id": 57428050,
          "type": "string"
        },
        {
          "title": "time offset",
          "value": 420,
          "id": 123456789,
          "type": "number"
        },
        {
          "title": "Client Location - Province ",
          "value": "AB",
          "id": 152041769,
          "type": "string"
        },
        {
          "title": "If other, please specify.",
          "value": "home",
          "id": 238537915,
          "type": "string"
        },
        {
          "title": "Referral #:",
          "value": "777",
          "id": 449303681,
          "type": "string"
        },
        {
          "title": "Primary Referral Type: (*will be asked for school district further on)",
          "value": "Suspension/Exclusion from school *",
          "id": 496416008,
          "type": "string"
        },
        {
          "title": "Referral Type & Name: Self/School/Other Organization",
          "value": "Self",
          "id": 537383970,
          "type": "string"
        },
        {
          "title": "How did they learn about the BYH?",
          "value": "Facebook",
          "id": 757950175,
          "type": "string"
        },
        {
          "title": "scritp offset",
          "value": "America/Denver",
          "id": 1234567895,
          "type": "string"
        },
        {
          "title": "Contact Date",
          "value": "2020-12-21T13:00:00.000Z",
          "id": 1313658934,
          "type": "date"
        },
        {
          "title": "Contact Time",
          "value": "06:00",
          "id": 1532216742,
          "type": "time"
        },
        {
          "title": "Location - Neighbourhood",
          "value": "Edmonton",
          "id": 1553411245,
          "type": "string"
        },
        {
          "title": "First Name of the Caller",
          "value": "Michael",
          "id": 1610778761,
          "type": "string"
        },
        {
          "title": "Referral per:",
          "value": "E-Mail",
          "id": 1677961388,
          "type": "string"
        },
        {
          "title": "Country of Origin ",
          "value": "Canada",
          "id": 1717973430,
          "type": "string"
        },
        {
          "title": "Name of School District/School (if school related)",
          "value": "School",
          "id": 1762050626,
          "type": "string"
        }
      ]
    },
    {
      "id": "9999999999",
      "fields": [
        {
          "title": "Age of the Caller",
          "id": 57428050,
          "type": "string"
        },
        {
          "title": "Client Location - Province ",
          "id": 152041769,
          "type": "string"
        },
        {
          "title": "If other, please specify.",
          "value": "other",
          "id": 238537915,
          "type": "string"
        },
        {
          "title": "Referral #:",
          "value": "9999999999",
          "id": 449303681,
          "type": "string"
        },
        {
          "title": "Primary Referral Type: (*will be asked for school district further on)",
          "value": "Home/family problems",
          "id": 496416008,
          "type": "string"
        },
        {
          "title": "Referral Type & Name: Self/School/Other Organization",
          "id": 537383970,
          "type": "string"
        },
        {
          "title": "How did they learn about the BYH?",
          "id": 757950175,
          "type": "string"
        },
        {
          "title": "Contact Date",
          "value": "2020-12-23T10:00:00.000Z",
          "id": 1313658934,
          "type": "date"
        },
        {
          "title": "Contact Time",
          "value": "10:00",
          "id": 1532216742,
          "type": "time"
        },
        {
          "title": "Location - Neighbourhood",
          "id": 1553411245,
          "type": "string"
        },
        {
          "title": "First Name of the Caller",
          "id": 1610778761,
          "type": "string"
        },
        {
          "title": "Referral per:",
          "value": "Contact Form",
          "id": 1677961388,
          "type": "string"
        },
        {
          "title": "Country of Origin ",
          "id": 1717973430,
          "type": "string"
        },
        {
          "title": "Name of School District/School (if school related)",
          "id": 1762050626,
          "type": "string"
        }
      ]
    },
    {
      "id": "88888",
      "fields": [
        {
          "title": "Age of the Caller",
          "id": 57428050,
          "type": "string"
        },
        {
          "title": "time offset",
          "value": 420,
          "id": 123456789,
          "type": "number"
        },
        {
          "title": "Client Location - Province ",
          "id": 152041769,
          "type": "string"
        },
        {
          "title": "If other, please specify.",
          "id": 238537915,
          "type": "string"
        },
        {
          "title": "Referral #:",
          "value": "88888",
          "id": 449303681,
          "type": "string"
        },
        {
          "title": "Referral Type & Name: Self/School/Other Organization",
          "id": 537383970,
          "type": "string"
        },
        {
          "title": "How did they learn about the BYH?",
          "id": 757950175,
          "type": "string"
        },
        {
          "title": "scritp offset",
          "value": "America/Denver",
          "id": 1234567895,
          "type": "string"
        },
        {
          "title": "Contact Date",
          "value": "2020-12-24T18:30:00.000Z",
          "id": 1313658934,
          "type": "date"
        },
        {
          "title": "Contact Time",
          "value": "11:30",
          "id": 1532216742,
          "type": "time"
        },
        {
          "title": "Location - Neighbourhood",
          "id": 1553411245,
          "type": "string"
        },
        {
          "title": "First Name of the Caller",
          "id": 1610778761,
          "type": "string"
        },
        {
          "title": "Country of Origin ",
          "id": 1717973430,
          "type": "string"
        },
        {
          "title": "Name of School District/School (if school related)",
          "id": 1762050626,
          "type": "string"
        }
      ]
    },
    {
      "id": "0789",
      "fields": [
        {
          "title": "Age of the Caller",
          "value": "18",
          "id": 57428050,
          "type": "string"
        },
        {
          "title": "time offset",
          "value": 420,
          "id": 123456789,
          "type": "number"
        },
        {
          "title": "Client Location - Province ",
          "value": "BC",
          "id": 152041769,
          "type": "string"
        },
        {
          "title": "If other, please specify.",
          "id": 238537915,
          "type": "string"
        },
        {
          "title": "Referral #:",
          "value": "0789",
          "id": 449303681,
          "type": "string"
        },
        {
          "title": "Primary Referral Type: (*will be asked for school district further on)",
          "value": "Home/family problems",
          "id": 496416008,
          "type": "string"
        },
        {
          "title": "Referral Type & Name: Self/School/Other Organization",
          "value": "self",
          "id": 537383970,
          "type": "string"
        },
        {
          "title": "How did they learn about the BYH?",
          "value": "facebook",
          "id": 757950175,
          "type": "string"
        },
        {
          "title": "scritp offset",
          "value": "America/Denver",
          "id": 1234567895,
          "type": "string"
        },
        {
          "title": "Contact Date",
          "value": "2021-01-13T12:00:00.000Z",
          "id": 1313658934,
          "type": "date"
        },
        {
          "title": "Contact Time",
          "value": "05:00",
          "id": 1532216742,
          "type": "time"
        },
        {
          "title": "Location - Neighbourhood",
          "value": "vancouver",
          "id": 1553411245,
          "type": "string"
        },
        {
          "title": "First Name of the Caller",
          "value": "Steve",
          "id": 1610778761,
          "type": "string"
        },
        {
          "title": "Referral per:",
          "value": "E-Mail",
          "id": 1677961388,
          "type": "string"
        },
        {
          "title": "Country of Origin ",
          "value": "canada",
          "id": 1717973430,
          "type": "string"
        },
        {
          "title": "Name of School District/School (if school related)",
          "value": "youngstown",
          "id": 1762050626,
          "type": "string"
        }
      ]
    },
    {
      "id": "50505",
      "fields": [
        {
          "title": "Age of the Caller",
          "id": 57428050,
          "type": "string"
        },
        {
          "title": "time offset",
          "value": 420,
          "id": 123456789,
          "type": "number"
        },
        {
          "title": "Client Location - Province ",
          "id": 152041769,
          "type": "string"
        },
        {
          "title": "If other, please specify.",
          "value": "test",
          "id": 238537915,
          "type": "string"
        },
        {
          "title": "Referral #:",
          "value": "50505",
          "id": 449303681,
          "type": "string"
        },
        {
          "title": "Primary Referral Type: (*will be asked for school district further on)",
          "value": "Bullying",
          "id": 496416008,
          "type": "string"
        },
        {
          "title": "Referral Type & Name: Self/School/Other Organization",
          "id": 537383970,
          "type": "string"
        },
        {
          "title": "How did they learn about the BYH?",
          "id": 757950175,
          "type": "string"
        },
        {
          "title": "scritp offset",
          "value": "America/Denver",
          "id": 1234567895,
          "type": "string"
        },
        {
          "title": "Contact Date",
          "value": "2021-01-13T12:00:00.000Z",
          "id": 1313658934,
          "type": "date"
        },
        {
          "title": "Contact Time",
          "value": "05:00",
          "id": 1532216742,
          "type": "time"
        },
        {
          "title": "Location - Neighbourhood",
          "id": 1553411245,
          "type": "string"
        },
        {
          "title": "First Name of the Caller",
          "id": 1610778761,
          "type": "string"
        },
        {
          "title": "Referral per:",
          "value": "Contact Form",
          "id": 1677961388,
          "type": "string"
        },
        {
          "title": "Country of Origin ",
          "id": 1717973430,
          "type": "string"
        },
        {
          "title": "Name of School District/School (if school related)",
          "id": 1762050626,
          "type": "string"
        }
      ]
    },
    {
      "id": "625888",
      "fields": [
        {
          "title": "Age of the Caller",
          "value": "33",
          "id": 57428050,
          "type": "string"
        },
        {
          "title": "time offset",
          "value": 420,
          "id": 123456789,
          "type": "number"
        },
        {
          "title": "Client Location - Province ",
          "value": "AB",
          "id": 152041769,
          "type": "string"
        },
        {
          "title": "If other, please specify.",
          "value": "full form",
          "id": 238537915,
          "type": "string"
        },
        {
          "title": "Referral #:",
          "value": "625888",
          "id": 449303681,
          "type": "string"
        },
        {
          "title": "Primary Referral Type: (*will be asked for school district further on)",
          "value": "Suspension/Exclusion from school *",
          "id": 496416008,
          "type": "string"
        },
        {
          "title": "Referral Type & Name: Self/School/Other Organization",
          "value": "org",
          "id": 537383970,
          "type": "string"
        },
        {
          "title": "How did they learn about the BYH?",
          "value": "email",
          "id": 757950175,
          "type": "string"
        },
        {
          "title": "scritp offset",
          "value": "America/Denver",
          "id": 1234567895,
          "type": "string"
        },
        {
          "title": "Contact Date",
          "value": "2021-01-13T15:00:00.000Z",
          "id": 1313658934,
          "type": "date"
        },
        {
          "title": "Contact Time",
          "value": "08:00",
          "id": 1532216742,
          "type": "time"
        },
        {
          "title": "Location - Neighbourhood",
          "value": "edmonton",
          "id": 1553411245,
          "type": "string"
        },
        {
          "title": "First Name of the Caller",
          "value": "michael",
          "id": 1610778761,
          "type": "string"
        },
        {
          "title": "Referral per:",
          "value": "E-Mail",
          "id": 1677961388,
          "type": "string"
        },
        {
          "title": "Country of Origin ",
          "value": "canada",
          "id": 1717973430,
          "type": "string"
        },
        {
          "title": "Name of School District/School (if school related)",
          "value": "school",
          "id": 1762050626,
          "type": "string"
        }
      ]
    }
  ]

function FormTable(props){
    //const [formData,setFormData] = useState(null);

    /*
    const createTable = (forms) =>{
        let rows = forms.map(form => {
            return
        });
        return rows
    };

    const rows = props.forms ? createTable(props.forms) : null;
    return(
        <TableContainer>
            {rows}
        </TableContainer>
    )
    a library that has things that deal w. tables - https://material-ui.com/components/tables/#table
    npm run server in functions for server
    then npm run dev in app

    */
  
}

export default FormTable;