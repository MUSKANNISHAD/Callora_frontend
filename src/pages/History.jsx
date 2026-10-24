import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';

export default function History() {

  const { getHistoryOfUser } = useContext(AuthContext);

  const [meetings, SetMeetings] = useState([]);

  const router = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        // console.log("history is ", history);
        SetMeetings(history);
      } catch (e) {
        throw e;
      }
    }

    fetchHistory();

  }, []);

  let formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div>
      <IconButton onClick={() => router("/Home")}>
        <HomeIcon />Home
      </IconButton>

      {meetings.length !== 0 && meetings.map((el, idx) => {
        return (
          <>
            <Card key={idx} variant='outlined'>
              <CardContent>
                <Typography color="text.secondary" >
                  <b> Code:{el.meeting_code}</b>
                </Typography>
                <Typography color="text.secondary" >
                  Date:{formatDate(el.date)}
                </Typography>
              </CardContent>
            </Card>
          </>
        )
      })}
    </div>
  )
}
